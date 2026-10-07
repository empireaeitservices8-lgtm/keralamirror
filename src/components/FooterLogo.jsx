'use client';

import { useState, useEffect } from 'react';

export default function FooterLogo() {
  const [logoSrc, setLogoSrc] = useState('/logo-transparent.png');

  useEffect(() => {
    // Check if logo-transparent.png loads, otherwise generate from /logo.png
    const testImg = new Image();
    testImg.src = '/logo-transparent.png';
    testImg.onload = () => {
      setLogoSrc('/logo-transparent.png');
    };
    testImg.onerror = () => {
      // Process /logo.png client-side to remove the white background
      generateTransparentLogo();
    };

    function generateTransparentLogo() {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = '/logo.png';
      img.onload = () => {
        try {
          const W = img.naturalWidth || img.width;
          const H = img.naturalHeight || img.height;
          const canvas = document.createElement('canvas');
          canvas.width = W;
          canvas.height = H;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          const imgData = ctx.getImageData(0, 0, W, H);
          const data = imgData.data;
          const visited = new Uint8Array(W * H);
          const queue = [];

          const isWhite = (r, g, b) => r >= 220 && g >= 220 && b >= 220;

          const addPixel = (x, y) => {
            const idx = y * W + x;
            if (visited[idx]) return;
            const pIdx = idx * 4;
            const r = data[pIdx];
            const g = data[pIdx + 1];
            const b = data[pIdx + 2];
            if (isWhite(r, g, b)) {
              visited[idx] = 1;
              queue.push(idx);
            }
          };

          // Seed border pixels
          for (let x = 0; x < W; x++) {
            addPixel(x, 0);
            addPixel(x, H - 1);
          }
          for (let y = 0; y < H; y++) {
            addPixel(0, y);
            addPixel(W - 1, y);
          }

          // Flood fill all connected outer background white pixels
          let head = 0;
          while (head < queue.length) {
            const curr = queue[head++];
            const cx = curr % W;
            const cy = Math.floor(curr / W);
            const pIdx = curr * 4;

            // Make completely transparent
            data[pIdx + 3] = 0;

            // 4-way neighbors
            const neighbors = [
              [cx + 1, cy],
              [cx - 1, cy],
              [cx, cy + 1],
              [cx, cy - 1]
            ];

            for (let i = 0; i < neighbors.length; i++) {
              const [nx, ny] = neighbors[i];
              if (nx >= 0 && nx < W && ny >= 0 && ny < H) {
                const nIdx = ny * W + nx;
                if (!visited[nIdx]) {
                  const npIdx = nIdx * 4;
                  const nr = data[npIdx];
                  const ng = data[npIdx + 1];
                  const nb = data[npIdx + 2];
                  if (isWhite(nr, ng, nb)) {
                    visited[nIdx] = 1;
                    queue.push(nIdx);
                  }
                }
              }
            }
          }

          // Antialias fringe pixels touching transparent pixels
          for (let y = 1; y < H - 1; y++) {
            for (let x = 1; x < W - 1; x++) {
              const idx = y * W + x;
              if (visited[idx]) continue;
              const pIdx = idx * 4;
              const r = data[pIdx];
              const g = data[pIdx + 1];
              const b = data[pIdx + 2];

              // Check if touches transparent background
              const hasTransNeighbor =
                visited[idx + 1] ||
                visited[idx - 1] ||
                visited[idx + W] ||
                visited[idx - W];

              if (hasTransNeighbor && r > 200 && g > 200 && b > 200) {
                const brightness = (r + g + b) / 3;
                if (brightness > 210) {
                  data[pIdx + 3] = Math.max(0, Math.min(255, Math.round((255 - brightness) * 4)));
                }
              }
            }
          }

          ctx.putImageData(imgData, 0, 0);
          const dataUrl = canvas.toDataURL('image/png');
          setLogoSrc(dataUrl);

          // Persist to public/logo-transparent.png via API
          fetch('/api/save-transparent-logo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataUrl })
          }).catch(() => {});
        } catch (err) {
          console.error('Failed to process logo transparency', err);
          setLogoSrc('/logo.png');
        }
      };
    }
  }, []);

  return (
    <img
      src={logoSrc}
      alt="Kerala Mirror Holidays"
      style={{
        height: '135px',
        maxWidth: '320px',
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        background: 'transparent',
        filter: 'drop-shadow(0 1px 1.5px rgba(255, 255, 255, 0.55)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4))'
      }}
    />
  );
}

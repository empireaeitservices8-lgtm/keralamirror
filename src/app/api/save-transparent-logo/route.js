import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { dataUrl } = await request.json();
    if (!dataUrl) {
      return NextResponse.json({ error: 'No dataUrl provided' }, { status: 400 });
    }

    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const filePath = path.join(process.cwd(), 'public', 'logo-transparent.png');
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ success: true, path: '/logo-transparent.png' });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

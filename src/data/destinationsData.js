export const destinationCategories = [
  "All Destinations",
  "Kerala Highlights",
  "Hill Stations & Nature",
  "Backwaters & Beaches",
  "Pilgrimage & Sacred Heritage"
];

export const destinationsList = [
  {
    id: "kochi",
    name: "Kochi (Cochin)",
    tagline: "Queen of the Arabian Sea & Historic Spice Gateway",
    state: "Kerala",
    category: "Kerala Highlights",
    image: "/dest-kochi.jpg",
    fallbackImage: "/banner-backwaters.png",
    duration: "1 to 2 Days",
    idealFor: "Heritage walks, harbour cruises, shopping & cultural shows",
    topAttractions: [
      "Historic Fort Kochi & Chinese Fishing Nets",
      "Mattancherry Dutch Palace & Jewish Synagogue",
      "Marine Drive Promenade & Sunset Cruises",
      "Tripunithura Hill Palace & Heritage Temples",
      "Lulu Mall & MG Road Shopping"
    ],
    description:
      "A cosmopolitan blend of medieval Portuguese, Dutch, British and traditional Malabar architecture. Kochi is the commercial capital of Kerala and the primary arrival hub for international and domestic travelers exploring God’s Own Country.",
    popularCombinations: ["Kochi - Munnar - Thekkadi - Alleppey", "Kochi Airport - Athirappilly - Cherai Beach"]
  },
  {
    id: "athirappilly",
    name: "Athirappilly",
    tagline: "The Niagara of India & Pristine Rainforest Falls",
    state: "Kerala",
    category: "Hill Stations & Nature",
    image: "/tour-waterfalls.jpg",
    fallbackImage: "/tour-waterfalls.jpg",
    duration: "1 Day (Day Trip from Kochi)",
    idealFor: "Nature lovers, monsoon seekers & film shoot locations",
    topAttractions: [
      "Roaring 80-Foot Athirappilly Waterfalls",
      "Vazhachal Forest Waterfalls & Rapids",
      "Charpa Falls & Sholayar Rainforest Reserve",
      "Thumboormuzhy Dam & Butterfly Garden",
      "Scenic Hanging Bridge across Chalakudy River"
    ],
    description:
      "Nestled along the pristine Chalakudy River in the Sholayar ranges, Athirappilly is Kerala's largest and most breathtaking waterfall. Surrounded by dense riparian forests and biodiversity, it presents a stunning natural spectacle, especially during monsoons.",
    popularCombinations: ["Kochi - Athirappilly - Munnar", "Athirappilly Day Excursion from Kochi Airport"]
  },
  {
    id: "munnar",
    name: "Munnar",
    tagline: "Emerald Tea Hills, Misty Peaks & Western Ghats Splendor",
    state: "Kerala",
    category: "Hill Stations & Nature",
    image: "/tour-munnar-hills.jpg",
    fallbackImage: "/tour-tea-slopes.jpg",
    duration: "2 to 3 Days",
    idealFor: "Honeymoon couples, families, trekking & cool mountain weather",
    topAttractions: [
      "Eravikulam National Park (Nilgiri Tahr habitat)",
      "Mattupetty Dam & Speedboat Boating",
      "Tea Museum & Tata Tea Estate Walks",
      "Echo Point, Top Station & Kundala Lake",
      "Chinnakanal & Anayirangal Dam Views"
    ],
    description:
      "Perched at 1,600 metres above sea level where three mountain streams converge, Munnar is south India’s premier hill station. Endless expanses of tea plantations, pristine valleys, cool mountain breezes, and exotic flora make it an irresistible destination.",
    popularCombinations: ["Munnar - Thekkadi - Alleppey Honeymoon Special", "Munnar Highland Retreat 3N/4D"]
  },
  {
    id: "thekkadi",
    name: "Thekkadi",
    tagline: "Periyar Wildlife Sanctuary, Elephant Trails & Spice Estates",
    state: "Kerala",
    category: "Hill Stations & Nature",
    image: "/tour-wildlife-elephants.jpg",
    fallbackImage: "/tour-nature-herd.jpg",
    duration: "1 to 2 Days",
    idealFor: "Wildlife safaris, elephant interaction, spice gardens & trekking",
    topAttractions: [
      "Periyar Lake Wildlife Boat Safari",
      "Periyar Tiger Reserve Guided Nature Walk",
      "Organic Cardamom & Pepper Spice Plantations",
      "Elephant Sanctuary Junction & Bathing Sessions",
      "Traditional Kalaripayattu Martial Arts & Kathakali Shows"
    ],
    description:
      "Home to the renowned Periyar National Park, Thekkadi offers a thrilling blend of jungle boat safaris, wild elephant sightings, aromatic spice plantations, and vibrant cultural performances in the heart of the Cardamom Hills.",
    popularCombinations: ["Munnar - Thekkadi - Alleppey", "Thekkadi - Vagamon - Kumarakom"]
  },
  {
    id: "vagamon",
    name: "Vagamon",
    tagline: "Misty Rolling Meadows, Pine Forests & Serene Solitude",
    state: "Kerala",
    category: "Hill Stations & Nature",
    image: "/tour-misty-roads.png",
    fallbackImage: "/tour-green-hills.jpg",
    duration: "1 to 2 Days",
    idealFor: "Peaceful retreats, photography, pine forest strolls & offbeat exploration",
    topAttractions: [
      "Vagamon Pine Valley & Fragrant Forests",
      "Rolling Green Meadows & Barren Hills (Motta Kkunnu)",
      "Kurisumala Ashram & Spiritual Hilltops",
      "Vagamon Glass Bridge & Adventure Park",
      "Marmala Waterfall Trek"
    ],
    description:
      "An enchanting offbeat hill station free from commercial crowds. Vagamon is celebrated for its cool temperature, rolling velvet green hills, aromatic pine groves, and mist swirling through endless tea gardens.",
    popularCombinations: ["Vagamon - Thekkadi - Kumarakom", "Kochi - Vagamon - Alleppey Weekend Escape"]
  },
  {
    id: "kumarakom",
    name: "Kumarakom",
    tagline: "Pristine Vembanad Lake & Luxury Backwater Havens",
    state: "Kerala",
    category: "Backwaters & Beaches",
    image: "/dest-kumarakom.jpg",
    fallbackImage: "/dest-kumarakom.jpg",
    duration: "1 to 2 Days",
    idealFor: "Luxury resort relaxation, bird watching, Ayurveda & canoe rides",
    topAttractions: [
      "Vembanad Lake Sunset Cruises & Shikara Rides",
      "Kumarakom Bird Sanctuary (Migratory Birds)",
      "Luxury Waterfront Heritage Resorts",
      "Traditional Village Canoe Canal Tours",
      "Authentic Karimeen Fish Fry & Kerala Culinary Feasts"
    ],
    description:
      "A scenic cluster of islands on the vast Vembanad Lake, Kumarakom is synonymous with tranquil backwater luxury. Acclaimed worldwide for premium heritage resorts, authentic Ayurvedic wellness, and serene bird-watching trails.",
    popularCombinations: ["Munnar - Kumarakom - Kovalam", "Kumarakom Ayurveda & Wellness Package"]
  },
  {
    id: "alleppey",
    name: "Alleppey (Alappuzha)",
    tagline: "Venice of the East & World-Renowned Houseboat Capital",
    state: "Kerala",
    category: "Backwaters & Beaches",
    image: "/hero-bg.jpg",
    fallbackImage: "/banner-backwaters.png",
    duration: "1 to 2 Days",
    idealFor: "Overnight luxury houseboat cruises, backwater village life & beach sunsets",
    topAttractions: [
      "Private Deluxe & Luxury Houseboat Cruise (Overnight)",
      "Punnamada Lake & Nehru Trophy Boat Race Track",
      "Alappuzha Historic Lighthouse & Pier Beach",
      "Marari Peaceful White Sand Beach",
      "Kuttanad Below-Sea-Level Paddy Field Canal Rides"
    ],
    description:
      "Lord Curzon famously christened Alleppey the ‘Venice of the East’. Cruising along its emerald-green canals on a traditional Kerala Kettuvallam houseboat, gazing at swaying palms and village life, is an experience of a lifetime.",
    popularCombinations: ["Kochi - Munnar - Thekkadi - Alleppey", "Alleppey Houseboat & Marari Beach Tour"]
  },
  {
    id: "varkala",
    name: "Varkala",
    tagline: "Majestic Ocean Cliffs, Papanasam Holy Sands & Bohemian Vibes",
    state: "Kerala",
    category: "Backwaters & Beaches",
    image: "/dest-varkala.jpg",
    fallbackImage: "/tour-resort-stay.png",
    duration: "1 to 2 Days",
    idealFor: "Cliff-top dining, beach sunsets, surf, yoga & spiritual cleansing",
    topAttractions: [
      "Dramatic Varkala North Cliff Promenade & Cafes",
      "Papanasam Holy Beach (Natural Mineral Springs)",
      "2,000-Year-Old Janardhana Swamy Temple",
      "Sivagiri Mutt of Sree Narayana Guru",
      "Kappil Beach & Coastal Lake Confluence"
    ],
    description:
      "Unique in South India, Varkala features towering red laterite cliffs immediately flanking the turquoise Arabian Sea. The beach is acclaimed for its therapeutic holy waters, laid-back cliffside cafes, and panoramic ocean vistas.",
    popularCombinations: ["Alleppey - Varkala - Kovalam", "Kochi - Varkala - Trivandrum - Kanyakumari"]
  },
  {
    id: "trivandrum",
    name: "Trivandrum (Thiruvananthapuram)",
    tagline: "Kerala's Royal Capital & Abode of Lord Padmanabha",
    state: "Kerala",
    category: "Pilgrimage & Sacred Heritage",
    image: "/dest-trivandrum.jpg",
    fallbackImage: "/dest-trivandrum.jpg",
    duration: "1 to 2 Days",
    idealFor: "Spiritual darshan, royal Travancore heritage & museum trails",
    topAttractions: [
      "Sree Padmanabhaswamy Temple & Sacred Pond",
      "Kuthira Malika (Mansion of Horses) Palace Museum",
      "Napier Museum, Art Gallery & Kanakakunnu Palace",
      "Attukal Bhagavathy Temple",
      "Shanghumukham Beach & Giant Mermaid Sculpture"
    ],
    description:
      "The stately capital city of Kerala, built upon seven coastal hills. Trivandrum blends magnificent ancient Travancore royal traditions with the divine aura of the historic Sree Padmanabhaswamy Temple.",
    popularCombinations: ["Trivandrum - Kovalam - Kanyakumari Tour", "South Kerala Spiritual Pilgrimage Circuit"]
  },
  {
    id: "kovalam",
    name: "Kovalam",
    tagline: "World-Renowned Crescent Beaches & Coastal Luxury",
    state: "Kerala",
    category: "Backwaters & Beaches",
    image: "/dest-kovalam.jpg",
    fallbackImage: "/dest-kovalam.jpg",
    duration: "1 to 2 Days",
    idealFor: "Beach relaxation, Ayurvedic rejuvenation therapy & lighthouse views",
    topAttractions: [
      "Iconic Red-and-White Kovalam Lighthouse Beach",
      "Hawah Beach & Crescent Bay Sunset Point",
      "Samudra Beach for Quiet Strolls",
      "Halcyon Castle & Seafront Promenades",
      "Traditional Ayurvedic Rejuvenation Spas"
    ],
    description:
      "Internationally renowned since the 1930s, Kovalam consists of three adjacent crescent beaches separated by rocky headlands. A premier destination for safe swimming, water sports, world-class Ayurvedic massages, and seaside dining.",
    popularCombinations: ["Kovalam - Kanyakumari 3N/4D Excursion", "Trivandrum - Kovalam Beach Escape"]
  },
  {
    id: "kanyakumari",
    name: "Kanyakumari",
    tagline: "Triveni Sangam of Three Oceans & Lands End of India",
    state: "Tamil Nadu",
    category: "Pilgrimage & Sacred Heritage",
    image: "/dest-kanyakumari.jpg",
    fallbackImage: "/dest-kanyakumari.jpg",
    duration: "1 to 2 Days",
    idealFor: "Sunrise & sunset over 3 oceans, spiritual memorials & oceanic confluence",
    topAttractions: [
      "Vivekananda Rock Memorial & Meditation Mandapam",
      "133-Foot Towering Thiruvalluvar Stone Statue",
      "Triveni Sangam (Confluence of Arabian Sea, Bay of Bengal & Indian Ocean)",
      "Sacred Bhagavathy Amman Temple",
      "Kanyakumari Sunset & Sunrise Viewpoints",
      "Gandhi Memorial Mandapam"
    ],
    description:
      "The southern tip of mainland India where the Arabian Sea, the Gulf of Mannar (Bay of Bengal), and the Indian Ocean converge. Famous for witnessing both sunrise and sunset emerging from the very same ocean horizon.",
    popularCombinations: ["Trivandrum - Kovalam - Kanyakumari Special", "Kochi to Kanyakumari Grand Coastal Tour"]
  },
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    tagline: "Sacred Jyotirlinga, Pamban Sea Bridge & Ramayana Heritage",
    state: "Tamil Nadu",
    category: "Pilgrimage & Sacred Heritage",
    image: "/dest-rameshwaram.jpg",
    fallbackImage: "/dest-rameshwaram.jpg",
    duration: "1 to 2 Days",
    idealFor: "Char Dham pilgrimage, sacred teertham bathing & sea bridge drives",
    topAttractions: [
      "Ramanathaswamy Temple (Longest Sculpted Corridor in India)",
      "22 Sacred Temple Wells (Theerthams) for Holy Bathing",
      "Iconic Pamban Sea Bridge over turquoise waters",
      "Dhanushkodi Ghost Town & Ram Setu Point",
      "Dr. A.P.J. Abdul Kalam Memorial",
      "Agni Theertham Sea Beach"
    ],
    description:
      "One of India's most venerated Char Dham and Jyotirlinga pilgrimage destinations, situated on Pamban Island. Connected to mainland India by the historic Pamban sea bridge, it is steeped in epic Ramayana lore and spiritual serenity.",
    popularCombinations: ["Madurai - Rameshwaram - Kanyakumari Pilgrimage", "Kerala to Rameshwaram Divine Circuit"]
  },
  {
    id: "madurai",
    name: "Madurai",
    tagline: "The Ancient Athens of the East & Meenakshi Amman Splendor",
    state: "Tamil Nadu",
    category: "Pilgrimage & Sacred Heritage",
    image: "/dest-madurai.jpg",
    fallbackImage: "/dest-madurai.jpg",
    duration: "1 to 2 Days",
    idealFor: "Ancient temple architecture, classical South Indian culture & night bazaars",
    topAttractions: [
      "World-Famous Meenakshi Sundareswarar Temple (Towering Gopurams)",
      "Hall of 1000 Carved Pillars & Sacred Temple Tank",
      "Thirumalai Nayakkar Mahal Palace (Sound & Light Show)",
      "Gandhi Memorial Museum Madurai",
      "Vandiyur Mariamman Teppakulam Temple Tank",
      "Vibrant Madurai Jasmine Market & Traditional Cuisine"
    ],
    description:
      "One of the oldest continuously inhabited cities in the world, with a recorded history spanning over 2,500 years. Centred around the magnificent Meenakshi Temple, Madurai is the soul of Dravidian art, architecture, and timeless South Indian culture.",
    popularCombinations: ["Madurai - Rameshwaram - Kanyakumari Pilgrimage Circuit", "Munnar - Thekkadi - Madurai Heritage Tour"]
  }
];

export const EXCHANGE_RATES = {
  USD: 1,
  LKR: 310,
  SAR: 3.75,
  AED: 3.67
};

export const PACKAGES = [
  {
    id: 'umrah-package',
    title: 'Umrah Pilgrimage Package',
    category: 'umrah',
    badge: 'Umrah 2026/2027',
    featured: true,
    tagline: '5★ Makkah Clock Tower & 5★ Madinah with Scholar Guidance',
    duration: '14 Days / 13 Nights',
    departureCities: ['Colombo (CMB)', 'Direct / Scheduled Flights'],
    airline: 'Saudia / SriLankan / Qatar Airways',
    basePriceUSD: 2450,
    makkahHotel: {
      name: 'Fairmont Makkah Clock Royal Tower',
      stars: 5,
      distance: '0m (Direct Haram Access)',
      nights: 7
    },
    madinahHotel: {
      name: 'Dar Al Taqwa Madinah',
      stars: 5,
      distance: '50m to Prophet’s Mosque Courtyard',
      nights: 6
    },
    rating: 4.98,
    reviewsCount: 142,
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565552684305-7e793910c660?auto=format&fit=crop&w=1200&q=80'
    ],
    roomTypes: [
      { type: 'Quad Sharing (4 Persons)', priceMultiplier: 1.0, discountText: 'Best Value' },
      { type: 'Triple Sharing (3 Persons)', priceMultiplier: 1.15, discountText: 'Popular' },
      { type: 'Double / Twin Sharing (2 Persons)', priceMultiplier: 1.35, discountText: 'Couples Choice' },
      { type: 'Single Private VIP Room', priceMultiplier: 1.85, discountText: 'Luxury Solitude' }
    ],
    inclusions: [
      'Return Air Tickets (Colombo - Jeddah / Madinah - Colombo)',
      'Luxury 5★ Haram Frontage Hotels in Makkah & Madinah',
      'Daily International Buffet Breakfast & Dinner',
      'Haramain High-Speed Train VIP Class (Makkah <-> Madinah)',
      'Guided Makkah & Madinah Historical Ziyarat with Scholars',
      'Full Ground Transport in Luxury Air-Conditioned Coaches',
      'Saudi Umrah eVisa Processing & Ground Handling',
      'Complimentary 5L Original Zamzam Water Pack & Ihram Kit',
      '24/7 Colombo & Makkah Ground Assistance Staff'
    ],
    exclusions: [
      'Personal laundry and room service calls',
      'Wheelchair helper charges during Tawaf & Sa’i (available upon add-on)',
      'Excess luggage over airline quota'
    ],
    itinerary: [
      { day: 1, title: 'Departure Colombo to Jeddah & Transfer to Makkah', desc: 'Board flight at CMB. Meet Khakiya representative at Jeddah airport. Transfer to Makkah Clock Tower. Perform Umrah under scholar guidance.' },
      { day: 2, title: 'Spiritual Rest & Solitary Prayers in Grand Mosque', desc: 'Orientation session with religious guide, free time for Tahajjud and daily 5 prayers in Mataf.' },
      { day: 3, title: 'Historical Makkah Ziyarat Tour', desc: 'Visit Cave Hira (Jabal Al-Nour), Jabal Thawr, Mina, Arafat, Muzdalifah, and Jamarat.' },
      { day: 7, title: 'Haramain Bullet Train to Madinah Munawwarah', desc: 'Scenic 2-hour train ride. Check into Dar Al Taqwa hotel steps from Bab Al-Salam.' },
      { day: 8, title: 'Rawdah Shareef Visit & Salam to Prophet (PBUH)', desc: 'Pre-booked Nusuk appointment assistance with Khakiya dedicated scholar.' },
      { day: 9, title: 'Madinah Historical Ziyarat Excursion', desc: 'Visit Masjid Quba, Mount Uhud & Martyrs Cemetery, and Masjid Al-Qiblatayn.' },
      { day: 14, title: 'Transfer to Madinah Airport & Return Flight', desc: 'Private coach transfer to airport for flight back to Colombo.' }
    ]
  },
  {
    id: 'hajj-package',
    title: 'Hajj Pilgrimage Package 2026/2027',
    category: 'hajj',
    badge: 'Hajj 2026/2027',
    featured: true,
    tagline: 'Official Licensed Nusuk Quota + VIP Air-Conditioned Mina Tents',
    duration: '21 Days Full Journey',
    departureCities: ['Colombo (CMB)', 'Special Scheduled Flights'],
    airline: 'SriLankan Airlines / Saudia',
    basePriceUSD: 7800,
    makkahHotel: {
      name: 'Swissôtel Al Maqam Makkah',
      stars: 5,
      distance: '10m (Direct Haram Courtyard)',
      nights: 10
    },
    madinahHotel: {
      name: 'The Oberoi Madinah',
      stars: 5,
      distance: 'Front Row (Prophet’s Mosque Courtyard)',
      nights: 6
    },
    rating: 5.0,
    reviewsCount: 89,
    images: [
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1200&q=80'
    ],
    roomTypes: [
      { type: 'Quad Sharing (Mina & Makkah)', priceMultiplier: 1.0, discountText: 'Official Standard' },
      { type: 'Triple Sharing', priceMultiplier: 1.18, discountText: 'Spacious' },
      { type: 'Double Private Suite', priceMultiplier: 1.45, discountText: 'Ultimate Comfort' }
    ],
    inclusions: [
      'Official Ministry of Hajj & Umrah Nusuk Authorized Quota',
      'VIP Air-Conditioned Mina & Arafat European Camp Tents with Sofas & Ensuite Baths',
      'Full Board Open Buffet (Breakfast, Lunch, Dinner & Beverages in Mina)',
      'Roundtrip Direct Scheduled Flights with Excess Baggage',
      'Dedicated Sri Lankan Mufti & Scholars for 24/7 Fiqh guidance during Manasik',
      'Special Golf Cart assistance for senior citizens in Jamarat and Mina',
      'Qurbani (Hady Sacrifice) included and verified on-site',
      'All Saudi Government Hajj Taxes, Medical Insurance, and Transportation bracelets'
    ],
    exclusions: [
      'Extra individual excursions outside standard Manasik',
      'Personal room service tips and optional laundry'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Jeddah & Direct Transfer to Makkah Hotel', desc: 'Check-in and perform Tamattu Umrah.' },
      { day: 5, title: 'Spiritual Preparation & Fiqh of Hajj Workshop', desc: 'Interactive scholar briefing on step-by-step rituals.' },
      { day: 8, title: '8th Dhul Hijjah (Yawm At-Tarwiyah) - Move to Mina', desc: 'Transfer to VIP Mina Camp.' },
      { day: 9, title: '9th Dhul Hijjah (Yawm Arafah) - The Peak of Hajj', desc: 'Day of Du’a in Arafat, then evening in Muzdalifah.' },
      { day: 10, title: '10th Dhul Hijjah (Eid Day) - Rami, Qurbani, Halq & Tawaf Al-Ifadah', desc: 'Stone Jamarat Al-Aqabah, verify Qurbani, exit Ihram.' },
      { day: 14, title: 'Transfer to Madinah Al-Munawwarah', desc: 'Stay at Oberoi Madinah for spiritual renewal and peace.' },
      { day: 21, title: 'Tawaf Al-Wada & Return Flight to Colombo', desc: 'Safe departure home with accepted Hajj inshaAllah.' }
    ]
  }
];

export const SERVICES = [
  {
    icon: 'Moon',
    title: 'Umrah Pilgrimage Services',
    desc: 'Year-round tailored and group Umrah journeys with premier Clock Tower accommodations, direct flights, and dedicated scholar guidance.'
  },
  {
    icon: 'Moon',
    title: 'Hajj Pilgrimage Services',
    desc: 'Official Ministry of Hajj & Nusuk authorized quota packages with air-conditioned Mina European tents and 24/7 Sri Lankan Mufti assistance.'
  },
  {
    icon: 'FileText',
    title: 'Umrah eVisa & Nusuk Permits',
    desc: 'Fast-track Saudi Umrah electronic visa processing, biometric support, and guaranteed Nusuk Rawdah Sharif permit booking.'
  },
  {
    icon: 'Plane',
    title: 'Pilgrim Airline Reservations',
    desc: 'IATA accredited group seat allocations on SriLankan Airlines, Saudia, Qatar Airways, and Emirates with preferential Zamzam baggage quotas.'
  },
  {
    icon: 'Compass',
    title: 'Guided Historical Ziyarat',
    desc: 'Educational visits to Cave Hira, Mount Thawr, Mount Uhud, Masjid Quba, and the Two Holy Mosques Exhibition led by Islamic scholars.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Senior Citizen & Wheelchair Care',
    desc: 'Specialized wheelchair helpers for Tawaf and Sa’i, accessible ground floor rooms, and golf cart assistance in Mina.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Al-Haj Mohamed Farook & Family',
    city: 'Colombo 03, Sri Lanka',
    badge: 'Verified Umrah Pilgrim',
    package: 'Umrah Pilgrimage Package',
    rating: 5,
    text: 'Alhamdulillah, traveling with Khakiya Travels was the best decision our family made. Being just steps away from Masjid Al-Haram in the Clock Tower with my elderly parents made the entire journey peaceful and effortless. The dedicated Khakiya team in Makkah took care of every detail.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Dr. Ayesha Rifath',
    city: 'Kandy, Sri Lanka',
    badge: 'Verified Umrah Pilgrim',
    package: 'Umrah Pilgrimage Package',
    rating: 5,
    text: 'The spiritual atmosphere and flawless organization was beyond words. From the high-speed bullet train to the Nusuk Rawdah permit reservations, everything ran like clockwork. Truly an IATA agency of supreme integrity.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Imran Nazeer & Group',
    city: 'Dehiwala, Colombo',
    badge: 'Verified Hajj Pilgrim',
    package: 'Hajj Pilgrimage Package 2026/2027',
    rating: 5,
    text: 'Khakiya Travels turned what could be a demanding Hajj into a memorable, comfortable spiritual triumph. The Mina private European tents with AC and scholar Q&A sessions made all the difference. Highly recommend to everyone in Sri Lanka.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const PILGRIMAGE_STEPS = [
  {
    step: '01',
    title: 'Ihram & Niyyah (Intention)',
    subtitle: 'At the Miqat boundary',
    arabic: 'نِيَّة الإِحْرَام',
    desc: 'Enter the sacred state of Ihram before crossing the designated Miqat boundary. Perform Ghusl, wear clean two-piece white unstitched sheets (for men) or modest clothing (for women), make your verbal Niyyah, and continuously recite Talbiyah.',
    talbiyah: 'Labbayka Allahumma Labbayk, Labbayka Laa Shareeka Laka Labbayk...',
    tips: ['Clip nails and trim hair beforehand', 'Avoid perfumes and scented soaps after Niyyah', 'Keep sandals that leave the ankle bone exposed']
  },
  {
    step: '02',
    title: 'Tawaf Al-Umrah (7 Circuits)',
    subtitle: 'Masjid Al-Haram, Makkah',
    arabic: 'طَوَاف حَوْلَ الكَعْبَة',
    desc: 'Perform 7 counter-clockwise circumambulations around the Holy Kaaba starting and finishing at the Black Stone (Hajar Al-Aswad) alignment line. Men practice Idtiba (uncovering right shoulder) and Raml during first 3 circuits.',
    talbiyah: 'Bismillahi Allahu Akbar',
    tips: ['Stay hydrated and keep right arm uncovered during Tawaf only', 'Pray 2 Rak’ah behind Maqam Ibrahim or anywhere in Haram', 'Drink Zamzam water abundantly with Du’a']
  },
  {
    step: '03',
    title: 'Sa’i (Between Safa & Marwa)',
    subtitle: '7 laps commemorating Lady Hajar',
    arabic: 'السَّعْي بَيْنَ الصَّفَا وَالمَرْوَة',
    desc: 'Commence at Mount Safa and walk toward Mount Marwa (1 lap). Complete 7 laps (ending at Marwa). Men run gently between the two green fluorescent markers. Make continuous heartfelt supplication on each mount.',
    talbiyah: 'Inna As-Safa wal-Marwata min Sha’a’irillah...',
    tips: ['Mount Safa is Lap 1, Marwa is Lap 2 (Total 7 laps ending at Marwa)', 'Air-conditioned wheelchair lanes available for elderly pilgrims', 'Du’a facing the Kaaba on top of each mount']
  },
  {
    step: '04',
    title: 'Halq or Taqsir (Shaving / Trimming)',
    subtitle: 'Exiting the state of Ihram',
    arabic: 'الحَلْق أَو التَّقْصِير',
    desc: 'Conclude your Umrah rituals by shaving the head completely (Halq - highly recommended for men) or trimming hair evenly from all sides by at least 1-2 cm (Taqsir). Women cut a fingertip length from the end of their ponytail.',
    talbiyah: 'Alhamdulillah, Umrah completed',
    tips: ['Use licensed barbers located directly outside the Marwa exit', 'Once hair is cut, all Ihram restrictions are immediately lifted', 'Perform Tahajjud and Sunnah prayers in gratitude']
  }
];

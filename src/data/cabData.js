export const hyderabadLocations = [
  { id: 'rgia', name: 'Rajiv Gandhi International Airport (RGIA)', zone: 'Airport', popular: true },
  { id: 'hitec', name: 'Hitec City (Cyber Towers / Mindspace)', zone: 'Cyberabad', popular: true },
  { id: 'gachibowli', name: 'Gachibowli (Financial District / DLF)', zone: 'Cyberabad', popular: true },
  { id: 'charminar', name: 'Charminar (Historic Old City)', zone: 'Central', popular: true },
  { id: 'secunderabad', name: 'Secunderabad Railway Station', zone: 'North', popular: true },
  { id: 'banjara', name: 'Banjara Hills (Road No. 1 / Care Hospital)', zone: 'Central', popular: true },
  { id: 'jubilee', name: 'Jubilee Hills (Check Post / Road 36)', zone: 'Central', popular: false },
  { id: 'madhapur', name: 'Madhapur (Inorbit Mall / Durgam Cheruvu)', zone: 'Cyberabad', popular: false },
  { id: 'kukatpally', name: 'Kukatpally (KPHB Colony Metro)', zone: 'North-West', popular: false },
  { id: 'begumpet', name: 'Begumpet (Prakash Nagar Metro)', zone: 'Central', popular: false },
  { id: 'lbnagar', name: 'LB Nagar (Kamineni Junction)', zone: 'East', popular: false },
  { id: 'miyapur', name: 'Miyapur (Bus Terminal)', zone: 'North-West', popular: false },
  { id: 'srisailam', name: 'Srisailam Temple (Outstation Pilgrimage)', zone: 'Outstation', popular: true },
  { id: 'vijayawada', name: 'Vijayawada (Outstation Express)', zone: 'Outstation', popular: true },
  { id: 'warangal', name: 'Warangal / Thousand Pillar Temple', zone: 'Outstation', popular: false }
];

export const allVehicles = [
  // BIKE
  {
    id: 'bike_moto',
    category: 'bike',
    categoryName: 'Bike Taxi',
    name: 'GODest Moto Bike',
    subtitle: 'Beat city traffic • Solo ride',
    example: 'Pulsar, Splendor, Activa',
    seats: 1,
    bags: 1,
    baseFare: 25,
    perKm: 7,
    eta: '2 mins',
    popular: true,
    highlight: 'Fastest in Traffic',
    photoUrl: '/images/godest_hitec_city_mobility_trio_a.png',
    badge: 'Affordable & Quick',
    color: '#0ea5e9'
  },
  // AUTO
  {
    id: 'auto_rickshaw',
    category: 'auto',
    categoryName: 'Auto Rickshaw',
    name: 'GODest Auto',
    subtitle: 'Zero bargaining • Doorstep pickup',
    example: 'Bajaj RE, Piaggio Ape',
    seats: 3,
    bags: 2,
    baseFare: 35,
    perKm: 10,
    eta: '2 mins',
    popular: true,
    highlight: 'Metered Transparent Fare',
    photoUrl: '/images/godest_auto_rickshaw_product_a.png',
    badge: 'Hyd Favorite',
    color: '#10B981'
  },
  // CARS
  {
    id: 'car_mini',
    category: 'car',
    categoryName: 'Car',
    name: 'GODest Car Mini',
    subtitle: 'Pocket-friendly AC hatchback',
    example: 'WagonR, Swift, Tiago',
    seats: 4,
    bags: 2,
    baseFare: 89,
    perKm: 12,
    eta: '3 mins',
    popular: false,
    photoUrl: '/images/godest_charminar_taxi_hero_b.png',
    badge: 'Budget AC',
    color: '#3B82F6'
  },
  {
    id: 'car_sedan',
    category: 'car',
    categoryName: 'Car',
    name: 'GODest Car Sedan',
    subtitle: 'Spacious legroom & boot space',
    example: 'Dzire, Etios, Aura',
    seats: 4,
    bags: 3,
    baseFare: 129,
    perKm: 14,
    eta: '4 mins',
    popular: true,
    photoUrl: '/images/godest_charminar_taxi_hero_a.png',
    badge: 'Extra Comfort',
    color: '#6366F1'
  },
  {
    id: 'car_ev_suv',
    category: 'car',
    categoryName: 'Car',
    name: 'GODest Prime EV SUV',
    subtitle: 'Signature yellow & white ride from design',
    example: 'Nexon EV, Curvv EV, ZS EV',
    seats: 5,
    bags: 4,
    baseFare: 169,
    perKm: 16,
    eta: '2 mins',
    popular: true,
    highlight: 'Signature Cab',
    photoUrl: '/images/godest_electric_suv_studio_a.png',
    badge: 'Eco Electric',
    color: '#F5B800'
  },
  {
    id: 'car_suv_xl',
    category: 'car',
    categoryName: 'Car',
    name: 'GODest Car XL (7-Seater)',
    subtitle: 'Family & group travel with extra luggage',
    example: 'Innova Crysta, Ertiga, Carens',
    seats: 7,
    bags: 6,
    baseFare: 249,
    perKm: 20,
    eta: '5 mins',
    popular: false,
    photoUrl: '/images/godest_charminar_taxi_hero_a.png',
    badge: 'Spacious 7-Seater',
    color: '#8B5CF6'
  }
];

export const popularRoutes = [
  {
    from: 'Hitec City / Cyber Towers',
    to: 'Rajiv Gandhi Int. Airport (RGIA)',
    distance: '34 km',
    duration: '38 mins',
    fares: {
      bike: 265,
      auto: 375,
      car: 599
    },
    tag: 'Airport Corridor'
  },
  {
    from: 'Secunderabad Station',
    to: 'Gachibowli DLF',
    distance: '22 km',
    duration: '42 mins',
    fares: {
      bike: 179,
      auto: 255,
      car: 399
    },
    tag: 'Daily Commute'
  },
  {
    from: 'Charminar (Old City)',
    to: 'Jubilee Hills Check Post',
    distance: '16 km',
    duration: '32 mins',
    fares: {
      bike: 135,
      auto: 195,
      car: 299
    },
    tag: 'City Heritage'
  },
  {
    from: 'Kukatpally KPHB Colony',
    to: 'Financial District Gachibowli',
    distance: '15 km',
    duration: '28 mins',
    fares: {
      bike: 129,
      auto: 185,
      car: 279
    },
    tag: 'IT Express'
  }
];

export const driverTestimonies = [
  {
    name: 'Sravan Reddy',
    role: 'Software Engineer, Hitec City',
    rideType: 'Bike & Car Ride',
    rating: 5,
    comment: 'For daily peak hour traffic to Cyber Towers, GODest Moto Bike is unbeatable! And for weekend airport drops with luggage, the GODest EV SUV was super punctual.'
  },
  {
    name: 'Priyanka Sharma',
    role: 'Doctor, Medical Center',
    rideType: 'Auto & Prime Cab',
    rating: 5,
    comment: 'Zero bargaining with GODest Auto is such a relief! Plus the yellow and white SUV is exceptionally clean, quiet and safe for midnight rides.'
  },
  {
    name: 'Mohammed Kareem',
    role: 'Business Owner, Charminar',
    rideType: 'Car XL 7-Seater',
    rating: 5,
    comment: 'Booked a 7-seater cab for our family trip to Srisailam. Courteous captain, transparent billing, and zero surge. Always ride safe with GODest!'
  }
];

import type {
  CardItem,
  DarshanScheduleRow,
  DonationOptionItem,
  FeatureItem,
  NavLinkItem,
  StatItem,
} from '../types';

export const ZEFFY_DONATION_URL =
  'https://www.zeffy.com/embed/donation-form/donations-287?modal=true';

export const SITE_INFO = {
  name: 'ISKCON Halifax',
  subtitle: 'International Society for Krishna Consciousness',
  address: '29 Westwood Blvd, Upper Tantallon, Nova Scotia',
  shortAddress: '29 Westwood Blvd, Upper Tantallon, NS',
  email: 'iskconhfx@gmail.com',
  phoneDisplay: '+1 (902) 580 - 1786',
  phoneHref: 'tel:+19025801786',
  social: {
    facebook: 'https://www.facebook.com/iskconhalifaxcenter/',
    youtube: 'https://www.youtube.com/@ISKCONHalifax',
    instagram: 'https://instagram.com/iskconhalifax',
  },
};

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'New Temple', to: '/new-temple' },
  { label: 'About', to: '/about' },
  { label: 'Visit Us', to: '/visit-us' },
  { label: 'Donate', to: '/donate', isCta: true },
];

export const HOME_WELCOME_FEATURES: FeatureItem[] = [
  {
    icon: 'fas fa-hand-holding-heart',
    title: 'Caring',
    description:
      'In a chaotic, modern world, ISKCON of Halifax provides an oasis that serves to nourish the spiritual, cultural, emotional, and educational needs of its members.',
  },
  {
    icon: 'fas fa-sun',
    title: 'Inspiring',
    description:
      'By following the pure tenets laid down by Lord Krishna in Bhagavad-Gita, families cultivate a deep understanding of these teachings and their practical application in daily life.',
  },
  {
    icon: 'fas fa-hands-praying',
    title: 'Maintaining',
    description:
      'A center dedicated to perpetuating the pure principles of bhakti-yoga in direct line with the past saintly personalities of the Vedic tradition, relevant for generations to come.',
  },
];

export const HOME_STATS: StatItem[] = [
  { count: 12000, suffix: '+', label: 'Festival Visitors' },
  { count: 17, suffix: '+', label: 'Years of Service' },
  { count: 100, suffix: '+', label: 'Active Volunteers' },
  { count: 5000, suffix: '+', label: 'Meals Served' },
];

export const HOME_FESTIVAL_CARDS: CardItem[] = [
  {
    image: '/images/Rathyatra.jpeg',
    imageAlt: 'Ratha Yatra Festival in Halifax',
    tag: 'Grand Procession',
    title: 'Ratha Yatra in Halifax',
    description:
      "Experience the spiritual bliss of ISKCON's Ratha Yatra, as Lord Jagannath rides in a majestic chariot through the streets of Halifax, showering mercy upon all.",
  },
  {
    image: '/images/Rathyatra%20-%202.jpeg',
    imageAlt: 'Devotee community celebrating in Halifax',
    tag: 'Devotee Community',
    title: 'Festivals & Kirtans',
    description:
      'Our vibrant devotee community gathers for joyful kirtans, Janmashtami celebrations, and spiritual fellowship, welcoming seekers and families of all backgrounds.',
  },
  {
    image: '/images/Food%20for%20Life%20-%201.jpeg',
    imageAlt: 'Food for Life Prasadam distribution in Halifax',
    tag: 'Compassionate Service',
    title: 'Food for Life Outreach',
    description:
      'Youth and volunteer devotees actively prepare and distribute nutritious, sanctified meals (prasadam) to support local shelters and underserved neighbors in our city.',
  },
];

export const HOME_ACTIVITIES: FeatureItem[] = [
  {
    icon: 'fas fa-utensils',
    title: 'Food for Life',
    description:
      'ISKCON Food Relief programs serve wholesome vegetarian meals to underserved communities across the globe.',
  },
  {
    icon: 'fas fa-users',
    title: 'Inclusivity',
    description:
      'ISKCON welcomes all, transcending barriers of race, faith, origin, and culture, fostering unity and shared humanity.',
  },
  {
    icon: 'fas fa-book-open',
    title: 'Spiritual Education',
    description:
      'Systematic study of Vedic texts from childhood through advanced programs, nurturing lifelong spiritual learning.',
  },
  {
    icon: 'fas fa-spa',
    title: 'Vaishnavi Empowerment',
    description:
      'Promoting a culture of open-hearted empowerment for women through association, representation, and service.',
  },
];

export const ABOUT_MISSION_ITEMS: FeatureItem[] = [
  {
    number: '1',
    title: 'Chant',
    description:
      'To chant the holy names of God, particularly the Hare Krishna maha-mantra, to cleanse the heart and awaken spiritual consciousness.',
  },
  {
    number: '2',
    title: 'Read Srimad Bhagavatam',
    description:
      'To systematically propagate spiritual knowledge to society at large and educate all people in the techniques of spiritual life.',
  },
  {
    number: '3',
    title: 'Honor Prasadam',
    description:
      'To distribute sanctified food (prasadam) to the public, purifying body and soul and spreading joy and good health.',
  },
];

export const ABOUT_VISION_ITEMS: FeatureItem[] = [
  {
    icon: 'fa-solid fa-heart',
    title: 'Caring',
    description:
      'We aim to build a deeply caring community where every individual feels supported, valued, and encouraged on their spiritual journey.',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Inspiring',
    description:
      'We strive to inspire others through the timeless wisdom of the Vedas, uplifting arts, music, and the joyous practice of devotion.',
  },
  {
    icon: 'fa-solid fa-hands-holding-circle',
    title: 'Maintaining',
    description:
      'We are committed to maintaining the high standards of purity and authentic spiritual practices established by Srila Prabhupada.',
  },
];

export const ABOUT_VALUES: CardItem[] = [
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'Equal Vision (Sama Darshana)',
    description:
      'Recognizing that all living beings are spiritual souls, parts and parcels of God, regardless of race, gender, or species.',
  },
  {
    icon: 'fa-solid fa-leaf',
    title: 'Without Cruelty (Ahimsa)',
    description:
      'Living compassionately and minimizing harm to others, which includes practicing a vegetarian or vegan lifestyle.',
  },
  {
    icon: 'fa-solid fa-person-praying',
    title: 'Humility (Amanitva)',
    description:
      'Cultivating a humble state of mind, avoiding the desire for prestige, and offering respect to all others.',
  },
  {
    icon: 'fa-solid fa-hand-holding-heart',
    title: 'Choice (Iccha)',
    description:
      'Respecting the free will of every individual to choose their own spiritual path and pace of advancement.',
  },
  {
    icon: 'fa-solid fa-gavel',
    title: 'Nurturing Right Action (Dharma)',
    description:
      'Acting responsibly in ways that sustain personal well-being, community harmony, and spiritual growth.',
  },
  {
    icon: 'fa-solid fa-hands-holding',
    title: 'Affection (Prithi)',
    description:
      'Fostering deep, loving relationships centered on our shared connection with the Supreme Lord.',
  },
];

export const ABOUT_COMMUNITY_CARDS: CardItem[] = [
  {
    image: '/images/Rathyatra%20-%202.jpeg',
    imageAlt: 'Devotees celebrating together',
    tag: 'Fellowship',
    title: 'United in Devotion',
    description:
      'Devotees, volunteers, and visitors coming together in joy and spiritual friendship to serve the community.',
  },
  {
    image: '/images/Rathyatra%20-%203.jpeg',
    imageAlt: 'Honoring guests and community leaders',
    tag: 'Partnership',
    title: 'Civic Harmony & Respect',
    description:
      'Building meaningful bridges with civic dignitaries, cultural leaders, and neighbours across Nova Scotia.',
  },
  {
    image: '/images/Rathyatra%20Security%20team.jpeg',
    imageAlt: 'Volunteer Seva Team',
    tag: 'Seva & Service',
    title: 'Dedicated Volunteers',
    description:
      'Devotees providing tireless, loving service behind the scenes to ensure peaceful and uplifting festival experiences.',
  },
];

export const NEW_TEMPLE_HIGHLIGHTS: FeatureItem[] = [
  {
    icon: 'fas fa-vihara',
    title: 'Spacious Darshan Hall',
    description: 'A magnificent 3,500 sqft space dedicated to worship and meditation.',
  },
  {
    icon: 'fas fa-users',
    title: 'Community Hall & Auditorium',
    description: 'A large gathering space for festivals, cultural events, and discourses.',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Food For Life Counter',
    description: 'Distributing free sanctified vegetarian meals to those in need.',
  },
  {
    icon: 'fas fa-leaf',
    title: "GOVINDA's Restaurant",
    description: 'Enjoy pure vegetarian, cruelty-free dining options.',
  },
  {
    icon: 'fas fa-book-open',
    title: 'Educational Facilities & Library',
    description: 'A treasure trove of Vedic literature and learning resources.',
  },
  {
    icon: 'fas fa-gift',
    title: 'Vedic Books & Gifts Boutique',
    description: 'Offering spiritual literature, clothing, and devotional items.',
  },
  {
    icon: 'fas fa-ship',
    title: 'Ashram & Boat Festivals Facility',
    description: 'Dedicated facility for resident monks and unique water festivals.',
  },
  {
    icon: 'fas fa-star-of-david',
    title: 'Yoga & Meditation Center',
    description: 'Serene spaces for yoga asanas, kirtan, and mantra meditation.',
  },
  {
    icon: 'fas fa-car',
    title: 'Parking for 80+ Vehicles',
    description: 'Ample parking space to accommodate our growing congregation.',
  },
  {
    icon: 'fas fa-tree',
    title: 'Beautiful Landscaping',
    description: 'Lush gardens providing a tranquil and spiritual ambiance.',
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Vedic Sunday School Rooms',
    description: 'Dedicated rooms to nurture the younger generation in Vedic culture.',
  },
  {
    icon: 'fas fa-child',
    title: 'Playground for Children',
    description: 'A safe and fun outdoor environment for kids to enjoy.',
  },
];

export const NEW_TEMPLE_SPACES: CardItem[] = [
  {
    image: '/images/Prayer%20hall.jpeg',
    imageAlt: 'Sacred Temple Hall',
    tag: 'Sanctuary',
    title: 'Sacred Temple & Prayer Hall',
    description:
      'A spacious, naturally illuminated hall with traditional wooden pews and an elevated altar stage for discourses, daily prayers, and ecstatic kirtan.',
  },
  {
    image: '/images/Prasadam%20Hall.jpeg',
    imageAlt: 'Sacred Food & Prasadam Hall',
    tag: 'Fellowship',
    title: 'Sacred Food & Prasadam Hall',
    description:
      'A bright, welcoming dining area equipped with long tables and seating where devotees and guests honor sanctified vegetarian feasts together.',
  },
  {
    image: '/images/Deities%20resized.jpeg',
    imageAlt: 'Divine Altar & Sanctum',
    imageStyle: { objectPosition: 'center 25%' },
    tag: 'Darshan',
    title: 'Divine Altar & Sanctum',
    description:
      'The sacred home of Sri Sri Gaura Nitai deities and Srila Prabhupada, adorned with radiant flower garlands, silk robes, and loving devotional offerings.',
  },
  {
    image: '/images/Iskcon%20Property.jpeg',
    imageAlt: 'Temple Grounds & Facility',
    tag: 'Facility',
    title: 'Temple Grounds & Exterior',
    description:
      'Located on 9 peaceful acres at 29 Westwood Blvd in Upper Tantallon, featuring ample vehicle parking, wheelchair accessibility, and serene natural surroundings.',
  },
];

export const NEW_TEMPLE_FUTURE_ACTIVITIES: FeatureItem[] = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Kids School',
    description: 'Nurture children academically, spiritually, and socially.',
  },
  {
    icon: 'fas fa-guitar',
    title: 'Music School',
    description: 'Cultivate spiritual growth through sacred musical instruments.',
  },
  {
    icon: 'fas fa-fire',
    title: 'Fire Sacrifices & Events',
    description: 'Ceremonies for marriages, baby showers, etc.',
  },
  {
    icon: 'fas fa-spa',
    title: 'Yoga Studio & Govindas',
    description: 'Blending yoga asanas with mantras, plus plant-based dining.',
  },
];

export const DONATE_OPTIONS: DonationOptionItem[] = [
  {
    icon: 'fa-solid fa-gift',
    title: 'One-Time Donation',
    description:
      'Every contribution, no matter the size, brings us one step closer to our goal. Your one-time gift provides immediate support for our most pressing needs.',
    ctaLabel: 'Donate Now',
  },
  {
    icon: 'fa-solid fa-calendar-check',
    title: 'Monthly Seva',
    description:
      'Become a sustaining pillar of our community. Monthly contributions ensure steady, reliable support for temple maintenance, deity worship, and community programs.',
    ctaLabel: 'Donate Monthly',
  },
  {
    icon: 'fa-solid fa-cubes-stacked',
    title: 'Sponsor a Brick',
    description:
      'Leave a lasting legacy by sponsoring a structural element of the new temple. Be a permanent part of this historic spiritual monument in Halifax.',
    ctaLabel: 'Sponsor Now',
  },
];

export const DONATE_IMPACT_AREAS: FeatureItem[] = [
  {
    icon: 'fa-solid fa-gopuram',
    title: 'Temple Construction',
    description:
      'Funding the land acquisition, architectural planning, and physical construction of our permanent temple building.',
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Community Programs',
    description:
      'Supporting our weekly Sunday Feasts, major Vedic festivals, cultural events, and kirtan gatherings.',
  },
  {
    icon: 'fa-solid fa-bowl-rice',
    title: 'Food for Life',
    description:
      'Distributing free, sanctified vegetarian meals (prasadam) to the public and those in need across Halifax.',
  },
  {
    icon: 'fa-solid fa-book-open',
    title: 'Spiritual Education',
    description:
      "Facilitating Bhagavad Gita study groups, children's Sunday school, and the distribution of transcendental literature.",
  },
];

export const DONATE_CURRENT_ACTIVITIES: CardItem[] = [
  {
    icon: 'fa-solid fa-apple-whole',
    title: 'Food for Life',
    description:
      'We are actively engaged in feeding those in need and sharing the blessings of Krishna prasadam with the broader Halifax community.',
  },
  {
    icon: 'fa-solid fa-hands-holding-circle',
    title: 'Inclusivity',
    description:
      'Our temple is a home for everyone. We welcome all visitors, regardless of background, to experience the joy of Krishna consciousness.',
  },
  {
    icon: 'fa-solid fa-chalkboard-user',
    title: 'Spiritual Education',
    description:
      'We offer systemic training in the ancient Vedic scriptures, empowering individuals with practical spiritual wisdom for modern life.',
  },
  {
    icon: 'fa-solid fa-sun',
    title: 'Vaishnavi Empowerment',
    description:
      'We are dedicated to supporting and empowering the women in our community, fostering their leadership and spiritual growth.',
  },
];

export const DONATE_SHOWCASE_CARDS: CardItem[] = [
  {
    image: '/images/Food%20for%20Life%20-%202.jpeg',
    imageAlt: 'Food for Life prasadam distribution',
    tag: 'Prasadam Seva',
    title: 'Food For Life Halifax',
    description:
      'Free sanctified vegetarian meals lovingly prepared and packaged for local shelters, seniors, and families facing food insecurity.',
  },
  {
    image: '/images/Food%20for%20Life%20-%201.jpeg',
    imageAlt: 'Youth volunteers serving food',
    tag: 'Community Care',
    title: 'Youth & Family Seva',
    description:
      'Engaging young devotees and families in hands-on charity and selfless service, instilling compassion and civic responsibility.',
  },
  {
    image: '/images/Prayer%20hall.jpeg',
    imageAlt: 'Temple Sanctuary and Hall',
    tag: 'Sanctuary Fund',
    title: 'Temple & Sanctuary',
    description:
      'Maintaining our peaceful prayer hall, facilitating weekly Bhagavad Gita discourses, daily deity worship, and spiritual gatherings.',
  },
];

export const DARSHAN_SCHEDULE: DarshanScheduleRow[] = [
  {
    days: 'Monday & Tuesday',
    periodTitle: 'Evening Hours',
    times: [
      {
        icon: 'fa-regular fa-clock',
        iconColor: '#E07A5F',
        value: '6:30 PM – 8:00 PM',
      },
    ],
  },
  {
    days: 'Wednesday – Friday',
    periodTitle: 'Morning & Evening Hours',
    times: [
      {
        icon: 'fa-solid fa-sun',
        iconColor: '#E07A5F',
        label: 'Morning: ',
        value: '7:00 AM – 9:00 AM',
      },
      {
        icon: 'fa-solid fa-moon',
        iconColor: '#7B1F2E',
        label: 'Evening: ',
        value: '6:30 PM – 8:00 PM',
      },
    ],
  },
  {
    days: 'Saturday',
    periodTitle: 'Weekend Hours',
    times: [
      {
        icon: 'fa-regular fa-clock',
        iconColor: '#E07A5F',
        value: '12:00 PM – 7:00 PM',
      },
    ],
  },
  {
    days: 'Sunday',
    periodTitle: 'Weekend Hours',
    times: [
      {
        icon: 'fa-regular fa-clock',
        iconColor: '#E07A5F',
        value: '8:00 AM – 10:00 AM',
      },
    ],
  },
];

export const VISIT_EXPECT_CARDS: CardItem[] = [
  {
    image: '/images/Deities.jpeg',
    imageAlt: 'Sri Sri Gaura Nitai Altar',
    imageStyle: { objectPosition: 'center 25%' },
    tag: 'Devotional Darshan',
    title: 'Sacred Altar & Darshan',
    description:
      'Experience peaceful darshan before the radiant deities of Sri Sri Gaura Nitai and offer your heartfelt prayers.',
  },
  {
    image: '/images/Prayer%20hall.jpeg',
    imageAlt: 'Prayer and Kirtan Hall',
    tag: 'Kirtan & Discourses',
    title: 'Prayer & Meditation Hall',
    description:
      'Join in congregational mantra meditation, soul-stirring kirtan with mridanga drums and kartalas, and Vedic discourses.',
  },
  {
    image: '/images/Prasadam%20Hall.jpeg',
    imageAlt: 'Prasadam Dining Hall',
    tag: 'Free Sunday Feast',
    title: 'Sunday Prasadam Feast',
    description:
      'Every Sunday Feast program concludes with a sumptuous, sanctified vegetarian dinner served to all guests with love.',
  },
];

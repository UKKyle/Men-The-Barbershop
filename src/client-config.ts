/**
 * CLIENT BRANDING — edit this file for each independent customer copy.
 * Keep the original Blank-Barbershop-Site repository generic.
 * Only publish verified contact details, photos and customer reviews.
 */
export const client = {
  name: 'Men The Barbershop',
  shortName: 'MEN THE BARBERSHOP',
  headline: ['MEN THE', 'BARBERSHOP'],
  locationLabel: 'KINGSTANDING · BIRMINGHAM',
  tagline: 'Haircuts · Fades · Beards · Shaves',
  previewPin: '2468',
  phone: '07974 104733',
  phoneHref: 'tel:+447974104733',
  address: '478 College Road, Kingstanding, Birmingham B44 0HL',
  facebook: '#contact',
  googleMaps: 'https://www.google.com/maps/search/?api=1&query=Men+The+Barbershop+478+College+Road+Birmingham',
  googleEmbed: '',
  rating: 0,
  reviewCount: 0,
  heroImage: '/images/men-hero.svg',
  gallery: [
    {src:'/images/men-cut-1.svg',alt:'Example haircut gallery placeholder'},
    {src:'/images/men-cut-2.svg',alt:'Example haircut gallery placeholder'},
    {src:'/images/men-cut-3.svg',alt:'Example haircut gallery placeholder'},
    {src:'/images/men-cut-4.svg',alt:'Example haircut gallery placeholder'},
  ],
  services: [
    ['Haircuts','Classic and modern cuts, finished to suit your style.'],
    ['Skin fades','Sharp fades and tapers with clean blending and detail.'],
    ['Hair & beard','A complete tidy-up with haircut, trim and beard shape.'],
    ['Wet & dry shave','Traditional shaving options for a clean finish.'],
  ],
  reviews: [
    ['“Add a verified review before launch.”','Customer review'],
    ['“Replace with a genuine customer quote.”','Customer review'],
    ['“Only publish attributed, verified reviews.”','Customer review'],
  ],
  // Demo appointment generation (weekday 0=Sunday). Adjust to verified client hours.
  bookingHours: {
    0:['11:00','16:00'],1:['09:30','19:00'],2:['09:30','19:00'],
    3:['09:30','19:00'],4:['09:30','19:00'],5:['09:30','19:00'],6:['08:30','17:00'],
  } as Record<number,[string,string]>,
  hours: [
    ['Monday–Friday','Hours to be confirmed'],
    ['Saturday','Hours to be confirmed'],
    ['Sunday','Hours to be confirmed'],
  ],
} as const;

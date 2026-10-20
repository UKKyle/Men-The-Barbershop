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
  tagline: 'Haircuts · Hot towel shaves · Walk-ins & appointments',
  previewPin: '2468',
  phone: '07974 104733',
  phoneHref: 'tel:+447974104733',
  address: '478 College Road, Kingstanding, Birmingham B44 0HL',
  facebook: '#contact',
  googleMaps: 'https://www.google.com/maps/search/?api=1&query=Men+The+Barbershop+478+College+Road+Birmingham',
  googleEmbed: 'https://www.google.com/maps?q=478+College+Road+Birmingham+B44+0HL&output=embed',
  rating: 4.9,
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
    ['“Customer review preview — genuine feedback to be added.”','Illustrative placeholder'],
    ['“Actual review quotations can be added with attribution.”','Illustrative placeholder'],
    ['“A selection of customer feedback will appear here.”','Illustrative placeholder'],
  ],
  // Demo appointment generation (weekday 0=Sunday). Adjust to verified client hours.
  bookingHours: {
    2:['09:30','17:00'],3:['09:30','17:00'],4:['09:30','17:00'],
    5:['09:30','17:00'],6:['09:00','16:00'],
  } as Record<number,[string,string]>,
  hours: [
    ['Monday','Closed'],
    ['Tuesday–Friday','9:30am – 5:00pm'],
    ['Saturday','9:00am – 4:00pm'],
    ['Sunday','Closed'],
  ],
} as const;

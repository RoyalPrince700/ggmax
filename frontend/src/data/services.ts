export interface Service {
  id: string
  title: string
  short: string
  description: string
  points: string[]
  image: string
  imageAlt?: string
}

export const services: Service[] = [
  {
    id: 'broilers',
    title: 'Broiler Production',
    short:
      'Commercial broiler pens at Amoyo, built for table-meat birds that supply Kwara and the wider market.',
    description:
      'GgMax raises broilers in purpose-built pens at Amoyo. At commissioning the farm had six pens of 5,000 birds each, with two further pens of the same size planned so the installed broiler capacity reaches 40,000 birds.',
    points: [
      'Six pens of 5,000 birds already built',
      'Installed capacity planned at 40,000 broilers',
      'Birds raised for the poultry-meat market',
      'Linked to on-farm processing',
    ],
    image: '/images/flock.jpg',
  },
  {
    id: 'layers',
    title: 'Layers & Table Eggs',
    short:
      'Four layer houses with an installed capacity of 33,000 birds, producing eggs for households and trade.',
    description:
      'Four fully built layer pens give the farm an installed capacity of 33,000 laying birds. Eggs are part of the same integrated yard as the broilers, the feed mill and the processing line.',
    points: [
      'Four layer pens on the Amoyo site',
      'Installed capacity of 33,000 layers',
      'Table eggs for local supply',
      'Layer cages installed for commercial production',
    ],
    image: '/images/eggs.jpg',
  },
  {
    id: 'feed-mill',
    title: 'Feed Milling',
    short:
      'An on-farm feed mill rated at 5 tonnes an hour, so rations are milled where the birds are kept.',
    description:
      'The Amoyo yard includes a feed mill with an installed capacity of 5 tonnes per hour. Milling on site keeps broiler and layer rations close to the pens and cuts dependence on distant feed supply.',
    points: [
      'Installed capacity of 5 tonnes per hour',
      'Feed milled for the farm’s own flocks',
      'Supports both broiler and layer houses',
      'Part of the integrated GgMax yard',
    ],
    image: '/images/feed.jpg',
  },
  {
    id: 'processing',
    title: 'Broiler Processing',
    short:
      'A semi-automated processing unit able to dress up to 1,000 birds a day.',
    description:
      'GgMax includes a semi-automated broiler processing unit with a capacity of 1,000 birds per day, so birds raised on the farm can be dressed on the same site.',
    points: [
      'Up to 1,000 birds processed a day',
      'Semi-automated processing line',
      'On-site dressing of farm broilers',
      'Built for commercial offtake',
    ],
    image: '/images/processing.jpg',
  },
  {
    id: 'manure',
    title: 'Manure Processing',
    short:
      'A manure processing unit turns poultry waste into a product for crop farmers.',
    description:
      'The farm was commissioned with a manure processing unit so litter from the pens is handled on site and can go back to crop production instead of becoming a waste problem.',
    points: [
      'On-site manure processing',
      'Litter taken from broiler and layer pens',
      'Output for crop farmers',
      'Part of the integrated farm design',
    ],
    image: '/images/yard.jpg',
    imageAlt: 'Open farmland',
  },
  {
    id: 'training',
    title: 'Training & Research',
    short:
      'A University of Ilorin commercial farm that also supports students, staff and poultry enterprise.',
    description:
      'GgMax sits inside the University of Ilorin. Alongside commercial production, the Faculty of Agriculture and the Department of Animal Production use the university’s poultry work to train students and connect research with the broiler and layer value chain.',
    points: [
      'University of Ilorin commercial poultry project',
      'Hands-on training for agriculture students',
      'Linked to the Department of Animal Production',
      'A route into poultry enterprise for young people',
    ],
    image: '/images/flock.jpg',
  },
]

export const companyInfo = {
  name: 'GgMax Ilorin',
  fullName: 'Unilorin GgMax Farm',
  legalName: 'University of Ilorin Gallus gallus domesticus Max Farm',
  spv: 'Unilorin Bizface Synergy Limited',
  tagline: 'Chicken farm · Amoyo, Kwara State',
  phones: [
    {
      display: '0803 821 7248',
      href: 'tel:+2348038217248',
      label: 'Department of Animal Production',
    },
    {
      display: '+234 805 087 8080',
      href: 'tel:+2348050878080',
      label: 'University of Ilorin',
    },
  ],
  email: 'solaojo.fe@unilorin.edu.ng',
  emailHref: 'mailto:solaojo.fe@unilorin.edu.ng',
  emails: [
    {
      display: 'solaojo.fe@unilorin.edu.ng',
      href: 'mailto:solaojo.fe@unilorin.edu.ng',
      label: 'Prof. Foluke E. Sola-Ojo, Chairman',
    },
    {
      display: 'hodanimalproduction@unilorin.edu.ng',
      href: 'mailto:hodanimalproduction@unilorin.edu.ng',
      label: 'Department of Animal Production',
    },
  ],
  address: 'Amoyo, Ifelodun Local Government Area, Kwara State, Nigeria',
  postal:
    'Department of Animal Production, Faculty of Agriculture, University of Ilorin, P.M.B. 1515, Ilorin, Nigeria',
  office:
    'Room 1, Laboratory Wing, Department of Animal Production, University of Ilorin',
}

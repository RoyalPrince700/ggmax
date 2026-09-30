export interface BlogPost {
  slug: string
  title: string
  dateLabel: string
  author: string
  excerpt: string
  image: string
  imageAlt: string
  paragraphs: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'raising-broilers-at-amoyo',
    title: 'How GgMax raises broilers at Amoyo',
    dateLabel: '12 September 2026',
    author: 'GgMax Ilorin',
    excerpt:
      'Six pens were built for meat birds, with room planned for 40,000 broilers. This is how the yard is set up to take a chick through to a dressed bird.',
    image: '/images/flock.jpg',
    imageAlt: 'Brown hens in a poultry yard',
    paragraphs: [
      'Unilorin GgMax Farm at Amoyo was built as a commercial broiler yard, not a backyard flock. At commissioning the farm had six pens of 5,000 birds each. Two further pens of the same size were planned so the installed broiler capacity can reach 40,000 birds.',
      'A broiler pen only works if the birds, the feed and the water stay together. Chicks need heat and space in the first days, then more floor as they grow. Staff watch weight, feed intake and the condition of the litter, because a wet pen slows growth and invites disease.',
      'The birds are raised for the table-meat market in Kwara and beyond. When a batch is ready, it does not have to leave the site alive for dressing. The farm has a semi-automated processing line rated at 1,000 birds a day, so a finished flock can be processed where it was raised.',
      'That link between pen and processing is the point of an integrated farm. Fewer journeys mean less stress on the birds and a shorter path from Amoyo to the buyer. Buyers who want broilers, or who want to visit the pens, can call the Department of Animal Production or write to the Chairman, Prof. Foluke E. Sola-Ojo.',
    ],
  },
  {
    slug: 'table-eggs-from-the-layer-houses',
    title: 'What to know about table eggs from the layer houses',
    dateLabel: '28 August 2026',
    author: 'GgMax Ilorin',
    excerpt:
      'Four layer pens give the farm an installed capacity of 33,000 birds. Eggs are collected, checked and moved while they are still fresh.',
    image: '/images/eggs.jpg',
    imageAlt: 'A bowl of brown table eggs',
    paragraphs: [
      'Beside the broiler pens, GgMax has four layer houses. Their installed capacity is 33,000 laying birds. The houses were fitted with layer cages so eggs can be collected from a commercial flock rather than from birds on deep litter alone.',
      'A laying hen needs a steady ration, clean water and a calm house. Light, heat and the hours she spends eating all show up in the number of eggs she lays. Staff look for cracked shells, dirty eggs and any sudden drop in collection, because those are the first signs that a house needs attention.',
      'Table eggs are a daily food in Ilorin. Households, traders and kitchens want eggs that were laid recently and handled cleanly. Collecting them on the farm, then moving them out the same day, is how a layer house earns its place next to the feed mill.',
      'If you are buying eggs from GgMax, ask for the current availability. Flock age and the number of birds in lay change how many crates leave Amoyo in a week. The department line, 0803 821 7248, and solaojo.fe@unilorin.edu.ng are the published ways to enquire.',
    ],
  },
  {
    slug: 'why-the-farm-mills-its-own-feed',
    title: 'Why the farm mills its own chicken feed',
    dateLabel: '4 August 2026',
    author: 'GgMax Ilorin',
    excerpt:
      'The Amoyo yard includes a feed mill rated at 5 tonnes an hour, so broiler and layer rations are made next to the pens.',
    image: '/images/feed.jpg',
    imageAlt: 'Grain used in poultry feed',
    paragraphs: [
      'Feed is the largest cost in a chicken farm, and it is also the thing that decides whether the birds grow or lay. GgMax was commissioned with a mill rated at 5 tonnes an hour so rations can be prepared on the same yard as the houses.',
      'Broilers and layers do not eat the same diet. A meat bird needs a ration that supports fast growth. A laying hen needs calcium for the shell and a balance that keeps her in lay. Milling on site lets the farm change a ration for the age of the flock without waiting on a delivery from another town.',
      'Grain is only the start. A poultry ration also carries protein, minerals and the premix that supplies vitamins. The mill’s job is to mix those parts evenly. A poorly mixed bag can leave one pen short of what the birds need while the next pen gets too much.',
      'Milling at Amoyo also shortens the supply line. When feed is made where it is eaten, the farm is less exposed to a missed truck or a price jump on a single delivery day. The mill serves the farm’s own flocks. Questions about feed, birds or eggs go through the same contact desk as every other enquiry.',
    ],
  },
  {
    slug: 'what-students-learn-on-the-chicken-yard',
    title: 'What students learn when the classroom is a chicken yard',
    dateLabel: '16 July 2026',
    author: 'GgMax Ilorin',
    excerpt:
      'GgMax is a University of Ilorin farm. Students in Animal Production use poultry work to connect lectures with pens, feed and eggs.',
    image: '/images/processing.jpg',
    imageAlt: 'A hen on open grass',
    paragraphs: [
      'GgMax sits inside the University of Ilorin. The commercial pens at Amoyo, and the teaching houses used by the Department of Animal Production, are there so students can see chickens as a business and as a science, not only as a diagram in a note.',
      'Farm Practical Training puts 400-level students into that work. They rotate through poultry, including chickens, and through the other livestock sections. Later in the session they are introduced to broiler and layer production: how a house is prepared, how birds are fed, and how eggs and meat leave the farm.',
      'The department has also rebuilt its older broiler training pen into units for breeding, physiology, nutrition and product processing. The idea is simple. A student who has only read about a ration should also stand where that ration is fed, and a student who has only read about processing should see a bird taken through to a product.',
      'Prof. Foluke E. Sola-Ojo, Chairman of the farm and Head of Animal Production, has pressed this kind of practice for years: graduates who can keep birds, keep records and start an enterprise. The blog will keep notes from that work as the houses, the mill and the training pens carry on.',
    ],
  },
]

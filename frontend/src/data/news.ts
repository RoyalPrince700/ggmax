export interface NewsItem {
  id: string
  title: string
  dateLabel: string
  source: string
  sourceUrl?: string
  summary: string
  paragraphs: string[]
  image: string
}

export const news: NewsItem[] = [
  {
    id: 'chairman-sola-ojo',
    title: 'Prof. Foluke E. Sola-Ojo appointed Chairman of Unilorin GgMax Farm',
    dateLabel: 'Leadership',
    source: 'GgMax Ilorin',
    summary:
      'Prof. Foluke E. Sola-Ojo now chairs the University of Ilorin GgMax Farm at Amoyo. She is the University’s first female Professor of Animal Production.',
    paragraphs: [
      'Prof. Foluke E. Sola-Ojo has been appointed Chairman of the University of Ilorin GgMax Farm, the commercial chicken farm at Amoyo in Ifelodun Local Government Area of Kwara State.',
      'She is a Professor of Animal Breeding and Genetics in the Department of Animal Production. In July 2023 she became the first female Head of that Department, and in October 2023 the first female Professor of Animal Production at the University of Ilorin. She holds a B.Agric. (2000), M.Sc. (2004) and Ph.D. (2010), all from Ilorin. Her doctoral thesis won the Nigerian University Doctoral Thesis Award in 2010 as the best thesis in Agriculture.',
      'Before joining the University on 16 June 2008, she rose to Plant Manager at Feed Masters Limited. On the project that created GgMax, she served as Secretary of the Technical Committee on the Central Bank of Nigeria Tertiary Institutions Poultry Revival Scheme, and she was a member of the subcommittee that named the farm Gallus gallus domesticus Max — Unilorin GgMax Farm.',
      'She is a Registered Animal Scientist and a member of the Nigerian Institute of Animal Science, the Poultry Science Association, the World Poultry Science Association (Nigeria Branch), the Animal Science Association of Nigeria, and the Nigerian Society for Animal Production. Enquiries for Prof. Foluke E. Sola-Ojo go to solaojo.fe@unilorin.edu.ng.',
    ],
    image: '/images/solaojo.png',
  },
  {
    id: 'renovated-facilities',
    title: 'Animal Production takes delivery of renovated poultry pens',
    dateLabel: '23 August 2026',
    source: 'University of Ilorin',
    sourceUrl:
      'https://www.unilorin.edu.ng/animal-production-dept-takes-delivery-of-renovated-facilities/',
    summary:
      'The Department, led by Prof. Eunice Sola-Ojo, received a renovated 2,000-bird layer pen, a 500-bird layer pen, a brooding house and other livestock units.',
    paragraphs: [
      'On 12 August 2026 the Works Department handed renovated teaching and research facilities to the Department of Animal Production at the University’s Teaching and Research Farm. The University published the report on 23 August 2026.',
      'The works cover a 2,000-capacity layers pen, a 500-capacity layers pen, a rabbitry, a brooding house and a piggery. They are for teaching, practical training, research and livestock production.',
      'Head of Department Prof. Eunice Sola-Ojo thanked the Vice-Chancellor, Prof. Wahab Olasupo Egbewole, SAN, and the Dean of Agriculture, Prof. Israel Ogunlade. The Department said the pens will support student training, postgraduate research, and income from animal production, and pledged to keep the houses in order while producing healthy stock and quality animal products.',
    ],
    image: '/images/eggs.jpg',
  },
  {
    id: 'farm-practical-training',
    title: 'Animal Production students train on chickens during Farm Practical Training',
    dateLabel: '2025/2026 session',
    source: 'University of Ilorin',
    sourceUrl:
      'https://www.unilorin.edu.ng/farm-practical-training-ll-enhance-our-learning-say-agric-students/',
    summary:
      '400-level students are rotating through poultry, including chickens and turkeys. Prof. Eunice Sola-Ojo said the set’s work is already being talked about.',
    paragraphs: [
      'Four-hundred-level students in the Department of Animal Production have described Farm Practical Training for the 2025/2026 session as the point where lecture notes become farm work. Their first weeks covered pasture, animal handling, and the department’s sections, including poultry, turkeys, chickens and ruminants.',
      'Farm manager Dr Kamarudeen Kolawole Safiyu said the programme involves 404 students across the year: school-based practice, industrial attachment, then a further stretch of farm work. Later sessions are to include silage and hay, and broiler and layer production. The swine unit was paused because of technical problems, and the department has put in a permanent water source after students struggled for water at the start.',
      'Head of Department Prof. Eunice Sola-Ojo said news of the students’ performance has already spread, and she credited the 2025/2026 set, their lecturers, and the staff who run the training.',
    ],
    image: '/images/processing.jpg',
  },
  {
    id: 'fpt-broiler-pen',
    title: 'Department rebuilds its broiler training pen for students',
    dateLabel: 'University bulletin',
    source: 'University of Ilorin',
    sourceUrl: 'https://www.unilorin.edu.ng/animal-production-dept-renovates-building-for-fpt/',
    summary:
      'Prof. Foluke Eunice Sola-Ojo presented a renovated 1985 poultry building, now split into breeding, physiology, nutrition and processing units for Farm Practical Training.',
    paragraphs: [
      'The Department of Animal Production renovated its 1985 departmental building for Farm Practical Training in broiler production and presented it back to the University.',
      'Head of Department Prof. Foluke Eunice Sola-Ojo said the pen has trained students, supported research and produced published work. She took the renovation to a departmental meeting, the Dean recommended it, and the Vice-Chancellor approved it.',
      'The upgraded house has a lecture wing with a marker board, male and female toilets, electricity, water and fans. The pen is now five units — UNILORIN A, B, C, D and E — further split into seven compartments for lecturers in poultry breeding, physiology, nutrition and product processing. She said the house should prepare students for enterprise in poultry and other livestock.',
    ],
    image: '/images/flock.jpg',
  },
  {
    id: 'broiler-value-chain',
    title: 'Vice-Chancellor calls for more investment in broiler production',
    dateLabel: '11 March 2025',
    source: 'University of Ilorin',
    sourceUrl:
      'https://www.unilorin.edu.ng/enhancing-food-security-egbewole-seeks-more-investment-in-broiler-production/',
    summary:
      'At a Faculty of Agriculture workshop, the GgMax production manager joined alumni and Prof. Job Atteh to speak on the broiler value chain.',
    paragraphs: [
      'Vice-Chancellor Prof. Wahab Olasupo Egbewole, SAN, used the Faculty of Agriculture’s first Town and Gown workshop on value addition in broiler production to argue for more investment in broilers, both around Ilorin and across Nigeria. The workshop was held on 11 March 2025.',
      'Speakers from the industry included Mr Adebayo Gawatti, Manager of the GGMax production outfit in Kwara State, Mr Akin Ojo, a former chairman of the Poultry Association of Nigeria, and a representative of Zatec Farms. Prof. Job Atteh of the Department of Animal Production also presented.',
      'Workshop chairman Prof. Adebiisi Oluwatoba Adeyina said the meeting was meant to close the gap between research and what farmers and processors actually do. The Faculty asked farmers, investors and policymakers to take the lessons into production.',
    ],
    image: '/images/feed.jpg',
  },
  {
    id: 'commissioning',
    title: 'CBN and Unilorin commission the GgMax poultry farm at Amoyo',
    dateLabel: '21 July 2022',
    source: 'University commissioning',
    sourceUrl: 'https://businessday.ng/agriculture/article/cbn-inaugurates-n600m-ggmax-poultry-farm-in-kwara/',
    summary:
      'The N600 million integrated farm opened under the CBN Tertiary Institutions Poultry Revival Scheme, with broiler pens, layer houses, a feed mill and a processing line.',
    paragraphs: [
      'On 21 July 2022 the Central Bank of Nigeria and the University of Ilorin commissioned Unilorin GgMax Farm at Amoyo, Ifelodun Local Government Area. It was funded under the CBN Tertiary Institutions Poultry Revival Scheme, with Zenith Bank as the participating bank. The University set up Unilorin Bizface Synergy Limited as the company for the project.',
      'Then Vice-Chancellor Prof. Sulyman Age Abdulkareem said the University took a N600 million loan at 9 percent, 5 percent in the first year, repayable over six years with one year of moratorium on principal. He described six broiler pens of 5,000 birds, two more of the same size still to be completed for 40,000 broilers in all, four layer pens with an installed capacity of 33,000, a feed mill of 5 tonnes an hour, a processing unit of 1,000 birds a day, and a manure unit.',
      'The Kwara State Government, represented at the commissioning, said the farm — the first of its kind among the institutions in the scheme — should help meet demand for poultry meat. The scheme’s aim, as stated by the Central Bank at the event, was jobs, food supply and a stronger poultry industry.',
    ],
    image: '/images/pens.jpg',
  },
]

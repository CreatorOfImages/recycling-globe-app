export interface NodeContent {
  heading: string;
  stats: string[];
  tips: string[];
  link?: { url: string; label: string };
}

export interface GlobeNode {
  id: string;
  lat: number;
  lng: number;
  label: string;
  content: NodeContent;
}

export const nodes: GlobeNode[] = [
  {
    id: 'tokyo',
    lat: 35.6762,
    lng: 139.6503,
    label: 'Tokyo',
    content: {
      heading: 'Waste & recycling in Tokyo',
      stats: [
        'Recycling rate: ~21% (municipal waste)',
        'Waste per capita: ~289 kg/year',
        'Incineration is primary disposal method',
      ],
      tips: [
        'Separate burnable, non-burnable, and recyclables on collection days.',
        'Use convenience-store and station recycling bins for plastics and cans.',
        'Reduce single-use plastics; many shops charge for bags.',
      ],
      link: { url: 'https://www.env.go.jp/en/index.html', label: 'Tokyo Environment' },
    },
  },
  {
    id: 'berlin',
    lat: 52.52,
    lng: 13.405,
    label: 'Berlin',
    content: {
      heading: 'Waste & recycling in Berlin',
      stats: [
        'Recycling rate: ~49% (household waste)',
        'Waste per capita: ~330 kg/year',
        'Dual system: yellow bin (packaging), blue (paper), green/brown (organic).',
      ],
      tips: [
        'return bottles for refund at supermarkets.',
        'Compost organic waste or use brown bins where available.',

      ],
      link: { url: 'https://www.bundesumweltministerium.de/en', label: 'Berlin Info' },
    },
  },
  {
    id: 'san-francisco',
    lat: 37.7749,
    lng: -122.4194,
    label: 'San Francisco',
    content: {
      heading: 'Waste & recycling in San Francisco',
      stats: [
        'Recycling rate: ~80% (one of the highest in the US)',
        'Mandatory composting and recycling since 2009',
        'Zero waste goal by 2030.',
      ],
      tips: [
        'Use blue (recyclables), green (compost), and black (landfill) bins correctly.',
        'Keep food scraps and soiled paper out of recycling.',
        'Donate or repair items for local reuse programs.',
      ],
      link: { url: 'https://www.epa.gov/home', label: 'SF Info' },
    },
  },
  {
    id: 'sao-paulo',
    lat: -23.5505,
    lng: -46.6333,
    label: 'São Paulo',
    content: {
      heading: 'Waste & recycling in São Paulo',
      stats: [
        'Recycling rate: ~3% (municipal); informal pickers recover much more',
        'Waste per capita: ~380 kg/year',
        'Selective collection expanding; cooperatives drive recycling.',
      ],
      tips: [
        'Separate dry recyclables (plastic, metal, paper) for collection or cooperatives.',

        'Reduce organic waste; home composting is growing in the city.',
      ],
      link: { url: 'http://www.ibama.gov.br/', label: 'São Paulo Environment' },
    },
  },
  {
    id: 'lagos',
    lat: 6.5244,
    lng: 3.3792,
    label: 'Lagos',
    content: {
      heading: 'Waste & recycling in Lagos',
      stats: [
        'Large informal recycling sector; formal rate estimates vary',
        'Waste generation growing with population',

      ],
      tips: [
        'Separate recyclables',
        'Reduce plastic use; reuse containers and bags.',
        'Support community clean-ups and local recycling initiatives.',
      ],
      link: { url: 'https://nesrea.gov.ng/', label: 'Lagos Info' },
    },
  },
  {
    id: 'sydney',
    lat: -33.8688,
    lng: 151.2093,
    label: 'Sydney',
    content: {
      heading: 'Waste & recycling in Sydney',
      stats: [
        'NSW recycling rate: ~48% (household)',
        'Waste per capita: ~500+ kg/year in metro areas',
        'Yellow lid (recyclables), red (general), green (organic) in many councils.',
      ],
      tips: [
        'Keep soft plastics out of yellow bin',
        'Use green bin for food and garden organics where available.',

      ],
      link: { url: 'https://www.dcceew.gov.au/', label: 'Sydney Info' },
    },
  },
  {
    id: 'mumbai',
    lat: 19.076,
    lng: 72.8777,
    label: 'Mumbai',
    content: {
      heading: 'Waste & recycling in Mumbai',
      stats: [
        'Recycling heavily driven by informal sector',
        'Municipal collection covers only part of generated waste',
        'Waste per capita lower than many cities; total volume very high.',
      ],
      tips: [
        'Sell paper, plastic, metal to locals for reuse/recycling.',
        'Compost kitchen waste; reduce single-use plastic.',
        'Support extended producer responsibility and cleaner segregation.',
      ],
      link: { url: 'https://moef.gov.in/', label: 'Mumbai Info' },
    },
  },
];

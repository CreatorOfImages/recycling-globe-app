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
        'Use convenience-store and station recycling bins for PET and cans.',
        'Reduce single-use plastics; many shops charge for bags.',
      ],
      link: { url: 'https://www.kankyo.metro.tokyo.lg.jp/', label: 'Tokyo Bureau of Environment' },
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
        'Use the Pfand system: return bottles for refund at supermarkets.',
        'Compost organic waste or use brown bins where available.',
        'Drop off electronics at BSR recycling yards or designated points.',
      ],
      link: { url: 'https://www.bsr.de/', label: 'BSR (Berlin waste authority)' },
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
        'Donate or repair items via Recology and local reuse programs.',
      ],
      link: { url: 'https://www.recology.com/', label: 'Recology SF' },
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
        'Support catadores (waste picker) cooperatives when possible.',
        'Reduce organic waste; home composting is growing in the city.',
      ],
      link: { url: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/meio_ambiente/', label: 'São Paulo Environment' },
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
        'PSP operators and LAWMA manage collection in parts of the city.',
      ],
      tips: [
        'Separate recyclables for informal collectors (weevils) where safe.',
        'Reduce plastic use; reuse containers and bags.',
        'Support community clean-ups and local recycling initiatives.',
      ],
      link: { url: 'https://lawma.gov.ng/', label: 'LAWMA' },
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
        'Keep soft plastics out of yellow bin; use REDcycle or store drop-offs.',
        'Use green bin for food and garden organics where available.',
        'Check council A–Z for hazardous and e-waste disposal.',
      ],
      link: { url: 'https://www.epa.nsw.gov.au/your-environment/recycling-and-reuse', label: 'NSW EPA recycling' },
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
        'Recycling heavily driven by informal sector (ragpickers, kabadiwalas)',
        'Municipal collection covers only part of generated waste',
        'Waste per capita lower than many cities; total volume very high.',
      ],
      tips: [
        'Sell paper, plastic, metal to local kabadiwala for reuse/recycling.',
        'Compost kitchen waste; reduce single-use plastic.',
        'Support extended producer responsibility and cleaner segregation.',
      ],
      link: { url: 'https://portal.mcgm.gov.in/', label: 'MCGM solid waste' },
    },
  },
];

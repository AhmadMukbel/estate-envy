export type AgentStyle = 'studio' | 'office' | 'outdoor';

export interface Agent {
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  whatsapp: string;
  bio: string;
  experience: string;
  specialization: string;
  sales: number;
  rating: number;
  style: AgentStyle;
  photos: {
    studio: {
      portrait: string;
      avatar: string;
    };
    office: {
      portrait: string;
      avatar: string;
    };
    outdoor: {
      portrait: string;
      avatar: string;
    };
  };
}

export const agents: Agent[] = [
  {
    slug: "ahmad-mukbel",
    name: "Ahmad Mukbel",
    title: "Senior Agent",
    phone: "+9627xxxxxxx",
    email: "ahmad@example.com",
    whatsapp: "+9627xxxxxxx",
    bio: "Experienced residential & commercial agent.",
    experience: "15+ years",
    specialization: "Luxury Homes & Estates",
    sales: 250,
    rating: 4.9,
    style: 'studio',
    photos: {
      studio: {
        portrait: "/agents/processed/ahmad-mukbel/studio/portrait.jpg",
        avatar: "/agents/processed/ahmad-mukbel/studio/portrait.jpg",
      },
      office: {
        portrait: "/agents/processed/ahmad-mukbel/office/portrait.jpg",
        avatar: "/agents/processed/ahmad-mukbel/office/portrait.jpg",
      },
      outdoor: {
        portrait: "/agents/processed/ahmad-mukbel/outdoor/portrait.jpg",
        avatar: "/agents/processed/ahmad-mukbel/outdoor/portrait.jpg",
      },
    },
  },
  {
    slug: "zaid-al-salameh",
    name: "Zaid AL Salameh",
    title: "Listings Specialist",
    phone: "+9627xxxxxxx",
    email: "zaid.salameh@example.com",
    whatsapp: "+9627xxxxxxx",
    bio: "Focused on new listings and seller success.",
    experience: "12+ years",
    specialization: "Investment Properties",
    sales: 180,
    rating: 4.8,
    style: 'studio',
    photos: {
      studio: {
        portrait: "/agents/processed/zaid-al-salameh/studio/portrait.jpg",
        avatar: "/agents/processed/zaid-al-salameh/studio/portrait.jpg",
      },
      office: {
        portrait: "/agents/processed/zaid-al-salameh/office/portrait.jpg",
        avatar: "/agents/processed/zaid-al-salameh/office/portrait.jpg",
      },
      outdoor: {
        portrait: "/agents/processed/zaid-al-salameh/outdoor/portrait.jpg",
        avatar: "/agents/processed/zaid-al-salameh/outdoor/portrait.jpg",
      },
    },
  },
  {
    slug: "zaid-tabkhi",
    name: "Zaid Tabkhi",
    title: "Buyer's Agent",
    phone: "+9627xxxxxxx",
    email: "zaid.tabkhi@example.com",
    whatsapp: "+9627xxxxxxx",
    bio: "Helps buyers find and negotiate the best deals.",
    experience: "10+ years",
    specialization: "Corporate Relocation",
    sales: 150,
    rating: 5.0,
    style: 'studio',
    photos: {
      studio: {
        portrait: "/agents/processed/zaid-tabkhi/studio/portrait.jpg",
        avatar: "/agents/processed/zaid-tabkhi/studio/portrait.jpg",
      },
      office: {
        portrait: "/agents/processed/zaid-tabkhi/office/portrait.jpg",
        avatar: "/agents/processed/zaid-tabkhi/office/portrait.jpg",
      },
      outdoor: {
        portrait: "/agents/processed/zaid-tabkhi/outdoor/portrait.jpg",
        avatar: "/agents/processed/zaid-tabkhi/outdoor/portrait.jpg",
      },
    },
  },
];

export default agents;
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
    title: "Senior Real Estate Advisor",
    phone: "+9627xxxxxxx",
    email: "ahmad@prestigeestates.com",
    whatsapp: "+9627xxxxxxx",
    bio: "Ahmad brings over 15 years of experience in luxury real estate, specializing in high-end residential properties. His deep market knowledge and negotiation skills have helped countless clients find their dream homes.",
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
    name: "Zaid Al Salameh",
    title: "Investment Property Specialist",
    phone: "+9627xxxxxxx",
    email: "zaid.salameh@prestigeestates.com",
    whatsapp: "+9627xxxxxxx",
    bio: "Zaid is an expert in investment properties and commercial real estate. He provides strategic insights to help investors maximize their returns and build successful property portfolios.",
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
    title: "Relocation Specialist",
    phone: "+9627xxxxxxx",
    email: "zaid.tabkhi@prestigeestates.com",
    whatsapp: "+9627xxxxxxx",
    bio: "Zaid specializes in helping families and executives relocate smoothly. His attention to detail and personalized approach ensures a stress-free transition to your new home.",
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
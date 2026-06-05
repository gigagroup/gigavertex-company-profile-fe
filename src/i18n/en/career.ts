export const career = {
  careerMeta: {
    badge: "Careers",
    title: "Join Giga Vertex",
    intro:
      "We build an ecosystem of artificial intelligence (AI) products and subscription-based (SaaS) platforms. If you want to contribute to products used by thousands of users — from engineering to growth — let's grow together.",
  },
  careerWhyJoin: {
    title: "Why Join Us?",
    description:
      "An agile, product-oriented work environment focused on real impact in Indonesian and global markets.",
    items: [
      "Work directly on active AI & SaaS products",
      "Small team, fast decisions, and room to innovate",
      "Grow with a multi-product ecosystem (Autonix, Terabyte, Giga, etc.)",
      "Opportunity to learn cutting-edge AI, cloud, and growth technology",
    ],
  },
  careerBenefits: {
    title: "What We Offer",
    items: [
      { title: "Flexible Work", description: "Remote-friendly & hours that support productivity." },
      { title: "Career Growth", description: "Access to cross-disciplinary projects — product, engineering, growth." },
      { title: "Product Culture", description: "Every team member stays close to users and business outcomes." },
      { title: "Modern Technology", description: "Work with AI stack, cloud-native architecture, and modern tools." },
    ],
  },
  careerOpenings: {
    title: "Open Positions",
    description: "There are no active openings at the moment.",
    emptyNote: "Feel free to send your CV via our contact page — we're always open to top talent.",
    positions: [] as {
      title: string;
      department: string;
      type: string;
      location: string;
    }[],
  },
  careerProcess: {
    title: "Hiring Process",
    steps: [
      { step: "01", title: "Application", description: "Send CV & portfolio via contact form or email." },
      { step: "02", title: "Screening", description: "Brief profile review and role fit assessment." },
      { step: "03", title: "Interview", description: "Technical/culture session with the relevant team." },
      { step: "04", title: "Offer", description: "Formal offer and team onboarding." },
    ],
  },
};

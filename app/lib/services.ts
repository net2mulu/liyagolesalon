export type ServiceCategory = {
  title: string;
  subtitle?: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Hair — Styling",
    items: [
      "Cask",
      "Hair Style Wave",
      "Blow Dry Style",
      "Special Hairstyle",
      "Trim",
      "Haircut",
      "Ponytail",
      "Natural Curls",
      "Human Hair Curls",
      "Human Hair Sew-in Curls",
      "Twist",
      "Gams",
      "Normal Braids (Kids)",
      "Sew-in Extension Removal",
      "Relaxer",
      "Relaxer (Provided by Salon)",
    ],
  },
  {
    title: "Hair — Extensions",
    items: [
      "Sew-in Extensions",
      "Sew-in + Styling",
      "Clip Extensions (with Cask)",
      "Clip Extensions (without Cask)",
      "Lace Extensions",
      "Human Hair Clip",
    ],
  },
  {
    title: "Hair — Wigs",
    items: [
      "Braids per Wig",
      "Albasso Wig",
      "Albas",
      "Kenya Wig",
      "Boho Wig",
      "Crochet Braids",
      "Crochet Wig",
    ],
  },
  {
    title: "Hair — Washes",
    items: [
      "Hair Wash",
      "Treatment Wash",
      "Human Hair Wash",
      "Human Hair Wash (with Cask)",
    ],
  },
  {
    title: "Hair — Treatments",
    items: [
      "DIY Treatment",
      "Oil Treatment",
      "Hair Masque Treatment",
      "Any Treatment + Hair Steam",
    ],
  },
  {
    title: "Hair — Coloring",
    items: [
      "Natural Hair Color",
      "Natural Hair Highlight",
      "Human Hair Normal Color",
      "Human Hair Highlight",
      "Hair Shampoo Color",
      "Hair Color Retouch",
      "Hair Color Front",
      "Client Hair Color Retouch",
      "Client Hair Color",
    ],
  },
  {
    title: "Mani & Pedi — Manicure",
    items: [
      "Refill Gel",
      "Artificial Nail Extension",
      "One Nail Extension",
      "Acrylic Extension",
      "Gel Extensions",
      "Normal Nail Polish",
      "Gel Color",
      "Nail Design (Cat Eye/Chrome)",
      "Nail Design (Small Jewels/Pearl)",
      "Nail Design (Sticker)",
      "Nail Design (Mid Stone)",
      "Special Manicure",
    ],
  },
  {
    title: "Mani & Pedi — Pedicure",
    items: ["Normal Pedicure", "Special Pedicure 1", "Special Pedicure 2"],
  },
  {
    title: "Beauty",
    items: ["Brow Threading"],
  },
];


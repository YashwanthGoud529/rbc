export const projects = [
  {
    name: "Mine",
    slug: "mine",
    location: "Mine",
    locationDesk: "Mine",
    type: "Residential",
    year: "2025",
    leftImage: "/images/home-slider/Mine1.jpg",
    rightImage: "/images/home-slider/Mine2.jpg",
    leftImageSet: "/images/home-slider/Mine1.jpg",
    rightImageSet: "/images/home-slider/Mine2.jpg",
    bgColor: "#bb893aff",
    description: "Royal Bullion Capital is proud to announce a partnership with Crescent Metals & Minerals, a leading player in the African market, in Ghana. This collaboration is valid till 2050 and enables us to expand our bullion market offerings and provide our investors with access to a wider range of investment opportunities in the industry.",
    surface: "120",
    address: "Place des Vosges, Paris 4",
    services: [
      { id: 1, name: 'Interior Architecture' },
      { id: 2, name: 'Custom Millwork' },
      { id: 3, name: 'Furniture Selection' }
    ],
    galleryImages: [
      { src: "/images/home-slider/Mine1.jpg", alt: "M" },
      { src: "/images/home-slider/Mine2.jpg", alt: "L" },
      { src: "/images/home-slider/Mine1.jpg", alt: "S" },
      { src: "/images/home-slider/Mine2.jpg", alt: "M" }
    ]
  },
  {
    name: "Refine",
    slug: "refine",
    location: "Refine",
    locationDesk: "Refine",
    type: "Residential",
    year: "2025",
    leftImage: "/images/home-slider/refine1.jpg",
    rightImage: "/images/home-slider/refine2.jpg",
    leftImageSet: "/images/home-slider/refine1.jpg",
    rightImageSet: "/images/home-slider/refine2.jpg",
    bgColor: "#4e4846ff",
    description: "",
    surface: "85",
    address: "Rue du Bac, Paris 7",
    services: [
      { id: 1, name: 'Architectural Design' },
      { id: 2, name: 'Construction Management' },
      { id: 3, name: 'Styling' }
    ],
    galleryImages: [
      { src: "/images/home-slider/refine1.jpg", alt: "M" },
      { src: "/images/home-slider/refine2.jpg", alt: "L" },
      { src: "/images/home-slider/refine1.jpg", alt: "S" },
      { src: "/images/home-slider/refine2.jpg", alt: "M" }
    ]
  },
  {
    name: "Trading",
    slug: "trading",
    location: "Trading",
    locationDesk: "Trading",
    type: "Residential",
    year: "2025",
    leftImage: "/images/home-slider/Trading1.jpg",
    rightImage: "/images/home-slider/Trading2.jpg",
    leftImageSet: "/images/home-slider/Trading1.jpg",
    rightImageSet: "/images/home-slider/Trading2.jpg",
    bgColor: "#f85656ff",
    description: "",
    surface: "150",
    address: "Avenue Montaigne, Paris 8",
    services: [
      { id: 1, name: 'Interior Decoration' },
      { id: 2, name: 'Furniture Selection' },
      { id: 3, name: 'Custom Millwork' }
    ],
    galleryImages: [
      { src: "/images/home-slider/Trading1.jpg", alt: "M" },
      { src: "/images/home-slider/Trading2.jpg", alt: "L" },
      { src: "/images/home-slider/Trading1.jpg", alt: "S" },
      { src: "/images/home-slider/Trading2.jpg", alt: "M" }
    ]
  },
  {
    name: "1 MG",
    slug: "1-mg",
    location: "1 MG",
    locationDesk: "1 MG",
    type: "Residential",
    year: "2025",
    leftImage: "/images/home-slider/1mg1.jpg",
    rightImage: "/images/home-slider/1mg2.jpg",
    leftImageSet: "/images/home-slider/1mg1.jpg",
    rightImageSet: "/images/home-slider/1mg2.jpg",
    bgColor: "hsla(69, 100%, 64%, 1.00)",
    description: "", surface: "100%",
    address: "Canal Saint-Martin, Paris 10",
    services: [
      { id: 1, name: 'Innovative Platform' },
      { id: 2, name: 'Trained Professionals' },
      { id: 3, name: 'Lifestyle Perks' }
    ],
    galleryImages: [
      { src: "https://royalbullioncapital.com/wp-content/uploads/2026/02/RBC-Mockup-1.png", alt: "S" },
      { src: "https://1mg.gold/wp-content/uploads/2024/08/1-1.png", alt: "M" },
      { src: "https://1mg.gold/wp-content/uploads/2024/08/2-1.png", alt: "L" },
      { src: "https://1mg.gold/wp-content/uploads/2024/08/vault.png", alt: "S" },
      { src: "https://1mg.gold/wp-content/uploads/2024/08/4-1.png", alt: "M" },
      { src: "https://1mg.gold/wp-content/uploads/2024/08/5-1.png", alt: "M" }

    ]
  }
];

export const contactImages = projects.flatMap((p, pIndex) => [
  {
    id: pIndex * 2 + 1,
    src: p.leftImage,
    srcSet: p.leftImageSet
  },
  {
    id: pIndex * 2 + 2,
    src: p.rightImage,
    srcSet: p.rightImageSet
  }
]);

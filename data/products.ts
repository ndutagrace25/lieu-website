type ProductItem = {
  name: string;
  image?: string;
};

type ProductCategory = {
  name: string;
  description: string;
  items: ProductItem[];
  accent: string;
};

export const productCategories: ProductCategory[] = [
  {
    name: "Stationery",
    description: "Daily office tools for schools, teams, and front desks.",
    items: [
      { name: "Envelopes", image: "/products/envelops.jpg" },
      { name: "Staplers", image: "/products/stappler.jpg" },
      { name: "Ring binders", image: "/products/ring_binders.png" },
      { name: "Files", image: "/products/files.jpeg" },
      { name: "Paper clips", image: "/products/paper_clips.jpg" },
    ],
    accent: "bg-sky-100 text-sky-900",
  },
  {
    name: "Cleaning Supplies",
    description: "Reliable essentials for tidy offices and facilities.",
    items: [
      { name: "Mops", image: "/products/mops.webp" },
      { name: "Plastic buckets", image: "/products/plastic_bucket.webp" },
      { name: "Scrubbing brushes", image: "/products/scrubbing_brush.jpeg" },
      { name: "Sponges", image: "/products/sponges.jpeg" },
      {
        name: "Rubber cleaning gloves",
        image: "/products/rubber_cleaning_gloves.jpeg",
      },
      { name: "Toilet brushes", image: "/products/toilet_brush.jpeg" },
      {
        name: "Glass cleaner spray",
        image: "/products/glass_cleaner_spray.jpeg",
      },
      { name: "Disinfectant spray", image: "/products/disinfectant_spray.jpeg" },
      { name: "Floor squeegees", image: "/products/floor_squeegee.jpeg" },
      { name: "Microfiber cloths", image: "/products/microfiber_cloths.jpeg" },
      { name: "Trash bags", image: "/products/trash_bags_roll.jpeg" },
      { name: "Cleaning caddies", image: "/products/cleaning_caddy.jpeg" },
    ],
    accent: "bg-emerald-100 text-emerald-900",
  },
  {
    name: "Water Dispensers",
    description: "Simple hydration equipment for workspaces and waiting areas.",
    items: [
      {
        name: "Bottle water dispensers",
        image: "/products/bottle_water_dispenser.png",
      },
      {
        name: "Table-top water dispensers",
        image: "/products/table_top_water_dispense.jpeg",
      },
      {
        name: "20 litre water bottles",
        image: "/products/20litre_water_bottle.jpeg",
      },
      {
        name: "Water dispenser accessories",
        image: "/products/water_dispenser_accessories.jpeg",
      },
    ],
    accent: "bg-cyan-100 text-cyan-900",
  },
  {
    name: "General Items",
    description: "Assorted supplies sourced around each client's request.",
    items: [
      { name: "Hair dryers", image: "/products/hair_dryer.jpeg" },
      { name: "Styling tools", image: "/products/styling_tools.jpeg" },
      { name: "Towels", image: "/products/towels.jpeg" },
      { name: "Hole punches", image: "/products/hole_punch.jpeg" },
      { name: "General orders", image: "/products/general_orders.jpeg" },
    ],
    accent: "bg-amber-100 text-amber-950",
  },
];

export const featuredProducts = [
  "Binder clips",
  "Envelopes",
  "Hole punches",
  "Stamps",
  "Staplers",
  "Mops",
  "Buckets",
  "Water dispensers",
  "Cleaning detergents",
  "Hair styling tools",
  "Paper folders",
  "Towels",
];

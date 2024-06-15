interface IMenu {
  id: number;
  title: string;
  link?: string;
  hasSub?: boolean;
}

export const menuItems: IMenu[] = [
  {
    id: 1,
    title: "خانه",
    link: "/",
  },
  {
    id: 2,
    title: "فروشگاه",
    link: "/shop",
  },
  {
    id: 3,
    title: "محصولات",
    hasSub: true,
  },
  {
    id: 4,
    title: "خدمات",
    // hasSub: true,
  },
  {
    id: 5,
    title: "بلاگ ها",
    link: "/blogs",
  },
  {
    id: 6,
    title: "باشگاه مشتریان",
    link: "/lig",
  },
  {
    id: 7,
    title: "ارتباط با ما",
    link: "/contact-us",
  },
  {
    id: 8,
    title: "درباره ما",
    link: "/about-us",
  },
];

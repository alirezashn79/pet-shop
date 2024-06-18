import { IMenu } from "../types";

export const menuItems: IMenu[] = [
  {
    id: 1,
    title: "خانه",
    link: "/",
  },

  {
    id: 3,
    title: "فروشگاه",
    hasSub: true,
    subItems: [
      {
        id: 15,
        title: "همه محصولات",
        link: "/shop/all",
      },
      {
        id: 10,
        title: "محصولات غذایی گربه",
        link: "/shop/cat",
      },
      {
        id: 11,
        title: "محصولات غذایی سگ",
        link: "/shop/dog",
      },
      {
        id: 12,
        title: "لوازم پت",
        link: "/shop/accessories",
      },
    ],
  },
  {
    id: 9,
    title: "محصولات ویژه",
  },
  {
    id: 4,
    title: "خدمات",
    hasSub: true,
    subItems: [
      {
        id: 13,
        title: "نظافت پت",
        link: "/services/cleaning",
      },
      {
        id: 14,
        title: "نگهداری پت",
        link: "/services/caring",
      },
    ],
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

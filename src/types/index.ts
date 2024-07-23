export interface IMenu {
  id: number;
  title: string;
  link?: string;
  hasSub?: boolean;
  subItems?: {
    id: number;
    title: string;
    link: string;
  }[];
}

export interface ICategory {
  id: number;
  title: string;
}
export interface IProduct {
  title: string;
  description: string;
  discount_amount: {
    discount_price: number;
  };
  images: string;
  image?: string;
  made_by_country: string;
  unit: string;
  price: number;
  color: string;
  id: number;
}

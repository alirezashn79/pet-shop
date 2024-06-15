export interface IDataRowCart {
  id: string;
  product: string;
  img: string;
  quantity: number;
  unitPrice: number;
}

export interface IProductList {
  id: string;
  available: boolean;
  category_id: string;
  title: string;
  thumbnail: string;
  price: number;
}
export type TCartProduct = IProductList & {
  quantity: number;
};

export interface IBlog {
  id: string;
  title: string;
  desc: string;
  image: string;
  author: string;
}

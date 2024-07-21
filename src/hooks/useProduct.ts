import { create } from "zustand";
import client from "../app/client";

interface IProduct {
  title: string;
  description: string;
  discount_amount: {
    discount_price: number;
  };
  images: string;
  made_by_country: string;
  unit: string;
  price: number;
  color: string;
  id: number;
}

interface IUseProduct {
  // accessories
  accessories: null | {
    count: number;
    next: string | null;
    previous: string | null;
    results: [
      {
        title: string;
        description: string;
        discount_amount: string;
        images: string;
        made_by_country: string;
        unit: string;
        price: number;
        color: string;
        id: number;
      },
    ];
  };
  getAllAccessories: ({ current }: { current: number }) => Promise<void>;
  // accessory category
  accessoryProducts: null | IProduct[];
  getSingleAccessoryCategory: ({ id }: { id: string }) => Promise<void>;
  //

  singleAccessory: null | {
    title: string;
    description: string;
    discount_amount: {
      discount_price: string;
    };
    images: {
      image: string;
    }[];
    made_by_country: string;
    unit: string;
    price: number;
    color: string;
  };
  getSingleAccessory: ({ id }: { id: string }) => Promise<void>;

  getData: () => Promise<void>;

  //
  getDiscountData: () => Promise<void>;
  discountData: null | IProduct[];

  mostVisitData: null | IProduct[];
  getMostVisitData: () => Promise<void>;

  loading: boolean;
}

const useProduct = create<IUseProduct>((set) => ({
  accessories: null,
  singleAccessory: null,
  accessoryProducts: null,
  discountData: null,
  mostVisitData: null,

  loading: false,
  getData: async () => {
    set({ loading: true });

    const res = await client.get("/products");

    if (res.status === 200) {
      set({ data: res.data });
    }

    set({ loading: false });
  },

  getAllAccessories: async ({ current }) => {
    set({ loading: true });

    const res = await client.get(`/product/list/?page${current}`);

    if (res.status === 200) {
      set({ accessories: res.data });
    }

    set({ loading: false });
  },
  getSingleAccessoryCategory: async ({ id }) => {
    set({ loading: true });
    const res = await client.get(`/product/category-product-list/${id}/`);

    set({ accessoryProducts: res.data });

    set({ loading: false });
  },
  getSingleAccessory: async ({ id }) => {
    set({ loading: true });
    const res = await client.get(`/product/detail/${id}/`);
    if (res.status === 200) {
      set({ singleAccessory: res.data });
    }
    set({ loading: false });
  },

  getDiscountData: async () => {
    const res = await client.get("/product/discount/");

    if (res.status === 200) {
      const srotedData = res.data.map((item) => {
        return {
          ...item.product,
          images: item.images,
          discount_amount: {
            discount_price: item.discount_price,
          },
        };
      });

      set({ discountData: srotedData });
    }
  },
  getMostVisitData: async () => {
    const res = await client.get("/product/most-visit/");

    if (res.status === 200) {
      set({ mostVisitData: res.data });
    }
  },
}));

export default useProduct;

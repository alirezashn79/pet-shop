import { create } from "zustand";
import { IProductList } from "../types";
import client from "../app/client";

interface IUseProduct {
  data: null | IProductList[];
  getData: () => Promise<void>;
  spicialData: null | IProductList[];
  getSpecialData: (type: "cat" | "dog" | "toys") => Promise<void>;
  loading: boolean;
}

const useProduct = create<IUseProduct>((set) => ({
  data: null,
  spicialData: null,
  loading: false,
  getData: async () => {
    set({ loading: true });

    const res = await client.get("/products");

    if (res.status === 200) {
      set({ data: res.data });
    }

    set({ loading: false });
  },
  getSpecialData: async (type) => {
    set({ loading: false });
    const res = await client.get(`/${type}`);
    if (res.status === 200) {
      set({ spicialData: res.data });
    }

    set({ loading: false });
  },
}));

export default useProduct;

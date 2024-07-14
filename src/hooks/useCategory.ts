import { create } from "zustand";
import { ICategory } from "../types";
import client from "../app/client";

interface IUseCategory {
  data: null | ICategory[];
  loading: boolean;
  getData: () => Promise<void>;
}

const useCategory = create<IUseCategory>((set) => ({
  data: null,
  loading: false,
  getData: async () => {
    const res = await client.get("/product/category-list/");
    if (res.status === 200) {
      set({ data: res.data });
    }
  },
}));

export default useCategory;

import { create } from "zustand";
import { IProductList } from "../types";
import client from "../app/client";

interface IUseProduct {
  data: null | IProductList[];
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
  getData: () => Promise<void>;
  //
  spicialData: null | IProductList[];
  getSpecialData: (type: "cat" | "dog" | "accessories") => Promise<void>;
  //
  filteredData: null | IProductList[];
  filteringData: ({ tags }: { tags: number }) => void;
  //
  sortingData: ({ tags }: { tags: string }) => void;
  //
  loading: boolean;
}

const useProduct = create<IUseProduct>((set, get) => ({
  data: null,
  accessories: null,
  spicialData: null,
  filteredData: null,
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
  getSpecialData: async (type) => {
    set({ loading: false });
    const res = await client.get(`/${type}`);
    if (res.status === 200) {
      set({ spicialData: res.data });
    }

    set({ loading: false });
  },
  filteringData: async ({ tags }) => {
    if (tags === 0) {
      set({ loading: true });
      await get().getData();
      const dataClone = get().data?.slice();
      set({ filteredData: dataClone });
      set({ loading: false });
      return;
    }

    const dataClone = get().data;
    const filteredData = dataClone?.filter((item) => item.category_id === tags);

    set({ filteredData: filteredData });
  },
  sortingData: ({ tags }) => {
    const dataClone = get().filteredData?.slice();
    switch (tags) {
      case "cheapest":
        set({
          filteredData: dataClone?.sort(
            (a, b) => Number(a.price) - Number(b.price)
          ),
        });
        break;

      case "expensive":
        set({
          filteredData: dataClone?.sort(
            (a, b) => Number(b.price) - Number(a.price)
          ),
        });
        break;

      case "newest":
        const data = get().data?.slice();
        set({
          filteredData: data,
        });
        break;

      default:
        break;
    }
  },
}));

export default useProduct;

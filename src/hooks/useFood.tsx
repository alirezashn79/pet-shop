import { create } from "zustand";

import client from "../app/client";
interface IFoods {
  allFoods: null | {
    count: number;
    next: null | string;
    previous: null | string;
    results: {
      title: string;
      description: string;
      unit: string;
      price: number;
      image: string;
      id: number;
    }[];
  };
  singleFood: null | {
    title: string;
    description: string;
    unit: string;
    price: number;
    image: { image: string }[];
    id: number;
  };
  getAllFoods: ({ current }: { current: number }) => Promise<void>;
  getSingleFood: ({ id }: { id: string }) => Promise<void>;
  loading: boolean;
}
const useFood = create<IFoods>((set) => ({
  allFoods: null,
  singleFood: null,
  loading: false,
  getAllFoods: async ({ current }) => {
    set({ loading: true });
    const res = await client.get(`/home/food-list/?page=${current}`);
    if (res.status === 200) {
      set({ allFoods: res.data });
    }
    set({ loading: false });
  },
  getSingleFood: async ({ id }) => {
    set({ loading: true });
    const res = await client.get(`/home/food-detail/${id}/`);
    if (res.status === 200) {
      set({ singleFood: res.data });
    }
    set({ loading: false });
  },
}));

export default useFood;

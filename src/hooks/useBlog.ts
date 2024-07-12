import { create } from "zustand";
import { IBlog } from "../types";
import client from "../app/client";
interface IUseBlog {
  data: null | {
    count: number;
    next: string | null;
    previous: string | null;
    results: [];
  };
  singleData: null | IBlog;
  getData: ({ current }: { current: number }) => Promise<void>;
  loading: boolean;
  getSingleData: ({ id }: { id: string }) => Promise<void>;
}
const useBlog = create<IUseBlog>((set) => ({
  data: null,
  singleData: null,
  loading: false,
  getData: async ({ current }) => {
    set({ loading: true });
    const res = await client.get(`/blog/list/?page=${current}`);
    if (res.status === 200) {
      set({ data: res.data });
    }
    set({ loading: false });
  },
  getSingleData: async ({ id }) => {
    set({ loading: true });
    const res = await client.get(`/blogs/${id}`);
    if (res.status === 200) {
      set({ singleData: res.data });
    }
    set({ loading: false });
  },
}));

export default useBlog;

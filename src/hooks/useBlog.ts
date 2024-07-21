import { create } from "zustand";
import { IBlog } from "../types";
import client from "../app/client";

interface IBlog {
  aparat_video_link: string;
  description: string;
  id: number;
  image: string;
  tags: {
    id: number;
    title: string;
  }[];
  title: string;
}

interface IUseBlog {
  data: null | {
    count: number;
    next: string | null;
    previous: string | null;
    results: IBlog[];
  };
  singleData: null | {
    title: string;
    aparat_video_link: string;
    tags: [
      {
        id: number;
        title: string;
      },
    ];
    description: string;
    image: string;
    id: number;
  };
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
    const res = await client.get(`/blog/detail/${id}/`);
    if (res.status === 200) {
      set({ singleData: res.data });
    }
    set({ loading: false });
  },
}));

export default useBlog;

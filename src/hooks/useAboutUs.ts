import { create } from "zustand";
import client from "../app/client";
import toast from "react-hot-toast";
interface IAbout {
  data: null | unknown;
  loading: boolean;
  getData: () => Promise<void>;
}
export const useAboutUs = create<IAbout>((set) => ({
  data: null,
  loading: false,
  getData: async () => {
    try {
      set({ loading: true });
      const res = await client.get("/site/about-us/");
      set({ data: res.data });
    } catch (error) {
      if (error.response) {
        toast.error(`${error.response.status}: ${error.response.data.message}`);
      }
    } finally {
      set({ loading: false });
    }
  },
}));

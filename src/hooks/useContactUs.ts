import toast from "react-hot-toast";
import { create } from "zustand";
import client from "../app/client";
interface IAbout {
  data: null | {
    phone_number: string;
    email: string;
    instagram: string;
    whats_app: string;
    telegram: string;
  };
  loading: boolean;
  getData: () => Promise<void>;
}
export const useContactUs = create<IAbout>((set) => ({
  data: null,
  loading: false,
  getData: async () => {
    try {
      set({ loading: true });
      const res = await client.get("/site/contact-us/");
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

import { create } from "zustand";
import client from "../app/client";
import { IDataRowCart } from "../types";

interface IUseCart {
  data: null | IDataRowCart[];
  loading: boolean;
  getData: () => Promise<void>;
  updateData: (id: string, type: "increment" | "decrement") => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  addToCart: (item: IDataRowCart) => Promise<void>;
}

export const useCart = create<IUseCart>((set, get) => ({
  data: null,
  loading: false,

  getData: async () => {
    try {
      set({ loading: true });
      const res = await client.get("/cart");

      set({ data: res.data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  updateData: async (id, type) => {
    const data = get().data;

    switch (type) {
      case "increment": {
        const index = data?.findIndex((item) => item.id === id);

        if (data && typeof index !== "undefined" && index !== -1) {
          const newData = [...data];
          ++newData[index].quantity;

          set({ data: newData });
        }

        // const res = await axios.put("/cart", { id });

        break;
      }

      case "decrement": {
        const index = data?.findIndex((item) => item.id === id);

        if (
          data &&
          typeof index !== "undefined" &&
          index !== -1 &&
          data[index].quantity === 2
        ) {
          console.log("delete");
        }

        if (
          data &&
          typeof index !== "undefined" &&
          index !== -1 &&
          data[index].quantity > 1
        ) {
          const newData = [...data];
          --newData[index].quantity;

          set({ data: newData });
        }

        // const res = await axios.put("/cart", { id });

        break;
      }

      default:
        break;
    }
  },

  removeFromCart: async (id) => {
    // copy array data
    const dataClone = get().data?.slice();

    const filteredData = dataClone?.filter((item) => item.id !== id);

    set({ data: filteredData });
  },

  addToCart: async (item) => {
    // copy array data
    const dataClone = get().data?.slice();
    const isExist = dataClone?.some((value) => value.id === item.id);
    !isExist && set((state) => ({ data: state.data && [...state.data, item] }));
  },
}));

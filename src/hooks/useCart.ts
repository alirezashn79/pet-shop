import { create } from "zustand";
import client from "../app/client";
import { TCartProduct } from "../types";
import Cookies from "js-cookie";
interface IUseCart {
  data:
    | {
        product_name: string;
        quantity: number;
        price: number;
        product_id: number;
        total_price: number;
      }[]
    | null;
  loading: boolean;
  getData: () => Promise<void>;
  cartClear: () => Promise<void>;
  cartCreate: () => Promise<void>;
  getSingleData: TCartProduct | undefined;
  updateData: (id: string, type: "increment" | "decrement") => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  addToCart: ({
    id,
    quantity,
    type,
  }: {
    id: number;
    quantity: number;
    type: "Product" | "Food";
  }) => Promise<void>;
}

export const useCart = create<IUseCart>((set, get) => ({
  data: null,
  getSingleData: undefined,
  loading: false,

  getData: async () => {
    set({ loading: true });
    try {
      const foodResponse = await client.get(`/order/cart-detail/?Type=Food`);
      const productResponse = await client.get(
        `/order/cart-detail/?Type=Product`
      );

      const cartItems = [...foodResponse.data, ...productResponse.data];

      set({ data: cartItems });
    } catch (error) {
      // console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  cartClear: async () => {
    const res = await client.get("/order/cart-clear/");
    if (res.status === 200) {
      await get().getData();
    }
  },

  addToCart: async ({ id, quantity, type }) => {
    const res = await client.post(`/order/cart-add/?Type=${type}`, {
      product_id: id,
      quantity,
    });

    if (res.status === 200) {
      await get().getData();
    }

    // copy array data
    // const dataClone = get().data?.slice();
    // const isExist = dataClone?.some((value) => value.id === item.id);
    // !isExist && set((state) => ({ data: state.data && [...state.data, item] }));
  },
  cartCreate: async () => {
    await client.get("/order/create/");
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
}));

import { create } from "zustand";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";

interface IUseCart {
  getFoods: () => void;
  getProducts: () => void;
  product:
    | []
    | {
        product_id: number;
        quantity: number;
        price: number;
        title: string;
        image: string;
        unit: number;
      }[];
  food:
    | []
    | {
        food_id: number;
        quantity: number;
        price: number;
        title: string;
        image: string;
        unit: number;
      }[];

  increment: (
    type: "food" | "product",
    data: {
      id: number;
      quantity: number;
      price: number;
      title: string;
      image: string;
      unit: number;
    },
    navigate: NavigateFunction
  ) => void;
  decrement: (
    type: "food" | "product",
    data: {
      id: number;
      quantity: number;
      price: number;
      title: string;
      image: string;
      unit: number;
    },
    navigate: NavigateFunction
  ) => void;
  clear: () => void;
}

const useCart = create<IUseCart>((set, get) => ({
  food: [],
  product: [],
  getFoods: () => {
    if (Cookies.get("food_cart")) {
      const foodCookie = JSON.parse(Cookies.get("food_cart") as string);
      set({ food: foodCookie });
    } else {
      Cookies.remove("food_cart");
    }
  },
  getProducts: () => {
    if (Cookies.get("product_cart")) {
      const productCookie = JSON.parse(Cookies.get("product_cart") as string);
      set({ product: productCookie });
    } else {
      Cookies.remove("product_cart");
    }
  },

  increment: (type, data, navigate) => {
    if (!Cookies.get("JWT_Token_Access")) {
      toast.error("ابتدا لاگین کنید");
      return navigate("/signin");
    }
    if (type === "food") {
      const index = get().food.findIndex((item) => item.food_id === data.id);
      if (index === -1) {
        set((state) => ({
          food: [
            ...state.food,
            {
              food_id: data.id,
              price: data.quantity * data.price,
              quantity: data.quantity,
              image: data.image,
              title: data.title,
              unit: data.price,
            },
          ],
        }));
      } else {
        const allFoods = get().food.slice();
        allFoods[index].quantity++;
        allFoods[index].price = data.unit * data.quantity;
        set({ food: allFoods });
      }
      let now = new Date();
      var time = now.getTime();
      time += 3600 * 1000;
      now.setTime(time);
      Cookies.set("food_cart", JSON.stringify(get().food.slice()), {
        path: "/",
        secure: true,
        expires: now,
        sameSite: "none",
      });
    } else {
      const index = get().product.findIndex(
        (item) => item.product_id === data.id
      );
      if (index === -1) {
        set((state) => ({
          product: [
            ...state.product,
            {
              product_id: data.id,
              price: data.quantity * data.price,
              quantity: data.quantity,
              title: data.title,
              image: data.image,
              unit: data.price,
            },
          ],
        }));
      } else {
        const allProducts = get().product.slice();
        allProducts[index].quantity++;
        allProducts[index].price = data.price * data.quantity;
        set({ product: allProducts });
      }
      let now = new Date();
      var time = now.getTime();
      time += 3600 * 1000;
      now.setTime(time);
      Cookies.set("product_cart", JSON.stringify(get().product.slice()), {
        path: "/",
        secure: true,
        expires: now,
        sameSite: "none",
      });
    }
  },
  decrement: (type, data, navigate) => {
    if (!Cookies.get("JWT_Token_Access")) {
      toast.error("ابتدا لاگین کنید");
      return navigate("/signin");
    }

    if (type === "food") {
      const food = get().food.find((item) => item.food_id === data.id);
      if (!food) return;
      if (data.quantity === 0) {
        const newFoods = get()
          .food.filter((item) => item.food_id !== data.id)
          .slice();
        set({ food: newFoods });
      } else {
        const index = get().food.findIndex((item) => item.food_id === data.id);

        const allFoods = get().food.slice();
        allFoods[index].quantity--;
        allFoods[index].price = data.unit * data.quantity;
        set({ food: allFoods });
      }
      Cookies.set("food_cart", JSON.stringify(get().food.slice()), {
        path: "/",
        secure: true,
        expires: 3600,
        sameSite: "none",
      });
    } else {
      const product = get().product.find((item) => item.product_id === data.id);
      if (!product) return;
      if (data.quantity === 0) {
        const newProducts = get().product.filter(
          (item) => item.product_id !== data.id
        );
        set({ product: newProducts });
      } else {
        const index = get()
          .product.slice()
          .findIndex((item) => item.product_id === data.id);

        const allProducts = get().product.slice();
        allProducts[index].quantity--;
        allProducts[index].price = data.price * data.quantity;
        set({ product: allProducts });
      }
      Cookies.set("product_cart", JSON.stringify(get().product), {
        path: "/",
        secure: true,
        expires: 3600,
        sameSite: "none",
      });
    }
  },
  clear: () => {
    set({ food: [] });
    set({ product: [] });
    Cookies.remove("product_cart");
    Cookies.remove("food_cart");
  },
}));

export default useCart;

import {
  Bird,
  Feather,
  LogIn,
  MenuIcon,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { menuItems } from "../../utils/menu-items";
import Dropdown from "../common/dropdown";
import Overlay from "../common/overlay";
import DropdownMobile from "../common/dropdown-mobile";

export default function MainHeader() {
  const cartData = useCart((state) => state.data);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header className="sticky top-0 left-0 right-0 bg-white shadow z-30">
        <div className="container px-4 pb-2 md:pb-4">
          <div className="flex md:block">
            {/* logo */}
            <Link
              to="/"
              className="bg-primary md:absolute h-20 w-20 md:w-28 md:h-28 lg:h-32 lg:w-36 flex-center flex-col rounded-b-full main-logo"
            >
              <Feather className="w-8 h-8 lg:h-14 lg:w-14" />
              <h1 className="font-bold text-base lg:text-xl">پت شاپ</h1>
            </Link>
            {/* left */}
            <div className="flex-1">
              <div className="flex-1 p-2">
                <div className="space-y-2 md:flex md:flex-row-reverse md:items-center md:gap-x-8">
                  {/* icons */}
                  <div className="flex items-center gap-4 justify-end">
                    <div className="relative">
                      <Link
                        to="/shop/cart"
                        className="flex-center gap-x-4 flex-row-reverse md:flex-row"
                      >
                        <ShoppingCart className="h-6 w-6 lg:h-7 lg:w-7 text-gray-700" />
                      </Link>

                      <span
                        style={{
                          scale:
                            cartData && cartData?.length > 0 ? "100%" : "0",
                          opacity:
                            cartData && cartData?.length > 0 ? "100%" : "0",
                        }}
                        className="absolute transition-all bg-primary h-4 w-4 flex-center rounded-full -top-1 -right-1 text-xs text-black"
                      >
                        {cartData?.length}
                      </span>
                    </div>

                    <Link
                      className="text-sm bg-transparent rounded-lg  transition-all ease-in-out text-emerald-800"
                      to="/signin"
                    >
                      <div className="md:hidden">
                        <LogIn className="h-6 w-6" />
                      </div>
                      <div className="hidden md:flex-center gap-x-1">
                        <User className="=h-7 w-7" />
                        ورود | ثبت نام
                      </div>
                    </Link>

                    <button
                      onClick={() => setIsOpen(true)}
                      className="bg-gray-800 text-white p-1 rounded-md md:hidden"
                    >
                      <MenuIcon />
                    </button>
                  </div>
                  <span className="hidden md:block w-0.5 h-7 bg-gray-300"></span>
                  <div className="flex justify-end text-xs">
                    <input
                      className="flex-1 px-2 py-2  rounded-r-sm border border-l-0 outline-none max-w-sm lg:w-72"
                      type="text"
                      placeholder="نام محصول مورد نظر..."
                    />

                    <button className="bg-primary px-2.5 py-1 rounded-l-sm">
                      جستجو
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hidden md:block mt-2" />
        <div className="hidden md:block">
          <div className="container">
            <div className="flex md:mr-28 lg:mr-60 py-4">
              <nav>
                <ul className="flex items-center text-sm md:gap-x-8 lg:gap-x-16">
                  {menuItems.map((item) => {
                    return item.hasSub ? (
                      <Dropdown data={item} />
                    ) : (
                      <li key={item.id} className="relative">
                        <NavLink
                          className={({ isActive }) =>
                            isActive && item.link ? "active-link" : ""
                          }
                          to={item.link || "#"}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "2px",
                          }}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* moile menu */}

      <div
        className={`mb-menu ${
          isOpen ? "mb-menu-active" : "mb-menu-not-active"
        }`}
      >
        {/* wrapper */}
        <div className="p-4">
          {/* close btn */}
          <div className="flex items-center justify-between w-full pb-2.5 border-b-2 border-b-primary">
            <div className="">
              {" "}
              <Link
                onClick={() => setIsOpen(false)}
                className="text-primary font-bold text-lg flex-center gap-2"
                to="/"
              >
                <Bird />
                پت شاپ
              </Link>
            </div>
            <div
              onClick={() => setIsOpen(false)}
              className="mr-auto w-fit p-0.5 rounded text-red-500"
            >
              <X className="h-6 w-6" />
            </div>
          </div>

          {/* menu */}
          <ul className="flex flex-col divide-y divide-yellow text-base">
            {menuItems.map((item) => {
              return item.hasSub ? (
                <DropdownMobile
                  key={item.id}
                  data={item}
                  setIsOpen={setIsOpen}
                />
              ) : (
                <li key={item.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive && item.link ? "text-primary" : ""} block py-4`
                    }
                    onClick={setIsOpen.bind(null, false)}
                    to={item.link || "#"}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* overlay */}
      {isOpen && <Overlay isLoading={false} clickHandler={setIsOpen} />}
    </>
  );
}

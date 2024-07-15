import Cookies from "js-cookie";
import {
  ChevronDown,
  Dog,
  LogIn,
  MenuIcon,
  ShoppingCart,
  User,
  UserCircle,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import useOverlay from "../../hooks/useOverlay";

import useCategory from "../../hooks/useCategory";
import { IMenu } from "../../types";
import logout from "../../utils/logout";
import Dropdown from "../common/dropdown";
import DropdownMobile from "../common/dropdown-mobile";
import Overlay from "../common/overlay";

export default function MainHeader() {
  const cartData = useCart((state) => state.data);
  const showOverlay = useOverlay((state) => state.showOverlay);
  const toggleOverlay = useOverlay((state) => state.toggleOverlay);
  const { isExpired } = useJwt(String(Cookies.get("JWT_Token_Access")));
  const [isAuth, setisAuth] = useState(false);
  const [toggleAuthBtn, setToggleAuthBtn] = useState(false);
  const categories = useCategory((state) => state.data);

  const menuItems: IMenu[] = [
    {
      id: 1,
      title: "خانه",
      link: "/",
    },
    {
      id: 1,
      title: "غذا ها",
      link: "/shop/foods",
    },

    {
      id: 3,
      title: "لوازم جانبی ها",
      link: "/shop/accessories",
      hasSub: true,
      subItems: categories?.map((item) => ({
        id: item.id,
        title: item.title,
        link: `/shop/accessories/${item.id}`,
      })),
    },
    {
      id: 4,
      title: "خدمات",
      link: "/services",
    },
    {
      id: 5,
      title: "بلاگ ها",
      link: "/blogs",
    },
    {
      id: 6,
      title: "باشگاه مشتریان",
      link: "/lig",
    },
    {
      id: 7,
      title: "ارتباط با ما",
      link: "/contact-us",
    },
    {
      id: 8,
      title: "درباره ما",
      link: "/about-us",
    },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate(0);
  };

  useEffect(() => {
    const isAuthentication = () => {
      if (Cookies.get("JWT_Token_Access") && !isExpired) {
        setisAuth(true);
      }
    };
    isAuthentication();
  }, []);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 bg-white shadow z-30 md:z-40">
        <div className="container px-4 pb-2 md:pb-4">
          <div className="flex md:block">
            {/* logo */}
            <Link
              to="/"
              className="bg-primary md:absolute h-20 w-20 md:w-28 md:h-28 lg:h-32 lg:w-36 flex-center flex-col rounded-b-full main-logo"
            >
              <Dog className="w-8 h-8 lg:h-14 lg:w-14" />
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

                    {isAuth ? (
                      <button
                        className="relative flex-center gap-x-px group text-xs"
                        type="button"
                        onMouseOver={() => setToggleAuthBtn(true)}
                        onMouseOut={() => setToggleAuthBtn(false)}
                        onClick={() => {
                          setToggleAuthBtn((prev) => !prev);
                        }}
                      >
                        <UserCircle className="h-6 w-6 lg:h-7 lg:w-7 text-gray-700" />
                        <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-all" />

                        {toggleAuthBtn && (
                          <div className="absolute top-full left-0 z-10 pt-2">
                            <div className="rounded-md min-w-24 border bg-white overflow-hidden">
                              <div className="flex flex-col divide-y">
                                <Link
                                  className="block py-2 hover:bg-primary/10"
                                  to="/forgot-password"
                                >
                                  فراموشی رمز عبور
                                </Link>
                                <div
                                  onClick={handleLogout}
                                  className="block py-2 text-rose-500 hover:bg-rose-500 hover:text-white"
                                >
                                  خروج
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
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
                    )}

                    <button
                      onClick={() => toggleOverlay()}
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
                  {menuItems.map((item, idx) => {
                    return item.hasSub ? (
                      <Dropdown key={item.id * 11} data={item} />
                    ) : (
                      <li key={idx * 23} className="relative">
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
          showOverlay ? "mb-menu-active" : "mb-menu-not-active"
        }`}
      >
        {/* wrapper */}
        <div className="p-4">
          {/* close btn */}
          <div className="flex items-center justify-between w-full pb-2.5 border-b-2 border-b-primary">
            <div className="">
              {" "}
              <Link
                onClick={() => toggleOverlay()}
                className="text-primary font-bold text-lg flex-center gap-2"
                to="/"
              >
                <Dog className="h-8 w-8" />
                پت شاپ
              </Link>
            </div>
            <div
              onClick={() => toggleOverlay()}
              className="mr-auto w-fit p-0.5 rounded text-red-500"
            >
              <X className="h-6 w-6" />
            </div>
          </div>

          {/* menu */}
          <ul className="flex flex-col divide-y divide-yellow text-base">
            {menuItems.map((item, idx) => {
              return item.hasSub ? (
                <DropdownMobile key={item.id * 459} data={item} />
              ) : (
                <li key={idx * 89}>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive && item.link ? "text-primary" : ""} block py-4`
                    }
                    onClick={toggleOverlay}
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
      {showOverlay && <Overlay isLoading={false} />}
    </>
  );
}

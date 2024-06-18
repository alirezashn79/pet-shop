import { ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { IMenu } from "../../../types";
import { useState } from "react";
import useOverlay from "../../../hooks/useOverlay";
interface IDropdownProps {
  data: IMenu;
}
export default function Dropdown({ data }: IDropdownProps) {
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  const setOverley = useOverlay((state) => state.setOverley);
  return (
    <li
      // onMouseEnter={}
      // onMouseOut={setOverley.bind(null, false)}
      onMouseOver={() => {
        setShowDropdownItems(true);
        setOverley(true);
      }}
      onMouseLeave={() => {
        setShowDropdownItems(false);
        setOverley(false);
      }}
      key={data.id}
      className="relative"
    >
      <Link
        to={data.link || "#"}
        className={`flex-center gap-2 transition-all duration-300 ${showDropdownItems && "text-primary"}`}
      >
        {data.title}

        <ChevronDown
          className={`text-primary h-5 w-5 transition-all duration-300 ${showDropdownItems && "rotate-180"}`}
          strokeWidth={3}
        />
      </Link>

      <div
        onMouseOver={() => {
          setOverley(true);
        }}
        onMouseLeave={() => {
          setOverley(false);
        }}
        className={`absolute top-full  bg-gray-50 rounded-md px-1 shadow-xl border border-primary min-w-48 transition-all duration-300 delay-100 ${showDropdownItems ? "show-dropdown" : "hidden-dropdown"}`}
      >
        <ul className="text-sm text-gray-600 divide-y">
          {data.subItems?.map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "text-primary font-bold"} block hover:text-primary hover:scale-105 transition-all h-full w-full py-2 px-1.5`
                }
                to={item.link}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

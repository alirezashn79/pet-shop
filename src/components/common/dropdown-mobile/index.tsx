import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useOverlay from "../../../hooks/useOverlay";
import { IMenu } from "../../../types";
interface IDropdownMobileProps {
  data: IMenu;
}
export default function DropdownMobile({ data }: IDropdownMobileProps) {
  const toggleOverlay = useOverlay((state) => state.toggleOverlay);
  const [showDropdownItems, setShowDropdownItems] = useState(false);
  return (
    <li key={data.id}>
      <button
        className={`flex items-center justify-between w-full py-4 transition-all duration-300 ${showDropdownItems ? "text-primary font-semibold" : undefined}`}
        onClick={() => setShowDropdownItems((prev) => !prev)}
      >
        {data.title}
        <ChevronUp
          className={`w-5 h-5 transition-all duration-300 ${showDropdownItems ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {showDropdownItems && (
        <ul className="bg-gray-100 divide-y divide-white p-1.5 text-sm">
          {data.subItems?.map((item) => (
            <li key={item.id}>
              <NavLink
                onClick={toggleOverlay}
                to={item.link}
                className={({ isActive }) =>
                  `${isActive && "text-primary font-bold"} hover:text-primary transition-all  duration-300 block py-2.5`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

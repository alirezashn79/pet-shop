import { ChevronLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const locItems = location.pathname.split("/");

  locItems.pop();

  console.log(locItems);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 mb-4 text-xs md:text-sm xl:text-base">
        {locItems
          .filter((fItem) => {
            return fItem !== "shop" && fItem !== "product";
          })
          .map((item, idx, row) => (
            <li key={idx} className="inline-flex items-center">
              <Link to={item === "" ? "/" : `/shop/${item}`}>
                {item === "" ? "خانه" : item}
              </Link>
              {idx + 1 !== row.length && <ChevronLeft />}
            </li>
          ))}
      </ol>
    </nav>
  );
}

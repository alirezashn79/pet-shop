import { ChevronLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const locItems = location.pathname.split("/");
  locItems.pop();

  console.log("loc", locItems);
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {locItems.map((item, idx, row) => (
          <li className="inline-flex items-center">
            <Link to={`/${item}`}>{item === "" ? "خانه" : item}</Link>
            {idx + 1 !== row.length && <ChevronLeft />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

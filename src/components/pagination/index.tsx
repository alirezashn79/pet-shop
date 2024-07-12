import { cn } from "cn-func";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pagination({
  setCurrentPage,
  current,
  count,
  next,
  prev,
}: {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  current: number;
  count: number | undefined;
  next: string | undefined | null;
  prev: string | undefined | null;
}) {
  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [current]);
  return (
    <div className="flex-center mt-10">
      <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
        <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <Link
                to={
                  prev
                    ? {
                        search: `page=${current - 1}`,
                      }
                    : {
                        search: `page=${current}`,
                      }
                }
                onClick={() => prev && setCurrentPage((prev) => prev - 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
              </Link>

              {Array.from({ length: count ? Math.ceil(count / 10) : 1 })
                .fill("")
                .map((_, idx) => (
                  <Link
                    key={idx}
                    to={{
                      search: `page=${idx + 1}`,
                    }}
                    onClick={() => setCurrentPage(idx + 1)}
                    aria-current="page"
                    className={cn(
                      "pagination_item",
                      idx + 1 === current && "pagination_active"
                    )}
                  >
                    {idx + 1}
                  </Link>
                ))}

              <Link
                to={
                  next
                    ? {
                        search: `page=${current + 1}`,
                      }
                    : {
                        search: `page=${current}`,
                      }
                }
                onClick={() => next && setCurrentPage((prev) => prev + 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 rotate-180" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

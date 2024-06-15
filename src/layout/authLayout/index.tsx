import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div className="bg-primary/60 h-screen">
      {/* svgs */}
      <div>
        {/* top svg */}
        <div className="absolute left-0 right-0 top-0 rotate-180 z-10">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stopColor="#458985" />
                <stop offset="95%" stopColor="#344c64" />
              </linearGradient>
            </defs>
            <path
              d="M 0,500 L 0,125 C 78.10526315789474,143.17224880382776 156.21052631578948,161.34449760765548 248,166 C 339.7894736842105,170.65550239234452 445.2631578947369,161.7942583732058 540,188 C 634.7368421052631,214.2057416267942 718.736842105263,275.4784688995215 815,307 C 911.263157894737,338.5215311004785 1019.7894736842106,340.2918660287081 1126,355 C 1232.2105263157894,369.7081339712919 1336.1052631578946,397.35406698564594 1440,425 L 1440,500 L 0,500 Z"
              stroke="none"
              strokeWidth={0}
              fill="url(#gradient)"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stopColor="#458985" />
                <stop offset="95%" stopColor="#344c64" />
              </linearGradient>
            </defs>
            <path
              d="M 0,500 L 0,291 C 113.44497607655504,293.82296650717706 226.88995215311007,296.64593301435406 318,306 C 409.1100478468899,315.35406698564594 477.88516746411483,331.2392344497607 560,356 C 642.1148325358852,380.7607655502393 737.5693779904307,414.39712918660297 839,435 C 940.4306220095693,455.60287081339703 1047.8373205741627,463.17224880382776 1149,487 C 1250.1626794258373,510.82775119617224 1345.0813397129186,550.9138755980862 1440,591 L 1440,500 L 0,500 Z"
              stroke="none"
              strokeWidth={0}
              fill="url(#gradient)"
              fillOpacity={1}
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            />
          </svg>
        </div>
        {/* bottom svg */}
        <div className="absolute left-0 right-0 bottom-0 z-10">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stopColor="#240750" />
                <stop offset="95%" stopColor="#344c64" />
              </linearGradient>
            </defs>
            <path
              d="M 0,500 L 0,125 C 78.10526315789474,143.17224880382776 156.21052631578948,161.34449760765548 248,166 C 339.7894736842105,170.65550239234452 445.2631578947369,161.7942583732058 540,188 C 634.7368421052631,214.2057416267942 718.736842105263,275.4784688995215 815,307 C 911.263157894737,338.5215311004785 1019.7894736842106,340.2918660287081 1126,355 C 1232.2105263157894,369.7081339712919 1336.1052631578946,397.35406698564594 1440,425 L 1440,500 L 0,500 Z"
              stroke="none"
              strokeWidth={0}
              fill="url(#gradient)"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stopColor="#240750" />
                <stop offset="95%" stopColor="#344c64" />
              </linearGradient>
            </defs>
            <path
              d="M 0,500 L 0,291 C 113.44497607655504,293.82296650717706 226.88995215311007,296.64593301435406 318,306 C 409.1100478468899,315.35406698564594 477.88516746411483,331.2392344497607 560,356 C 642.1148325358852,380.7607655502393 737.5693779904307,414.39712918660297 839,435 C 940.4306220095693,455.60287081339703 1047.8373205741627,463.17224880382776 1149,487 C 1250.1626794258373,510.82775119617224 1345.0813397129186,550.9138755980862 1440,591 L 1440,500 L 0,500 Z"
              stroke="none"
              strokeWidth={0}
              fill="url(#gradient)"
              fillOpacity={1}
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-full px-8">
        <div className="z-20 w-full sm:w-3/4 lg:w-fit bg-gradient-to-l from-gray-300 to-gray-100 pt-8 pb-16 px-8 shadow-2xl rounded-lg shadow-[#240750] grid grid-cols-1 lg:grid-cols-2 gap-x-4 relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

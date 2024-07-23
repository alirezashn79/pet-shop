import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { IMenu } from "../../types";
import { useAboutUs } from "../../hooks/useAboutUs";
import { useContactUs } from "../../hooks/useContactUs";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useEffect, useState } from "react";
import client from "../../app/client";

export default function MainFooter() {
  const aboutUsData = useAboutUs((state) => state.data);
  const contactUsData = useContactUs((state) => state.data);
  const [workingHours, setWorkingHours] = useState<null | {
    saturday: string;
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
  }>(null);

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

  useEffect(() => {
    const getWorkingHours = async () => {
      const res = await client.get("/site/working-hours/");
      setWorkingHours(res.data);
    };
    getWorkingHours();
  }, []);
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col  gap-y-4 pb-8 relative">
        <div className="w-full md:flex md:items-center md:gap-x-24 bg-green-700 text-center py-8 px-4 space-y-4 order-2 lg:order-1 md:px-20  xl:px-40"></div>

        <div className="px-8  w-fit order-1 lg:order-2  mx-auto lg:absolute lg:left-4 xl:left-16 z-20">
          <div className="w-full bg-[#fef9c3] border-4 p-8 xl:p-12 border-primary flex-center flex-col lg:mb-4 gap-4 ">
            <h5 className="text-2xl md:text-3xl xl:text-4xl font-bold">
              ساعت کاری
            </h5>
            <div className="space-y-4 font-medium text-sm md:text-base xl:text-lg mt-8">
              <div className="flex items-center gap-x-8">
                <span>شنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  {workingHours?.saturday}
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>یکشنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  {workingHours?.sunday}
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>دوشنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  {workingHours?.monday}
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>سه شنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  {workingHours?.tuesday}
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>چهارشنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  {workingHours?.wednesday}
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>پنجشنبه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  {workingHours?.thursday}
                </span>
              </div>
              <div className="flex items-center gap-x-8">
                <span>جمعه</span>
                <span className="self-start text-left flex-1">
                  {" "}
                  {workingHours?.friday}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start  justify-around lg:justify-start lg:gap-x-72 xl:gap-x-96 px-8 order-3 lg:mt-20 container">
          <div>
            <h6 className="text-base lg:text-lg font-semibold mb-4">لینک ها</h6>
            <ul className="text-sm lg:text-base text-gray-500 mr-2 space-y-1">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <Link to={menuItem.link || "#"}>{menuItem.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <Link
              className="text-primary font-bold text-base lg:text-lg"
              to="/"
            >
              پت شاپ
            </Link>

            <p className="text-sm lg:text-base max-w-xs">
              آدرس: {aboutUsData?.address}
            </p>

            <Link
              className="block text-sm lg:text-base"
              to={`mailto:${contactUsData?.email}`}
            >
              ایمیل: {contactUsData?.email}
            </Link>
            <Link
              className="block text-sm lg:text-base"
              to={`tel:${contactUsData?.phone_number}`}
            >
              شماره تماس: {contactUsData?.phone_number}
            </Link>

            <div className="flex flex-wrap gap-x-4">
              <Link
                className="h-8 w-8 text-slate-500 hover:text-sky-600"
                to={contactUsData?.telegram as string}
              >
                <FaTelegram className="h-full w-full" />
              </Link>
              <Link
                className="h-8 w-8 text-slate-500 hover:text-rose-500"
                to={contactUsData?.instagram as string}
              >
                <FiInstagram className="h-full w-full" />
              </Link>
              <Link
                className="h-8 w-8 text-slate-500 hover:text-green-500"
                to={("https://" + contactUsData?.whats_app) as string}
              >
                <FaWhatsapp className="h-full w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import client from "../../app/client";
import TitleBar from "../../components/common/titlebar";
import Loading from "../../components/loading";
import WhatsApp from "../../assets/image/site/whatsapp.svg";
import Instagram from "../../assets/image/site/instagram.svg";
import Telegram from "../../assets/image/site/telegram.svg";
import Phone from "../../assets/image/site/phone-telephone.svg";
import Email from "../../assets/image/site/email.svg";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [data, setData] = useState<{
    phone_number: string;
    email: string;
    instagram: string;
    whats_app: string;
    telegram: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await client.get("/site/contact-us/");
        setData(res.data);

        console.log("res", res.data);
      } catch (error) {
        if (error.response) {
          toast.error(
            `${error.response.status}: ${error.response.data.message}`
          );
        }
      } finally {
        setLoading(false);
      }
    };

    if (!data) {
      getData();
    }
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="page text-gray-600">
      <TitleBar title="ارتباط با ما" />
      <div className="flex flex-wrap justify-around items-center">
        <Link
          target="_blank"
          to={String(data?.instagram)}
          className="mr-4 flex items-center gap-x-2"
        >
          <img
            className="h-16 w-16 lg:h-20 lg:w-20"
            src={Instagram}
            alt="instagram"
          />
          اینستاگرام
        </Link>
        <Link
          target="_blank"
          to={String(data?.telegram)}
          className="mr-4 flex items-center gap-x-2"
        >
          <img
            className="h-16 w-16 lg:h-20 lg:w-20"
            src={Telegram}
            alt="instagram"
          />
          تلگرام
        </Link>
        <Link
          target="_blank"
          to={String(data?.whats_app)}
          className="mr-4 flex items-center gap-x-2"
        >
          <img
            className="h-16 w-16 lg:h-20 lg:w-20"
            src={WhatsApp}
            alt="instagram"
          />
          واتس اپ
        </Link>
        <Link
          target="_blank"
          to={String("tel:" + data?.phone_number)}
          className="mr-4 flex items-center gap-x-2"
        >
          <img
            className="h-16 w-16 lg:h-20 lg:w-20"
            src={Phone}
            alt="instagram"
          />
          شماره همراه
        </Link>
        <Link
          target="_blank"
          to={String("mailto:" + data?.email)}
          className="mr-4 flex items-center gap-x-2"
        >
          <img
            className="h-16 w-16 lg:h-20 lg:w-20"
            src={Email}
            alt="instagram"
          />
          ایمیل
        </Link>
      </div>
    </div>
  );
}

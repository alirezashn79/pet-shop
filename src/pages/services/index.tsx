import { useEffect, useState } from "react";
import client from "../../app/client";
import TitleBar from "../../components/common/titlebar";
import Loading from "../../components/loading";

export default function Services() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    haircut: string;
    nail_trimming: string;
  }>({ haircut: "", nail_trimming: "" });

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await client.get("/site/service-pet/");
        setData(res.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="page">
      <TitleBar title="خدمات ما" />

      <div className="my-6">
        <h1 className="text-xl/10 lg:text-2xl/10 text-slate-700">
          کوتاه کردن مو سگ و گربه
        </h1>
        <p className="text-justify text-sm/7">{data?.haircut}</p>
      </div>
      <div className="my-6">
        <h1 className="text-xl/10 lg:text-2xl/10 text-slate-700">
          کوتاه کردن ناخن سگ و گربه
        </h1>
        <p>{data?.nail_trimming}</p>
      </div>
      {/* <p className="text-gray-600">{subtitle}</p> */}
    </div>
  );
}

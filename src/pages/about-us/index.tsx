import { useEffect, useState } from "react";
import client from "../../app/client";
import toast from "react-hot-toast";
import Loading from "../../components/loading";
import TitleBar from "../../components/common/titlebar";
import { MapPin } from "lucide-react";

export default function AboutUs() {
  const [data, setData] = useState<{
    address: string;
    description: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await client.get("/site/about-us/");
        setData(res.data);
        console.log("res", res);
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
      <TitleBar title="درباره ما" />
      <p className="px-4 text-justify">{data?.description}</p>
      <div className="mt-8 mr-4 flex items-center gap-x-2">
        <MapPin className="h-8 w-8 text-primary" />
        <span>{data?.address}</span>
      </div>
    </div>
  );
}

import { MapPin } from "lucide-react";
import TitleBar from "../../components/common/titlebar";
import Loading from "../../components/loading";
import { useAboutUs } from "../../hooks/useAboutUs";

export default function AboutUs() {
  const data = useAboutUs((state) => state.data);
  const loading = useAboutUs((state) => state.loading);

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

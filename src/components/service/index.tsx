import { Dog, icons } from "lucide-react";
import Card from "../common/card";
import TitleBar from "../common/titlebar";

interface IServiceProps {
  title: string;
  subtitle: string;
  products?: [];
  icon?: JSX.Element;
}
export default function Service({ title, subtitle, icon }: IServiceProps) {
  return (
    <div className="page">
      <TitleBar title={title} />
      {icon}
      <p className="text-gray-600">{subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8 md:mt-16">
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
        <Card
          title="تشویقی سگ تاندون Madcow"
          image="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_748,h_90,r_k.jpg"
          link="#"
          price={450000}
        />
      </div>
    </div>
  );
}

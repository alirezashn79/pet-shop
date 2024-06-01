interface ITitleBar {
  title: string;
  subTitle: string;
}

export default function TitleBar({ subTitle, title }: ITitleBar) {
  return (
    <div
      data-aos="zoom-in"
      className="gap-y-2 flex flex-col items-center md:gap-y-4 my-8"
    >
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{title}</h3>
      <p className="text-xs lg:text-sm max-w-80 md:max-w-max text-gray-500">
        {subTitle}
      </p>
      <span className="block h-1 w-1/4 md:w-1/6 my-2 bg-yellow" />
    </div>
  );
}

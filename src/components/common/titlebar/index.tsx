interface ITitleBar {
  title: string;
  subTitle: string;
}

export default function TitleBar({ subTitle, title }: ITitleBar) {
  return (
    <div className="gap-y-2 flex flex-col items-center md:gap-y-4 my-8">
      <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">{title}</h3>
      <p className="text-xs md:text-base max-w-80 md:max-w-max text-gray-500">
        {subTitle}
      </p>
      <span className="block h-1 w-1/4 md:w-1/6 my-2 bg-yellow" />
    </div>
  );
}

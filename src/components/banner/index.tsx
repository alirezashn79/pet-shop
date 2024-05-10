interface IBanner {
  image: string;
}

export default function Banner({ image }: IBanner) {
  return (
    <div className="w-screen lg:h-[152px] md:h-[468px] mb-20">
      <img src={image} alt="banner" />
    </div>
  );
}

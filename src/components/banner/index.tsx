interface IBanner {
  image: string;
}

export default function Banner({ image }: IBanner) {
  return (
    <div className=" lg:min-h-[152px] md:min-h-[468px] my-20">
      <img src={image} alt="banner" className="mx-auto" />
    </div>
  );
}

interface ICard {
  title: string;
  image: string;
  link: string;
  price: number;
}

export default function Card({ title, link, image, price }: ICard) {
  return (
    <div className="bg-white md:border-2 md:rounded overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-[282px] object-contain shrink-0 mx-auto"
      />
      <div className="text-center text-base py-4 space-y-2.5">
        <a href={link}>{title}</a>
        <p className="text-rose-500 text-sm">{price.toLocaleString()} تومان</p>
      </div>
    </div>
  );
}

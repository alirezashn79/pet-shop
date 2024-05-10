export default function Services() {
  return (
    <div className="absolute left-0 right-0 z-10 -translate-y-16 md:-translate-y-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex-center flex-col gap-2">
          <img
            className="h-40 w-40 object-contain"
            src="https://theme51.mywebzi.ir/uploads/220bda683d9644fea91da809fa8d0bed.w_167,h_167,r_k.png"
            alt="service"
          />
          <h2 className="font-bold text-lg">آموزش حیوانات خانگی</h2>
          <p className="text-sm text-gray-500">مقاله درباره آموزش پت</p>
        </div>
        <div className="flex-center flex-col gap-2">
          <img
            className="h-40 w-40 object-contain"
            src="https://theme51.mywebzi.ir/uploads/e7646546d7984229a84955d853bdf601.w_167,h_167,r_k.png"
            alt="service"
          />
          <h2 className="font-bold text-lg">نظافت حیوانات خانگی</h2>
          <p className="text-sm text-gray-500">خدمات نظافت پت</p>
        </div>

        <div className="flex-center flex-col gap-2">
          <img
            className="h-40 w-40 object-contain"
            src="https://theme51.mywebzi.ir/uploads/fc966ad927f14511a2799f51bbecca0d.w_167,h_167,r_k.png"
            alt="service"
          />
          <h2 className="font-bold text-lg">خدمات مراقبت</h2>
          <p className="text-sm text-gray-500">مراقبت از پت</p>
        </div>
      </div>
    </div>
  );
}

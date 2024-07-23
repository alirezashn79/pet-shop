import TitleBar from "../common/titlebar";
import HomePet from "../../assets/image/home/home_pets.png";

export default function Benefits() {
  return (
    <div className="container mt-16">
      <div>
        {/* title */}
        <TitleBar title="چرا ما را انتخاب کنید" />

        {/* items */}

        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          className="w-[500px] my-20 h-[500px] rounded-full border border-gray-400 bg-white mx-auto hidden lg:flex-center relative"
        >
          <img className="w-1/2" src={HomePet} alt="item-image" />

          <div className="absolute -left-40 top-5 flex-center gap-4">
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/09dbfd563527437c8cb302c428345db9.w_34,h_34,r_k.png"
                alt="item"
              />
            </div>

            <div className="w-[200px]">
              <h4 className="font-bold text-xl mb-2">غذاهای سالم</h4>
            </div>
          </div>

          <div className="absolute -right-40 top-5 flex items-center flex-row-reverse text-left gap-4">
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/28c7f672d15741428612d9c8244d08a2.w_30,h_34,r_k.png"
                alt="item"
              />
            </div>

            <div className="w-[200px]">
              <h4 className="font-bold text-xl mb-2">کیفیت و ایمنی</h4>
            </div>
          </div>

          <div className="absolute -right-40 bottom-5 flex items-center flex-row-reverse text-left gap-4">
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/ce12fc09122e43f78cd2b22cf187c6b1.w_30,h_34,r_k.png"
                alt="item"
              />
            </div>

            <div className="w-[200px]">
              <h4 className="font-bold text-xl mb-2">خرید مطمئن</h4>
            </div>
          </div>

          <div className="absolute -left-40 bottom-5 flex items-center gap-4">
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/9d752aa611bf4b89bcb50a7814b86e8d.w_34,h_24,r_k.png"
                alt="item"
              />
            </div>

            <div className="w-[200px]">
              <h4 className="font-bold text-xl mb-2">اسباب بازی مدرن</h4>
            </div>
          </div>
        </div>

        {/* mobile items */}
        <div className="lg:hidden my-20 grid grid-cols-1 gap-12 px-8 sm:px-4">
          <div data-aos="flip-right" className="flex-center gap-x-8">
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/09dbfd563527437c8cb302c428345db9.w_34,h_34,r_k.png"
                alt="item"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">غذاهای سالم</h4>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="flex-center flex-row-reverse text-left gap-x-8"
          >
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/09dbfd563527437c8cb302c428345db9.w_34,h_34,r_k.png"
                alt="item"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">غذاهای سالم</h4>
            </div>
          </div>

          <div data-aos="flip-right" className="flex-center gap-x-8">
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/09dbfd563527437c8cb302c428345db9.w_34,h_34,r_k.png"
                alt="item"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">غذاهای سالم</h4>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="flex-center flex-row-reverse text-left gap-x-8"
          >
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/09dbfd563527437c8cb302c428345db9.w_34,h_34,r_k.png"
                alt="item"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">غذاهای سالم</h4>
            </div>
          </div>

          <div data-aos="flip-right" className="flex-center gap-x-8">
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/09dbfd563527437c8cb302c428345db9.w_34,h_34,r_k.png"
                alt="item"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">غذاهای سالم</h4>
            </div>
          </div>

          <div
            data-aos="flip-left"
            className="flex-center flex-row-reverse text-left gap-x-8"
          >
            <div className="h-20 w-20 rounded-full flex-center bg-primary shrink-0">
              <img
                src="https://theme51.mywebzi.ir/uploads/09dbfd563527437c8cb302c428345db9.w_34,h_34,r_k.png"
                alt="item"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">غذاهای سالم</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

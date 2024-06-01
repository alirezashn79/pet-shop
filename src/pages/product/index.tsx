import Breadcrumb from "../../components/breadcrumb";

export default function SingleProduct() {
  return (
    <div className="bg-white">
      <div className="page">
        <Breadcrumb />

        <section className="p-16">
          <div className="flex  gap-x-16">
            <img
              src="https://theme51.mywebzi.ir/uploads/8731eb4b78fb4b9c936076e35be80743.w_1170,h_2071,r_k.jpg"
              alt="product"
              className="h-[600px] w-[600px]"
            />

            <div>
              <h1>تشویقی سگ تاندون</h1>
              <p>{Number(550000).toLocaleString()} تومان</p>
              <ul>
                <li>وزن: 800</li>
                <li>ابعاد: 80*80</li>
                <li>کشور تولیدکننده: ایران</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

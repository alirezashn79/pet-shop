export default function NotFound() {
  return (
    <section className="lg:mt-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            صفحه مورد نظر یافت نشد!
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            نمیتوانیم صفحه مورد نظر شما را پیدا کنیم
          </p>
          <a
            href="/"
            className="inline-flex  bg-primary/90 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary/90 my-4"
          >
            بازگشت به خانه
          </a>
        </div>
      </div>
    </section>
  );
}

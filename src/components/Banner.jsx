
const Banner = () => {
  return (
    <section className=" mt-2 overflow-hidden md:h-screen  h-[300px] bg-[url(https://www.whitecase.com/sites/default/files/styles/original_image/public/images/hero/2024/03/2024-real-estate-market-sentiment-survey-hero.jpg?itok=ggRx37lY)] bg-cover">
      <div className="bg-black/50 p-8 h-screen md:p-12 lg:px-16 lg:py-24">
        <div className=" flex flex-col text-center items-center ">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Sakr Real Estate
          </h2>

          <p className=" text-white/90 mt-6 block text-lg ">
            إبحث الأن عن وحدتك السكنية او التجارية في الإسكندرية بافضل الاسعار
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner
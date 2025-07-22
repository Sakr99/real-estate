import Lottie from "lottie-react";
import homeAnimation from "../assets/Home.json";
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="mt-2 overflow-hidden md:h-screen bg-[url(https://www.whitecase.com/sites/default/files/styles/original_image/public/images/hero/2024/03/2024-real-estate-market-sentiment-survey-hero.jpg?itok=ggRx37lY)] bg-cover bg-center">
      <div className="bg-black/60 w-full h-full flex flex-col md:flex-row items-center  justify-center  md:justify-between px-6 md:px-16 py-10 md:py-20">
        <div className="  text-center md:text-left max-w-xl">
          <h2 className="text-4xl text-white md:text-5xl mb-4">
            Sakr Real Estate
          </h2>
          <hr />
          <p className="text-white/90 mt-6 text-lg">
            إبحث الأن عن وحدتك السكنية او التجارية في الإسكندرية بأفضل الأسعار
            و أفضل المناطق. لدينا مجموعة متنوعة من العقارات التي تناسب جميع
            احتياجاتك. سواء كنت تبحث عن شقة سكنية، فيلا، أو محل تجاري، نحن هنا
            لمساعدتك في العثور على ما يناسبك. تواصل معنا اليوم لتبدأ رحلتك في
            البحث عن العقار المثالي لك.
          </p>
          <a
            href="https://wa.me/201000219106"
            rel="noreferrer"
            target="_blank"
            className="flex  hover:bg-green-600 rounded-full items-center justify-center  gap-2 mt-8 px-6 py-2 bg-slate-500 text-white transition"
          >
            <FaWhatsapp className=" size-6" />
             احجز الان عبر الواتساب
          </a>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center ">
          <Lottie
            animationData={homeAnimation}
            loop
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

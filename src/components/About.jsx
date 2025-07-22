import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import imageSakr from "../assets/Ahmed Sakr.jpg";
export default function About() {
  return (
    <section id="about" className=" bg-amber-50 py-12 px-6 md:px-16 ">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div className="relative">
              <img
                src={imageSakr}
                className="rounded-lg w-full object-cover"
                alt="Ahmed Sakr"
              />

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/30 text-white text-center px-4 py-2 rounded-t-lg w-full">
                <h2 className="text-lg sm:text-xl font-semibold"> Mr Ahmed Sakr</h2>
                <p className="text-sm sm:text-base">CEO</p>
              </div>
            </div>
            <div className="max-w-lg md:max-w-none">
              <p className="mt-4 text-gray-700">
                أحمد صقر هو أحد الأسماء البارزة في مجال التسويق العقاري، بخبرة
                ميدانية وإدارية تمتد لأكثر من 13 عامًا، تدرّج خلالها في عدة
                مناصب داخل شركات محلية وعالمية، وشارك في إطلاق وإدارة عدد من
                المشروعات في الإسكندرية ومناطق استراتيجية كالساحل الشمالي، زايد
                الجديدة، والعاصمة الإدارية. يشغل حاليًا منصب مدير شركة Verona
                Properties، الكيان الذي تأسس في 2012 في مجال التطوير العقاري،
                ويعمل حاليًا في شراكة مباشرة مع العلامة العالمية RE/MAX Avalon.
                يتولى أحمد قيادة الشركة وإدارة عملياتها بالكامل، ويعمل بشكل
                مباشر مع مجموعة كبيرة من الوكلاء العقاريين وفرق التسويق
                والمبيعات. يمتلك أحمد رؤية واضحة في إدارة السوق وتحقيق التوازن
                بين الجانب التجاري والتشغيلي، ويُعرف بقدرته على التفاوض الحاسم
                وبناء العلاقات المستدامة، إلى جانب فهمه العميق لحركة السوق
                العقاري في مصر
                <p className="mt-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <IoMdCall /> <div>01000219106 / 01000830835</div>
                  </div>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=asakr093@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <SiGmail />
                    asakr093@gmail.com
                  </a>
                  <a
                    href="https://wa.me/201000219106"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition flex items-center gap-2 hover:text-gray-700/75"
                  >
                    <FaWhatsapp />
                    <span className=""> 01000219106</span>
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    
    </section>
  );
}

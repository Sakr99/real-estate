export default function About() {
  return (
    <section id="about" className=" py-12 px-6 md:px-16 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center text-center items-center gap-8">
        <div className="">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-800 my-2 "> تعرف على الشركة </h2>
          <p className="text-gray-600 leading-relaxed">
            نحن شركة متخصصة في تسويق وبيع العقارات السكنية والتجارية في أفضل
            المواقع داخل مصر. هدفنا هو مساعدتك في العثور على العقار المناسب
            بأفضل سعر وأعلى جودة
          </p>

          <ul className="space-y-2 my-2 text-gray-700">
            <li> خبرة أكثر من 10 سنوات في السوق العقاري</li>
            <li>شقق وفيلات في مواقع مميزة</li>
            <li> أسعار تنافسية وأنظمة تقسيط مرنة</li>
            <li>فريق دعم متخصص لمساعدتك في كل خطوة</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

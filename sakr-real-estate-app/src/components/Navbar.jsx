import { useState } from "react";
import logo from "../assets/WhatsApp Image 2025-02-19 at 20.21.10_0390877b.jpg";
import { X, Menu } from "lucide-react"; // أيقونات جاهزة

const category = [
  { name: "الصفحة الرئيسية" },
  { name: "العقارات المعروضة" },
  { name: "طلب تسويق الوحدة" },
  { name: "عن الشركة" },
  { name: "طلب استفسار عن مشروع" },
  { name: "تعرف على المشروعات" },
  { name: "المدونة" },
  { name: "تواصل معنا" },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar الرئيسي */}
      <div className="flex justify-between items-center bg-white shadow-md px-4 md:px-16 rounded-b-lg relative">
        <div>
          <img className="w-28 h-20" src={logo} alt="logo" />
        </div>
        {/* روابط - تظهر فقط في الشاشات المتوسطة وفوق */}
        <div className="hidden sm:flex gap-3 text-black text-[10px] font-bold">
          {category.map((item, index) => (
            <a key={index} className="hover:text-yellow-700" href="#">
              {item.name}
            </a>
          ))}
        </div>

        {/* زر الهامبرجر - يظهر فقط في الشاشات الصغيرة */}
        <button
          className="sm:hidden text-black"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay خلفي عند فتح السايدبار */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* السايدبار */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img className="w-20 h-16" src={logo} alt="logo" />
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-4 text-black text-sm font-bold">
          {category.map((item, index) => (
            <a
              key={index}
              className="hover:text-yellow-700 border-b pb-2"
              href="#"
              onClick={() => setSidebarOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { useState } from "react";
import logo from "../assets/WhatsApp Image 2025-02-19 at 20.21.10_0390877b.jpg";
import { X, Menu } from "lucide-react";

const category = [
  { name: "الصفحة الرئيسية" , href: "/" },
  { name: "العقارات المعروضة" , href: "#properties"  },
  { name: "طلب تسويق الوحدة" , href: "https://wa.me/201000219106", target: "_blank", rel: "noopener noreferrer"  },
  { name: "عن الشركة" , href: "#about"  },
  { name: "تواصل معنا" , href: "https://wa.me/201000219106", target: "_blank", rel: "noopener noreferrer" },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-md px-4 md:px-16 rounded-b-lg relative">
        <div>
          <img className="w-28 h-20" src={logo} alt="logo" />
        </div>
        <div className="hidden sm:flex gap-3 text-black text-sm  font-bold">
          {category.map((item, index) => (
          <a key={index} className="hover:text-yellow-700" href={item.href} target={item.target} rel={item.rel}>
              {item.name}
            </a>
          ))}
        </div>

        <button
          className="sm:hidden text-black"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

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
              href={item.href}
              target={item.target}
              rel={item.rel}
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

import logo from '../assets/WhatsApp Image 2025-02-19 at 20.21.10_0390877b.jpg';
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-400">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-8">
        <div className="flex justify-center ">
          <img className="w-28 h-20 " src={logo} alt="logo" />
        </div>
        <p></p>
        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="size-6" />{" "}
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="size-6" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/201000219106"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="size-6" />
            </a>
          </li>
        </ul>
        <div className="mt-4 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Sakr Real Estate 2015. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
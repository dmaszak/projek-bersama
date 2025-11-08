import { FaFacebookF, FaTwitter, FaGooglePlusG, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-700 text-white text-center py-12 relative overflow-hidden">
      {/* Logo & Brand */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="bg-white text-[#6a11cb] rounded-full px-2 py-1 font-bold">C</span> Centil
        </h1>

        {/* Subtext */}
        <p className="text-white/80">
          Have a project in mind?{" "}
          <span className="font-semibold underline cursor-pointer hover:text-white">
            Lets Discuss
          </span>
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl mt-3">
          <a href="#" className="hover:text-gray-200 transition">
            <FaGooglePlusG />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <FaDribbble />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            <FaTwitter />
          </a>
        </div>

        {/* Divider */}
        <div className="w-3/4 mx-auto border-t border-white/20 mt-8 pt-4 text-sm text-white/70">
          Copyright © 2025{" "}
          <span className="font-semibold text-white hover:underline cursor-pointer">
            We are Family
          </span>{" "}
          | All rights reserved
        </div>
      </div>
    </footer>
  );
}

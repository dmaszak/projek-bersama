import Image from "next/image";
import Navbar from "./components/Navbar";
import heroImg from "../public/centiill.jpg";
import cipaImg from "../public/Asyifa.png";
import dimasImg from "../public/Dimas Zakaria.png";
import zizaImg from "../public/ziza comell.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center px-10 mt-5">
        <div className="relative w-full max-w-6xl">
          {/* Background Image */}
          <Image
            src={heroImg}
            alt="Geng Centil"
            className="w-full h-[500px] object-cover rounded-3xl"
          />

          {/* Overlay Text */}
          <div className="absolute top-10 left-10 text-black">
            <p className="text-sm tracking-widest">WELCOME TO WEBSITE GENG CENTIL</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
              LEARN, SHARE, <br /> AND BUILD <br /> TOGETHER
            </h2>
            <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center gap-2">
              <span>About We</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* KNOW MORE SECTION */}
          {/* KNOW MORE SECTION */}
          <div className="absolute bottom-5 right-5 bg-red-200 shadow-lg px-5 py-4 flex items-center gap-5 clip-shape">
            <div>
              <h3 className="font-semibold text-gray-800">KNOW MORE</h3>
              <p className="text-sm text-gray-500 w-[200px]">
                The story of a community that grows and inspires.
              </p>
            </div>
            <div className="flex -space-x-3">
              <Image src={cipaImg} alt="" className="w-10 h-10 rounded-full border-2 border-white" />
              <Image src={dimasImg} alt="" className="w-10 h-10 rounded-full border-2 border-white" />
              <Image src={zizaImg} alt="" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
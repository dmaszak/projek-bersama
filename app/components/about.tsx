"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-center">
      {/* MEET OUR TEAM */}
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="w-24 h-1 bg-gray-500 mx-auto mt-6 rounded-full shadow"></div>

        <main className="mt-6 text-left px-8">
          <h4 className="font-light">Together, We Rise</h4>
          <p className="font-semibold text-shadow-lg">
            Be part of our IT community that grows
          </p>
          <p className="text-gray-500 text-shadow-lg">
            through collaboration and innovation.
          </p>
        </main>

        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Raihan */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/muhammad Raihan 1.svg"
              alt="Muhammad Raihan"
              width={250}
              height={250}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h5 className="text-md font-semibold bg-sky-700 text-white py-2 px-3 rounded-full inline-block">
                Muhammad Raihan
              </h5>
              <p className="text-gray-500 text-sm mt-2">Fullstack Developer</p>
            </div>
          </div>

          {/* Dimas */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/Dimas Zakaria 1.svg"
              alt="Dimas Zakaria"
              width={250}
              height={250}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h5 className="text-md font-semibold bg-sky-700 text-white py-2 px-3 rounded-full inline-block">
                Dimas Zakaria
              </h5>
              <p className="text-gray-500 text-sm mt-2">Frontend Developer</p>
            </div>
          </div>

          {/* Fajrul */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/FAJRUL FALAKHIL MUJADDID 1.svg"
              alt="Fajrul Falakhil"
              width={250}
              height={250}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h5 className="text-md font-semibold bg-sky-700 text-white py-2 px-3 rounded-full inline-block">
                Fajrul Falakhil
              </h5>
              <p className="text-gray-500 text-sm mt-2">Backend Developer</p>
            </div>
          </div>

          

          {/* Agil */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/Agil rifai 1.svg"
              alt="Agil"
              width={250}
              height={250}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h5 className="text-md font-semibold bg-sky-700 text-white py-2 px-3 rounded-full inline-block">
                Agil Pratama
              </h5>
              <p className="text-gray-500 text-sm mt-2">Frontend Developer</p>
            </div>
          </div>

          {/* Asyifa */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/Asyifa.svg"
              alt="Asyifa"
              width={250}
              height={250}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h5 className="text-md font-semibold bg-sky-700 text-white py-2 px-3 rounded-full inline-block">
                Asyifa N.R
              </h5>
              <p className="text-gray-500 text-sm mt-2">Backend Developer</p>
            </div>
          </div>

          {/* Yazid */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/Yazid Ardani.svg"
              alt="Yazid"
              width={250}
              height={250}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h5 className="text-md font-semibold bg-sky-700 text-white py-2 px-3 rounded-full inline-block">
                Yazid Ardani
              </h5>
              <p className="text-gray-500 text-sm mt-2">Backend Developer</p>
            </div>
          </div>
          

          {/* Ziza */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/ziza comell.svg"
              alt="Ziza"
              width={250}
              height={250}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h5 className="text-md font-semibold bg-sky-700 text-white py-2 px-3 rounded-full inline-block">
                Nur Ngazizah A
              </h5>
              <p className="text-gray-500 text-sm mt-2">Frontend Developer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

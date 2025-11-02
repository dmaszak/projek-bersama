export default function HomePage() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="justify-between flex p-5 items-center">
        <h1 className="text-xl font-semibold">Geng Centil</h1>
        <ul className="flex text-sm justify-center gap-5 list-none">
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">MOMENTS</a></li>
          <li><a href="">PROGRAM</a></li>
        </ul>
        <span className="bg-black text-white text-sm px-5 py-2 rounded-2xl cursor-pointer">
          BOOKTRIP
        </span>
      </nav>
      {/* NAVBAR END */}

      {/* HERO SECTION */}
      <section className="text-center mt-10">
        <p className="text-gray-500 tracking-wide">WELCOME TO WEBSITE GENG CENTIL</p>
        <h2 className="text-3xl font-bold mt-2">
          LEARN, SHARE, AND BUILD TOGETHER
        </h2>
      </section>

      {/* MEET OUR TEAM */}
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <p className="text-gray-600 text-sm">Coming soon...</p>
      </section>

      {/* OUR MOMENTS */}
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Our Moments</h3>
        <p className="text-gray-600 text-sm">Coming soon...</p>
      </section>

      {/* OUR PROGRAMS */}
      <section className="mt-20 text-center mb-20">
        <h3 className="text-2xl font-semibold mb-4">Our Programs</h3>
        <p className="text-gray-600 text-sm">Coming soon...</p>
      </section>
    </div>
  );
}

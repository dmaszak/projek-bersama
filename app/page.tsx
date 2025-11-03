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
        <p className="text-gray-500">WELCOME TO WEBSITE GENG CENTIL</p>
        <h2 className="text-3xl font-bold mt-2">
          LEARN, SHARE, AND BUILD TOGETHER
        </h2>
      </section>
    </div>
  );
}

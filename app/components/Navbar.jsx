export default function Navbar() {
  const navItems = ["HOME", "ABOUT", "MOMENTS", "PROGRAM"];

  return (
    <nav className="flex justify-between items-center px-10 py-5">
      {/* LOGO */}
      <h1 className="text-xl font-semibold">GENG CENTIL</h1>

      {/* MENU */}
      <ul className="flex gap-8 text-sm">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-slate-500 after:transition-all after:duration-300 hover:after:w-full hover:after:scale-x-100 after:origin-center after:scale-x-0"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button className="border text-white bg-black px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
        BOOK TRIP
      </button>
    </nav>
  );
}

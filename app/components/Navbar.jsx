export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <h1 className="text-xl font-semibold">GENG CENTIL</h1>
      <ul className="flex gap-8 text-sm">
        <li><a href="#" className="hover:text-blue-600">HOME</a></li>
        <li><a href="#" className="hover:text-blue-600">ABOUT</a></li>
        <li><a href="#" className="hover:text-blue-600">MOMENTS</a></li>
        <li><a href="#" className="hover:text-blue-600">PROGRAM</a></li>
      </ul>
      <button className="border text-white bg-black px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
        BOOK TRIP
      </button>
    </nav>
  );
}

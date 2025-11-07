import Image from "next/image";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="flex flex-col items-center mt-3">
                <div className="relative w-full max-w-6xl h-[590px] rounded-4xl overflow-hidden">

                    {/* Background Image */}
                    <Image
                        src="/centiill.svg"
                        alt="Geng Centil"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Overlay Text */}
                    <div className="absolute top-20 left-10 text-black">
                        <p className="text-sm tracking-widest">WELCOME TO WEBSITE GENG CENTIL</p>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-3">
                            LEARN, SHARE, <br /> AND BUILD <br /> TOGETHER
                        </h2>

                        <div className="flex items-center gap-3 mt-10">
                            {/* Tombol About We */}
                            <button className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-2 rounded-full transition">
                                About We
                            </button>

                            {/* Lingkaran play double layer */}
                            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                                {/* Lapisan biru di dalam */}
                                <div className="w-7 h-7 bg-sky-700 rounded-full flex items-center justify-center">
                                    {/* Ikon play */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* KNOW MORE SECTION */}
                    <div className="absolute bottom-5 right-5 bg-white/30 backdrop-blur-md shadow-lg px-5 py-4 flex items-center gap-5 rounded-2xl border border-white/20 hover:scale-105 transition clip-shape">
                        <div>
                            <h3 className="font-semibold text-black">KNOW MORE</h3>
                            <p className="text-sm text-gray-800 w-[200px]">
                                The story of a community that grows and inspires.
                            </p>
                        </div>

                        {/* Avatar */}
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 relative">
                                <Image
                                    src="/Asyifa.svg"
                                    alt="Asyifa"
                                    fill
                                    className="object-cover rounded-full border-2 border-white"
                                />
                            </div>

                            <div className="w-10 h-10 relative">
                                <Image
                                    src="/Dimas Zakaria 1.svg"
                                    alt="Dimas"
                                    fill
                                    className="object-cover rounded-full border-2 border-white"
                                />
                            </div>

                            <div className="w-10 h-10 relative">
                                <Image
                                    src="/ziza comell.svg"
                                    alt="Ziza"
                                    fill
                                    className="object-cover rounded-full border-2 border-white"
                                />
                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </div>
    );
}

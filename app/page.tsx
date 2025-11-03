import Image from "next/image";
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

      {/* MEET OUR TEAM */}
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="w-25 h-1 bg-gray-500 mx-auto mt-6 rounded-full shadow"></div>
        <main className="mt-6 text-left px-8 ">
          <h4 className="font-light">Together, We Rise</h4>
          <p className="font-semibold text-shadow-lg">e part of our IT community that grows</p>
          <p className="text-gray-500 text-shadow-lg">through collaboration and innovation.</p>
        </main>
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:group-cols-3 lg:grid-cols-4 gap-8 justify-items-center:">
        {/*Raihan*/}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/muhammad Raihan 1.svg"
            alt="Muhammad Raihan"
            width={250}
            height={250}
            className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h5 className="text-md font-semibold bg-blue-600 text-white py-2 px-3 rounded-full inline-block">Muhammad Raihan</h5> 
              <p className="text-gray-500 text-sm mt-2">Fullstack Developer</p>
            </div>
        </div>
        {/*Dimass*/}
        <div className = "bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300" >
          <Image
            src="/Dimas Zakaria 1.svg"
            alt="Dimass"
            width={250}
            height={250}
            className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h5 className="text-md font-semibold bg-blue-600 text-white py-2 px-3 rounded-full inline-block">Dimas Zakaria</h5>
              <p className="text-gray-500 text-sm mt-2">Frontend Developer</p>
            </div>
        </div>
        {/*Fajrul*/}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/FAJRUL FALAKHIL MUJADDID 1.svg"
            alt="Faj"
            width={250}
            height={250}
            className="object-cover w-full h-64"
            />
            <div className="p-4 text-center"> 
              <h5 className="text-md font-semibold bg-blue-600 text-white py-2 px-3 rounded-full inline-block">Fajrul Falakhil</h5>
              <p className="text-gray-500 text-sm mt-2">Backend Developer</p>
            </div>
        </div>
        {/*card 4*/}
         <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between w-[250px]">
          <div>
            <div className="flex gap-2 mb-4 text-gray-500">
              <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg></span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg> 
            </div>
            <p className="text-sm italic text-gray-600">
              “When You Learn To Code, You Learn To Create.” — Barack Obama
            </p>
          </div>
          <button className="mt-6 bg-blue-600 text-white text-sm font-semibold py-2 rounded-md hover:bg-blue-700 transition">
            Community
          </button>
        </div>
        {/*agil*/}


    
  
      </div>

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

import React from "react";

export default function Services() {

  return (
    <section className="bg-[#EFFEFF] p-5 mt-14">
      {/* Banner / Header Section */}
      <div className="m-2 rounded-2xl bg-[url('/images/fat.png')] bg-cover bg-center overflow-hidden shadow-sm">
        <div className="flex rounded-2xl p-8 flex-col lg:flex-row justify-center bg-blue-300/50 items-center gap-8 min-h-[220px]">
          <div className="lg:w-1/2 flex items-center justify-center">
            <h1 className="font-bold text-4xl lg:text-6xl text-gray-900 transition hover:underline cursor-pointer">
              Our Services
            </h1>
          </div>
          <div
            className="lg:w-1/2 p-6 h-full w-full bg-cover bg-center rounded-xl shadow-md flex items-center"
            style={{ backgroundImage: `url('/images/rb.jpg')` }}
          >
            <h2 className="text-white font-bold text-3xl lg:text-5xl drop-shadow-md">
              GreenLife Nutritions
            </h2>
          </div>
        </div>
      </div>

     
    </section>
  );
}
import React from "react";

export default function About() {
  return (
    <section className="bg-[#EFFEFF] p-5 mt-14">
      {/* Banner / Header Block */}
      <div className="m-2 rounded-2xl bg-[url('/images/fat.png')] bg-cover bg-center overflow-hidden shadow-sm">
        <div className="flex rounded-2xl p-8 flex-col lg:flex-row justify-center bg-blue-300/50 items-center gap-8 min-h-[220px]">
          <div className="lg:w-1/2 flex items-center justify-center">
            <h1 className="font-bold text-4xl lg:text-6xl text-gray-900 transition hover:underline cursor-pointer">
              About Us
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

      {/* Main Content Card */}
      <div className="m-2 p-6 lg:p-10 gap-8 rounded-2xl bg-white flex flex-col lg:flex-row items-center shadow-sm mt-6">
        {/* Left Side: Image Container */}
        <div className="lg:w-1/3 rounded-2xl bg-blue-200/50 border-2 border-blue-100 w-full max-w-sm h-auto lg:min-h-[500px] flex items-center justify-center p-4">
          <img
            className="rounded-2xl object-cover w-full h-full shadow-sm"
            src="/images/Nutrifood.png"
            alt="Nutritious Food display"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="lg:w-2/3 flex flex-col gap-5 text-gray-700 leading-relaxed text-base lg:text-lg">
          <p>
            <span className="font-bold text-2xl text-blue-600">A</span>t our{" "}
            <span className="font-semibold text-gray-900">GreenLife Nutritions</span> center, we believe that true wellness starts with healthy habits and mindful choices. Our mission is to provide personalized nutrition for every lifestyle, helping each individual understand the unique needs of their body. We recognize that no two people are the same, so our approach combines science-backed nutritional guidance with practical strategies that fit seamlessly into your daily routine. Whether your goal is weight management, increased energy, or overall health improvement, we are committed to creating a path that is sustainable, realistic, and tailored just for you.
          </p>

          <h3 className="font-bold text-xl lg:text-2xl text-gray-900 mt-2">
            Nutrition That Works for Real Life
          </h3>
          <p>
            We understand that nutrition is more than just following a diet—it’s about making informed choices, enjoying food, and building healthy habits that last. Our team works closely with you to develop meal plans, lifestyle strategies, and wellness programs that are both effective and enjoyable. By focusing on small, consistent changes, we help you transform your health in a way that creates measurable results. From personalized consultations to continuous guidance, we ensure that every step you take moves you closer to a balanced and energetic life.
          </p>

          <h3 className="font-bold text-xl lg:text-2xl text-gray-900 mt-2">
            Empowering Your Health Journey
          </h3>
          <p>
            Our goal is to empower you to take control of your health and live your best life. Wellness is a journey, and we are committed to making that journey accessible, informed, and inspiring. Beyond just food plans, we provide education, motivation, and support that enable you to adopt a lifestyle that nourishes both body and mind. At GreenLife Nutritions, we don’t just focus on what you eat—we focus on how you live, helping you create a sustainable, vibrant, and balanced lifestyle that lasts a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
}
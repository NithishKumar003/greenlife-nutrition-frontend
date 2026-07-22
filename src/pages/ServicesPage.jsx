import React from "react";

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: "Personalized Diet Plans",
      description:
        "We create fully customized diet plans designed around your body type, daily routine, food preferences, and health goals, ensuring sustainable nutrition that is easy to follow and effective long term.",
      image: "/images/bslogo.png",
    },
    {
      id: 2,
      title: "Weight Management Programs",
      description:
        "Our weight management programs focus on healthy weight loss or gain through balanced nutrition, portion control, and habit-building strategies that support lasting results without extreme dieting or starvation.",
      image: "/images/vision.png",
    },
    {
      id: 3,
      title: "Nutrition Counseling",
      description:
        "We provide expert nutritional counseling for medical conditions such as diabetes, thyroid disorders, PCOS, cholesterol, and digestive issues, using evidence-based dietary approaches to improve health and overall quality of life.",
      image: "/images/Nutrifood.png",
    },
    {
      id: 4,
      title: "Lifestyle & Wellness Coaching",
      description:
        "Our lifestyle and wellness coaching helps you build healthier daily habits, including mindful eating, proper hydration, quality sleep, and stress management, creating a balanced lifestyle that supports both physical and mental wellbeing.",
      image: "/images/couns.png",
    },
    {
      id: 5,
      title: "Nutrition Education & Meal Planning Guidance",
      description:
        "We educate clients on food choices, portion sizes, label reading, and meal planning techniques, empowering them with practical nutrition knowledge to make confident, healthier decisions in everyday life.",
      image: "/images/diet-planner.png",
    },
  ];

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

      {/* Services List */}
      <div className="m-5 lg:m-20 flex flex-col gap-10">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-5 lg:gap-10 bg-white/60 p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              className="w-32 h-32 sm:w-36 sm:h-36 border-4 border-blue-300 rounded-full object-cover shrink-0"
              src={service.image}
              alt={service.title}
            />
            <div className="bg-white p-5 rounded-2xl flex-grow shadow-sm w-full">
              <h3 className="font-bold text-lg lg:text-xl text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
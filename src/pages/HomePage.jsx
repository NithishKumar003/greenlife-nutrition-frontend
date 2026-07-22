import React, { useState, useEffect } from "react";

export default function Home({ isAuthenticated = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "GreenLife Nutritions",
      subtitle: "Where Age Rewinds Naturally",
      bgImage: "/images/rb.jpg",
      buttonText: "Register",
      buttonLink: "/register",
      showAuthOnly: true,
    },
    {
      title: "Weight Management",
      bgImage: "/images/wm.png",
      buttonLink: "/weightmanagement",
    },
    {
      title: "Free Counseling",
      bgImage: "/images/couns.png",
      buttonLink: "/contact",
    },
    {
      title: "Fat Calculator",
      bgImage: "/images/fat.png",
      buttonLink: "/dashboard",
    },
  ];

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

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-[#EFFEFF] p-5 mt-14">
      {/* Interactive Carousel Slider */}
      <div className="relative rounded-2xl h-72 lg:h-[400px] overflow-hidden w-full">
        <div
          className="h-full flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col flex-shrink-0 justify-center items-center bg-cover bg-center h-full w-full rounded-2xl border-2 shadow-xl text-center px-4"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <h1 className="bg-gradient-to-br from-[#0F4CFF] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent font-bold text-3xl lg:text-7xl pb-2 drop-shadow-md">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <h2 className="text-white text-sm lg:text-lg mb-2 drop-shadow">
                  {slide.subtitle}
                </h2>
              )}

              {slide.showAuthOnly && !isAuthenticated ? (
                <a
                  href={slide.buttonLink}
                  className="text-2xl mt-2 text-white bg-blue-500/80 hover:bg-blue-700 rounded-2xl px-6 py-2 transition"
                >
                  {slide.buttonText}
                </a>
              ) : (
                slide.buttonLink && (
                  <a
                    href={slide.buttonLink}
                    className="text-sm lg:text-lg font-bold p-3 text-white rounded-full bg-blue-800/60 hover:bg-blue-800 transition mt-2"
                  >
                    &#10095;
                  </a>
                )
              )}
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition"
        >
          &#10095;
        </button>
      </div>

      {/* Quick Navigation Cards */}
      <div className="w-full bg-blue-100 mt-5 rounded-2xl">
        <div className="py-10 px-5">
          <h1 className="font-bold text-2xl text-green-900 lg:text-4xl text-center lg:text-left">
            Interest in Weight <span className="text-red-500">Loss</span> - We are{" "}
            <span className="text-blue-500"> The Boss</span> !
          </h1>

          <div className="pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="/images/store.png"
                alt="Nutri Store"
              />
              <a className="font-medium hover:text-blue-600" href="/dashboard">
                Nutri Store
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="/images/fat-cal.png"
                alt="Fat Calculator"
              />
              <a className="font-medium hover:text-blue-600" href="/dashboard">
                Fat Calculator
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="/images/diet-planner.png"
                alt="Diet Plans"
              />
              <a className="font-medium hover:text-blue-600" href="/dietplans">
                Diet Plans
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="/images/results.png"
                alt="Our Results"
              />
              <a className="font-medium hover:text-blue-600" href="/results">
                Our Results
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="/images/members.png"
                alt="Our Teams"
              />
              <a className="font-medium hover:text-blue-600" href="/members">
                Our Teams
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Info Section */}
      <div className="mt-8">
        <div className="w-full flex justify-center mb-6">
          <h1 className="font-bold text-3xl text-green-900 lg:text-4xl">
            <span className="text-5xl text-red-400">G</span>reenlife{" "}
            <span className="text-5xl text-blue-400">N</span>utrition's...
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Offer Block */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="bg-blue-100 rounded-2xl w-full lg:w-2/5 p-4 flex items-center justify-center">
              <img
                className="rounded-2xl transition-transform duration-500 hover:scale-105 max-h-72 object-cover"
                src="/images/offer.png"
                alt="What do we offer?"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 bg-[#EFFEFF] lg:w-3/5 rounded-2xl shadow-sm">
              <h2 className="font-bold text-xl text-green-900">What do we offer?</h2>
              <p className="text-yellow-600 text-sm leading-relaxed">
                We offer a comprehensive range of personalized nutrition and wellness services designed to support your journey toward better health. Our services include customized diet plans, weight management programs, meal planning, nutrition counseling, and healthy lifestyle guidance tailored to your individual needs. We also provide specialized nutrition support for conditions such as diabetes, heart health, digestive disorders, PCOS, thyroid management, sports nutrition, and child, adult, and senior nutrition. Whether your goal is weight loss, weight gain, improved fitness, disease management, or simply adopting healthier eating habits, our evidence-based recommendations help you build sustainable, long-term wellness.
              </p>
            </div>
          </div>

          {/* Help Block */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="bg-blue-100 rounded-2xl w-full lg:w-2/5 p-4 flex items-center justify-center">
              <img
                className="rounded-2xl transition-transform duration-500 hover:scale-105 max-h-72 object-cover"
                src="/images/Nutrifood.png"
                alt="How Can We Help You?"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 bg-[#EFFEFF] lg:w-3/5 rounded-2xl shadow-sm">
              <h2 className="font-bold text-xl text-green-900">How Can We Help You?</h2>
              <p className="text-yellow-600 text-sm leading-relaxed">
                At Greenlife Nutrition, we are committed to helping you achieve lasting health through personalized nutrition and lifestyle guidance. Our experts take the time to understand your health goals, dietary preferences, medical history, and daily routine to create customized plans that fit your lifestyle. Whether your goal is weight loss, weight gain, muscle building, improved energy, better digestion, or managing conditions such as diabetes, PCOS, thyroid disorders, or heart health, we provide evidence-based recommendations, practical meal planning, ongoing support, and progress tracking to help you build healthy habits and achieve sustainable results with confidence.
              </p>
            </div>
          </div>

          {/* Vision Block */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="bg-blue-100 rounded-2xl w-full lg:w-2/5 p-4 flex items-center justify-center">
              <img
                className="rounded-2xl transition-transform duration-500 hover:scale-105 max-h-72 object-cover"
                src="/images/vision.png"
                alt="What is your story or vision?"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 bg-[#EFFEFF] lg:w-3/5 rounded-2xl shadow-sm">
              <h2 className="font-bold text-xl text-green-900">What is your story or vision?</h2>
              <p className="text-yellow-600 text-sm leading-relaxed">
                Greenlife Nutrition was founded with a vision to make healthy living simple, accessible, and sustainable for everyone. We believe that proper nutrition is the foundation of a healthier, happier, and more fulfilling life, and that every individual deserves guidance that is personalized to their unique needs and goals. Our mission is to empower people with science-based nutrition, practical lifestyle solutions, and continuous support that inspire lasting positive change rather than temporary results. We are committed to helping individuals and families develop healthier eating habits, improve their overall well-being, and prevent lifestyle-related health challenges through balanced nutrition and education. By combining professional expertise with a compassionate, client-focused approach, we aim to build a community where healthy choices become everyday habits, enabling people to live with greater energy, confidence, and long-term wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold text-3xl pt-4 lg:text-4x flex text-green-900 justify-center">What We Offer !</p>
      <div className=" rounded-2xl pt-4 flex flex-col md:flex-row gap-10">
        
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center sm:items-start gap-5 lg:gap-10 bg-blue-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              className="w-32 flex flex-col items-center h-32 sm:w-36 sm:h-36 border-4 border-blue-300 rounded-full object-cover shrink-0"
              src={service.image}
              alt={service.title}
            />
            <div className="bg-[#EFFEFF] p-5 rounded-2xl flex-grow shadow-sm w-full">
              <h3 className="font-bold text-lg lg:text-xl text-green-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base text-yellow-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
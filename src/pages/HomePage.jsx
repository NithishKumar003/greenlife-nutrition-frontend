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
              <h1 className="text-white font-bold text-4xl lg:text-7xl pb-2 drop-shadow-md">
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
      <div className="w-full bg-gray-200 mt-5 rounded-2xl">
        <div className="py-10 px-5">
          <h1 className="font-bold text-2xl lg:text-4xl text-center lg:text-left">
            Interest in Weight <span className="text-red-500">Loss</span> - We are{" "}
            <span className="text-blue-500">Boss</span> !
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
          <h1 className="font-bold text-3xl lg:text-4xl">
            <span className="text-5xl text-red-400">G</span>reenlife{" "}
            <span className="text-5xl text-blue-400">N</span>utrition's...
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          {/* Offer Block */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="bg-white rounded-2xl w-full lg:w-2/5 p-4 flex items-center justify-center">
              <img
                className="rounded-2xl transition-transform duration-500 hover:scale-105 max-h-72 object-cover"
                src="/images/offer.png"
                alt="What do we offer?"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 bg-white lg:w-3/5 rounded-2xl shadow-sm">
              <h2 className="font-bold text-2xl text-gray-800">What do we offer?</h2>
              <p className="text-gray-600 leading-relaxed">
                Here, we offer a wide range of personalized nutrition and wellness services designed
                to help you achieve your health goals. This includes customized diet plans, weight
                management programs, meal planning guidance, and nutritional counseling for specific
                health conditions such as diabetes, heart health, or digestive issues.
              </p>
            </div>
          </div>

          {/* Help Block */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="bg-white rounded-2xl w-full lg:w-2/5 p-4 flex items-center justify-center">
              <img
                className="rounded-2xl transition-transform duration-500 hover:scale-105 max-h-72 object-cover"
                src="/images/Nutrifood.png"
                alt="How Can We Help You?"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 bg-white lg:w-3/5 rounded-2xl shadow-sm">
              <h2 className="font-bold text-2xl text-gray-800">How Can We Help You?</h2>
              <p className="text-gray-600 leading-relaxed">
                At Rebirth Center, we are committed to helping you lead a healthier and more balanced
                life. Our expert nutritionists work closely with you to understand your unique needs,
                lifestyle, and goals, whether it’s weight management, muscle gain, or managing health conditions.
              </p>
            </div>
          </div>

          {/* Vision Block */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            <div className="bg-white rounded-2xl w-full lg:w-2/5 p-4 flex items-center justify-center">
              <img
                className="rounded-2xl transition-transform duration-500 hover:scale-105 max-h-72 object-cover"
                src="/images/vision.png"
                alt="What is your story or vision?"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 bg-white lg:w-3/5 rounded-2xl shadow-sm">
              <h2 className="font-bold text-2xl text-gray-800">What is your story or vision?</h2>
              <p className="text-gray-600 leading-relaxed">
                Our story began with a passion for promoting healthier lifestyles and empowering people
                to take control of their well-being. We believe that nutrition is the foundation of a happy,
                energetic, and balanced life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
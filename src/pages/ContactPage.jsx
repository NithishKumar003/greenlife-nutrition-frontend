import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    // Example form submission simulation
    setTimeout(() => {
      if (formData.name && formData.phone && formData.email && formData.message) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
        });
        // Clear form
        setFormData({
          name: "",
          last_name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatusMessage({
          type: "error",
          text: "Please fill out all required fields.",
        });
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-[#EFFEFF] text-green-900 p-5 min-h-screen">
      {/* Contact Section Wrapper */}
      <div className="flex flex-col bg-[url('/images/front-bg.png')] mt-14 bg-cover bg-center rounded-2xl lg:flex-row md:justify-center md:gap-10 justify-center items-center p-5 gap-5 mb-8 shadow-sm">
        
        {/* Title */}
        <div className="w-full lg:w-72 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Contact <span className="text-[#2193B0]">Us...</span>
          </h1>
        </div>

        {/* Benefits Box */}
        <div className="flex bg-blue-100/70 backdrop-blur-sm shadow-xl p-6 rounded-xl leading-relaxed flex-col max-w-md w-full">
          <span className="text-2xl lg:text-3xl font-bold">
            Talk to our <span className="text-[#2193B0]">Team</span> Today
          </span>
          <span className="text-xs text-gray-600 mt-1">
            Get in touch with us for any questions about our products and programs.
          </span>

          <div className="flex flex-col gap-3 py-4 text-gray-800">
            <div>
              <h3 className="text-sm font-bold text-green-900">
                • Personalized Guidance from Experts
              </h3>
              <span className="text-xs text-gray-600">
                Get direct access to certified nutrition professionals.
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-green-900">
                • Secure & Confidential Communication
              </h3>
              <span className="text-xs text-gray-600">
                Your questions and personal health data are protected.
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-green-900">• Fast & Friendly Support</h3>
              <span className="text-xs text-gray-600">
                Our team is ready to assist you—expect quick responses.
              </span>
            </div>
          </div>

          <span className="text-xs text-gray-700">
            Looking for direct contact details?{" "}
            <a className="text-blue-600 hover:text-[#2193B0] font-semibold underline" href="#details">
              Click Here
            </a>
          </span>
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl border-2 border-[#2294B1] shadow-xl w-full max-w-lg">
          <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left text-gray-900">
            Please enter your information
          </h2>
          <p className="text-xs text-gray-500 my-2 text-center lg:text-left">
            Fields marked with <span className="text-red-500 text-base">*</span> are required
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700" htmlFor="name">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full h-10 rounded-xl border-2 border-[#5BC5DF] focus:border-[#2698B4] p-2 text-sm outline-none transition bg-white"
                  placeholder="Enter first name"
                  required
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700" htmlFor="last_name">
                  Last Name
                </label>
                <input
                  name="last_name"
                  className="w-full h-10 rounded-xl border-2 border-[#5BC5DF] focus:border-[#2698B4] p-2 text-sm outline-none transition bg-white"
                  placeholder="Enter last name"
                  id="last_name"
                  type="text"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700" htmlFor="phone">
                  Phone No<span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  className="w-full h-10 rounded-xl border-2 border-[#5BC5DF] focus:border-[#2698B4] p-2 text-sm outline-none transition bg-white"
                  placeholder="Enter phone number"
                  required
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700" htmlFor="email">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  className="w-full h-10 rounded-xl border-2 border-[#5BC5DF] focus:border-[#2698B4] p-2 text-sm outline-none transition bg-white"
                  placeholder="Enter email"
                  required
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="message">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                placeholder="Enter your message/query here..."
                className="w-full rounded-xl border-2 border-[#5BC5DF] focus:border-[#2698B4] p-2 text-sm outline-none transition bg-white"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#39A8C3] hover:bg-[#2698B4] disabled:bg-gray-400 text-white font-semibold w-full rounded-full p-3 transition shadow-md mt-2 cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status Messages */}
          {statusMessage.text && (
            <div
              className={`text-center text-sm font-medium mt-4 p-3 rounded-xl ${
                statusMessage.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {statusMessage.text}
            </div>
          )}
        </div>
      </div>

      {/* Direct Contact Cards */}
      <div id="details" className="flex flex-col text-green-900 lg:flex-row justify-center items-center gap-4 max-w-6xl mx-auto">
        {/* Email Support Card */}
        <div className="flex items-center flex-col gap-2 lg:w-1/3 bg-white/80 p-6 w-full rounded-2xl shadow-sm text-center border border-blue-100 hover:shadow-md transition">
          <div className="p-3 bg-blue-50 rounded-full">
            <svg className="h-6 w-6 text-[#2193B0]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="4 8.2 12 14.1 20 8.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect height="14" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" x="3" y="6.5" />
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900">Email Support</h3>
          <p className="text-sm text-gray-600">Our team can respond in real time</p>
          <a className="text-sm text-blue-600 hover:text-blue-800 font-semibold mt-1" href="mailto:greenlife@gmail.com">
            greenlife@gmail.com
          </a>
        </div>

        {/* Location Card */}
        <div className="flex items-center flex-col gap-2 lg:w-1/3 bg-white/80 p-6 w-full rounded-2xl shadow-sm text-center border border-blue-100 hover:shadow-md transition">
          <div className="p-3 bg-blue-50 rounded-full">
            <svg className="h-6 w-6 text-[#2193B0]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
              <circle cx="12" cy="9" r="3" strokeWidth="2" />
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900">Visit Our Office</h3>
          <p className="text-sm text-gray-600">Open Hours: Mon - Sat (9:00 AM - 6:00 PM)</p>
          <a 
            href="#map" 
            className="text-sm text-blue-600 hover:text-blue-800 font-semibold mt-1 cursor-pointer"
          >
            View Map Directions
          </a>
        </div>

        {/* Phone Call Card */}
        <div className="flex items-center flex-col gap-2 lg:w-1/3 bg-white/80 p-6 w-full rounded-2xl shadow-sm text-center border border-blue-100 hover:shadow-md transition">
          <div className="p-3 bg-blue-50 rounded-full">
            <svg className="h-6 w-6 text-[#2193B0]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900">Call Us Directly</h3>
          <p className="text-sm text-gray-600">You can reach us anytime during working hours</p>
          <a className="text-sm text-blue-600 hover:text-blue-800 font-semibold mt-1" href="tel:+919876543210">
            +91 98765 43210
          </a>
        </div>
      </div>

      {/* Embedded Google Map Section */}
      <div id="map" className="mt-10 max-w-6xl mx-auto bg-white/80 p-4 rounded-2xl shadow-sm border border-blue-100">
        <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
          Find GreenLife Nutrition Center
        </h3>
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-inner">
          <iframe
            title="Office Location Map"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.876798129759!2d79.419179!3d13.628800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzYzLjciTiA3OcKwMjUnMDkuMSJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
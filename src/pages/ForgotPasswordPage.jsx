import React, { useState } from "react";

export default function ForgotPasswordPage({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage({ type: "", text: "" });

    if (!email) {
      setStatusMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    // Success state feedback
    setStatusMessage({
      type: "success",
      text: "A password reset link has been sent to your email address.",
    });

    // Reset email field after sending
    setEmail("");
  };

  return (
    <section className="p-6 md:p-10 bg-blue-100 m-6 md:m-12 mt-12 rounded-xl flex justify-center items-center min-h-[70vh]">
      <div className="flex flex-col gap-6 justify-center items-center w-full max-w-md">
        
        {/* Header Icon */}
        <div className="bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center">
          <svg className="h-10 w-10 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
            <path d="M8 12L10 10.5L8 9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 12L14 10.5L16 9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 16L14.6667 15L13.3333 16L12 15L10.6667 16L9.33333 15L8 16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Header Text */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-2xl lg:text-4xl text-gray-800">
            Forgot your password?
          </h1>
          <p className="lg:text-base text-sm text-gray-600 mt-2">
            Enter your registered email, and we’ll send you a link to reset your password.
          </p>
        </div>

        {/* Message Alert Box */}
        {statusMessage.text && (
          <div
            className={`w-full p-3 rounded-md text-sm text-center ${
              statusMessage.type === "error"
                ? "bg-red-200 text-red-800"
                : statusMessage.type === "success"
                ? "bg-green-200 text-green-800"
                : "bg-blue-200 text-blue-800"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Reset Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 px-5 rounded-full focus:outline-none w-full bg-white shadow-sm text-sm"
              placeholder="Enter your registered email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-lg font-bold text-white bg-black hover:bg-gray-800 transition duration-200 p-2 px-5 rounded-full shadow-md"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login Link */}
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("login")}
          className="text-blue-700 hover:underline font-medium text-sm mt-2"
        >
          Back to Login
        </button>

      </div>
    </section>
  );
}
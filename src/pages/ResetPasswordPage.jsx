import React, { useState } from "react";

export default function ResetPasswordPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
  });
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage({ type: "", text: "" });

    // Validation 1: Passwords match
    if (formData.password1 !== formData.password2) {
      setStatusMessage({
        type: "error",
        text: "Passwords do not match. Please check and try again.",
      });
      return;
    }

    // Validation 2: Minimum length check
    if (formData.password1.length < 6) {
      setStatusMessage({
        type: "error",
        text: "Password must be at least 6 characters long.",
      });
      return;
    }

    // Success state feedback
    setStatusMessage({
      type: "success",
      text: "Your password has been successfully reset! Redirecting to login...",
    });

    // Clear inputs and navigate to login after delay
    setFormData({ password1: "", password2: "" });
    setTimeout(() => {
      if (onNavigate) onNavigate("login");
    }, 1500);
  };

  return (
    <section className="p-6 md:p-10 bg-blue-100 m-6 md:m-12 mt-12 rounded-xl flex justify-center items-center min-h-[70vh]">
      <div className="flex flex-col gap-6 justify-center items-center w-full max-w-md">
        
        {/* Lock Icon Header */}
        <div className="bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 6V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V6M9 11H15C15.5523 11 16 10.5523 16 10V7C16 6.44772 15.5523 6 15 6H9C8.44772 6 8 6.44772 8 7V10C8 10.5523 8.44772 11 9 11ZM5 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21Z" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="7.5" cy="17.5" r="1.5" fill="#1C274C" />
            <circle cx="12" cy="17.5" r="1.5" fill="#1C274C" />
            <circle cx="16.5" cy="17.5" r="1.5" fill="#1C274C" />
          </svg>
        </div>

        {/* Heading */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-2xl lg:text-4xl text-gray-800">
            Reset Your Password
          </h1>
          <p className="lg:text-base text-sm text-gray-600 mt-2">
            Please enter your new password below.
          </p>
        </div>

        {/* Dynamic Alerts */}
        {statusMessage.text && (
          <div
            className={`w-full p-3 rounded-md text-sm text-center ${
              statusMessage.type === "error"
                ? "bg-red-200 text-red-800"
                : "bg-green-200 text-green-800"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          
          {/* New Password Field */}
          <div className="flex items-center justify-start px-4 py-2 bg-white rounded-full shadow-sm">
            <svg className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 6V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V6M9 11H15C15.5523 11 16 10.5523 16 10V7C16 6.44772 15.5523 6 15 6H9C8.44772 6 8 6.44772 8 7V10C8 10.5523 8.44772 11 9 11ZM5 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21Z" />
              <circle cx="7.5" cy="17.5" r="1.5" fill="currentColor" />
              <circle cx="12" cy="17.5" r="1.5" fill="currentColor" />
              <circle cx="16.5" cy="17.5" r="1.5" fill="currentColor" />
            </svg>
            <input
              type="password"
              name="password1"
              value={formData.password1}
              onChange={handleChange}
              className="w-full focus:outline-none text-sm p-1 bg-transparent"
              placeholder="Enter new password"
              required
              autoComplete="new-password"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="flex items-center justify-start px-4 py-2 bg-white rounded-full shadow-sm">
            <svg className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 6V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V6M9 11H15C15.5523 11 16 10.5523 16 10V7C16 6.44772 15.5523 6 15 6H9C8.44772 6 8 6.44772 8 7V10C8 10.5523 8.44772 11 9 11ZM5 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21Z" />
              <circle cx="7.5" cy="17.5" r="1.5" fill="currentColor" />
              <circle cx="12" cy="17.5" r="1.5" fill="currentColor" />
              <circle cx="16.5" cy="17.5" r="1.5" fill="currentColor" />
            </svg>
            <input
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              className="w-full focus:outline-none text-sm p-1 bg-transparent"
              placeholder="Confirm new password"
              required
              autoComplete="new-password"
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full text-lg font-bold text-white bg-black hover:bg-gray-800 transition duration-200 py-2 px-5 rounded-full shadow-md mt-2"
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login */}
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
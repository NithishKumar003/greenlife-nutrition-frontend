import React, { useState } from "react";

export default function LoginPage({ onNavigate, onLoginSuccess }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple client-side validation
    if (!formData.username || !formData.password) {
      setError("Invalid credentials. Please check your username or password.");
      return;
    }

    // Trigger success callback (sets isAuthenticated to true in App.jsx)
    if (onLoginSuccess) {
      onLoginSuccess();
    }

    // Navigate to dashboard upon successful login
    if (onNavigate) {
      onNavigate("dashboard");
    }
  };

  return (
    <section className="p-6 m-6 md:m-12 mt-12 bg-blue-100 rounded-xl flex justify-center items-center min-h-[70vh]">
      <div className="flex flex-col gap-8 justify-center items-center w-full max-w-md">
        
        {/* Header Icon */}
        <div className="bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Heading */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-2xl lg:text-4xl text-gray-800">
            Sign in with your account
          </h1>
          <p className="lg:text-base text-sm text-gray-600 mt-2">
            Let's join our team and grow together. Make your life stronger and healthier.
          </p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="w-full bg-red-200 text-red-800 p-3 rounded-md text-sm text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          
          {/* Username Input */}
          <div className="flex items-center justify-start px-4 py-2 bg-white rounded-full shadow-sm">
            <svg className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
              <path d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345 c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345 C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203 c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958 c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064 c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571 c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637 L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136 C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435 C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959 l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959 C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8 V385.92z" />
            </svg>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full focus:outline-none text-sm p-1 bg-transparent"
              placeholder="Username"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center justify-start px-4 py-2 bg-white rounded-full shadow-sm">
            <svg className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 6V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V6M9 11H15C15.5523 11 16 10.5523 16 10V7C16 6.44772 15.5523 6 15 6H9C8.44772 6 8 6.44772 8 7V10C8 10.5523 8.44772 11 9 11ZM5 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21Z" />
              <circle cx="7.5" cy="17.5" r="1.5" fill="currentColor" />
              <circle cx="12" cy="17.5" r="1.5" fill="currentColor" />
              <circle cx="16.5" cy="17.5" r="1.5" fill="currentColor" />
            </svg>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full focus:outline-none text-sm p-1 bg-transparent"
              placeholder="Password"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("forgot-password")}
            className="text-xs sm:text-sm text-right pr-2 text-blue-700 hover:underline self-end"
          >
            Forgot Password?
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-lg font-bold text-white bg-black hover:bg-gray-800 transition-colors py-2 px-5 rounded-full shadow-md mt-2"
          >
            Submit
          </button>
        </form>

        {/* Register Section */}
        <div className="flex gap-3 items-center mt-2">
          <span className="text-sm text-gray-700">New here?</span>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("register")}
            className="py-1 px-4 text-sm bg-blue-300 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 font-medium"
          >
            Register
          </button>
        </div>

      </div>
    </section>
  );
}
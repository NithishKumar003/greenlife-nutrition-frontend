import React, { useState } from "react";
import { UserCheck, Camera, CheckCircle } from "lucide-react";

export default function CompleteProfilePage({ currentUser, onSave, onNavigate }) {
  // Initialize state with existing global user data or defaults
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    username: currentUser?.username || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
    age: currentUser?.age || "",
    weight: currentUser?.weight || "",
    height: currentUser?.height || "",
    address: currentUser?.address || "",
  });

  const [imagePreview, setImagePreview] = useState(
    currentUser?.profileImage || "https://via.placeholder.com/150"
  );

  const [errors, setErrors] = useState({});

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Profile Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation Example
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Update global App state
    if (onSave) {
      onSave({ ...formData, profileImage: imagePreview });
    }

    alert("Profile completed successfully!");

    // Navigate straight to dashboard upon completion
    if (onNavigate) {
      onNavigate("dashboard");
    }
  };

  return (
    <section className="p-5 m-4 md:m-10 rounded-xl h-full bg-blue-300 font-sans">
      <div className="flex flex-col gap-8 justify-center items-center">
        
        {/* Header Icon */}
        <div className="bg-white/80 p-3 rounded-full shadow-sm text-blue-600">
          <UserCheck className="h-10 w-10" />
        </div>

        {/* Title & Description */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-2xl lg:text-4xl text-gray-800">
            Complete your Profile
          </h1>
          <p className="lg:text-lg text-sm text-gray-700 mt-2 max-w-xl">
            Let's join our team and we grow together, Make your life stronger and healthier.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full lg:w-1/2">
          
          {/* Profile Image Upload Section */}
          <div className="flex flex-col items-center justify-center gap-3 bg-white/40 p-4 rounded-xl border border-white/50">
            <label className="font-semibold text-sm text-gray-700">
              Profile Image
            </label>

            <div className="relative group">
              <img
                src={imagePreview}
                alt="Profile Photo"
                className="h-24 w-24 rounded-full border-2 border-blue-500 object-cover shadow-sm"
              />
              <label 
                htmlFor="profile_image_input" 
                className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full cursor-pointer hover:bg-blue-700 transition"
              >
                <Camera className="w-4 h-4" />
              </label>
            </div>

            <input
              id="profile_image_input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-xs text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
            />
          </div>

          {/* Form Input Fields */}
          <FormField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <FormField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />

          <FormField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <FormField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <FormField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
          />

          <FormField
            label="Weight (kg)"
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleChange}
          />

          <FormField
            label="Height (cm)"
            name="height"
            type="number"
            value={formData.height}
            onChange={handleChange}
          />

          <FormField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="text-xl font-bold text-white bg-black hover:bg-gray-800 p-2.5 px-8 rounded-full transition cursor-pointer shadow-md flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5" /> Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

// Helper Form Field Component
function FormField({ label, name, type = "text", value, onChange, error }) {
  return (
    <div className="flex flex-col bg-white rounded-xl p-2 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <label className="font-semibold text-sm px-2 text-gray-600">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full text-sm font-semibold text-gray-800 p-2 text-right focus:outline-none bg-transparent"
        />
      </div>
      {error && <p className="text-red-600 text-xs px-2 pt-1">{error}</p>}
    </div>
  );
}
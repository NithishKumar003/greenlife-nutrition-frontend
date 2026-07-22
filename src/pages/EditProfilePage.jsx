import React, { useState } from "react";
import { Camera, ArrowLeft, Save } from "lucide-react";

export default function EditProfilePage({ currentUser, onSave, onNavigate }) {
  // Initial form state (populated with existing user data)
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || "John",
    lastName: currentUser?.lastName || "Doe",
    username: currentUser?.username || "johndoe",
    email: currentUser?.email || "john@example.com",
    phone: currentUser?.phone || "+1 234 567 890",
    age: currentUser?.age || 28,
    weight: currentUser?.weight || 75,
    height: currentUser?.height || 178,
    address: currentUser?.address || "123 Health Ave, Green City",
  });

  const [imagePreview, setImagePreview] = useState(
    currentUser?.profileImage || "https://via.placeholder.com/150"
  );
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (onSave) {
      onSave({ ...formData, profileImage: imagePreview });
    }

    alert("Profile updated successfully!");
    // NAVIGATE BACK TO DASHBOARD USING YOUR STATE HANDLER
    if (onNavigate) onNavigate("dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-blue-200 font-sans">
      <div className="bg-blue-100 shadow-xl rounded-2xl p-8 w-full max-w-xl">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Edit Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* PROFILE IMAGE UPLOAD */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mb-3 shadow-md"
              />
              <label 
                htmlFor="profile_image_input" 
                className="absolute bottom-3 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer shadow-lg transition"
              >
                <Camera className="w-5 h-5" />
              </label>
            </div>

            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Change Profile Image:
            </label>

            <input
              id="profile_image_input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
            />
          </div>

          {/* FORM FIELDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <FormField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
            <FormField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={errors.lastName} />
            <FormField label="Username" name="username" value={formData.username} onChange={handleChange} error={errors.username} />
            <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
            <FormField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
            <FormField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} />
            <FormField label="Weight (kg)" name="weight" type="number" value={formData.weight} onChange={handleChange} />
            <FormField label="Height (cm)" name="height" type="number" value={formData.height} onChange={handleChange} />
            <div className="md:col-span-2">
              <FormField label="Address" name="address" value={formData.address} onChange={handleChange} />
            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-green-500 transition shadow-md cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>

          {/* BACK TO DASHBOARD BUTTON */}
          <div className="flex justify-center mt-3">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("dashboard")}
              className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> ← Back to Dashboard
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

function FormField({ label, name, type = "text", value, onChange, error }) {
  return (
    <div className="flex flex-col bg-white rounded-xl p-2 border border-gray-100 shadow-sm">
      <label className="text-xs font-semibold text-gray-500 px-2 pt-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full text-sm font-semibold text-gray-800 p-2 focus:outline-none bg-transparent"
      />
      {error && <p className="text-red-600 text-xs px-2 pb-1">{error}</p>}
    </div>
  );
}
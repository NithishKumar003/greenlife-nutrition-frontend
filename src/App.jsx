import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Page component imports
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import EditProfilePage from "./pages/EditProfilePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import CompleteProfilePage from "./pages/CompleteProfilePage.jsx";
import HealthReportCard from "./pages/HealthReportCard.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Global User State
  const [currentUser, setCurrentUser] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    age: 28,
    weight: 75,
    height: 178,
    address: "123 Health Ave, Green City",
    profileImage: null,
    role: "admin",
  });

  // FIX 1: DEFINE SHARE DATA STATE
  const [shareData] = useState({
    token: "greenlife-report-8921",
    age: 28,
    height: 178,
    weight: 75,
    created_at: "July 22, 2026",
    fat_results: {
      bmi: "23.6",
      bmr: "1750 kcal",
      body_fat: "18.5%",
      visceral_fat: "6",
      body_age: "26",
    },
  });

  // FIX 2: DEFINE PDF DOWNLOAD HANDLER
  const handleDownloadPdf = (token) => {
    alert(`Downloading PDF report for token: ${token}`);
  };

  const handleUpdateUser = (updatedData) => {
    setCurrentUser((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("home");
  };

  // FIX 3: ADD 'health-report' TO PREVENT NAVBAR/FOOTER OVERLAP
  const isDashboardView =
    currentPage === "dashboard" ||
    currentPage === "edit-profile" ||
    currentPage === "complete-profile" ||
    currentPage === "health-report";

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return HomePage ? <HomePage onNavigate={handleNavigate} /> : <FallbackPage title="Home Page" />;
      case "about":
        return AboutPage ? <AboutPage /> : <FallbackPage title="About Us" />;
      case "services":
        return ServicesPage ? <ServicesPage /> : <FallbackPage title="Services" />;
      case "contact":
        return ContactPage ? <ContactPage /> : <FallbackPage title="Contact Us" />;
      case "dashboard":
        return DashboardPage ? (
          <DashboardPage 
            currentUser={currentUser} 
            onNavigate={handleNavigate}
            onLogout={handleLogout} 
          />
        ) : (
          <FallbackPage title="Dashboard / Nutritional Store" />
        );
      case "edit-profile":
        return EditProfilePage ? (
          <EditProfilePage 
            currentUser={currentUser} 
            onSave={handleUpdateUser} 
            onNavigate={handleNavigate} 
          />
        ) : (
          <FallbackPage title="Edit Profile" />
        );
      case "complete-profile":
        return CompleteProfilePage ? (
          <CompleteProfilePage 
            currentUser={currentUser} 
            onSave={handleUpdateUser} 
            onNavigate={handleNavigate} 
          />
        ) : (
          <FallbackPage title="Complete Profile" />
        );
      case "health-report":
        return HealthReportCard ? (
          <HealthReportCard 
            user={currentUser} 
            share={shareData} 
            onNavigate={handleNavigate}
            onDownloadPdf={handleDownloadPdf}
          />
        ) : (
          <FallbackPage title="Health Report Details" />
        );
      case "login":
        return LoginPage ? (
          <LoginPage
            onNavigate={handleNavigate}
            onLoginSuccess={() => setIsAuthenticated(true)}
          />
        ) : (
          <FallbackPage title="Login Page" />
        );
      case "register":
        return <RegisterPage onNavigate={handleNavigate} />;
      case "forgot-password":
        return <ForgotPasswordPage onNavigate={handleNavigate} />;
      case "reset-password":
        return <ResetPasswordPage onNavigate={handleNavigate} />;
      default:
        return HomePage ? <HomePage onNavigate={handleNavigate} /> : <FallbackPage title="Home Page" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      {!isDashboardView && (
        <Navbar
          isAuthenticated={isAuthenticated}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      )}

      <main className="flex-grow">{renderPage()}</main>

      {!isDashboardView && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

function FallbackPage({ title }) {
  return (
    <div className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-bold text-gray-700">{title}</h1>
      <p className="text-gray-500 mt-2">
        This section is ready and connected to your navigation.
      </p>
    </div>
  );
}
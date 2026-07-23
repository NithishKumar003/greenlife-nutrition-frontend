import React, { useState, useEffect } from "react";
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
import DownlineActivitiesPage from "./pages/DownlineActivitiesPage";

// Utility & Policy Page Imports
import PrivacyPolicyPage from "./pages/PrivacyPolicy.jsx";
import NotFoundPage from "./pages/NotFound.jsx";

// LIST OF VALID ROUTES SUPPORTED BY THE APP
const VALID_ROUTES = [
  "",
  "home",
  "about",
  "services",
  "contact",
  "privacy",
  "privacy-policy",
  "dashboard",
  "downline-activities",
  "edit-profile",
  "complete-profile",
  "health-report",
  "login",
  "register",
  "forgot-password",
  "reset-password",
];

// HELPER: Extract route key from URL path
const getInitialRoute = () => {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (path === "") return "home";
  return VALID_ROUTES.includes(path) ? path : "404";
};

export default function App() {
  // Read current URL path on first load
  const [currentPage, setCurrentPage] = useState(getInitialRoute);

  // PERSIST AUTH STATE IN LOCALSTORAGE SO REFRESHING DOESN'T LOG OUT USER
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  // Synchronize state when user clicks Browser Back/Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialRoute());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
    role: "admin", // 'admin' or 'superadmin'
  });

  // SHARE DATA STATE
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

  // PDF DOWNLOAD HANDLER
  const handleDownloadPdf = (token) => {
    alert(`Downloading PDF report for token: ${token}`);
  };

  const handleUpdateUser = (updatedData) => {
    setCurrentUser((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  // UPDATED NAVIGATION LOGIC WITH ROUTE PROTECTION & BROWSER URL SYNC
  const handleNavigate = (page) => {
    const protectedPages = [
      "dashboard", 
      "edit-profile", 
      "complete-profile", 
      "health-report",
      "downline-activities",
    ];

    let targetPage = page;

    // If attempting to access protected route without login, go to login
    if (protectedPages.includes(page) && !isAuthenticated) {
      targetPage = "login";
    }

    setCurrentPage(targetPage);

    // Sync address bar URL without reloading the page
    const targetUrl = targetPage === "home" ? "/" : `/${targetPage}`;
    window.history.pushState({ page: targetPage }, "", targetUrl);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoginSuccess = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
    handleNavigate("dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    handleNavigate("home");
  };

  // CHECK DASHBOARD VIEW FOR NAVBAR/FOOTER VISIBILITY
  // ONLY HIDE NAVBAR/FOOTER IF THE USER IS ACTIVELY AUTHENTICATED & ON DASHBOARD
  const isDashboardView =
    isAuthenticated &&
    (currentPage === "dashboard" ||
      currentPage === "edit-profile" ||
      currentPage === "complete-profile" ||
      currentPage === "health-report" ||
      currentPage === "downline-activities");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return HomePage ? <HomePage isAuthenticated={isAuthenticated} onNavigate={handleNavigate} /> : <FallbackPage title="Home Page" />;

      case "about":
        return AboutPage ? <AboutPage onNavigate={handleNavigate} /> : <FallbackPage title="About Us" />;

      case "services":
        return ServicesPage ? <ServicesPage onNavigate={handleNavigate} /> : <FallbackPage title="Services" />;

      case "contact":
        return ContactPage ? <ContactPage onNavigate={handleNavigate} /> : <FallbackPage title="Contact Us" />;

      case "privacy":
      case "privacy-policy":
        return PrivacyPolicyPage ? <PrivacyPolicyPage onNavigate={handleNavigate} /> : <FallbackPage title="Privacy Policy" />;

      case "dashboard":
        if (!isAuthenticated) return <LoginPage onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
        return DashboardPage ? (
          <DashboardPage 
            currentUser={currentUser} 
            onNavigate={handleNavigate}
            onLogout={handleLogout} 
          />
        ) : (
          <FallbackPage title="Dashboard / Nutritional Store" />
        );

      case "downline-activities":
        if (!isAuthenticated) return <LoginPage onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
        return DownlineActivitiesPage ? (
          <DownlineActivitiesPage 
            user={currentUser} 
            onBack={() => handleNavigate("dashboard")} 
          />
        ) : (
          <FallbackPage title="Downline Activities Page" />
        );

      case "edit-profile":
        if (!isAuthenticated) return <LoginPage onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
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
        if (!isAuthenticated) return <LoginPage onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
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
        if (!isAuthenticated) return <LoginPage onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
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
            onLoginSuccess={handleLoginSuccess}
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

      case "404":
        return NotFoundPage ? <NotFoundPage onNavigate={handleNavigate} /> : <FallbackPage title="404 Page Not Found" />;

      default:
        return NotFoundPage ? <NotFoundPage onNavigate={handleNavigate} /> : <FallbackPage title="404 Page Not Found" />;
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
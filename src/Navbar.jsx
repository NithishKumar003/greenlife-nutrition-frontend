import React, { useState } from "react";

export default function Navbar({ isAuthenticated = false, onNavigate, onLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Helper to handle navigation & close mobile menu
  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to log out?")) {
      if (onLogout) onLogout();
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Navbar Header */}
      <section className="h-16">
        <div className="fixed top-0 left-0 right-0 z-50 bg-blue-200/50 backdrop-blur-md shadow-md flex justify-between items-center p-4">
          <div>
            <button
              onClick={() => handleNavClick("home")}
              className="font-bold text-xl text-gray-800 hover:text-blue-700 transition cursor-pointer"
            >
              GreenLife Nutritions
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:gap-6 font-medium text-gray-700">
            {isAuthenticated ? (
              <>
                <button
                  className="hover:text-blue-700 flex items-center justify-center gap-2 cursor-pointer transition"
                  onClick={() => handleNavClick("dashboard")}
                >
                  <ProfileIcon />
                  <span>Dashboard</span>
                </button>
                <button
                  className="hover:text-blue-700 flex items-center justify-center gap-2 cursor-pointer transition"
                  onClick={() => handleNavClick("services")}
                >
                  <ServicesIcon />
                  <span>Services</span>
                </button>
                <button
                  className="hover:text-blue-700 flex items-center justify-center gap-2 cursor-pointer transition"
                  onClick={() => handleNavClick("contact")}
                >
                  <ContactIcon />
                  <span>Contact</span>
                </button>
                <button
                  className="hover:text-red-600 flex items-center justify-center gap-2 cursor-pointer transition"
                  onClick={handleLogout}
                >
                  <LogoutIcon />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <button
                  className="hover:text-blue-700 flex items-center justify-center gap-2 cursor-pointer transition"
                  onClick={() => handleNavClick("about")}
                >
                  <AboutIcon />
                  <span>About</span>
                </button>
                <button
                  className="hover:text-blue-700 flex items-center justify-center gap-2 cursor-pointer transition"
                  onClick={() => handleNavClick("services")}
                >
                  <ServicesIcon />
                  <span>Services</span>
                </button>
                <button
                  className="hover:text-blue-700 flex items-center justify-center gap-2 cursor-pointer transition"
                  onClick={() => handleNavClick("contact")}
                >
                  <ContactIcon />
                  <span>Contact</span>
                </button>
                <button
                  className="hover:text-blue-700 flex items-center justify-center gap-2 cursor-pointer transition"
                  onClick={() => handleNavClick("login")}
                >
                  <LoginIcon />
                  <span>Login</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-blue-300/50 transition cursor-pointer"
            >
              <MenuGridIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Mobile-view Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="z-50 bg-blue-100/90 backdrop-blur-md fixed top-16 inset-x-5 lg:hidden grid grid-cols-2 p-4 rounded-2xl shadow-2xl border border-blue-200 text-gray-800">
          {isAuthenticated ? (
            <>
              <button
                className="flex items-center justify-center gap-2 p-3 border-b border-r border-blue-200 hover:text-blue-700 cursor-pointer"
                onClick={() => handleNavClick("dashboard")}
              >
                <ProfileIcon />
                <span>Dashboard</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 p-3 border-b border-blue-200 hover:text-blue-700 cursor-pointer"
                onClick={() => handleNavClick("services")}
              >
                <ServicesIcon />
                <span>Services</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 p-3 border-r border-blue-200 hover:text-blue-700 cursor-pointer"
                onClick={() => handleNavClick("contact")}
              >
                <ContactIcon />
                <span>Contact</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 p-3 hover:text-red-600 cursor-pointer"
                onClick={handleLogout}
              >
                <LogoutIcon />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <button
                className="flex items-center justify-center gap-2 p-3 border-b border-r border-blue-200 hover:text-blue-700 cursor-pointer"
                onClick={() => handleNavClick("about")}
              >
                <AboutIcon />
                <span>About</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 p-3 border-b border-blue-200 hover:text-blue-700 cursor-pointer"
                onClick={() => handleNavClick("services")}
              >
                <ServicesIcon />
                <span>Services</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 p-3 border-r border-blue-200 hover:text-blue-700 cursor-pointer"
                onClick={() => handleNavClick("contact")}
              >
                <ContactIcon />
                <span>Contact</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 p-3 hover:text-blue-700 cursor-pointer"
                onClick={() => handleNavClick("login")}
              >
                <LoginIcon />
                <span>Login</span>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

/* SVG Icon Helper Components */

const ProfileIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm0 4c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
  </svg>
);

const ServicesIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const ContactIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const AboutIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
  </svg>
);

const LoginIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
  </svg>
);

const MenuGridIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
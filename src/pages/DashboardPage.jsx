import React, { useState } from "react";
import { Link } from "react-router-dom"; // Optional: Use Link if using react-router-dom
import { 
  User, 
  Crosshair, 
  ShoppingBag, 
  ShieldAlert, 
  LogOut, 
  Menu, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Leaf,
  AlertCircle
} from "lucide-react";

export default function DashboardPage({ currentUser, onNavigate, onLogout }) {
  // Navigation & UI States
  const [activeTab, setActiveTab] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeframe, setTimeframe] = useState("daily");

  // Fallback to local user if currentUser isn't passed yet
  const user = currentUser || {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@example.com",
    phone: "",
    age: "",
    weight: "",
    height: "",
    address: "",
    profileImage: null,
    role: "admin",
  };

  // Check if profile is incomplete (missing key fields)
  const isProfileIncomplete = 
    !user.age || 
    !user.weight || 
    !user.height || 
    !user.phone || 
    !user.address;

  const [fatResults] = useState({
    bodyFat: "18.5%",
    visceralFat: "6",
    bmr: "1750 kcal",
    bmi: "23.6",
    bodyAge: "26",
  });

  // Downline Form & State
  const [downlineForm, setDownlineForm] = useState({ username: "", email: "", password: "" });
  const [downlines, setDownlines] = useState([
    { id: 1, username: "alex_smith", email: "alex@example.com" },
    { id: 2, username: "sarah_m", email: "sarah@example.com" },
  ]);

  const handleAddDownline = (e) => {
    e.preventDefault();
    if (!downlineForm.username || !downlineForm.email) return;
    setDownlines([...downlines, { id: Date.now(), ...downlineForm }]);
    setDownlineForm({ username: "", email: "", password: "" });
  };

  return (
    /* STANDALONE OVERLAY CONTAINER: Shields the page from external site Header & Footer */
    <div className="fixed inset-0 w-screen h-screen bg-blue-100 flex flex-col overflow-hidden font-sans z-50">
      
      {/* 1. DASHBOARD HEADER BAR */}
      <header className="h-16 w-full bg-blue-600 text-white flex items-center justify-between px-4 lg:px-8 z-50 shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Toggle Button */}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-blue-700 transition"
            aria-label="Toggle Navigation Sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* CLICKABLE BRANDING */}
          <a 
            href="/" 
            className="flex items-center gap-2 text-white font-bold text-xl tracking-wide hover:opacity-90 transition group"
          >
            <div className="bg-white text-blue-600 p-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 text-green-600 fill-green-600" />
            </div>
            <span>GreenLife Nutrition</span>
          </a>
        </div>

        {/* Right User Avatar Indicator */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium hidden sm:inline">Welcome, {user.firstName}</span>
          <img 
            src={user.profileImage || "https://via.placeholder.com/150"} 
            alt="User Avatar" 
            className="w-9 h-9 rounded-full border-2 border-white object-cover"
          />
        </div>
      </header>

      {/* 2. BODY WRAPPER (Sidebar + Main View Content Below Header) */}
      <div className="flex flex-1 h-[calc(100vh-4rem)] relative overflow-hidden">
        
        {/* Mobile Drawer Backdrop */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)} 
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}

        {/* SIDEBAR NAVIGATION */}
        <aside className={`
          absolute lg:relative top-0 left-0 z-40
          h-full w-72 bg-blue-200 p-6 flex flex-col justify-between items-center
          transition-transform duration-300 shadow-xl lg:shadow-none shrink-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          <div className="w-full flex flex-col items-center">
            {/* User Profile Banner Header */}
            <div className="flex flex-col items-center gap-3 mt-4 lg:mt-2 mb-6">
              <img 
                src={user.profileImage || "https://via.placeholder.com/150"} 
                alt="Profile" 
                className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
              />
              <h1 className="text-lg font-bold text-gray-800">
                Mr. {user.firstName || "Customer"}
              </h1>
            </div>

            {/* Nav Items */}
            <nav className="w-full space-y-2">
              <NavItem 
                icon={<User className="w-5 h-5" />} 
                label="Profile" 
                active={activeTab === "profile"} 
                onClick={() => { setActiveTab("profile"); setSidebarOpen(false); }} 
              />
              <NavItem 
                icon={<Crosshair className="w-5 h-5" />} 
                label="Tracker" 
                active={activeTab === "tracker"} 
                onClick={() => { setActiveTab("tracker"); setSidebarOpen(false); }} 
              />
              <NavItem 
                icon={<ShoppingBag className="w-5 h-5" />} 
                label="Products" 
                active={activeTab === "products"} 
                onClick={() => { setActiveTab("products"); setSidebarOpen(false); }} 
              />
              <NavItem 
                icon={<ShieldAlert className="w-5 h-5" />} 
                label={
                  user.role === "superadmin" ? "Super Admin Panel" : 
                  user.role === "admin" ? "Admin Panel" : "Be an Admin"
                } 
                active={activeTab === "beadmin"} 
                onClick={() => { setActiveTab("beadmin"); setSidebarOpen(false); }} 
              />
            </nav>
          </div>

          {/* Logout Action */}
          <button
                type="button"
                onClick={() => {
                if (onLogout) {
                    onLogout();
                } else if (onNavigate) {
                    onNavigate("login");
                }
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition cursor-pointer"
            >
                Logout
            </button>
        </aside>

        {/* MAIN DASHBOARD CONTENT AREA */}
        <main className="flex-1 h-full overflow-y-auto p-6 lg:p-10">
          
          {/* SECTION 1: PROFILE TAB */}
          {activeTab === "profile" && (
            <section className="flex flex-col gap-6 animate-fadeIn">
              
              {/* INCOMPLETE PROFILE WARNING BANNER */}
              {isProfileIncomplete && (
                <div className="bg-amber-100 border-l-4 border-amber-500 p-4 rounded-r-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-amber-800 text-base">Your profile is incomplete!</h3>
                      <p className="text-amber-700 text-xs mt-0.5">
                        Complete your health metrics to receive personal body composition and tracking analysis.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate("complete-profile")}
                    className="px-5 py-2 bg-amber-600 text-white font-semibold text-xs rounded-xl hover:bg-amber-700 transition cursor-pointer shadow-sm whitespace-nowrap self-end md:self-auto"
                  >
                    Complete Profile Now
                  </button>
                </div>
              )}

              {/* User Greeting Banner */}
              <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-sm">
                <img 
                  src={user.profileImage || "https://via.placeholder.com/150"} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-xl border p-1 object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold">Hello, <span className="font-light">Mr. {user.firstName}</span></h1>
                  <p className="text-gray-500 text-sm mt-1">Welcome back to your personal health dashboard.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Detailed User Information Cards */}
                <div className="lg:col-span-2 bg-blue-300/40 backdrop-blur border p-6 rounded-2xl space-y-3">
                  <DetailRow label="Username" value={user.username} />
                  <DetailRow label="Full Name" value={`${user.firstName} ${user.lastName}`} />
                  <DetailRow label="Email" value={user.email} />
                  <DetailRow label="Phone" value={user.phone} />
                  <DetailRow label="Age" value={user.age} />
                  <DetailRow label="Weight" value={user.weight ? `${user.weight} kg` : null} />
                  <DetailRow label="Height" value={user.height ? `${user.height} cm` : null} />
                  <DetailRow label="Address" value={user.address} />

                  {/* ACTION BUTTONS (Edit Profile & Conditional Complete Profile) */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <button 
                      type="button"
                      onClick={() => onNavigate && onNavigate("edit-profile")}
                      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition cursor-pointer shadow-md text-sm"
                    >
                      Edit Profile
                    </button>

                    {/* ONLY DISPLAYED WHEN PROFILE IS INCOMPLETE */}
                    {isProfileIncomplete && (
                      <button 
                        type="button"
                        onClick={() => onNavigate && onNavigate("complete-profile")}
                        className="px-6 py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition cursor-pointer shadow-md text-sm"
                      >
                        Complete Profile
                      </button>
                    )}
                  </div>  
                </div>

                {/* Body Composition Summary Panel */}
                <div className="bg-blue-200/60 p-6 rounded-2xl flex flex-col justify-between border">
                  <div>
                    <h2 className="font-bold text-center text-lg mb-4">Hey {user.username}, here are your results:</h2>
                    <div className="bg-blue-50 p-4 rounded-xl space-y-2 text-sm">
                      <ResultRow label="Body Fat" value={fatResults.bodyFat} />
                      <ResultRow label="Visceral Fat" value={fatResults.visceralFat} />
                      <ResultRow label="BMR" value={fatResults.bmr} />
                      <ResultRow label="BMI" value={fatResults.bmi} />
                      <ResultRow label="Body Age" value={fatResults.bodyAge} />
                    </div>
                  </div>

                  <button 
                        type="button"
                        onClick={() => onNavigate && onNavigate("health-report")}
                        className="mt-6 w-full flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-700 border border-blue-300 font-semibold p-3 rounded-xl shadow-sm transition active:scale-95 cursor-pointer"
                    >
                        <Share2 className="w-4 h-4" /> Share Results
                    </button>
                </div>
              </div>
            </section>
          )}

          {/* SECTION 2: TRACKER TAB */}
          {activeTab === "tracker" && (
            <section className="space-y-8 animate-fadeIn">
              <h1 className="text-3xl font-bold">Weight & Health Tracker</h1>

              {/* Timeframe selector + Chart Container */}
              <div className="bg-blue-200/50 p-6 rounded-2xl border space-y-4">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h2 className="font-bold text-lg">Weight Tracker 📊</h2>
                  <div className="flex gap-2">
                    {["daily", "weekly", "monthly", "yearly"].map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setTimeframe(tf)}
                        className={`px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                          timeframe === tf ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chart Canvas Area */}
                <div className="bg-white h-64 rounded-xl flex items-center justify-center text-gray-400 border border-dashed border-gray-300">
                  Chart Visualization ({timeframe.toUpperCase()})
                </div>
              </div>

              {/* Interactive Fat Calculator Form */}
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-6">
                <h2 className="text-xl font-bold">Fat Calculator</h2>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Age</label>
                    <input type="number" defaultValue={user.age} className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Height (cm)</label>
                    <input type="number" defaultValue={user.height} className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Weight (kg)</label>
                    <input type="number" defaultValue={user.weight} className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" />
                  </div>
                  <div className="md:col-span-3">
                    <button type="button" className="w-full bg-blue-600 text-white font-bold p-3 rounded-xl hover:bg-blue-700 transition">
                      Calculate Metrics
                    </button>
                  </div>
                </form>
              </div>
            </section>
          )}

          {/* SECTION 3: PRODUCTS TAB */}
          {activeTab === "products" && (
            <section className="space-y-6 animate-fadeIn">
              <div className="bg-blue-600 text-white p-6 rounded-2xl text-center shadow-lg">
                <h1 className="text-3xl font-bold">Our Health Products</h1>
                <p className="text-blue-100 text-sm mt-1">Discover wellness supplements designed for your needs.</p>
              </div>

              {/* Category Dropdowns / Filters */}
              <div className="flex gap-4 flex-wrap">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold">All</button>
                <button className="bg-white border text-gray-700 px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                  Main Category <ChevronDown className="w-4 h-4" />
                </button>
                <button className="bg-white border text-gray-700 px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                  Sub Category <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Product Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-white border p-4 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition">
                    <img src="https://via.placeholder.com/150" alt="Product" className="w-32 h-32 rounded-xl object-cover" />
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-bold text-lg">Green Vitality Pack</h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-3">
                          Rich in nutrients and essential minerals tailored for maintaining optimal metabolism and daily endurance.
                        </p>
                      </div>
                      <button className="bg-blue-600 text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition self-start mt-2">
                        Know More
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center gap-3 pt-4">
                <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"><ChevronLeft className="w-5 h-5" /></button>
                <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </section>
          )}

          {/* SECTION 4: ADMIN / SUPER ADMIN PORTAL */}
          {activeTab === "beadmin" && (
            <section className="space-y-6 animate-fadeIn">
              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h2 className="text-xl font-bold">
                  Hello {user.firstName}! You are currently logged in as <span className="text-blue-600 capitalize">{user.role}</span>.
                </h2>
              </div>

              {user.role === "admin" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Downline User Creation Form */}
                  <form onSubmit={handleAddDownline} className="bg-blue-200/60 p-6 rounded-2xl border space-y-4">
                    <h3 className="font-bold text-lg">Add New Downline User</h3>
                    <input 
                      placeholder="Username" 
                      value={downlineForm.username}
                      onChange={(e) => setDownlineForm({ ...downlineForm, username: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white focus:outline-none text-sm" 
                      required 
                    />
                    <input 
                      placeholder="Email" 
                      type="email" 
                      value={downlineForm.email}
                      onChange={(e) => setDownlineForm({ ...downlineForm, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white focus:outline-none text-sm" 
                      required 
                    />
                    <input 
                      placeholder="Password" 
                      type="password" 
                      value={downlineForm.password}
                      onChange={(e) => setDownlineForm({ ...downlineForm, password: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white focus:outline-none text-sm" 
                      required 
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold p-3 rounded-xl hover:bg-blue-700 transition">
                      Add Downline User
                    </button>
                  </form>

                  {/* Registered Downlines List */}
                  <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
                    <h3 className="font-bold text-lg">Your Downlines</h3>
                    {downlines.length > 0 ? (
                      <div className="divide-y space-y-2">
                        {downlines.map((dl) => (
                          <div key={dl.id} className="pt-2 flex justify-between items-center">
                            <div>
                              <p className="font-bold text-sm">{dl.username}</p>
                              <p className="text-xs text-gray-500">{dl.email}</p>
                            </div>
                            <button className="text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold px-3 py-1.5 rounded-lg border border-blue-200 transition">
                              Promote
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400">No downlines registered yet.</p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl text-center space-y-4 shadow-sm border">
                  <h3 className="text-2xl font-bold">Become an Admin</h3>
                  <p className="text-gray-600 max-w-md mx-auto text-sm">
                    Becoming an admin on our platform is completely free. Connect with nearby customers and direct local workflows.
                  </p>
                  <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition">
                    Contact Support
                  </button>
                </div>
              )}
            </section>
          )}

        </main>
      </div>
    </div>
  );
}

// Subcomponents
function NavItem({ icon, label, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3 rounded-xl font-medium text-sm transition-all ${
        active 
          ? "bg-blue-600 text-white shadow-md" 
          : "text-gray-700 hover:bg-blue-300/50 hover:text-blue-900"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="bg-white p-3 rounded-xl text-sm flex justify-between font-semibold">
      <span className="text-gray-500">{label}:</span>
      <span className={value ? "text-gray-800" : "text-amber-600 italic"}>
        {value || "Not provided"}
      </span>
    </div>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-blue-100 pb-1.5">
      <span className="font-bold text-gray-600">{label}:</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}
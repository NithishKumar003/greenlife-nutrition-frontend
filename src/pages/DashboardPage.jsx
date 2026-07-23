import React, { useState } from "react";
import { 
  User, 
  Crosshair, 
  ShoppingBag, 
  ShieldAlert, 
  Menu, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  AlertCircle,
  Video,
  PhoneCall,
  Calendar,
  Sparkles,
  LogOut,
  Clock,
  CalendarX,
  Dumbbell,
  Utensils,
  CheckCircle,
  Circle,
  Flame,
  Droplets
} from "lucide-react";

export default function DashboardPage({ currentUser, onNavigate, onLogout }) {
  // Navigation & UI States
  const [activeTab, setActiveTab] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Tracker States
  const [timeframe, setTimeframe] = useState("daily");
  const [calcInputs, setCalcInputs] = useState({ age: "26", height: "175", weight: "72" });
  const [fatResults, setFatResults] = useState({
    bodyFat: "18.5%",
    visceralFat: "6",
    bmr: "1750 kcal",
    bmi: "23.5",
    bodyAge: "25",
  });

  // Products Tab States
  const [selectedMainCat, setSelectedMainCat] = useState("All");
  const [selectedSubCat, setSelectedSubCat] = useState("All");
  const [showMainCatDropdown, setShowMainCatDropdown] = useState(false);
  const [showSubCatDropdown, setShowSubCatDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeViewProduct, setActiveViewProduct] = useState(null);

  // Diet & Fitness Checklist State
  const [completedTasks, setCompletedTasks] = useState({});

  const toggleTask = (id) => {
    setCompletedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Fallback user if currentUser isn't passed yet
  const user = currentUser || {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@example.com",
    phone: "",
    age: "26",
    weight: "72",
    height: "175",
    address: "",
    profileImage: null,
    role: "admin",
  };

  // Check if profile is incomplete
  const isProfileIncomplete = 
    !user.age || 
    !user.weight || 
    !user.height || 
    !user.phone || 
    !user.address;

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

  // Recalculate metrics on form submission
  const handleCalculateFat = (e) => {
    e.preventDefault();
    const w = parseFloat(calcInputs.weight) || 70;
    const h = (parseFloat(calcInputs.height) || 170) / 100;
    const bmiVal = (w / (h * h)).toFixed(1);
    const bmrVal = Math.round(10 * w + 6.25 * (h * 100) - 5 * (parseFloat(calcInputs.age) || 25) + 5);

    setFatResults({
      bodyFat: `${(bmiVal * 0.8 + 2).toFixed(1)}%`,
      visceralFat: Math.max(1, Math.round(bmiVal / 4)).toString(),
      bmr: `${bmrVal} kcal`,
      bmi: bmiVal.toString(),
      bodyAge: Math.max(18, Math.round(parseFloat(calcInputs.age || 25) - 1)).toString(),
    });
  };

  // Mock Products Database
  const mockProducts = [
    { id: 1, name: "Green Vitality Superfood Pack", mainCat: "Supplements", subCat: "Vitamins", desc: "Rich in minerals and organic phytonutrients tailored for maintaining optimal daily stamina.", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200" },
    { id: 2, name: "Whey Isolate Protein Powder", mainCat: "Nutrition", subCat: "Proteins", desc: "Pure cross-flow microfiltered whey isolate designed for fast post-workout muscle recovery.", img: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=200" },
    { id: 3, name: "Organic Multivitamin Daily Complex", mainCat: "Supplements", subCat: "Vitamins", desc: "Essential spectrum of bioavailable micronutrients for cellular rejuvenation and immunity.", img: "https://images.unsplash.com/photo-1550572017-edf7b6070622?auto=format&fit=crop&q=80&w=200" },
    { id: 4, name: "Omega-3 Pure Fish Oil Concentrate", mainCat: "Supplements", subCat: "Wellness", desc: "High potency EPA/DHA softgels supporting cognitive sharpness and cardiovascular integrity.", img: "https://images.unsplash.com/photo-1626015365107-1335b2e35a77?auto=format&fit=crop&q=80&w=200" },
    { id: 5, name: "Plant-Based Herbal Detox Tea", mainCat: "Beverages", subCat: "Wellness", desc: "Gentle cleansing blend formulated with chamomile, dandelion root, and lemongrass.", img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=200" },
    { id: 6, name: "BCAA Amino Acid Fuel (Watermelon)", mainCat: "Nutrition", subCat: "Proteins", desc: "2:1:1 branched-chain ratio to minimize muscle soreness and preserve endurance during training.", img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=200" },
    { id: 7, name: "Hydration Electrolyte Powder", mainCat: "Beverages", subCat: "Wellness", desc: "Zero-sugar fast absorbing hydration formula rich in potassium, magnesium, and marine salt.", img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=200" },
    { id: 8, name: "Pre-Workout Energy Booster", mainCat: "Nutrition", subCat: "Energy", desc: "Clean focus booster packed with beta-alanine, L-citrulline, and natural green coffee extract.", img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=200" },
  ];

  // Filtering Products
  const filteredProducts = mockProducts.filter(p => {
    const matchesMain = selectedMainCat === "All" || p.mainCat === selectedMainCat;
    const matchesSub = selectedSubCat === "All" || p.subCat === selectedSubCat;
    return matchesMain && matchesSub;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage) || 1;
  const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  // Dynamic Chart Data based on selected timeframe
  const chartDatasets = {
    daily: [
      { label: "Mon", val: 74 }, { label: "Tue", val: 73.5 }, { label: "Wed", val: 73.2 }, 
      { label: "Thu", val: 72.8 }, { label: "Fri", val: 72.5 }, { label: "Sat", val: 72.2 }, { label: "Sun", val: 72.0 }
    ],
    weekly: [
      { label: "W1", val: 76 }, { label: "W2", val: 75.1 }, { label: "W3", val: 73.8 }, { label: "W4", val: 72.0 }
    ],
    monthly: [
      { label: "Jan", val: 80 }, { label: "Feb", val: 78.5 }, { label: "Mar", val: 77.0 }, 
      { label: "Apr", val: 75.2 }, { label: "May", val: 74.0 }, { label: "Jun", val: 72.0 }
    ],
    yearly: [
      { label: "2023", val: 88 }, { label: "2024", val: 82 }, { label: "2025", val: 76 }, { label: "2026", val: 72 }
    ]
  };

  const activeDataset = chartDatasets[timeframe] || chartDatasets.daily;

  return (
    <div className="fixed inset-0 w-screen h-screen bg-sky-50/50 text-slate-800 flex flex-col overflow-hidden font-sans z-50">
      
      {/* 1. DASHBOARD HEADER BAR */}
      <header className="h-16 w-full bg-blue-100/50 border-b border-sky-100 text-slate-900 flex items-center justify-between px-4 lg:px-8 z-50 shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-xl text-sky-700 hover:text-sky-900 hover:bg-sky-50 transition cursor-pointer"
            aria-label="Toggle Navigation Sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>

          <button 
            onClick={() => onNavigate && onNavigate("home")} 
            className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-slate-900 hover:opacity-90 transition cursor-pointer"
          >
            {/* <div className="bg-sky-500/10 border border-sky-400/30 p-1.5 rounded-xl">
              <Sparkles className="w-5 h-5 text-sky-600" />
            </div> */}
            <span className="text-green-900">GreenLife <span>Nutrition</span></span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-600 hidden sm:inline">Welcome, {user.firstName}</span>
          <img 
            src={user.profileImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"} 
            alt="User Avatar" 
            className="w-9 h-9 rounded-full border-2 border-sky-500 object-cover shadow-sm"
          />
        </div>
      </header>

      {/* 2. BODY WRAPPER */}
      <div className="flex flex-1 h-[calc(100vh-4rem)] relative overflow-hidden">
        
        {/* Mobile Backdrop */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)} 
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 lg:hidden"
          />
        )}

        {/* SIDEBAR NAVIGATION */}
        <aside className={`
          absolute lg:relative top-0 left-0 z-40
          h-full w-72 bg-white border-r border-sky-100 p-6 flex flex-col justify-between items-center
          transition-transform duration-300 shadow-xl lg:shadow-none shrink-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          <div className="w-full flex flex-col items-center">
            {/* User Profile Banner Header */}
            <div className="flex flex-col items-center gap-3 mt-4 lg:mt-2 mb-6">
              <img 
                src={user.profileImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"} 
                alt="Profile" 
                className="w-24 h-24 rounded-2xl border-2 border-sky-400 object-cover shadow-md p-1 bg-sky-50"
              />
              <div className="text-center">
                <h1 className="text-base font-bold text-slate-900">
                  Mr. {user.firstName || "Customer"}
                </h1>
                <span className="inline-block mt-1 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 border border-sky-200 rounded-full">
                  {user.role} Account
                </span>
              </div>
            </div>

            {/* Nav Items */}
            <nav className="w-full space-y-1.5">
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
                icon={<Utensils className="w-5 h-5" />} 
                label="Diet & Workout Plan" 
                active={activeTab === "dietplan"} 
                onClick={() => { setActiveTab("dietplan"); setSidebarOpen(false); }} 
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

          <button
            type="button"
            onClick={() => {
              if (onLogout) onLogout();
              else if (onNavigate) onNavigate("login");
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </aside>

        {/* MAIN DASHBOARD CONTENT AREA */}
        <main className="flex-1 h-full overflow-y-auto p-6 lg:p-8 bg-sky-50/40 text-slate-800">
          
          {/* SECTION 1: PROFILE TAB */}
          {activeTab === "profile" && (
            <section className="flex flex-col gap-6 animate-fadeIn max-w-6xl mx-auto">
              
              {isProfileIncomplete && (
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-amber-900 text-sm">Your profile is incomplete!</h3>
                      <p className="text-amber-700 text-xs mt-0.5">
                        Complete your health metrics to receive personal body composition and tracking analysis.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate("complete-profile")}
                    className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition cursor-pointer shadow-sm whitespace-nowrap self-end md:self-auto"
                  >
                    Complete Profile Now
                  </button>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center gap-6 bg-white border border-sky-100 p-6 rounded-3xl shadow-sm">
                <img 
                  src={user.profileImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-2xl border-2 border-sky-400 object-cover p-1 bg-sky-50"
                />
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Hello, <span className="text-sky-600">Mr. {user.firstName}</span></h1>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">Welcome back to your personal health & nutrition dashboard.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-100/70 via-white to-white border border-sky-200/80 p-6 rounded-3xl space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Video className="w-4 h-4 text-sky-600" /> Active Program Services
                  </h3>
                  <span className="text-xs text-sky-700 font-semibold bg-sky-100/80 px-3 py-1 rounded-full border border-sky-200">
                    ● Coach Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-sky-50/60 p-3.5 rounded-2xl border border-sky-100 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-sky-600 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-500 font-medium">Daily Zoom Schedule</p>
                      <p className="text-xs font-bold text-slate-900">Mon – Sat: 8:00 - 9:00 AM</p>
                    </div>
                  </div>

                  <div className="bg-sky-50/60 p-3.5 rounded-2xl border border-sky-100 flex items-center gap-3">
                    <CalendarX className="w-5 h-5 text-rose-500 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-500 font-medium">Sunday Zoom</p>
                      <p className="text-xs font-bold text-rose-600">No Zoom (Rest Day)</p>
                    </div>
                  </div>

                  <div className="bg-sky-50/60 p-3.5 rounded-2xl border border-sky-100 flex items-center gap-3">
                    <PhoneCall className="w-5 h-5 text-blue-600 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-500 font-medium">Coach Helpline</p>
                      <p className="text-xs font-bold text-slate-900">24/7 Call & Chat Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white border border-sky-100 p-6 rounded-3xl space-y-3 shadow-sm">
                  <h3 className="text-sm font-bold text-sky-600 uppercase tracking-wider mb-2">Personal Metrics</h3>
                  <DetailRow label="Username" value={user.username} />
                  <DetailRow label="Full Name" value={`${user.firstName} ${user.lastName}`} />
                  <DetailRow label="Email" value={user.email} />
                  <DetailRow label="Phone" value={user.phone} />
                  <DetailRow label="Age" value={user.age} />
                  <DetailRow label="Weight" value={user.weight ? `${user.weight} kg` : null} />
                  <DetailRow label="Height" value={user.height ? `${user.height} cm` : null} />
                  <DetailRow label="Address" value={user.address} />

                  <div className="flex flex-wrap gap-3 pt-4">
                    <button 
                      type="button"
                      onClick={() => onNavigate && onNavigate("edit-profile")}
                      className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl transition cursor-pointer shadow-md text-xs"
                    >
                      Edit Profile
                    </button>

                    {isProfileIncomplete && (
                      <button 
                        type="button"
                        onClick={() => onNavigate && onNavigate("complete-profile")}
                        className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition cursor-pointer shadow-md text-xs"
                      >
                        Complete Profile
                      </button>
                    )}
                  </div>  
                </div>

                <div className="bg-white border border-sky-100 p-6 rounded-3xl flex flex-col justify-between shadow-sm">
                  <div>
                    <h2 className="font-bold text-center text-sm text-slate-800 mb-4">Body Metrics Overview</h2>
                    <div className="bg-sky-50/60 border border-sky-100 p-4 rounded-2xl space-y-2.5 text-xs">
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
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold p-3 rounded-xl shadow-md transition active:scale-95 cursor-pointer text-xs"
                  >
                    <Share2 className="w-4 h-4" /> Share Results
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* SECTION 2: TRACKER TAB */}
          {activeTab === "tracker" && (
            <section className="space-y-8 animate-fadeIn max-w-6xl mx-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-extrabold text-slate-900">Weight & Health Tracker</h1>
              </div>

              {/* 1. STEP TRACKER & GOOGLE FIT SYNC (FIRST) */}
              <div className="space-y-4">
                {/* Google Fit Sync Card */}
                <div className="bg-white border border-sky-100 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 text-xl font-bold">
                      👟
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Google Fit Step Sync</h3>
                      <p className="text-xs text-slate-500">Auto-sync your workouts and daily step count</p>
                    </div>
                  </div>

                  <button
                    onClick={() => alert("Syncing with Google Fit REST API...")}
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer"
                  >
                    Sync Google Fit Data
                  </button>
                </div>

                {/* Progress Bar Card */}
                <div className="bg-white border border-sky-100 rounded-3xl p-6 shadow-sm space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Today's Step Goal</p>
                      <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                        7,450 <span className="text-sm font-semibold text-slate-500">/ 10,000 steps</span>
                      </h2>
                    </div>
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      74% Target Reached
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden">
                    <div
                      className="bg-sky-500 h-full rounded-full transition-all duration-500"
                      style={{ width: "74%" }}
                    ></div>
                  </div>
                </div>

                {/* Daily Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-sky-50/50 border border-sky-100 p-5 rounded-2xl">
                    <p className="text-xs text-slate-500 font-semibold">Calories Burned</p>
                    <p className="text-xl font-bold text-slate-800 mt-1">298 kcal</p>
                  </div>
                  <div className="bg-sky-50/50 border border-sky-100 p-5 rounded-2xl">
                    <p className="text-xs text-slate-500 font-semibold">Distance Covered</p>
                    <p className="text-xl font-bold text-slate-800 mt-1">5.96 km</p>
                  </div>
                  <div className="bg-sky-50/50 border border-sky-100 p-5 rounded-2xl">
                    <p className="text-xs text-slate-500 font-semibold">GreenPoints Earned</p>
                    <p className="text-xl font-bold text-emerald-600 mt-1">+70 pts</p>
                  </div>
                </div>
              </div>


              {/* 2. BODY FAT & HEALTH CALCULATOR (MIDDLE - MATCHED WITH CHART) */}
              <div className="bg-white border border-sky-100 p-6 rounded-3xl space-y-6 shadow-sm">
                <div className="flex justify-between items-center border-b border-sky-100 pb-3">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Health & Body Fat Calculator</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Calculated based on standard clinical risk parameters</p>
                  </div>
                  <span className="text-xs font-bold bg-sky-100 text-sky-800 px-3 py-1 rounded-full border border-sky-200">
                    Live Analysis
                  </span>
                </div>

                <form onSubmit={handleCalculateFat} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Gender</label>
                    <select 
                      value={calcInputs.gender || "M"}
                      onChange={(e) => setCalcInputs({ ...calcInputs, gender: e.target.value })}
                      className="w-full p-3 bg-sky-50/50 border border-sky-200 text-slate-900 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-sm font-semibold"
                    >
                      <option value="M">Male (M)</option>
                      <option value="F">Female (F)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Age</label>
                    <input 
                      type="number" 
                      value={calcInputs.age} 
                      onChange={(e) => setCalcInputs({ ...calcInputs, age: e.target.value })}
                      className="w-full p-3 bg-sky-50/50 border border-sky-200 text-slate-900 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-sm font-semibold" 
                      placeholder="e.g. 28"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Height (cm)</label>
                    <input 
                      type="number" 
                      value={calcInputs.height} 
                      onChange={(e) => setCalcInputs({ ...calcInputs, height: e.target.value })}
                      className="w-full p-3 bg-sky-50/50 border border-sky-200 text-slate-900 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-sm font-semibold" 
                      placeholder="e.g. 175"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Weight (kg)</label>
                    <input 
                      type="number" 
                      value={calcInputs.weight} 
                      onChange={(e) => setCalcInputs({ ...calcInputs, weight: e.target.value })}
                      className="w-full p-3 bg-sky-50/50 border border-sky-200 text-slate-900 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-sm font-semibold" 
                      placeholder="e.g. 70"
                    />
                  </div>
                  <div className="md:col-span-4">
                    <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold p-3.5 rounded-xl transition shadow-md cursor-pointer text-xs uppercase tracking-wider">
                      Calculate Body Composition
                    </button>
                  </div>
                </form>

                {/* CALCULATED RESULTS GRID (WITH COLORED RISK INDICATORS FROM CHART) */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-xs pt-2">
                  {/* Body Fat % */}
                  <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 text-center space-y-1">
                    <p className="text-[11px] font-semibold text-slate-500">Body Fat %</p>
                    <p className="text-lg font-extrabold text-slate-800">{fatResults.bodyFat || "--"}</p>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800">
                      10-20% Normal
                    </span>
                  </div>

                  {/* Visceral Fat */}
                  <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 text-center space-y-1">
                    <p className="text-[11px] font-semibold text-slate-500">Visceral Fat</p>
                    <p className="text-lg font-extrabold text-slate-800">{fatResults.visceralFat || "--"}</p>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800">
                      1-9 Normal (0)
                    </span>
                  </div>

                  {/* BMR (RM) */}
                  <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 text-center space-y-1">
                    <p className="text-[11px] font-semibold text-slate-500">BMR (RM)</p>
                    <p className="text-lg font-extrabold text-slate-800">{fatResults.bmr || "--"}</p>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-sky-100 text-sky-800">
                      kcal/day
                    </span>
                  </div>

                  {/* BMI */}
                  <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 text-center space-y-1">
                    <p className="text-[11px] font-semibold text-slate-500">BMI</p>
                    <p className="text-lg font-extrabold text-slate-800">{fatResults.bmi || "--"}</p>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800">
                      18.5-23 Normal
                    </span>
                  </div>

                  {/* Body Age */}
                  <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 text-center space-y-1">
                    <p className="text-[11px] font-semibold text-slate-500">Body Age</p>
                    <p className="text-lg font-extrabold text-slate-800">{fatResults.bodyAge || "--"}</p>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-sky-100 text-sky-800">
                      Years
                    </span>
                  </div>

                  {/* Subcutaneous Fat (TSF) */}
                  <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 text-center space-y-1">
                    <p className="text-[11px] font-semibold text-slate-500">TSF (Subcutaneous)</p>
                    <p className="text-lg font-extrabold text-slate-800">{fatResults.tsf || "--"}</p>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800">
                      &lt;15% Normal
                    </span>
                  </div>

                  {/* Skeletal Muscle */}
                  <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 text-center space-y-1 col-span-2 md:col-span-1">
                    <p className="text-[11px] font-semibold text-slate-500">Skeletal Muscle</p>
                    <p className="text-lg font-extrabold text-slate-800">{fatResults.skeletalMuscle || "--"}</p>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-100 text-emerald-800">
                      35.8-37.3 Good
                    </span>
                  </div>
                </div>
              </div>


              {/* 3. BAR CHART SECTION (LAST) */}
              <div className="bg-white border border-sky-100 p-6 rounded-3xl space-y-4 shadow-sm">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h2 className="font-bold text-sm text-slate-800">Weight Progress Bar Chart 📊</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Track your body weight trajectory over time.</p>
                  </div>
                  <div className="flex gap-2 bg-sky-50 p-1 rounded-xl border border-sky-100">
                    {["daily", "weekly", "monthly", "yearly"].map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setTimeframe(tf)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition cursor-pointer ${
                          timeframe === tf ? "bg-sky-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* VISUAL SVG BAR CHART */}
                <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-100 flex items-end justify-around h-64 gap-2 pt-10">
                  {activeDataset.map((item, idx) => {
                    const minVal = 60;
                    const maxVal = 90;
                    const heightPercent = Math.min(100, Math.max(15, ((item.val - minVal) / (maxVal - minVal)) * 100));
                    
                    return (
                      <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end group">
                        <span className="text-[10px] font-bold text-sky-700 opacity-0 group-hover:opacity-100 transition mb-1 bg-white px-1.5 py-0.5 rounded shadow-xs border border-sky-100">
                          {item.val} kg
                        </span>
                        <div 
                          className="w-full max-w-[36px] bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-xl transition-all duration-500 shadow-xs group-hover:from-sky-700 group-hover:to-sky-500"
                          style={{ height: `${heightPercent}%` }}
                        />
                        <span className="text-[11px] font-bold text-slate-600 mt-2">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* SECTION 3: NEW DIET & WORKOUT PLAN TAB */}
          {activeTab === "dietplan" && (
            <section className="space-y-6 animate-fadeIn max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-sky-100/70 via-white to-white border border-sky-200/80 p-6 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900">Your Personalized Fitness & Diet Plan</h1>
                  <p className="text-slate-500 text-xs mt-1">Customized daily nutritional breakdown and exercise targets.</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1.5 text-xs font-bold bg-sky-100 text-sky-800 px-3 py-1.5 rounded-xl border border-sky-200">
                    <Flame className="w-4 h-4 text-amber-500" /> Target: 2,100 kcal
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold bg-sky-100 text-sky-800 px-3 py-1.5 rounded-xl border border-sky-200">
                    <Droplets className="w-4 h-4 text-blue-500" /> Water: 3.5 Liters
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* DIET PLAN */}
                <div className="bg-white border border-sky-100 p-6 rounded-3xl space-y-4 shadow-sm">
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-sky-100 pb-3">
                    <Utensils className="w-5 h-5 text-sky-600" /> Daily Nutritional Meals
                  </h2>

                  <div className="space-y-3">
                    <DietMealItem 
                      id="meal1"
                      time="8:30 AM" 
                      title="Breakfast Focus" 
                      desc="Oatmeal cooked in almond milk + 3 boiled egg whites + 1 green apple." 
                      checked={!!completedTasks["meal1"]}
                      onToggle={() => toggleTask("meal1")}
                    />
                    <DietMealItem 
                      id="meal2"
                      time="11:30 AM" 
                      title="Mid-Morning Hydration" 
                      desc="1 glass coconut water or Green Detox Tea + 5 soaked almonds." 
                      checked={!!completedTasks["meal2"]}
                      onToggle={() => toggleTask("meal2")}
                    />
                    <DietMealItem 
                      id="meal3"
                      time="1:30 PM" 
                      title="Balanced Lunch" 
                      desc="Grilled chicken breast / Tofu + brown rice + steamed spinach & broccoli." 
                      checked={!!completedTasks["meal3"]}
                      onToggle={() => toggleTask("meal3")}
                    />
                    <DietMealItem 
                      id="meal4"
                      time="5:00 PM" 
                      title="Pre-Workout Fuel" 
                      desc="1 scoop Whey Protein + 1 banana or whole grain toast with peanut butter." 
                      checked={!!completedTasks["meal4"]}
                      onToggle={() => toggleTask("meal4")}
                    />
                    <DietMealItem 
                      id="meal5"
                      time="8:00 PM" 
                      title="Light Dinner" 
                      desc="Mixed vegetable soup + roasted paneer / fish with avocado salad." 
                      checked={!!completedTasks["meal5"]}
                      onToggle={() => toggleTask("meal5")}
                    />
                  </div>
                </div>

                {/* EXERCISE ROUTINE */}
                <div className="bg-white border border-sky-100 p-6 rounded-3xl space-y-4 shadow-sm">
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-sky-100 pb-3">
                    <Dumbbell className="w-5 h-5 text-sky-600" /> Daily Workout Schedule
                  </h2>

                  <div className="space-y-3">
                    <WorkoutItem 
                      id="ex1"
                      title="Morning Cardio Warm-up"
                      duration="15 Mins"
                      desc="Light jogging or jump rope to boost heart rate and ignite fat burn."
                      checked={!!completedTasks["ex1"]}
                      onToggle={() => toggleTask("ex1")}
                    />
                    <WorkoutItem 
                      id="ex2"
                      title="Core & Stability Circuit"
                      duration="20 Mins"
                      desc="Planks (3 sets x 60s), Bicycle Crunches (3 x 20), Leg Raises."
                      checked={!!completedTasks["ex2"]}
                      onToggle={() => toggleTask("ex2")}
                    />
                    <WorkoutItem 
                      id="ex3"
                      title="Resistance Training"
                      duration="35 Mins"
                      desc="Bodyweight squats, push-ups, dumbbell rows & shoulder presses."
                      checked={!!completedTasks["ex3"]}
                      onToggle={() => toggleTask("ex3")}
                    />
                    <WorkoutItem 
                      id="ex4"
                      title="Evening Recovery Stretch"
                      duration="10 Mins"
                      desc="Full body hamstrings, hip flexors, and spine flexibility mobility routine."
                      checked={!!completedTasks["ex4"]}
                      onToggle={() => toggleTask("ex4")}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* SECTION 4: PRODUCTS TAB */}
          {/* SECTION 4: PRODUCTS TAB */}
{activeTab === "products" && (
  <section className="space-y-6 animate-fadeIn max-w-6xl mx-auto">
    {/* FULL PRODUCT DETAILS PAGE VIEW */}
    {activeViewProduct ? (
      <div className="bg-white border border-sky-100 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm animate-fadeIn">
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <button
            onClick={() => setActiveViewProduct(null)}
            className="flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 bg-sky-50 px-4 py-2 rounded-xl transition cursor-pointer"
          >
            ← Back to Store
          </button>
          <span className="text-[10px] font-extrabold uppercase text-sky-600 bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
            {activeViewProduct.mainCat} • {activeViewProduct.subCat}
          </span>
        </div>

        {/* Main Product Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center bg-sky-50/50 p-6 rounded-3xl border border-sky-100">
            <img
              src={activeViewProduct.img}
              alt={activeViewProduct.name}
              className="w-full max-w-md h-72 object-cover rounded-2xl shadow-sm"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              {activeViewProduct.name}
            </h1>
            
            <div className="border-t border-b border-slate-100 py-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">About Product</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {activeViewProduct.desc}
              </p>
            </div>

            {/* EXPANDING SOON ONLINE ORDERS BANNER */}
            <div className="bg-gradient-to-r from-sky-500/10 via-sky-50 to-emerald-500/10 border border-sky-200/80 rounded-2xl p-5 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-600 text-white text-[10px] font-extrabold tracking-wide uppercase">
                🚀 Store Update
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900">
                We are expanding soon!
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We are expanding our store capabilities and will soon launch online orders and direct home delivery for all nutritional items.
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      /* REGULAR STORE GRID VIEW */
      <>
        <div className="bg-gradient-to-r from-sky-100/70 via-white to-white border border-sky-200/80 p-8 rounded-3xl text-center shadow-sm">
          <h1 className="text-2xl font-extrabold text-slate-900">Our Nutritional Store</h1>
          <p className="text-slate-500 text-xs mt-1">Organic supplements engineered for wellness and vital energy.</p>
        </div>

        {/* CATEGORY DROPDOWNS & FILTERS */}
        <div className="flex gap-3 flex-wrap items-center">
          <button 
            onClick={() => { setSelectedMainCat("All"); setSelectedSubCat("All"); setCurrentPage(1); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${
              selectedMainCat === "All" && selectedSubCat === "All"
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-white border border-sky-200 text-slate-700 hover:bg-sky-50"
            }`}
          >
            All Products
          </button>

          {/* MAIN CATEGORY DROPDOWN */}
          <div className="relative">
            <button 
              onClick={() => { setShowMainCatDropdown(!showMainCatDropdown); setShowSubCatDropdown(false); }}
              className="bg-white border border-sky-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer hover:bg-sky-50"
            >
              Main: <span className="font-bold text-sky-600">{selectedMainCat}</span> <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {showMainCatDropdown && (
              <div className="absolute top-full mt-1 left-0 w-44 bg-white border border-sky-100 shadow-xl rounded-2xl z-20 p-2 space-y-1">
                {["All", "Supplements", "Nutrition", "Beverages"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedMainCat(cat);
                      setShowMainCatDropdown(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      selectedMainCat === cat ? "bg-sky-50 text-sky-700 font-bold" : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SUB CATEGORY DROPDOWN */}
          <div className="relative">
            <button 
              onClick={() => { setShowSubCatDropdown(!showSubCatDropdown); setShowMainCatDropdown(false); }}
              className="bg-white border border-sky-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer hover:bg-sky-50"
            >
              Sub: <span className="font-bold text-sky-600">{selectedSubCat}</span> <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {showSubCatDropdown && (
              <div className="absolute top-full mt-1 left-0 w-44 bg-white border border-sky-100 shadow-xl rounded-2xl z-20 p-2 space-y-1">
                {["All", "Vitamins", "Proteins", "Wellness", "Energy"].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => {
                      setSelectedSubCat(sub);
                      setShowSubCatDropdown(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      selectedSubCat === sub ? "bg-sky-50 text-sky-700 font-bold" : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* PRODUCT LIST (STRICTLY MAX 5 PER PAGE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white border border-sky-100 p-4 rounded-3xl flex gap-4 shadow-sm hover:border-sky-300 transition">
              <img src={product.img} alt={product.name} className="w-32 h-32 rounded-2xl object-cover shrink-0 border border-sky-100" />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                    {product.mainCat} • {product.subCat}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 mt-1">{product.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
                <button 
                  onClick={() => setActiveViewProduct(product)}
                  className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold py-2 px-4 rounded-xl transition self-start mt-2 cursor-pointer"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION CONTROLS */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="p-2.5 bg-white hover:bg-sky-50 disabled:opacity-40 disabled:hover:bg-white border border-sky-200 text-slate-700 rounded-full transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-bold text-slate-600">
            Page <span className="text-sky-600">{currentPage}</span> of {totalPages}
          </span>

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            className="p-2.5 bg-white hover:bg-sky-50 disabled:opacity-40 disabled:hover:bg-white border border-sky-200 text-slate-700 rounded-full transition cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </>
    )}
  </section>
)}

          {/* SECTION 5: ADMIN & COACH PORTAL */}
          {/* SECTION 5: ADMIN & COACH PORTAL */}
          {activeTab === "beadmin" && (
            <section className="space-y-6 animate-fadeIn max-w-6xl mx-auto">
              
              {/* 1. Role Header Banner */}
              <div className="bg-white border border-sky-100 p-6 rounded-3xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Hello {(user?.firstName || currentUser?.firstName) || "Coach"}!
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Current Access Level:{" "}
                    <span className="font-extrabold text-sky-600 uppercase tracking-wider">
                      {(user?.role || currentUser?.role) === "superadmin"
                        ? "Super Admin (Owner)"
                        : (user?.role || currentUser?.role) === "admin"
                        ? "Coach / Associate"
                        : "Client User"}
                    </span>
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">
                  {(user?.role || currentUser?.role) === "superadmin"
                    ? "👑 Global Oversight"
                    : (user?.role || currentUser?.role) === "admin"
                    ? "📋 Downline Management"
                    : "👤 Standard Account"}
                </span>
              </div>

              {/* 2. DEDICATED DOWNLINE ACTIVITIES NAVIGATION CARD */}
              {((user?.role || currentUser?.role) === "admin" || (user?.role || currentUser?.role) === "superadmin") && (
                <div className="bg-white border border-sky-100 p-6 rounded-3xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-base text-slate-900">
                      {(user?.role || currentUser?.role) === "superadmin"
                        ? "🌐 System-Wide Downline Health Activities"
                        : "📊 My Downline Daily Activities"}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {(user?.role || currentUser?.role) === "superadmin"
                        ? "Access full daily logs, step counts, and body composition details for all system users."
                        : "View daily step tracking, BMI, and health calculator results for your direct client downlines."}
                    </p>
                  </div>

                  {/* FIXED: BUTTON CALLS onNavigate INSTEAD OF navigate() */}
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate("downline-activities")}
                    className="bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold px-6 py-3 rounded-xl text-xs transition shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
                  >
                    <span>View Downline Activities</span>
                    <span>📊</span>
                  </button>
                </div>
              )}

              {/* 3. ACCOUNT CREATION & TEAM HIERARCHY FORM */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Super Admin Form */}
                {(user?.role || currentUser?.role) === "superadmin" && (
                  <form onSubmit={handleAddDownline} className="bg-white border border-sky-100 p-6 rounded-3xl space-y-4 shadow-sm">
                    <div>
                      <h3 className="font-bold text-base text-slate-900">Create System Account</h3>
                      <p className="text-xs text-slate-500">Add new Coaches (Admins) or Co-Owners (Super Admins).</p>
                    </div>

                    <input 
                      placeholder="Username" 
                      value={downlineForm.username}
                      onChange={(e) => setDownlineForm({ ...downlineForm, username: e.target.value })}
                      className="w-full p-3 rounded-xl bg-sky-50/50 border border-sky-200 text-slate-900 focus:outline-none focus:border-sky-500 text-xs font-semibold" 
                      required 
                    />
                    <input 
                      placeholder="Email Address" 
                      type="email" 
                      value={downlineForm.email}
                      onChange={(e) => setDownlineForm({ ...downlineForm, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-sky-50/50 border border-sky-200 text-slate-900 focus:outline-none focus:border-sky-500 text-xs font-semibold" 
                      required 
                    />
                    <input 
                      placeholder="Password" 
                      type="password" 
                      value={downlineForm.password}
                      onChange={(e) => setDownlineForm({ ...downlineForm, password: e.target.value })}
                      className="w-full p-3 rounded-xl bg-sky-50/50 border border-sky-200 text-slate-900 focus:outline-none focus:border-sky-500 text-xs font-semibold" 
                      required 
                    />

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-600">Assign Role:</label>
                      <select className="w-full p-3 rounded-xl bg-sky-50/50 border border-sky-200 text-slate-900 text-xs font-semibold focus:outline-none">
                        <option value="admin">Coach / Associate (Admin)</option>
                        <option value="superadmin">Super Admin (Co-Owner)</option>
                      </select>
                    </div>

                    <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold p-3 rounded-xl transition shadow-md text-xs cursor-pointer">
                      Create System Account
                    </button>
                  </form>
                )}

                {/* Admin / Coach Downline Form */}
                {(user?.role || currentUser?.role) === "admin" && (
                  <form onSubmit={handleAddDownline} className="bg-white border border-sky-100 p-6 rounded-3xl space-y-4 shadow-sm">
                    <div>
                      <h3 className="font-bold text-base text-slate-900">Register New Client Downline</h3>
                      <p className="text-xs text-slate-500">Add clients directly under your coaching group.</p>
                    </div>

                    <input 
                      placeholder="Client Username" 
                      value={downlineForm.username}
                      onChange={(e) => setDownlineForm({ ...downlineForm, username: e.target.value })}
                      className="w-full p-3 rounded-xl bg-sky-50/50 border border-sky-200 text-slate-900 focus:outline-none focus:border-sky-500 text-xs font-semibold" 
                      required 
                    />
                    <input 
                      placeholder="Client Email" 
                      type="email" 
                      value={downlineForm.email}
                      onChange={(e) => setDownlineForm({ ...downlineForm, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-sky-50/50 border border-sky-200 text-slate-900 focus:outline-none focus:border-sky-500 text-xs font-semibold" 
                      required 
                    />
                    <input 
                      placeholder="Temporary Password" 
                      type="password" 
                      value={downlineForm.password}
                      onChange={(e) => setDownlineForm({ ...downlineForm, password: e.target.value })}
                      className="w-full p-3 rounded-xl bg-sky-50/50 border border-sky-200 text-slate-900 focus:outline-none focus:border-sky-500 text-xs font-semibold" 
                      required 
                    />

                    <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold p-3 rounded-xl transition shadow-md text-xs cursor-pointer">
                      Add Client Downline
                    </button>
                  </form>
                )}

                {/* Team Summary Box */}
                <div className="bg-white border border-sky-100 p-6 rounded-3xl shadow-sm space-y-4">
                  <h3 className="font-bold text-base text-slate-900">Hierarchy & Downline Summary</h3>
                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 bg-sky-50/60 rounded-2xl border border-sky-100 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-slate-900">Assigned Clients</p>
                        <p className="text-[11px] text-slate-500">
                          {(user?.role || currentUser?.role) === "superadmin" ? "148 Global Clients" : "12 Active Downlines"}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-white border border-sky-200 text-sky-800 font-bold rounded-xl text-[11px]">
                        Active Tracking
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          )}
        </main>
      </div>
    </div>
  );
}

// Helper Subcomponents
function NavItem({ icon, label, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
        active 
          ? "bg-sky-600 text-white shadow-md" 
          : "text-slate-600 hover:bg-sky-50 hover:text-sky-900"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="bg-sky-50/50 border border-sky-100 p-3 rounded-xl text-xs flex justify-between items-center">
      <span className="text-slate-500 font-semibold">{label}:</span>
      <span className={value ? "text-slate-900 font-bold" : "text-amber-600 italic font-medium"}>
        {value || "Not provided"}
      </span>
    </div>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-sky-100 pb-2">
      <span className="font-bold text-slate-600">{label}:</span>
      <span className="font-extrabold text-sky-600">{value}</span>
    </div>
  );
}

function DietMealItem({ time, title, desc, checked, onToggle }) {
  return (
    <div 
      onClick={onToggle} 
      className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-start justify-between gap-3 ${
        checked ? "bg-sky-50/80 border-sky-300" : "bg-sky-50/30 border-sky-100 hover:border-sky-200"
      }`}
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-extrabold text-sky-700 bg-white px-2 py-0.5 rounded border border-sky-100">{time}</span>
          <h4 className={`text-xs font-bold ${checked ? "line-through text-slate-400" : "text-slate-900"}`}>{title}</h4>
        </div>
        <p className={`text-xs mt-1 leading-relaxed ${checked ? "line-through text-slate-400" : "text-slate-500"}`}>{desc}</p>
      </div>
      {checked ? <CheckCircle className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" /> : <Circle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />}
    </div>
  );
}

function WorkoutItem({ title, duration, desc, checked, onToggle }) {
  return (
    <div 
      onClick={onToggle} 
      className={`p-3.5 rounded-2xl border transition cursor-pointer flex items-start justify-between gap-3 ${
        checked ? "bg-sky-50/80 border-sky-300" : "bg-sky-50/30 border-sky-100 hover:border-sky-200"
      }`}
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-extrabold text-sky-700 bg-white px-2 py-0.5 rounded border border-sky-100">{duration}</span>
          <h4 className={`text-xs font-bold ${checked ? "line-through text-slate-400" : "text-slate-900"}`}>{title}</h4>
        </div>
        <p className={`text-xs mt-1 leading-relaxed ${checked ? "line-through text-slate-400" : "text-slate-500"}`}>{desc}</p>
      </div>
      {checked ? <CheckCircle className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" /> : <Circle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />}
    </div>
  );
}
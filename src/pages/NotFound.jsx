import React from "react";
import { Home, ArrowLeft, Search, ShieldAlert } from "lucide-react";

export default function NotFound({ onNavigate }) {
  return (
    <div className="min-h-[80vh] m-6 bg-gradient-to-b from-blue-50/60 via-white to-blue-50/40 flex items-center justify-center px-4 py-16 font-sans">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-blue-100 shadow-xl relative overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-60 pointer-events-none" />

        {/* 404 Badge Icon */}
        <div className="relative inline-block">
          <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-sky-100 to-blue-50 rounded-3xl flex items-center justify-center border-2 border-blue-200/80 shadow-inner">
            <ShieldAlert className="w-12 h-12 text-[#2193B0]" />
          </div>
          <span className="absolute -top-2 -right-2 bg-[#2193B0] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
            404
          </span>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Oops! It seems like the page or health resource you are looking for has been moved or doesn't exist.
          </p>
        </div>

        {/* Quick Search / Helpful Links */}
        <div className="pt-2 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => onNavigate ? onNavigate("home") : (window.location.href = "/")}
            className="w-full py-3.5 px-6 bg-[#39A8C3] hover:bg-[#2698B4] text-white font-bold text-sm rounded-xl shadow-md transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" /> Go Back to Home
          </button>

          <button
            type="button"
            onClick={() => onNavigate ? onNavigate("dashboard") : (window.location.href = "/dashboard")}
            className="w-full py-3 px-6 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-sm rounded-xl transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Dashboard
          </button>
        </div>

        {/* Support Note */}
        <p className="text-xs text-gray-400 pt-2">
          Need help? Contact <span className="text-[#2193B0] font-medium">greenlife@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
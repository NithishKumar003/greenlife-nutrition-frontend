import React from "react";
import { Leaf, Download, User, Calendar, ArrowLeft } from "lucide-react";

export default function HealthReportCard({ user, share, onNavigate, onDownloadPdf }) {
  const report = share || {};
  const fatResults = report.fat_results || report.fatResults || {};
  const username = user?.username || user?.firstName || "Customer";

  return (
    <section className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4 font-sans relative">
      
      {/* BACK TO DASHBOARD BUTTON */}
      <div className="w-full max-w-md flex justify-start mb-4">
        <button 
          type="button"
          onClick={() => {
            if (onNavigate) {
              onNavigate("dashboard");
            } else {
              window.history.back(); // Fallback if prop is omitted
            }
          }}
          className="flex items-center gap-2 text-sm font-semibold text-blue-700 bg-white px-4 py-2.5 rounded-xl shadow-sm hover:bg-blue-50 transition active:scale-95 cursor-pointer border border-blue-200"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
      </div>

      {/* REPORT CARD DISPLAY */}
      <div className="w-full max-w-md bg-white border border-blue-200 rounded-3xl shadow-xl overflow-hidden">
        {/* BRANDING HEADER */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white text-center flex flex-col items-center gap-2">
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 shadow-inner">
            <Leaf className="w-8 h-8 text-white fill-white" />
          </div>
          <h2 className="font-bold text-2xl tracking-wide">GreenLife Health Report</h2>
          <p className="text-xs text-green-100 font-medium uppercase tracking-wider">
            Body Composition Summary
          </p>
        </div>

        {/* USER SUB-HEADER */}
        <div className="bg-blue-50/70 border-b border-blue-100 px-6 py-4 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1.5">
            <User className="w-4 h-4 text-blue-600" />
            Health assessment for{" "}
            <span className="font-bold text-gray-900 text-base">Mr. {username}</span>
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <MetricBox label="Age" value={user?.age || report?.age || "-"} />
            <MetricBox label="Height" value={user?.height || report?.height || "-"} unit="cm" />
            <MetricBox label="Weight" value={user?.weight || report?.weight || "-"} unit="kg" />
          </div>

          <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl space-y-2.5 text-sm">
            <ResultRow label="BMI" value={fatResults.bmi} />
            <ResultRow label="BMR" value={fatResults.bmr} />
            <ResultRow label="Body Fat %" value={fatResults.body_fat || fatResults.bodyFat} />
            <ResultRow label="Visceral Fat" value={fatResults.visceral_fat || fatResults.visceralFat} />
            <ResultRow label="Body Age" value={fatResults.body_age || fatResults.bodyAge} />
          </div>

          <p className="text-xs text-right text-gray-400 italic flex items-center justify-end gap-1 pt-1">
            <Calendar className="w-3 h-3" />
            Generated on {report.created_at || report.createdAt || "Today"}
          </p>
        </div>

        {/* ACTION BUTTON */}
        <div className="bg-gray-50 border-t border-gray-100 p-5 flex justify-center">
          <button
            type="button"
            onClick={() => onDownloadPdf && onDownloadPdf(report.token)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-xl shadow-md transition cursor-pointer active:scale-95"
          >
            <Download className="w-4 h-4" /> Download PDF Report
          </button>
        </div>
      </div>
    </section>
  );
}

function MetricBox({ label, value, unit }) {
  return (
    <div className="bg-gray-50 border border-gray-100 p-3 rounded-2xl">
      <span className="block text-xs text-gray-500 font-semibold uppercase">{label}</span>
      <span className="text-base font-bold text-gray-800">
        {value} {unit && <span className="text-xs font-normal text-gray-500">{unit}</span>}
      </span>
    </div>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-blue-100/60 pb-2 last:border-0 last:pb-0">
      <span className="font-semibold text-gray-600">{label}</span>
      <span className="font-bold text-blue-700 bg-white px-3 py-1 rounded-lg border border-blue-100">
        {value || "-"}
      </span>
    </div>
  );
}
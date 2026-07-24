import React from "react";
import { Download, User, Calendar, ArrowLeft } from "lucide-react";

export default function HealthReportCard({ user, share, onNavigate }) {
  const report = share || {};
  const fatResults = report.fat_results || report.fatResults || {};
  const username = user?.username || user?.firstName || "Customer";

  const handleDownload = () => {
    // Build a standalone, print-formatted HTML page
    const reportHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Health Report - ${username}</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f0f9ff; padding: 20px; color: #1e293b; }
          .card { max-width: 450px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #bae6fd; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
          .header { background: #059669; color: white; text-align: center; padding: 20px; }
          .header h2 { margin: 0; font-size: 22px; }
          .header p { margin: 5px 0 0 0; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; }
          .sub-header { background: #f0f9ff; border-bottom: 1px solid #e0f2fe; padding: 12px; text-align: center; font-size: 14px; }
          .metrics-grid { display: flex; gap: 8px; padding: 16px 16px 8px 16px; }
          .metric-box { flex: 1; background: #f8fafc; border: 1px solid #f1f5f9; padding: 10px; border-radius: 12px; text-align: center; }
          .metric-label { font-size: 10px; text-transform: uppercase; color: #64748b; font-weight: bold; }
          .metric-value { font-size: 16px; font-weight: bold; margin-top: 4px; }
          .results { background: #f0f9ff; border: 1px solid #e0f2fe; margin: 16px; padding: 12px; border-radius: 12px; }
          .result-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #bae6fd; font-size: 14px; }
          .result-row:last-child { border-bottom: none; }
          .val { font-weight: bold; color: #1d4ed8; background: #fff; padding: 2px 8px; border-radius: 6px; }
          .date { font-size: 10px; color: #94a3b8; text-align: right; padding: 0 16px 16px 16px; font-style: italic; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h2>GreenLife Health Report</h2>
            <p>Body Composition Summary</p>
          </div>
          <div class="sub-header">
            Health assessment for <strong>Mr. ${username}</strong>
          </div>
          <div class="metrics-grid">
            <div class="metric-box">
              <div class="metric-label">Age</div>
              <div class="metric-value">${user?.age || report?.age || "-"}</div>
            </div>
            <div class="metric-box">
              <div class="metric-label">Height</div>
              <div class="metric-value">${user?.height || report?.height || "-"} cm</div>
            </div>
            <div class="metric-box">
              <div class="metric-label">Weight</div>
              <div class="metric-value">${user?.weight || report?.weight || "-"} kg</div>
            </div>
          </div>
          <div class="results">
            <div class="result-row"><span>BMI</span><span class="val">${fatResults.bmi || "-"}</span></div>
            <div class="result-row"><span>BMR</span><span class="val">${fatResults.bmr || "-"}</span></div>
            <div class="result-row"><span>Body Fat %</span><span class="val">${fatResults.body_fat || fatResults.bodyFat || "-"}</span></div>
            <div class="result-row"><span>Visceral Fat</span><span class="val">${fatResults.visceral_fat || fatResults.visceralFat || "-"}</span></div>
            <div class="result-row"><span>Body Age</span><span class="val">${fatResults.body_age || fatResults.bodyAge || "-"}</span></div>
          </div>
          <div class="date">Generated on ${report.created_at || report.createdAt || "Today"}</div>
        </div>
      </body>
      </html>
    `;

    // 1. Convert HTML content to Blob file
    const blob = new Blob([reportHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    // 2. Trigger direct browser download
    const link = document.createElement("a");
    link.href = url;
    link.download = `${username}_Health_Report.html`;
    document.body.appendChild(link);
    link.click();

    // 3. Clean up link node and object URL
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
              window.history.back();
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
        <div className="bg-emerald-600 p-6 text-white text-center flex flex-col items-center gap-2">
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
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-xl shadow-md transition cursor-pointer active:scale-95"
          >
            <Download className="w-4 h-4" /> Download Report
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
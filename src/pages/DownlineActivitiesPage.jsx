import React, { useState } from "react";

export default function DownlineActivitiesPage({ user, onBack }) {
  // Mock downline dataset (Replace with your API fetch)
  const mockClients = [
    {
      id: "client_101",
      name: "John Doe",
      coach: "Sarah (Coach)",
      coachId: "coach_1",
      lastSynced: "Today, 09:42 AM",
      steps: 8420,
      stepGoal: 10000,
      calories: 340,
      distance: "6.2 km",
      metrics: {
        bodyFat: "18.2%",
        fatStatus: "Normal",
        visceralFat: "6.0",
        visceralStatus: "1-9 Normal",
        bmr: "1,650 kcal",
        bmi: "22.4",
        bmiStatus: "Normal",
        bodyAge: "26 Yrs",
        tsf: "13.5%",
        tsfStatus: "<15% Normal",
        skeletalMuscle: "36.4%",
        muscleStatus: "Good",
      },
    },
    {
      id: "client_102",
      name: "Jane Smith",
      coach: "Sarah (Coach)",
      coachId: "coach_1",
      lastSynced: "Today, 08:15 AM",
      steps: 10150,
      stepGoal: 10000,
      calories: 420,
      distance: "7.8 km",
      metrics: {
        bodyFat: "24.1%",
        fatStatus: "Normal",
        visceralFat: "4.5",
        visceralStatus: "1-9 Normal",
        bmr: "1,420 kcal",
        bmi: "21.1",
        bmiStatus: "Normal",
        bodyAge: "24 Yrs",
        tsf: "18.2%",
        tsfStatus: "<20% Normal",
        skeletalMuscle: "28.5%",
        muscleStatus: "Good",
      },
    },
    {
      id: "client_201",
      name: "Mike Johnson",
      coach: "Alex (Coach)",
      coachId: "coach_2",
      lastSynced: "Yesterday, 06:30 PM",
      steps: 5200,
      stepGoal: 10000,
      calories: 210,
      distance: "4.1 km",
      metrics: {
        bodyFat: "26.5%",
        fatStatus: "High",
        visceralFat: "11.0",
        visceralStatus: "High Risk",
        bmr: "1,890 kcal",
        bmi: "27.8",
        bmiStatus: "Overweight",
        bodyAge: "38 Yrs",
        tsf: "19.0%",
        tsfStatus: "High",
        skeletalMuscle: "32.1%",
        muscleStatus: "Low",
      },
    },
  ];

  // Filter clients based on user role
  const availableClients =
    user.role === "superadmin"
      ? mockClients
      : mockClients.filter((c) => c.coachId === user.id || user.role === "admin");

  const [selectedClientId, setSelectedClientId] = useState(
    availableClients[0]?.id || ""
  );

  const selectedClient =
    availableClients.find((c) => c.id === selectedClientId) || availableClients[0];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6 animate-fadeIn">
      {/* HEADER & BACK BUTTON */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-sky-100 shadow-sm">
        <div>
          <button
            onClick={onBack}
            className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 mb-2 cursor-pointer"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-2xl font-black text-slate-900">Downline Activity Tracker</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            {user.role === "superadmin"
              ? "👑 Super Admin View: Inspect daily results across all coaches & clients."
              : "📋 Coach View: Monitor real-time progress for your direct client downlines."}
          </p>
        </div>

        {/* CLIENT SELECTOR DROPDOWN */}
        <div className="w-full sm:w-auto">
          <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
            Select Downline Client:
          </label>
          <select
            value={selectedClientId}
            onChange={(e) => setSelectedClientId(e.target.value)}
            className="w-full sm:w-64 p-3 rounded-xl bg-sky-50 border border-sky-200 text-slate-900 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          >
            {availableClients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name} {user.role === "superadmin" ? `(${client.coach})` : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedClient ? (
        <div className="space-y-6">
          {/* CLIENT SUMMARY BANNER */}
          <div className="bg-gradient-to-r from-sky-600 to-sky-700 text-white p-6 rounded-3xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="bg-sky-500/40 text-sky-100 text-[10px] font-bold px-3 py-1 rounded-full border border-sky-400/30">
                Client Profile
              </span>
              <h2 className="text-2xl font-black mt-2">{selectedClient.name}</h2>
              <p className="text-xs text-sky-100 mt-0.5">
                Assigned Coach: <span className="font-bold">{selectedClient.coach}</span>
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl text-right">
              <p className="text-[11px] text-sky-100">Last Google Fit Sync</p>
              <p className="text-xs font-bold text-white mt-0.5">● {selectedClient.lastSynced}</p>
            </div>
          </div>

          {/* 1. STEP TRACKER & WORKOUT SNAPSHOT */}
          <div className="bg-white border border-sky-100 p-6 rounded-3xl shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">Daily Step & Activity Progress</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-xl flex items-center justify-center text-xl">
                  👟
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Total Steps</p>
                  <p className="text-xl font-extrabold text-slate-900">
                    {selectedClient.steps.toLocaleString()}{" "}
                    <span className="text-xs font-normal text-slate-400">/ {selectedClient.stepGoal.toLocaleString()}</span>
                  </p>
                </div>
              </div>

              <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl">
                  🔥
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Active Calories</p>
                  <p className="text-xl font-extrabold text-slate-900">{selectedClient.calories} kcal</p>
                </div>
              </div>

              <div className="bg-sky-50/60 p-4 rounded-2xl border border-sky-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Distance Traveled</p>
                  <p className="text-xl font-extrabold text-slate-900">{selectedClient.distance}</p>
                </div>
              </div>
            </div>

            {/* Step Goal Progress Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">Goal Completion</span>
                <span className="text-sky-600">
                  {Math.round((selectedClient.steps / selectedClient.stepGoal) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-sky-600 h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (selectedClient.steps / selectedClient.stepGoal) * 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* 2. BODY COMPOSITION & HEALTH CALCULATOR RESULTS */}
          <div className="bg-white border border-sky-100 p-6 rounded-3xl shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Clinical Body Composition Metrics</h3>
              <p className="text-xs text-slate-500">Extracted from daily user logs & health calculator</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-xs">
              {/* Body Fat */}
              <div className="bg-sky-50/50 p-3.5 rounded-2xl border border-sky-100 text-center space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Body Fat %</p>
                <p className="text-lg font-black text-slate-800">{selectedClient.metrics.bodyFat}</p>
                <span className="inline-block px-2 py-0.5 text-[9px] font-bold rounded bg-emerald-100 text-emerald-800">
                  {selectedClient.metrics.fatStatus}
                </span>
              </div>

              {/* Visceral Fat */}
              <div className="bg-sky-50/50 p-3.5 rounded-2xl border border-sky-100 text-center space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Visceral Fat</p>
                <p className="text-lg font-black text-slate-800">{selectedClient.metrics.visceralFat}</p>
                <span className="inline-block px-2 py-0.5 text-[9px] font-bold rounded bg-emerald-100 text-emerald-800">
                  {selectedClient.metrics.visceralStatus}
                </span>
              </div>

              {/* BMR */}
              <div className="bg-sky-50/50 p-3.5 rounded-2xl border border-sky-100 text-center space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">BMR (RM)</p>
                <p className="text-lg font-black text-slate-800">{selectedClient.metrics.bmr}</p>
                <span className="inline-block px-2 py-0.5 text-[9px] font-bold rounded bg-sky-100 text-sky-800">
                  Base Energy
                </span>
              </div>

              {/* BMI */}
              <div className="bg-sky-50/50 p-3.5 rounded-2xl border border-sky-100 text-center space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">BMI</p>
                <p className="text-lg font-black text-slate-800">{selectedClient.metrics.bmi}</p>
                <span className="inline-block px-2 py-0.5 text-[9px] font-bold rounded bg-emerald-100 text-emerald-800">
                  {selectedClient.metrics.bmiStatus}
                </span>
              </div>

              {/* Body Age */}
              <div className="bg-sky-50/50 p-3.5 rounded-2xl border border-sky-100 text-center space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Body Age</p>
                <p className="text-lg font-black text-slate-800">{selectedClient.metrics.bodyAge}</p>
                <span className="inline-block px-2 py-0.5 text-[9px] font-bold rounded bg-sky-100 text-sky-800">
                  Metabolic
                </span>
              </div>

              {/* Subcutaneous Fat */}
              <div className="bg-sky-50/50 p-3.5 rounded-2xl border border-sky-100 text-center space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">TSF (Fat)</p>
                <p className="text-lg font-black text-slate-800">{selectedClient.metrics.tsf}</p>
                <span className="inline-block px-2 py-0.5 text-[9px] font-bold rounded bg-emerald-100 text-emerald-800">
                  {selectedClient.metrics.tsfStatus}
                </span>
              </div>

              {/* Skeletal Muscle */}
              <div className="bg-sky-50/50 p-3.5 rounded-2xl border border-sky-100 text-center space-y-1 col-span-2 md:col-span-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Skeletal Muscle</p>
                <p className="text-lg font-black text-slate-800">{selectedClient.metrics.skeletalMuscle}</p>
                <span className="inline-block px-2 py-0.5 text-[9px] font-bold rounded bg-emerald-100 text-emerald-800">
                  {selectedClient.metrics.muscleStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-12 text-center rounded-3xl border border-sky-100 text-slate-500 text-xs">
          No downline client data available.
        </div>
      )}
    </div>
  );
}
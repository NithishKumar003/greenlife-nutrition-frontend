import React from "react";
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Mail } from "lucide-react";

export default function PrivacyPolicy({ onNavigate }) {
  return (
    <div className="bg-gradient-to-b m-6 from-blue-50/50 via-white to-blue-50/30 py-12 px-4 lg:px-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" /> Privacy & Data Protection
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Last Updated: July 2026 | Effective immediately for all GreenLife Nutrition users
          </p>
        </div>

        {/* Introduction Box */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-blue-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-[#2193B0] font-bold text-lg">
            <ShieldCheck className="w-6 h-6" />
            <h2>Your Health Data & Trust Come First</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            At <strong>GreenLife Nutrition</strong>, we are committed to safeguarding your personal information and health evaluation details. This Privacy Policy explains how we collect, use, and protect your data when you use our body assessment tools, consult our coaches, or purchase products.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-blue-100 shadow-sm">
          
          {/* Section 1 */}
          <section className="space-y-2">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">1</span>
              Information We Collect
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed pl-8">
              To provide personalized nutrition and health tracking, we collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 pl-8 space-y-1">
              <li><strong>Contact Information:</strong> Full name, phone number, and email address.</li>
              <li><strong>Body Composition Metrics:</strong> Age, height, weight, BMI, Visceral Fat levels, BMR, and Body Age entered into our Dashboard.</li>
              <li><strong>Consultation Data:</strong> Health goals, dietary notes, and feedback provided during coach interactions.</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Section 2 */}
          <section className="space-y-2">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">2</span>
              How We Use Your Health Metrics
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed pl-8">
              Your body composition metrics are strictly used to:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 pl-8 space-y-1">
              <li>Generate your personal digital Health Evaluation Card.</li>
              <li>Allow certified Wellness Coaches to recommend tailored supplement regimens.</li>
              <li>Track your progress over time (e.g., body age reduction, weight management).</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Section 3 */}
          <section className="space-y-2">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">3</span>
              Data Protection & Privacy
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed pl-8">
              We enforce high security standards to ensure your information is safe:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 pl-8 space-y-1">
              <li><strong>No Third-Party Sales:</strong> We never sell, rent, or trade your personal health data to third-party marketers.</li>
              <li><strong>Confidentiality:</strong> Only authorized GreenLife Wellness Coaches and support staff have access to your health metrics for consultation purposes.</li>
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* Section 4 */}
          <section className="space-y-2">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">4</span>
              Your Rights & Control
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed pl-8">
              You have full control over your data. At any point, you can request to view, update, or permanently delete your health assessment records by reaching out to our support team.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* Section 5 */}
          <section className="space-y-2">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">5</span>
              Contact Us Regarding Privacy
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed pl-8">
              If you have any questions or concerns regarding our privacy practices, please contact us:
            </p>
            <div className="pl-8 pt-2 text-sm text-[#2193B0] font-semibold flex items-center gap-2">
              <Mail className="w-4 h-4" /> greenlife@gmail.com
            </div>
          </section>

        </div>

        {/* Footer Back Action */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => onNavigate ? onNavigate("contact") : (window.location.href = "/contact")}
            className="text-xs text-gray-500 hover:text-[#2193B0] underline font-medium cursor-pointer"
          >
            Have questions? Contact our Support Team
          </button>
        </div>

      </div>
    </div>
  );
}
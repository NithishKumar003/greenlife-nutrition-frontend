import React, { useState } from "react";
import { 
  Video, 
  Users, 
  Clock, 
  Utensils, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  MessageSquareHeart, 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  Flame,
  Activity,
  PhoneCall,
  CalendarX
} from "lucide-react";

export default function ServicesPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "When are the daily Zoom meetings held?",
      a: "Daily interactive Zoom meetings run every Monday through Saturday from 8:00 AM to 9:00 AM. Sundays are dedicated to rest and meal prep, so there are no live Zoom sessions on Sunday."
    },
    {
      q: "How does the 24/7 call and coach support work?",
      a: "You have 24/7 direct phone and chat access to your personal health coach. Whenever you have questions regarding your diet, symptoms, or routine adjustments, you can reach out via call or direct messaging anytime."
    },
    {
      q: "Are the nutritional plans customized for my body metrics?",
      a: "Yes! Every meal plan is derived directly from your body composition analysis (BMI, BMR, Visceral Fat, and Body Age) generated in your personal health card."
    },
    {
      q: "What if I miss an 8:00 AM live Zoom workout or learning session?",
      a: "No worries at all! Key workshops, cooking masterclasses, and workout routines are recorded and archived inside your member dashboard so you can catch up anytime."
    },
    {
      q: "Are the nutrition recommendations suitable for specific health conditions?",
      a: "Our coaches tailor suggestions according to your profile details (including conditions like thyroid management, weight management, and lifestyle correction)."
    }
  ];

  return (
    <div className="bg-gradient-to-b mt-6 from-blue-50/60 via-white to-green-50/40 py-12 px-4 lg:px-12 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* 1. HERO BANNER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4" /> Next-Gen Wellness Ecosystem
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Comprehensive Services Designed for <span className="text-blue-600">Your Transformation</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            From daily interactive morning Zoom sessions to 24/7 direct call support with your coach, we give you all the accountability and nutrition guidance you need.
          </p>
        </div>

        {/* 2. ZOOM & 24/7 CALL FEATURE CARD */}
        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-blue-800">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 border border-green-500/30 text-xs font-semibold px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                24/7 Call Support & Daily Zoom Sessions
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
                Daily Morning Zoom Meetings & 24/7 Direct Call Availability
              </h2>

              <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
                Start your day right with live group workouts and nutrition guidance, and feel confident knowing your personal coach is just a phone call away 24/7.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl backdrop-blur-md border border-white/10">
                  <Video className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="text-xs text-gray-300 font-medium">Daily Zoom Meetings</h4>
                    <p className="text-sm font-bold text-white">Mon – Sat | 8:00 AM – 9:00 AM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl backdrop-blur-md border border-white/10">
                  <PhoneCall className="w-6 h-6 text-green-400 shrink-0" />
                  <div>
                    <h4 className="text-xs text-gray-300 font-medium">Coach Helpline</h4>
                    <p className="text-sm font-bold text-white">24/7 Direct Call Support</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("contact")}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-slate-950 font-bold text-sm rounded-xl transition shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  Join Live Zoom Session <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Graphic Element */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 border border-white/20 p-6 rounded-3xl backdrop-blur-md space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-md">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Zoom Schedule & Calls</p>
                      <p className="text-xs text-green-400">● Coaches Active</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-blue-100">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                    <span className="flex items-center gap-2 font-medium">
                      <Clock className="w-4 h-4 text-blue-400" /> Mon – Sat Zoom Session
                    </span>
                    <span className="text-green-300 font-bold">8:00 - 9:00 AM</span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                    <span className="flex items-center gap-2 font-medium">
                      <CalendarX className="w-4 h-4 text-red-400" /> Sunday Zoom
                    </span>
                    <span className="text-red-300 font-semibold">No Zoom (Rest)</span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                    <span className="flex items-center gap-2 font-medium">
                      <PhoneCall className="w-4 h-4 text-green-400" /> Coach Direct Calls
                    </span>
                    <span className="text-green-300 font-bold">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. SERVICE PILLARS */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Our Hybrid Model Works</h2>
            <p className="text-gray-600 text-sm">Structure through morning Zoom sessions combined with 24/7 phone access keeps you accountable and supported.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard 
              icon={<PhoneCall className="w-7 h-7 text-blue-600" />}
              title="24/7 Direct Call Access"
              description="Got a sudden question about a meal out or feeling unwell? Call your coach directly anytime for instant clarity."
            />
            <BenefitCard 
              icon={<Video className="w-7 h-7 text-emerald-600" />}
              title="Daily Morning Routines"
              description="Start every Monday through Saturday at 8:00 AM with group exercises, mindset alignment, and expert health tips."
            />
            <BenefitCard 
              icon={<ShieldCheck className="w-7 h-7 text-indigo-600" />}
              title="Personalized Progress Tracking"
              description="Weekly metric reviews ensure your nutrition plan adjusts as your body changes."
            />
          </div>
        </div>

        {/* 4. TAILORED NUTRITIONAL PLANS */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full mb-2">
                <Utensils className="w-3.5 h-3.5" /> Data-Driven Diets
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Tailored Nutritional Blueprint</h2>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              Formulated specifically around your BMI, BMR, and body fat metrics to ensure natural and sustainable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4 hover:border-blue-400 transition">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Weight Management Plan</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Focused calorie control, balanced macro-nutrients, and metabolism boosters designed for steady weight reduction.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> BMR-Aligned Calorie Targets</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Visceral Fat Loss Strategy</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4 hover:border-emerald-400 transition">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Metabolic & Thyroid Care</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Clean organic nutrition regimens aimed at restoring hormonal harmony, improving digestion, and reducing fatigue.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Organic Superfood Support</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Energy & Vitality Tracking</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4 hover:border-indigo-400 transition">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Daily Maintenance & Rebuild</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Maintain optimal body age and lean muscle tissue with structured routine meal schedules and hydration planning.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Customized Meal Timings</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Weekly Metric Evaluations</li>
              </ul>
            </div>

          </div>
        </div>

        {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-sm">Got questions? We've got answers to help you get started.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-gray-900 hover:bg-gray-50 transition cursor-pointer"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6. BOTTOM CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-10 text-white text-center space-y-5 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to Start Your Health Journey Today?</h2>
          <p className="text-blue-100 text-sm max-w-xl mx-auto">
            Get your personalized body evaluation, connect with your coach, and join our next 8:00 AM Zoom meeting.
          </p>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("dashboard")}
            className="px-8 py-3.5 bg-white text-blue-700 font-bold text-sm rounded-xl hover:bg-blue-50 transition shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
          >
            Access Your Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
      <div className="p-3 bg-blue-50 rounded-xl inline-block">{icon}</div>
      <h3 className="font-bold text-base text-gray-900">{title}</h3>
      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{description}</p>
    </div>
  );
}
import React from "react";
import { 
  Leaf, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Sparkles, 
  Target, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  Users
} from "lucide-react";

export default function AboutSection({ onNavigate }) {
  // 5 Team Members Data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ananya Sharma",
      role: "Senior Clinical Dietitian",
      image: "https://images.unsplash.com/photo-1594824813566-78a5e375f439?auto=format&fit=crop&q=80&w=600",
      bio: "Specializes in clinical nutrition, therapeutic diet planning, and endocrine health management.",
      tag: "Dietary Specialist"
    },
    {
      id: 2,
      name: "Karthik Raja",
      role: "Head Fitness & Body Coach",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      bio: "Expert in muscle transformation, fat-loss protocols, and body composition optimization.",
      tag: "Fitness Lead"
    },
    {
      id: 3,
      name: "Priya Sundaram",
      role: "Wellness & Lifestyle Mentor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      bio: "Focuses on stress management, mindful eating habits, and daily habit tracking.",
      tag: "Holistic Care"
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      role: "Downline Operations Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      bio: "Oversees local community coaching networks and ensures client progress tracking.",
      tag: "Operations"
    },
    {
      id: 5,
      name: "Meera Krishnan",
      role: "Customer Support Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
      bio: "Dedicated to guiding clients daily, ensuring rapid query resolution and smooth onboarding.",
      tag: "Client Support"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50/50 py-16 px-4 lg:px-12 font-sans mt-2 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* 1. HERO HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4" /> Our Story & Passion
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Nurturing Health, <span className="text-blue-600">Empowering Lives</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Discover the heart behind GreenLife Nutrition, why we created a personalized health standard, and how we are revolutionizing wellness—one individual at a time.
          </p>
        </div>

        {/* 2. THE FOUNDER'S JOURNEY */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-green-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

          {/* Founder Image Block */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-blue-100 shadow-lg bg-blue-50">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-5">Mr. Bala Suburamaniyan</h3>
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Founder & Nutrition WELLNESS COACH</p>
          </div>

          {/* Founder Story Text */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              "It started with a personal battle, a breakthrough, and a passion to serve."
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              For years, I struggled with being overweight. The excess weight impacted my energy, my confidence, and my daily health. I tried everything—strict diets, intense routines, and countless supplements—but nothing worked sustainably. Just when I felt stuck, I discovered personalized cellular nutrition. After consistently following a dedicated regimen, my transformation began: I lost the weight, regained my vitality, and completely transformed my health.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The real turning point came when my wife, who had been dealing with persistent thyroid issues, started using these targeted nutrition products. Over time, her condition improved dramatically and her body restored its natural balance. Seeing both of our lives transformed convinced me that everyone deserves access to genuine, result-driven wellness.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              That profound experience became the foundation of <strong className="text-gray-800">GreenLife Nutrition</strong>. I didn't start this store just to sell products—my sole motive is to guide, support, and help others overcome their health hurdles with personalized care and proven nutrition.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-4 py-2 italic text-gray-700 bg-blue-50/50 rounded-r-xl text-sm">
              "Having walked through the frustration of health challenges myself, my mission is to ensure no one has to do it alone. We are here to help you rewrite your health story."
            </blockquote>
          </div>
        </div>

        {/* 3. NEW: OUR POWERHOUSE TEAM SECTION */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" /> Core Team & Specialists
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Meet The Experts Behind Your Success
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Our strength lies in our dedicated team of certified coaches, nutrition specialists, and support leaders driven by one common mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-3xl border border-blue-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-28 h-28 rounded-full object-cover border-4 border-sky-100 group-hover:border-sky-500 transition duration-300 shadow-md"
                  />
                  <span className="absolute bottom-0 right-0 bg-sky-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white shadow-sm">
                    {member.tag}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-sky-600 transition">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed bg-slate-50 p-3 rounded-2xl w-full border border-slate-100">
                  "{member.bio}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. MISSION & VISION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden space-y-4">
            <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              To empower every individual with data-driven health insights, clean nutrition, and community-driven support, enabling sustainable transformations and healthier lifestyles.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden space-y-4">
            <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-green-100 text-sm md:text-base leading-relaxed">
              To become the global trusted partner in personal wellness, standardizing transparent, personalized nutrition that prioritizes long-term vitality over short-term trends.
            </p>
          </div>

        </div>

        {/* 5. WHY CHOOSE US / WHAT MAKES US DIFFERENT */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Why Choose GreenLife Nutrition?
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Here is what sets us apart from ordinary nutrition platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <FeatureCard 
              icon={<ShieldCheck className="w-7 h-7 text-blue-600" />}
              title="Metric-Driven Care"
              description="We analyze your BMI, Visceral Fat, BMR, and Body Age before recommending products, ensuring tailored health solutions."
            />

            <FeatureCard 
              icon={<Award className="w-7 h-7 text-green-600" />}
              title="100% Purity & Transparency"
              description="Our supplements are sourced with pure, organic ingredients without hidden fillers or synthetic additives."
            />

            <FeatureCard 
              icon={<HeartHandshake className="w-7 h-7 text-indigo-600" />}
              title="Community & Admin Network"
              description="Access guidance through our local admin networks and health tracking tools to stay accountable every step of the way."
            />

          </div>
        </div>

        {/* 6. TRUST BADGES / STATS COUNTER */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-lg">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-green-300">1,000+</p>
            <p className="text-xs md:text-sm text-blue-100 mt-1 font-medium">Health Reports Generated</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-green-300">98%</p>
            <p className="text-xs md:text-sm text-blue-100 mt-1 font-medium">Customer Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-green-300">100%</p>
            <p className="text-xs md:text-sm text-blue-100 mt-1 font-medium">Organic Ingredients</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-green-300">24/7</p>
            <p className="text-xs md:text-sm text-blue-100 mt-1 font-medium">Community Guidance</p>
          </div>
        </div>

        {/* 7. CALL TO ACTION BANNER */}
        <div className="bg-gradient-to-r from-blue-100 via-white to-green-100 border border-blue-200 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-sm">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Ready to Begin Your Personal Health Journey?
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Take your body composition evaluation today, receive your health card, and explore tailored nutritional solutions built for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("dashboard")}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              Go to Dashboard <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("dashboard")}
              className="px-8 py-3.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-sm rounded-xl transition active:scale-95 cursor-pointer"
            >
              Explore Products
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition space-y-3">
      <div className="p-3 bg-gray-50 rounded-xl inline-block">{icon}</div>
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
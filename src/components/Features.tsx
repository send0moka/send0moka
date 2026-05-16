import React from "react";
import { Sparkles, Heart, Code } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  iconBg, 
  title, 
  description 
}: { 
  icon: any; 
  iconBg: string; 
  title: string; 
  description: string; 
}) => (
  <div className="relative border border-zinc-200/50 rounded-[2rem] bg-white overflow-visible flex flex-col">
    {/* Grid lines: Precisely aligned */}
    <div className="absolute left-[36px] top-0 bottom-0 w-[1px] bg-zinc-300/80 z-0" />
    <div className="absolute top-[36px] left-0 right-0 h-[1px] bg-zinc-300/80 z-0" />

    {/* Header Pill: Overlapping grid intersection */}
    <div className="absolute top-3 left-3 flex items-center bg-[#f1f5f9] rounded-full p-0.5 pr-6 border border-zinc-200/60 z-20">
      <div className={`w-11 h-11 rounded-full ${iconBg} flex items-center justify-center text-white`}>
        <Icon size={20} strokeWidth={2.5} />
      </div>
      <h3 className="ml-3 text-base font-bold text-[#1e293b] tracking-tight">{title}</h3>
    </div>

    {/* Body Area: Aligned to grid */}
    <div className="relative z-10 pt-20 pl-14 pr-6 pb-6 flex-grow">
      <p className="text-[#64748b] text-sm font-medium leading-[1.5] tracking-tight">
        {description}
      </p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Layer 1: Background Color Transition */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="h-20 w-full bg-gradient-to-b from-transparent to-white" />
        <div className="flex-grow bg-white" />
      </div>

      {/* Layer 2: Grid Pattern (on top of white background) */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-[1]" />
      
      {/* Content Layer */}
      <div className="relative z-10 pt-16 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <FeatureCard
              icon={Sparkles}
              iconBg="bg-[#FFC107]"
              title="Clean & Intuitive"
              description="Keep the UI clean with a modern touch without compromising UX."
            />
            <FeatureCard
              icon={Heart}
              iconBg="bg-[#FF4081]"
              title="Detail Oriented"
              description="Awareness to ease of access, UI consistency, and improved UX."
            />
            <FeatureCard
              icon={Code}
              iconBg="bg-[#03A9F4]"
              title="Pretty & Optimized"
              description="Writing clean code is a top priority while keeping it as optimized as possible."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

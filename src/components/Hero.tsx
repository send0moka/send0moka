import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";

const TechIcon = ({ src, title, isSolid = true }: { src: string; title: string; isSolid?: boolean }) => (
  <div className="group relative flex items-center justify-center">
    <Image
      src={src}
      alt={title}
      width={24}
      height={24}
      className={`w-6 h-6 object-contain grayscale transition-all duration-300 group-hover:grayscale group-hover:opacity-100 group-hover:scale-110 group-hover:brightness-0 ${
        isSolid ? "opacity-30 contrast-125" : "opacity-80 brightness-75"
      }`}
      title={title}
    />
  </div>
);

const Hero = () => {
  const techStack = [
    { name: "TypeScript", src: "/tech-logos/typescript.svg", isSolid: true },
    { name: "React", src: "/tech-logos/react.svg", isSolid: false },
    { name: "Tailwind CSS", src: "/tech-logos/tailwind.svg", isSolid: false },
    { name: "Framer Motion", src: "/tech-logos/framer.svg", isSolid: true },
    { name: "Zustand", src: "/tech-logos/zustand.svg", isSolid: true }
  ];

  const tools = [
    { name: "VS Code", src: "/tech-logos/vscode.svg", isSolid: true },
    { name: "Figma", src: "/tech-logos/figma.svg", isSolid: true }
  ];

  return (
    <section className="min-height-[calc(100vh-80px)] flex items-center px-8 py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-4xl font-normal tracking-tight text-zinc-700">
              <span>hi!</span>
              <span className="animate-bounce inline-block">🤘</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-zinc-900 whitespace-nowrap">
              I&apos;m <span className="text-[#059669]">Jehian</span> Athaya,
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-600 max-w-xl leading-relaxed">
              a <span className="font-bold text-zinc-900">full-stack developer</span> who loves intuitive, clean and modern UI design.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link
              href="https://cal.com/jehian/discuss"
              target="_blank"
              className="px-8 py-4 bg-[#059669] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#059669]/20 transition-all active:scale-95"
            >
              Get In Touch
            </Link>
            
            <Link
              href="https://docs.google.com/document/d/1CdE2xiqV28teXHy08GaSayN7YIlFA5JGMk0tZBppc6s/edit?usp=sharing"
              target="_blank"
              className="flex items-center gap-3 group text-zinc-500 hover:text-zinc-900 transition-colors py-2"
            >
              <FileText size={20} className="text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              <span className="text-sm font-black tracking-[0.2em] uppercase">RESUME</span>
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="pt-20">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
              current favorite tech stack/tools:
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-5">
                {techStack.map((tech) => (
                  <TechIcon key={tech.name} src={tech.src} title={tech.name} isSolid={tech.isSolid} />
                ))}
              </div>
              
              <div className="w-[1px] h-6 bg-zinc-300 mx-1" />
              
              <div className="flex items-center gap-5">
                {tools.map((tool) => (
                  <TechIcon key={tool.name} src={tool.src} title={tool.name} isSolid={tool.isSolid} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="relative group perspective-1000 flex justify-center lg:justify-end">
          <div className="relative z-10 transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-2 max-w-[480px]">
            <Image
              src="/hero-illustration.png"
              alt="Jehian Athaya Illustration"
              width={480}
              height={480}
              className="w-full h-auto drop-shadow-2xl rounded-2xl"
              priority
            />
          </div>
          {/* Decorative background elements */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#059669]/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-zinc-200/40 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

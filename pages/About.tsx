import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        y: 50, opacity: 0, duration: 1, ease: "power4.out"
      });
      gsap.from(".about-img", {
        scale: 0.9, opacity: 0, duration: 1.2, delay: 0.3, ease: "expo.out"
      });
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-list",
          start: "top 70%",
        },
        x: -50, opacity: 0, stagger: 0.2, duration: 0.8
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const timeline = [
    {
      year: "Sept 2025 - Present",
      role: "Software Engineer",
      company: "Senyum Cerdas Indonesia",
      desc: "Developing and designing the Learning Management System (LMS), as well as validating training data results."
    },
    {
      year: "Sept 2024 - Dec 2024",
      role: "FrontEnd Developer Intern",
      company: "Ministry of Higher Education",
      desc: "Redesigned PDDikti CMS and front pages, improving load times by 30%. Developed dynamic CMS with CRUD functionality and resolved critical UI issues."
    },
    {
      year: "Sept 2023 - July 2024",
      role: "FullStack Developer",
      company: "Nusa Quanta Indonesia",
      desc: "Crafted high-performance UIs and RESTful APIs. Optimized page load times by 25% and collaborated to reduce development cycles by 20%."
    },
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">About Me</span>
            <h1 className="about-title text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Developer.<br />
              Problem Solver.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Innovator.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              I'm a full stack developer with experience building scalable web applications, APIs, and digital solutions for startups and growing businesses.
            </p>
          </div>
          <div className="about-img relative">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-white/5 relative z-10">
              <img src="/images/about_image.jpg" alt="Portrait" className="w-full h-full object-cover" />
            </div>
            {/* Abstract Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-600/20 to-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Experience / Recognition */}
        <div className="grid lg:grid-cols-12 gap-12 border-t border-white/10 pt-20">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-white mb-6">Experience & <br />Recognition</h2>
            <p className="text-gray-400 text-sm">A few highlights from my journey as a full stack developer building impactful digital solutions.</p>
          </div>
          <div className="lg:col-span-8 timeline-list">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item group flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-white/5 hover:border-brand-orange/50 transition-colors">
                <div className="w-32 text-gray-500 font-mono text-sm pt-1">{item.year}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{item.role}</h3>
                  <p className="text-white/60 mb-2">{item.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
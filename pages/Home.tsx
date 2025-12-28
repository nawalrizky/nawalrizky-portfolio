import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Circle, Triangle, Square, Hexagon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useContact } from '../context/ContactContext';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const { openContact } = useContact();
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [backgroundSize, setBackgroundSize] = useState('cover');
  const [backgroundPosition, setBackgroundPosition] = useState('center center');

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBackgroundImage('url(/images/hero_mobile_image.jpg)');
        setBackgroundSize('cover');
        setBackgroundPosition('center center');
      } else if (width < 1024) {
        // Tablet: use desktop image with adjusted size and position
        setBackgroundImage('url(/images/hero_image.jpg)');
        setBackgroundSize('cover');
        setBackgroundPosition('30% center');
      } else {
        setBackgroundImage('url(/images/hero_image.jpg)');
        setBackgroundSize('150%');
        setBackgroundPosition('center center');
      }
    };

    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();

      tl.from(".hero-title-char", {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out"
      })
        .from(".hero-sub", {
          opacity: 0,
          x: 20,
          duration: 0.8
        }, "-=0.5");

      // Trusted By Animation
      gsap.from(".trusted-logo", {
        scrollTrigger: { trigger: ".trusted-section", start: "top 90%" },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      });

      // Text Section Animation
      gsap.from(".philosophy-text", {
        scrollTrigger: { trigger: ".philosophy-section", start: "top 75%" },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });

      // Projects Animation
      gsap.from(".project-preview-card", {
        scrollTrigger: { trigger: ".projects-preview-section", start: "top 70%" },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      // CTA Animation
      gsap.from(".cta-content", {
        scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);


  const services = [
    { id: "01", title: "Frontend Development" },
    { id: "02", title: "Backend Development" },
    { id: "03", title: "Database Design" },
    { id: "04", title: "API Integration" },
  ];

  const selectedProjectIds = [10, 1]; // Biduk-Biduk, Lustrum XI KMTSL
  const previewProjects = selectedProjectIds.map(id => {
    const p = projects.find(proj => proj.id === id);
    return p ? { id: p.id, title: p.title, cat: p.category, img: p.image } : null;
  }).filter(Boolean) as { id: number, title: string, cat: string, img: string }[];

  return (
    <div ref={containerRef} className="bg-brand-dark min-h-screen">

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#FF5722] via-[#E64A19] to-[#BF360C] rounded-b-[40px] md:rounded-b-[80px] pt-32 pb-12 overflow-hidden min-h-[90vh] flex flex-col justify-between"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">

          <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
            {/* Left Column - Title */}
            <div className="lg:col-span-4 z-20 mb-8 md:mb-0">
              <p className="hero-sub text-white/90 text-lg md:text-xl mb-4 font-medium flex items-center gap-3">
                <span className="w-10 h-[1px] bg-white/60"></span>
                Hey, I'm a
              </p>
              <h1 className="font-display font-bold text-white text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[110px] leading-[0.95] tracking-[-0.02em] mb-6 md:mb-8 drop-shadow-lg">
                <span className="block hero-title-char">Full Stack</span>
                <span className="block hero-title-char">Developer</span>
              </h1>
            </div>

            {/* Middle Column - Background image will show here */}
            <div className="lg:col-span-4 z-10 hidden lg:block"></div>

            {/* Right Column - Description */}
            <div className="lg:col-span-4 z-20 md:col-span-6 lg:col-span-4">
              <div className="hero-sub">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">Great code should solve real problems.</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base mt-4 md:mt-10">
                  From frontend to backend, I build scalable applications that perform.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Projects Preview Section */}
      <section className="projects-preview-section py-20 pb-32 bg-[#080808] relative overflow-hidden">
        {/* Background glow for this section */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 mb-16 text-center">
          <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">My Projects</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Curious What Else I've <br />Built?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Explore more web applications, APIs, and full stack projects in my extended portfolio.
          </p>
          <Link to="/projects">
            <Button variant="white" className="group">
              See more Projects
              <div className="bg-brand-orange text-white rounded-full p-1 ml-2 group-hover:rotate-45 transition-transform">
                <ArrowRight size={14} />
              </div>
            </Button>
          </Link>
        </div>

        <div className="container mx-auto px-6" ref={projectsRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewProjects.map((project, idx) => (
              <Link to={`/project/${project.id}`} key={project.id} className="project-preview-card group relative block">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-white/5">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute bottom-6 left-6">
                    <span className="text-brand-orange text-xs font-bold mb-1 block">#{`0${idx + 1}`}</span>
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.cat}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/5 pt-8">
            <div>
              <span className="text-brand-orange font-bold text-sm block mb-1">#01</span>
              <span className="text-white text-sm">Planning & Architecture</span>
            </div>
            <div>
              <span className="text-brand-orange font-bold text-sm block mb-1">#02</span>
              <span className="text-white text-sm">Development & Testing</span>
            </div>
            <div>
              <span className="text-brand-orange font-bold text-sm block mb-1">#03</span>
              <span className="text-white text-sm">Deployment & DevOps</span>
            </div>
            <div>
              <span className="text-brand-orange font-bold text-sm block mb-1">#04</span>
              <span className="text-white text-sm">Maintenance & Updates</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section (Restored) */}
      <section className="cta-section py-32 container mx-auto px-6 text-center">
        <div className="cta-content">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8">
            Let's build something <br />
            <span className="text-brand-orange">Amazing.</span>
          </h2>
          <Button className="h-16 px-10 text-lg" onClick={openContact}>Start a Project</Button>
        </div>
      </section>

    </div>
  );
};
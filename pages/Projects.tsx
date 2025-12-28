import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-header", {
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
      });

      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%"
        }
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">

        <div className="mb-20 project-header max-w-3xl">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Selected Work</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Building Digital Solutions Through Code.
          </h1>
          <p className="text-gray-400 text-lg">
            A curated collection of web applications, APIs, and full stack projects built for performance and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-card group cursor-pointer block">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <ArrowUpRight className="text-black" size={24} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="text-gray-500 text-sm hidden md:block">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
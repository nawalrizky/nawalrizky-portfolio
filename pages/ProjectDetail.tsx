import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { projects } from '../data/projects';

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    const project = projects.find(p => p.id === Number(id));

    useEffect(() => {
        if (!project) {
            navigate('/projects');
            return;
        }

        const ctx = gsap.context(() => {
            gsap.from(".detail-animate", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, [project, navigate]);

    if (!project) return null;

    return (
        <div ref={containerRef} className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6">
                <Link to="/projects" className="detail-animate inline-flex items-center text-gray-400 hover:text-brand-orange transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="detail-animate space-y-6">
                        <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">{project.category}</span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white">{project.title}</h1>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-sm font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed pt-4">
                            {project.description}
                        </p>

                        {project.features && project.features.length > 0 && (
                            <div className="pt-6">
                                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-400">
                                            <CheckCircle size={18} className="text-brand-orange mr-3 mt-1 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="pt-8 flex flex-wrap gap-4">
                            {project.link && project.link.startsWith('http') && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-orange text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors">
                                    <ExternalLink size={20} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="detail-animate space-y-8 lg:sticky lg:top-32">
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video mx-auto">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {project.gallery && project.gallery.length > 1 && (
                            <div className="grid grid-cols-2 gap-4">
                                {project.gallery.slice(1, 5).map((img, idx) => (
                                    <div key={idx} className="rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-video">
                                        <img src={img} alt={`${project.title} gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

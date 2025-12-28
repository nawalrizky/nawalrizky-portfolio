import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { X, Send, ArrowRight } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export const ContactModal: React.FC = () => {
    const { isContactOpen, closeContact } = useContact();
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Web Development',
        message: ''
    });

    useEffect(() => {
        if (isContactOpen) {
            document.body.style.overflow = 'hidden';

            const ctx = gsap.context(() => {
                gsap.to(modalRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    display: 'flex'
                });

                gsap.fromTo(contentRef.current,
                    { y: 50, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 }
                );
            });

            return () => ctx.revert();
        } else {
            document.body.style.overflow = 'unset';

            const ctx = gsap.context(() => {
                gsap.to(modalRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        if (modalRef.current) modalRef.current.style.display = 'none';
                    }
                });
            });

            return () => ctx.revert();
        }
    }, [isContactOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct email body
        const subject = `Project Inquiry: ${formData.projectType} - ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AProject Type: ${formData.projectType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        window.location.href = `mailto:n.rizkykautsar@gmail.com?subject=${subject}&body=${body}`;

        // Optional: close modal after sending
        // closeContact(); 
    };

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4 opacity-0"
        >
            <div
                ref={contentRef}
                className="bg-[#0f0f0f] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden relative shadow-2xl"
            >
                <button
                    onClick={closeContact}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-12">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Let's start a project.</h2>
                        <p className="text-gray-400">Tell me about your idea and I'll help you bring it to life.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-orange focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-orange focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="projectType" className="text-sm font-medium text-gray-300">Project Type</label>
                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-orange focus:outline-none transition-colors cursor-pointer appearance-none"
                            >
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="Consultation">Consultation</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-orange focus:outline-none transition-colors resize-none"
                                placeholder="Tell me about your project details..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Send Message</span>
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Nawal Rizky</h3>
            <p className="text-gray-400 text-sm">Full Stack Development.</p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/nawalrizky" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange hover:text-white transition-all">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/nawalrizky" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
            <a href="mailto:n.rizkykautsar@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange hover:text-white transition-all">
              <Mail size={18} />
            </a>
          </div>

          <div className="text-gray-500 text-xs">
            © 2025 Nawal Rizky. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
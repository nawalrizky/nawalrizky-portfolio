import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openContact } = useContact();
  const location = useLocation();
  const navigate = useNavigate();
  const logoRef = useRef<HTMLSpanElement>(null);

  const targetText = "Nawal Rizky";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleText = (element: HTMLElement, target: string, duration: number = 0.5, onComplete?: () => void) => {
    // Clear any existing interval
    if (scrambleIntervalRef.current) {
      clearInterval(scrambleIntervalRef.current);
    }

    const iterations = 30;
    let iteration = 0;

    scrambleIntervalRef.current = setInterval(() => {
      element.textContent = target
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return target[index];
          }
          // Keep spaces as spaces
          if (letter === " ") {
            return " ";
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (iteration >= target.length) {
        if (scrambleIntervalRef.current) {
          clearInterval(scrambleIntervalRef.current);
          scrambleIntervalRef.current = null;
        }
        element.textContent = target;
        if (onComplete) onComplete();
      }

      iteration += 1 / (iterations * duration);
    }, duration * 1000 / iterations);
  };

  useEffect(() => {
    if (logoRef.current) {
      // First load animation
      logoRef.current.textContent = "";
      setTimeout(() => {
        if (logoRef.current) {
          scrambleText(logoRef.current, targetText, 0.8);
        }
      }, 100);
    }

    // Cleanup on unmount
    return () => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
      }
    };
  }, []);

  const handleLogoHover = () => {
    if (logoRef.current) {
      scrambleText(logoRef.current, targetText, 0.3);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-display font-bold text-white flex items-center gap-2 group"
            onMouseEnter={handleLogoHover}
          >
            <div className="w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform" />
            <span ref={logoRef}></span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-white/80 ${isActive ? 'text-white' : 'text-white/70'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={openContact}
              className="ml-4 pl-5 pr-2 py-1.5 bg-white text-brand-dark text-sm font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-3 group"
            >
              Get in touch
              <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white z-[102]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Content - Slides in from right */}
      <div
        className={`fixed inset-0 z-[201] flex flex-col items-center justify-center gap-8 md:hidden bg-brand-dark transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className="text-3xl font-display font-bold text-white hover:text-brand-orange transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <button
          className="absolute top-6 right-6 text-white hover:text-brand-orange transition-colors z-[202]"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
      </div>
    </>
  );
};
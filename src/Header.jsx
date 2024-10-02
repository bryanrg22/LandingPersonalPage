import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ scrollToSection, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">
          <button 
            onClick={scrollToTop} 
            className="text-2xl font-bold hover:text-gray-300 transition-colors"
          >
            BR
          </button>
          <div className="hidden md:flex space-x-7">
            <button onClick={() => scrollToSection(refs.activityRef)} className="hover:text-gray-300">Activity</button>
            <button onClick={() => scrollToSection(refs.experienceRef)} className="hover:text-gray-300">Experience</button>
            <button onClick={() => scrollToSection(refs.projectsRef)} className="hover:text-gray-300">Projects</button>
            <button onClick={() => scrollToSection(refs.skillsRef)} className="hover:text-gray-300">Skills</button>
            <button onClick={() => scrollToSection(refs.awardsRef)} className="hover:text-gray-300">Awards</button>
            <button onClick={() => scrollToSection(refs.contactRef)} className="hover:text-gray-300">Contact</button>
            <a 
              href="/resume.pdf" 
              className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => { scrollToSection(refs.activityRef); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700 w-full text-left">Activity</button>
            <button onClick={() => { scrollToSection(refs.experienceRef); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700 w-full text-left">Experience</button>
            <button onClick={() => { scrollToSection(refs.projectsRef); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700 w-full text-left">Projects</button>
            <button onClick={() => { scrollToSection(refs.skillsRef); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700 w-full text-left">Skills</button>
            <button onClick={() => { scrollToSection(refs.awardsRef); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700 w-full text-left">Awards</button>
            <button onClick={() => { scrollToSection(refs.contactRef); toggleMenu(); }} className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300 hover:bg-gray-700 w-full text-left">Contact</button>
            <a 
              href="/resume.pdf" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-white text-gray-900 hover:bg-gray-200 w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
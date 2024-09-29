import React, { useRef, useCallback } from 'react'
import { Github, Linkedin, Handshake } from "lucide-react"
import MyActivity from './Activity'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import Skills from './Skills'
import Awards from './Awards'
import Contact from './ContactMe'
import MouseIcon from './MouseIcon';
import Footer from './Footer';
import './mouseIcon.css';

// Easing function
const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const ScrollMouseIcon = ({ scrollToSection, targetRef }) => (
  <div className="w-full flex justify-center mb-20">
    <button onClick={() => scrollToSection(targetRef)} className="bg-transparent border-none cursor-pointer">
      <MouseIcon />
    </button>
  </div>
);

export default function LandingPage() {
  const activityRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const awardsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = useCallback((elementRef) => {
    const startPosition = window.pageYOffset;
    const targetPosition = elementRef.current.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust this value to change the scroll speed
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const easePercentage = easeInOutQuad(percentage);

      window.scrollTo(0, startPosition + distance * easePercentage);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <div className="min-h-screen flex flex-col">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <header className="py-6">
            <nav className="flex justify-between items-center">
              <div className="text-2xl font-bold">BR</div>
              <div className="space-x-7">
                <button onClick={() => scrollToSection(activityRef)} className="hover:text-gray-300">Activity</button>
                <button onClick={() => scrollToSection(experienceRef)} className="hover:text-gray-300">Experience</button>
                <button onClick={() => scrollToSection(projectsRef)} className="hover:text-gray-300">Projects</button>
                <button onClick={() => scrollToSection(skillsRef)} className="hover:text-gray-300">Skills</button>
                <button onClick={() => scrollToSection(awardsRef)} className="hover:text-gray-300">Awards</button>
                <button onClick={() => scrollToSection(contactRef)} className="hover:text-gray-300">Contact</button>
                <a 
                    href="/resume.pdf" 
                    className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Resume
                </a>
              </div>
            </nav>
          </header>
        </div>

        <main className="flex-grow flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight whitespace-nowrap">
              BRYAN RAMIREZ-GONZALEZ
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              <span className="text-blue-400">First-Generation Latino Software Developer</span> and <span className="text-green-400">First-Year Student</span> studying at <span className="text-red-400">The University of Southern California</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a href="https://www.linkedin.com/in/bryanrg22" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
              <a href="https://www.github.com/bryanrg22" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                GitHub
              </a>
              <a href="https://usc.joinhandshake.com/profiles/59199219" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                <Handshake className="mr-2" size={20} />
                Handshake
              </a>
            </div>
          </div>
        </main>

        <ScrollMouseIcon scrollToSection={scrollToSection} targetRef={activityRef} />
      </div>

      <div id="activity" ref={activityRef}>
        <MyActivity />
      </div>

      <div id="experience" ref={experienceRef}>
        <WorkExperience />
      </div>

      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>

      <div id="skills" ref={skillsRef}>
        <Skills />
      </div>

      <div id="awards" ref={awardsRef}>
        <Awards />
      </div>
      
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>

      <div id="footer">
        <Footer />
      </div>

    </div>
  );
}
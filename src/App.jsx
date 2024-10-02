<<<<<<< Updated upstream
import React, { useRef, useCallback } from 'react'
=======
import React, { useRef, useCallback, useEffect } from 'react'
>>>>>>> Stashed changes
import { Github, Linkedin, Handshake } from "lucide-react"
import Header from './Header'
import MyActivity from './Activity'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import Skills from './Skills'
import Awards from './Awards'
import Contact from './ContactMe'
import MouseIcon from './MouseIcon';
import Footer from './Footer';
import './mouseIcon.css';
<<<<<<< Updated upstream
=======
import GoogleAnalytics from './GoogleAnalytics';
import useAnalytics from './useAnalytics';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
  const { pageView } = useAnalytics();

  useEffect(() => {
    console.log('LandingPage mounted');
    pageView('Landing Page', '/');
  }, [pageView]);

>>>>>>> Stashed changes
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

  const refs = {
    activityRef,
    experienceRef,
    projectsRef,
    skillsRef,
    awardsRef,
    contactRef
  };

  return (
<<<<<<< Updated upstream
    <div className="bg-gray-900 text-white font-sans">
      <div className="min-h-screen flex flex-col">
        <Header scrollToSection={scrollToSection} refs={refs} />

        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="inline-block">BRYAN</span>{' '}
              <span className="inline-block">RAMIREZ-GONZALEZ</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
              <span className="text-blue-400 block sm:inline">First-Generation Latino Software Developer</span>
              <span className="hidden sm:inline"> and </span>
              <span className="text-green-400 block sm:inline">First-Year Student</span>
              <span className="block sm:inline"> studying at </span>
              <span className="text-red-400 block sm:inline">The University of Southern California</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a href="https://www.linkedin.com/in/bryanrg22" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                <span className="sm:hidden">LinkedIn</span>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a href="https://www.github.com/bryanrg22" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                <span className="sm:hidden">GitHub</span>
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="https://usc.joinhandshake.com/profiles/59199219" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                <Handshake className="mr-2" size={20} />
                <span className="sm:hidden">Handshake</span>
                <span className="hidden sm:inline">Handshake</span>
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
=======
    <>
      <GoogleAnalytics measurementId="G-GZY94HXVBB" />
      <div className="bg-gray-900 text-white font-sans">
        <div className="min-h-screen flex flex-col">
          <Header scrollToSection={scrollToSection} refs={refs} />

          <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
                <span className="inline-block">BRYAN</span>{' '}
                <span className="inline-block">RAMIREZ-GONZALEZ</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
                <span className="text-blue-400 block sm:inline">First-Generation Latino Software Developer</span>
                <span className="hidden sm:inline"> and </span>
                <span className="text-green-400 block sm:inline">First-Year Student</span>
                <span className="block sm:inline"> studying at </span>
                <span className="text-red-400 block sm:inline">The University of Southern California</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <a href="https://www.linkedin.com/in/bryanrg22" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" size={20} />
                  <span className="sm:hidden">LinkedIn</span>
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a href="https://www.github.com/bryanrg22" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  <span className="sm:hidden">GitHub</span>
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a href="https://usc.joinhandshake.com/profiles/59199219" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Handshake className="mr-2" size={20} />
                  <span className="sm:hidden">Handshake</span>
                  <span className="hidden sm:inline">Handshake</span>
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
    </>
>>>>>>> Stashed changes
  );
}
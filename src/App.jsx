import React from 'react'
import { Github, Linkedin, Handshake } from "lucide-react"
import MyActivity from './Activity'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import MouseIcon from './MouseIcon';
import './mouseIcon.css';

const ScrollMouseIcon = () => (
  <div className="w-full flex justify-center mb-20">
    <a href="#activity">
      <MouseIcon />
    </a>
  </div>
);

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <div className="min-h-screen flex flex-col">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <header className="py-6">
            <nav className="flex justify-between items-center">
              <div className="text-2xl font-bold">BR</div>
              <div className="space-x-4">
                <a href="#" className="hover:text-gray-300">Activity</a>
                <a href="#" className="hover:text-gray-300">Experience</a>
                <a href="#" className="hover:text-gray-300">Projects</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
                <a href="#" className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">Resume</a>
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
              <a href="https://usc.joinhandshake.com/profiles/59199219" className="flex items-center justify-center border border-white p-2 hover:bg-white hover:text-gray-900 transition-colors" target="_blank">
                <Handshake className="mr-2" size={20} />
                Handshake
              </a>
            </div>
          </div>
        </main>

        <ScrollMouseIcon />
      </div>

      <div id="activity">
        <MyActivity />
      </div>

      <div id="experience">
        <WorkExperience />
      </div>

      <div id="projects">
        <Projects />
      </div>

    </div>
  );
}
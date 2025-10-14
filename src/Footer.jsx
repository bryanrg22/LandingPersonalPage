import React from 'react';
import { Github, Linkedin, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-6">
          <a 
            href="https://github.com/bryanrg22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/bryanrg22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="https://scholar.google.com/citations?user=x5W6xScAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <GraduationCap size={24} />
            <span className="sr-only">Google Scholar</span>
          </a>
          <a 
            href="https://devpost.com/bryanrg22?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <img src="/websiteIcon/devpostIcon.png" alt="DevPost" className="w-6 h-6" style={{filter: 'brightness(0) invert(1) contrast(2) drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}} />
            <span className="sr-only">DevPost</span>
          </a>
          <a 
            href="https://usc.joinhandshake.com/profiles/bryanrg22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <img src="/websiteIcon/handshakeLogo.png" alt="Handshake" className="w-6 h-6" style={{filter: 'brightness(0) invert(1) contrast(2) drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}} />
            <span className="sr-only">Handshake</span>
          </a>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          bryanram.com
        </div>
      </div>
    </footer>
  );
}
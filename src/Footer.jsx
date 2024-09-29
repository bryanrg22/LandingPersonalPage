import React from 'react';
import { Github, Linkedin } from "lucide-react";
import { Handshake } from "lucide-react";

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
            href="https://usc.joinhandshake.com/profiles/59199219" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Handshake size={24} />
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
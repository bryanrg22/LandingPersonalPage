import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    "name": "CleanSweep",
    "description": "Optimizing Waste Collection for Smarter Cities",
    "longDescription": "CleanSweep provides an innovative solution to waste management by using real-time data to optimize garbage collection routes, minimizing inefficiency and reducing environmental impact. By integrating hardware and software, it offers dynamic routing for garbage truck drivers based on live conditions like trash bin levels and traffic. This project aims to create cleaner cities by improving resource allocation and reducing the strain on landfills through smarter waste management.",
    "skills": ["React.js", "Tailwind CSS", "Vite", "Python", "Flask", "Firebase"],
    "videoUrl": "https://github.com/user-attachments/assets/0f2393c9-9ef4-4f08-b809-f02884e8ea5a",
    "githubUrl": "https://github.com/DPulavarthy/HackHarvard",
    "image": "/projectsLogos/cleansweeplogo.png"
  },
  {
    name: "eduTrade",
    description: "Your AI Financial and Stock Investment Advisor",
    longDescription: "This project puts forth an innovative approach to dissecting and promoting simple stock options—a fantastic tool for beginners in finance and stocks to learn. Featuring a robust user login system with complete firebase integration, a detailed questionnaire to tailor stock options to users, and finally personalized stock suggestions paired with helpful visual aides, it's never been easier to grow your wealth. Meet your AI financial assistant today!",
    skills: ["React.js", "Tailwind CSS", "Vite", "Python", "Flask", "Firebase"],
    videoUrl: "https://github.com/user-attachments/assets/325452ee-d9b4-4fd8-b55f-f0c6fe43cbc5",
    githubUrl: "https://github.com/bryanrg22/edutrade",
    image: "/projectsLogos/edutradeLogo.png",
  },
  {
    name: "StockWise",
    description: "Stock sentiment analysis powered by Google Gemini",
    longDescription: "StockWise is an AI-powered tool designed to help investors make smarter decisions by analyzing the 50 most relevant news articles, reports, and social media posts related to a specific stock. It offers features like Stock Sentiment Percentile Distribution, Action Recommendations, and Stock Analysis to provide investors with comprehensive insights.",
    skills: ["JavaScript", "React", "Tailwind CSS", "DaisyUI", "Framer", "Vite", "Node.js", "Google Gemini", "Python", "Flask", "Firebase", "Anaconda"],
    videoUrl: "https://github.com/user-attachments/assets/28d5a71a-0e7a-4e99-af01-05d11c646aee",
    githubUrl: "https://github.com/benson-fm/stockwise",
    image: "/projectsLogos/stockwiseLogo.png",
  },
  {
    name: "Wordle",
    description: "Python-based implementation of the popular word-guessing game",
    longDescription: "Wordle is a Python-based implementation of the popular word-guessing game. It features multiple difficulty modes, dynamic word generation using the OpenAI GPT-3.5 API, stylized output with colorama, and a hint system. Players guess a randomly generated word, with feedback provided after each guess.",
    skills: ["Python", "OpenAI API", "Colorama"],
    videoUrl: "https://github.com/user-attachments/assets/61def674-bd5d-4582-a6b7-0f38bf574ae8",
    githubUrl: "https://github.com/bryanrg22/Wordle",
    image: "/projectsLogos/pythonwordleLogo.png",
  }
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative group transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="relative z-10 p-6">
        <div className="flex items-center mb-4">
          <img 
            src={project.image} 
            alt={`${project.name} logo`} 
            className="w-12 h-12 rounded-full mr-4 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div>
            <h3 className="text-2xl font-bold group-hover:text-blue-300 transition-colors duration-300">{project.name}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span key={index} className="bg-gray-700 text-white text-sm px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <video controls className="w-full h-auto rounded-lg">
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {expanded && (
          <div className="mb-4">
            <p className="text-gray-300">{project.longDescription}</p>
          </div>
        )}
        <div className="flex justify-between items-center">
          <button
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Learn More'}
            {expanded ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
          </button>
          <div className="flex space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
  );
};

export default function MyProjects() {
  return (
    <section className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
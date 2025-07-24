import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    "name": "Lambda Rim",
    "description": "AI‑powered NBA fantasy betting hub that parses PrizePicks screenshots and answers “Is the over worth my money?” with transparent probabilistic models and live analytics.",
    "longDescription": "Last updated July 24, 2025\n - Lambda Rim analyzes your PrizePicks screenshot and delivers one clear answer: “Is the ‘over’ worth my money?” Our end‑to‑end pipeline—OCR → feature engineering → Poisson, Monte Carlo & GARCH probability models → ChatGPT‑powered rationale—runs in your browser.  \n  \nKey features:\n- Screenshot parsing (OCR) to extract player & threshold pairs  \n- Poisson probability, Monte Carlo simulation & GARCH volatility forecasts  \n- Real‑time NBA injury report scraping & automatic playoff‑mode stats  \n- Background Cloud Functions for auto‑settling bets and status updates  \n- React + Vite front end, Flask + Docker API on Google Cloud Run  \n- Firebase Firestore database, Cloud Functions & GitHub Actions CI/CD  \n- Privacy‑first authentication via Google/Microsoft/Firebase Auth",
    "website_url": "https://lambdarim.com",
    "skills": [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Python",
      "Flask",
      "Docker",
      "Google Cloud Run",
      "Firebase Firestore",
      "Firebase Cloud Functions",
      "GitHub Actions",
      "OpenAI API (o4‑mini)",
      "Poisson Distribution",
      "Monte Carlo Simulation",
      "GARCH Volatility Model",
      "Pandas",
      "NumPy",
      "OCR",
      "Web Scraping"
    ],
    "videoUrl": "https://github.com/user-attachments/assets/ec796b28-824e-4374-8d9a-beedc7a0ed4e",
    "githubUrl": "https://github.com/bryanrg22/lambda-rim",
    "image": "/projectsLogos/lambdarimLogo.png"
  },
  {
    "name": "Swerve",
    "description": "Agentic AI co-pilot for industrial procurement optimization",
    "longDescription": "Swerve (Voltway Procurement Management System) is an AI-driven procurement solution built with LangChain that ingests ERP data, CAD specs, and user uploads to forecast inventory needs, automate purchase-order drafting, and send Slack notifications. Using GPT-3.5-Turbo for tool orchestration and o4-mini for multi-step reasoning, Swerve delivers real-time risk analysis, actionable recommendations, and interactive dashboards—empowering non-technical users to manage complex supply chains effortlessly.",
    "skills": [ "React.js", "Tailwind CSS", "Recharts", "MapLibre GL", "Python", "Flask", "Firebase", "LangChain", "OpenAI API", "Slack API"],
    "videoUrl": "https://github.com/user-attachments/assets/9b1764ae-8a59-47af-8773-70a00b5dfb1d",
    "githubUrl": "https://github.com/bryanrg22/CalTech-Hacks",
    "image": "/projectsLogos/swerveLogo.png"
  },
  {
    "name": "CleanSweep",
    "description": "Optimizing Waste Collection for Smarter Cities",
    "longDescription": "CleanSweep provides an innovative solution to waste management by using real-time data to optimize garbage collection routes, minimizing inefficiency and reducing environmental impact. By integrating hardware and software, it offers dynamic routing for garbage truck drivers based on live conditions like trash bin levels and traffic. This project aims to create cleaner cities by improving resource allocation and reducing the strain on landfills through smarter waste management.",
    "skills": ["React.js", "Tailwind CSS", "Vite", "Python", "Flask", "Firebase"],
    "videoUrl": "https://github.com/user-attachments/assets/0f2393c9-9ef4-4f08-b809-f02884e8ea5a",
    "githubUrl": "https://github.com/DPulavarthy/HackHarvard",
    "image": "/projectsLogos/cleansweeplogo.png"
  },
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
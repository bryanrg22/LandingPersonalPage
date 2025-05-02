import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    "name": "PrizePicks Prediction Website",
    "description": "AI-driven NBA player Over/Under performance prediction model for PrizePicks",
    "longDescription": "The PrizePicks Prediction Website is a full-stack application featuring a Flask backend that defines REST endpoints under `/api` to drive player performance predictions. It uses the Firebase Admin SDK to read and write Firestore data—fetching season averages, last-5 game stats, and game status—while ingesting OCR-parsed screenshots. Poisson and Monte Carlo modules compute probability forecasts, and Firebase Cloud Functions handle archival of old threshold documents to ensure real-time accuracy. The React+Vite frontend, styled with Tailwind CSS and powered by Recharts and Lucide React, provides personalized dashboards and interactive analytics. This system delivered a 29,900% ROI—growing an initial $10 to $3,000 with an 11/14 lineup win rate.",
    "skills": ["React.js", "Vite", "Tailwind CSS", "Python", "Flask", "Firebase Firestore Database", "Firebase Cloud Functions", "OpenAI API (o4-mini)", "Poisson & Monte Carlo", "Pandas", "NumPy", "OCR", "Web Scraping"],
    "videoUrl": "https://github.com/user-attachments/assets/ec796b28-824e-4374-8d9a-beedc7a0ed4e",
    "githubUrl": "https://github.com/bryanrg22/prizePicks_predictionWebsite",
    "image": "/projectsLogos/prizePicksLogo.avif"
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
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

// Helper function to extract YouTube video ID from URL
const extractYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const projects = [
  {
    "name": "Basis",
    "description": "AI-assisted cost segregation platform that accelerates engineer-led depreciation studies",
    "longDescription": "Basis is an AI-assisted, human-in-the-loop platform for residential-focused cost segregation firms. It orchestrates vision models, RAG, and structured workflows to turn hundreds of photos, sketches, and appraisals into IRS-ready, defensible reports—while keeping engineers in control.",
    "skills": [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Python",
      "FastAPI",
      "PyTorch",
      "OpenAI Vision",
      "YOLOv8",
      "CLIP",
      "Places365",
      "OpenAI",
      "Gemini",
      "Firebase",
      "Firestore",
      "Firebase Storage",
      "Firebase Auth",
      "Google Cloud Run",
      "Docker",
      "RAG"
    ],
    "videoUrl": "https://www.youtube.com/watch?v=ZpUEYUvN5II&feature=youtu.be",
    "githubUrl": "https://github.com/bryanrg22/Basis_Info",
    "image": "/projectsLogos/basis_logo.png",
    "bulletPoints": [
      "AI-assisted cost segregation platform for residential-focused firms; human-in-the-loop workflow that produces IRS-ready, defensible reports and accelerates analysis.",
      "Automates appraisal-to-constraints extraction, room and object classification, engineering takeoffs, and IRS-grounded asset/cost classification with review checkpoints at every stage.",
      "Traction: 2 paying users (CSSI, CBIZ) and design partners validating 50%+ faster workflows; Winner – LavaLab Fall 2025 Best Traction."
    ]
  },
  {
    "name": "Lambda Rim",
    "description": "Full-Stack Statistical & ML Hub for NBA Fantasy Sports Betting - Achieving 78%+ win rate with $10 to $3,000 profit growth",
    "longDescription": "Last updated July 24, 2025\n - Lambda Rim analyzes your PrizePicks screenshot and delivers one clear answer: “Is the ‘over’ worth my money?” Our end‑to‑end pipeline—OCR → feature engineering → Poisson, Monte Carlo & GARCH probability models → ChatGPT‑powered rationale—runs in your browser.  \n  \nKey features:\n- Screenshot parsing (OCR) to extract player & threshold pairs  \n- Poisson probability, Monte Carlo simulation & GARCH volatility forecasts  \n- Real‑time NBA injury report scraping & automatic playoff‑mode stats  \n- Background Cloud Functions for auto‑settling bets and status updates  \n- React + Vite front end, Flask + Docker API on Google Cloud Run  \n- Firebase Firestore database, Cloud Functions & GitHub Actions CI/CD  \n- Privacy‑first authentication via Google/Microsoft/Firebase Auth",
    "website_url": "https://lambdarim.com",
    "skills": [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Python",
      "OCaml",
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
      "OpenCV",
      "Tesseract OCR",
      "NBA API",
      "Web Scraping",
      "pdfplumber"
    ],
    "videoUrl": "https://github.com/user-attachments/assets/ec796b28-824e-4374-8d9a-beedc7a0ed4e",
    "githubUrl": "https://github.com/bryanrg22/lambda-rim",
    "image": "/projectsLogos/lambdarimLogo.png",
    "bulletPoints": [
      "Engineered a full-stack forecasting platform (Poisson, Monte Carlo, GARCH) for NBA sports betting picks, achieving a 78%+ win rate and profit growth from $10 to $3,000 in documented runs shipped via React with a Flask API in Docker on Cloud Run with GitHub Actions CI/CD.",
      "Cut analysis time from 15 min to seconds by building an automated OCR to prediction pipeline (OpenCV + Tesseract, NBA API, Web-Scraped Injury Reports) with ML-derived probabilities and OpenAI ChatGPT rationales using requests + pdfplumber, nba_api, pandas + NumPy.",
      "Designed a read-optimized Firestore Database schema (Active, History, Users) and a Cloud Scheduler to Cloud Functions + Google Cloud Run settlement pipeline that auto-archives results, reducing redundant reads and improving page latency."
    ]
  },
  {
    "name": "Swerve",
    "description": "Agentic AI procurement co-pilot • 1st Place – Dryft AI Challenge @ HackTech 2025",
    "longDescription": "Swerve is an agentic AI co-pilot for industrial procurement: a Voltway electric scooter control center that unifies inventory, orders, suppliers, and sales signals. Built with LangChain-powered agents that turn Firestore ops data into auditable recommendations (not just chat). Post-hackathon, the team was flown to Dryft’s SF Neo offices for collaboration.",
    "skills": [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Recharts",
      "MapLibre GL",
      "Lucide React",
      "Python",
      "Flask",
      "Firebase Admin SDK",
      "Firebase Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "LangChain",
      "Hugo AI",
      "Slack Integration"
    ],
    "videoUrl": "https://youtu.be/wa4kqvqhoZc?si=qjCwxTQl4N-5ri5j",
    "githubUrl": "https://github.com/bryanrg22/CalTech-Hacks",
    "devpostUrl": "https://devpost.com/software/swerve-gqmenk",
    "image": "/projectsLogos/swerveLogo.png",
    "bulletPoints": [
      "Agentic AI procurement co-pilot: LangChain-powered agents over Firestore ops data that generate auditable, actionable recommendations (not just chat).",
      "Unified dashboards + automations for inventory, orders, suppliers, and sales; low-stock and lead-time risk detection with Slack insights.",
      "1st Place – Dryft AI Challenge @ HackTech 2025; flown to Dryft’s SF Neo offices for post-hackathon collaboration."
    ]
  },
  {
    "name": "CleanSweep",
    "description": "Smart City Waste Management - Real-time Route Optimization Using OpenCV & ML",
    "longDescription": "Smart city waste management solution using real-time data to optimize garbage collection routes and reduce environmental impact. Worked on the contour algorithm using OpenCV to detect trash levels in makeshift garbage bins, as well as implementing Random Forest Classifier model in Databricks for optimal route recommendations.\n\n🎯 **Key Features:**\n- Real-time trash level detection using OpenCV contour algorithms\n- Dynamic routing optimization based on bin capacity, traffic, and days since last pickup\n- Machine learning-powered route recommendations using Random Forest Classifier\n- Interactive driver portal with live route updates\n- Hardware integration with Raspberry Pi and LED feedback systems\n\n🛠️ **Technical Implementation:**\n- **Hardware:** Phone cameras + Raspberry Pi with OpenCV for trash level detection\n- **Backend:** Python Flask APIs with Databricks for ML processing\n- **Frontend:** React + TailwindCSS portal for drivers with Terraform deployment\n- **ML Pipeline:** Random Forest Classifier with adjacency matrix for route optimization\n- **APIs:** Google Maps API integration for traffic data and route planning\n- **Infrastructure:** Terraform deployment with real-time data synchronization\n\n🏆 **Impact:** Successfully reduced waste buildup in prone areas, improved air quality, and created more efficient resource allocation for smart cities.",
    "skills": ["React.js", "Tailwind CSS", "Vite", "Python", "Flask", "Firebase", "OpenCV", "Raspberry Pi", "Databricks", "Random Forest", "Google Maps API", "Terraform", "Machine Learning"],
    "videoUrl": "https://youtu.be/iU_6u-RygyQ?si=5D8FGV95vuWMNSQx",
    "githubUrl": "https://github.com/DPulavarthy/HackHarvard",
    "devpostUrl": "https://devpost.com/software/cleansweep-tjq36w",
    "image": "/projectsLogos/cleansweeplogo.png",
    "bulletPoints": [
      "Developed real-time trash level detection system using OpenCV contour algorithms on Raspberry Pi hardware, processing phone camera images to measure bin capacity and sending data to local server for route optimization.",
      "Implemented Random Forest Classifier model in Databricks to optimize garbage collection routes based on trash levels, Google Maps API traffic data, and days since last pickup, using adjacency matrix to retrieve highest priority paths and minimize emissions.",
      "Built interactive driver portal using React and TailwindCSS with Terraform deployment, displaying optimized routes based on live hardware data and allowing drivers to adjust routes dynamically while updating progress in real-time."
    ]
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
          {project.videoUrl.includes('youtu.be') || project.videoUrl.includes('youtube.com') ? (
            <iframe
              className="w-full h-48 rounded-lg"
              src={`https://www.youtube.com/embed/${extractYouTubeId(project.videoUrl)}`}
              title={`${project.name} Demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video controls className="w-full h-auto rounded-lg">
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        {expanded && (
          <div className="mb-4">
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              {project.bulletPoints?.map((point, index) => (
                <li key={index} className="text-sm leading-relaxed">{point}</li>
              ))}
            </ul>
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
            {project.devpostUrl && (
              <a
                href={project.devpostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <img src="/websiteIcon/devpostIcon.png" alt="DevPost" className="w-6 h-6" style={{filter: 'brightness(0) invert(1) contrast(2) drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}} />
              </a>
            )}
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
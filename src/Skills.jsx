import React from 'react';
import ScrollingLogos from './ScrollingLogos';

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL", "OCaml"]
  },
  {
    name: "AI / ML & Data",
    skills: [
      "PyTorch",
      "OpenCV",
      "YOLOv8",
      "CLIP",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "LangChain",
      "RAG"
    ]
  },
  {
    name: "Web & Frontend",
    skills: ["React", "React Router", "Next.js", "Vite", "Tailwind CSS", "TypeScript", "Recharts", "MapLibre GL", "Lucide React", "HTML/CSS"]
  },
  {
    name: "Backend & APIs",
    skills: ["FastAPI", "Flask", "REST APIs", "Firebase Admin SDK", "Firestore", "Cloud Functions", "Slack API", "OpenAI API", "Gemini"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["Firebase", "Google Cloud Run", "Docker", "GitHub Actions", "AWS", "Linux"]
  },
  {
    name: "Tools & Version Control",
    skills: ["Git", "GitHub", "CI/CD", "Firebase Auth", "Testing", "Analytics"]
  }
];

const SkillCategory = ({ category, skills }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 relative group transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-300 transition-colors duration-300">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-gray-600 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="mb-12">
          <ScrollingLogos />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category.name} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}
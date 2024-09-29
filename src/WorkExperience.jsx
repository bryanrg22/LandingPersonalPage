import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceItem = ({ title, company, date, location, description, skills, logo }) => (
  <div className="mb-8 border-l-2 border-gray-700 pl-4">
    <div className="flex items-center mb-4">
      <img
        src={logo}
        alt={`${company} logo`}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-lg text-gray-300">{company}</p>
      </div>
    </div>
    <div className="flex items-center text-gray-400 mt-1">
      <Calendar size={16} className="mr-2" />
      <span className="mr-4">{date}</span>
      <MapPin size={16} className="mr-2" />
      <span>{location}</span>
    </div>
    <p className="mt-2 text-gray-300">{description}</p>
    {skills && (
      <div className="mt-2 flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-700 text-white text-sm px-2 py-1 rounded mr-2 mt-2">
            {skill}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default function WorkExperience() {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: "Fall Undergraduate Research Fellow",
      company: "USC Information Sciences Institute (HUMANS Lab - USC CURVE)",
      date: "Aug 2024 - Present",
      location: "Los Angeles, CA",
      description: "Responsibilities: Data Collection/Analysis/Visualization, Machine Learning Model Development, Report Writing. Fall Research Fellow in Professor Emilio Ferrara Election Integrity Initiative Research (HUMANS Lab).",
      skills: ["Data Analysis", "Machine Learning", "Visualization", "Report Writing"],
      logo: "/LandingPersonalPage/experienceLogos/uscisiLogo.jpg"
    },
    {
      title: "Software Engineering Fellowship",
      company: "Headstarter AI",
      date: "Jul 2024 - Present",
      location: "Remote",
      description: "Constructing 5 AI projects through HTML & CSS, React, NextJS, Firebase, and API's. Launching a capstone project with the goal of acquiring 1,000+ users.",
      skills: ["HTML", "CSS", "React", "NextJS", "Firebase", "API Integration"],
      logo: "/LandingPersonalPage/experienceLogos/headstarterLogo.avif"
    },
    {
      title: "Undergraduate Summer Researcher",
      company: "USC Viterbi School of Engineering (USC Viterbi Summer Institute)",
      date: "Jul 2024 - Aug 2024",
      location: "Los Angeles, CA",
      description: "Research how to improve OpenAI's CLIP Model to detect more frequent misinformation through false text-image pairs. Building a dataset to allow the Model to learn patterns in more challenging pairs through the use of PyTorch and LLMs.",
      skills: ["OpenAI", "CLIP Model", "PyTorch", "LLMs", "Dataset Creation"],
      logo: "/LandingPersonalPage/experienceLogos/uscviterbiLogo.jpg"
    },
    {
      title: "Jane Street UNBOXED Scholar",
      company: "Jane Street",
      date: "Jul 2024",
      location: "New York, NY",
      description: "Introduction to statistics, probability, programming, and analytical problem-solving at Jane Street New York. Hands-on development experience with Jane Street Engineers in translating the foundations of mathematics to the financial markets, writing code to analyze data, and exploring business case studies.",
      skills: ["Statistics", "Probability", "Programming", "Analytical Problem-Solving", "Financial Markets"],
      logo: "/LandingPersonalPage/experienceLogos/janestreetLogo.png"
    },
    {
      title: "Summer Intern",
      company: "theCoderSchool Pasadena",
      date: "Jun 2023",
      location: "Pasadena, CA",
      description: "Teaching different Coding Languages to people ages 7-18.",
      skills: ["Lua (Roblox)", "Scratch", "Teaching"],
      logo: "/LandingPersonalPage/experienceLogos/coderschoolLogo.jpeg"
    }
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {experiences.map((exp, index) => (
            <img
              key={index}
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-12 h-12 rounded-full object-cover"
            />
          ))}
        </div>
        {displayedExperiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
        {experiences.length > 2 && (
          <div className="text-center mt-12">
            <button
              className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors flex items-center mx-auto"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  See More
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
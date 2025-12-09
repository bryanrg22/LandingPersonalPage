import React from 'react';
import { Trophy, Award, Medal, MapPin } from 'lucide-react';

const awards = [
  {
    title: "LavaLab Demo Night F’25",
    description: "(Best Traction) Demo Night Winner",
    location: "Los Angeles, CA",
    year: "2025",
    icon: "Trophy",
    image: "/awardsLogo/lava_award.jpg",
    logo: "/activityLogos/lavalabLogo.jpg"
  },
  {
    title: "CalTech's HackTech Hackathon",
    description: "(Winner) Dryft Challenge Winner",
    location: "Pasadena, CA",
    year: "2025",
    icon: "Trophy",
    image: "/awardsLogo/hacktechteam.jpeg",
    logo: "/awardsLogo/caltechLogo.png"
  },
  {
    title: "Harvard's HackHarvard Hackathon",
    description: "(Winner) Best Use of Terraform",
    location: "Cambridge, MA",
    year: "2024",
    icon: "Trophy",
    image: "/awardsLogo/hackharvardteam.jpeg",
    logo: "/awardsLogo/harvardLogo.png"
  },
  {
    title: "AstroHacks Hackathon",
    description: "(Winner) Gold Medalist, Best Execution",
    location: "Irvine, CA",
    year: "2024",
    icon: "Trophy",
    image: "/awardsLogo/astroMedals.jpg",
    logo: "/awardsLogo/astrohacksLogo.jpeg"
  },
  {
    title: "SkillsUSA CA Engineering Technology/Design",
    description: "REGIONAL Finalist && STATE Bronze – 3rd Best Engineering Project in the State of California",
    location: "Ontario, CA",
    year: "2024",
    icon: "Medal",
    image: "/awardsLogo/skillsMedals.jpeg",
    logo: "/awardsLogo/skillsusaLogo.png"
  },
  {
    title: "FIRST Tech Challenge CENTERSTAGE Robotics",
    description: "REGIONAL Semifinalist - Top 5 out of 32 Teams",
    location: "Pasadena, CA",
    year: "2024",
    icon: "Award",
    image: "/awardsLogo/firstMedals.jpeg",
    logo: "/awardsLogo/firstLogo.jpeg"
  },
];

const IconComponent = ({ iconName }) => {
  switch (iconName) {
    case 'Trophy':
      return <Trophy className="w-6 h-6 text-yellow-400" />;
    case 'Award':
      return <Award className="w-6 h-6 text-blue-400" />;
    case 'Medal':
      return <Medal className="w-6 h-6 text-green-400" />;
    default:
      return null;
  }
};

const AwardItem = ({ award }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative group transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={award.image} 
          alt={`${award.title} Medal`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="relative z-10 p-6">
        <div className="flex items-center mb-4">
          <img src={award.logo} alt={award.title} className="w-12 h-12 mr-4 rounded object-cover transition-transform duration-300 group-hover:scale-110" />
          <div>
            <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">{award.title}</h3>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <IconComponent iconName={award.icon} />
          <p className="text-gray-300 ml-2">{award.description}</p>
        </div>
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{award.location}</span>
        </div>
        {award.year && <p className="text-gray-400">{award.year}</p>}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
  );
};

export default function Awards() {
  return (
    <section id="awards" className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Accomplishments & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <AwardItem key={index} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}
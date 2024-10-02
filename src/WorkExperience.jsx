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
<<<<<<< Updated upstream
    <p className="mt-2 text-gray-300">{description}</p>
=======
    <ul className="mt-2 text-gray-300 list-disc pl-5">
      {description.map((item, index) => (
        <li key={index} className="mt-2">{item}</li>
      ))}
    </ul>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      title: "Fall Undergraduate Research Fellow",
      company: "USC Information Sciences Institute (HUMANS Lab - USC CURVE)",
      date: "Aug 2024 - Present",
      location: "Los Angeles, CA",
      description: "Responsibilities: Data Collection/Analysis/Visualization, Machine Learning Model Development, Report Writing. Fall Research Fellow in Professor Emilio Ferrara Election Integrity Initiative Research (HUMANS Lab).",
      skills: ["Data Analysis", "Machine Learning", "Visualization", "Report Writing"],
      logo: "/experienceLogos/uscisiLogo.jpg"
    },
    {
      title: "Software Engineering Fellowship",
      company: "Headstarter AI",
      date: "Jul 2024 - Present",
      location: "Remote",
      description: "Constructing 5 AI projects through HTML & CSS, React, NextJS, Firebase, and API's. Launching a capstone project with the goal of acquiring 1,000+ users.",
      skills: ["HTML", "CSS", "React", "NextJS", "Firebase", "API Integration"],
      logo: "/experienceLogos/headstarterLogo.avif"
    },
    {
      title: "Undergraduate Summer Researcher",
      company: "USC Viterbi School of Engineering (USC Viterbi Summer Institute)",
      date: "Jul 2024 - Aug 2024",
      location: "Los Angeles, CA",
      description: "Research how to improve OpenAI's CLIP Model to detect more frequent misinformation through false text-image pairs. Building a dataset to allow the Model to learn patterns in more challenging pairs through the use of PyTorch and LLMs.",
      skills: ["OpenAI", "CLIP Model", "PyTorch", "LLMs", "Dataset Creation"],
      logo: "/experienceLogos/uscviterbiLogo.jpg"
    },
    {
      title: "Jane Street UNBOXED Scholar",
      company: "Jane Street",
      date: "Jul 2024",
      location: "New York, NY",
      description: "Introduction to statistics, probability, programming, and analytical problem-solving at Jane Street New York. Hands-on development experience with Jane Street Engineers in translating the foundations of mathematics to the financial markets, writing code to analyze data, and exploring business case studies.",
      skills: ["Statistics", "Probability", "Programming", "Analytical Problem-Solving", "Financial Markets"],
      logo: "/experienceLogos/janestreetLogo.png"
    },
    {
=======
      title: "Undergraduate Research Intern",
      company: "HUMANS LAB, USC Information Sciences Institute",
      date: "August 2024 - Present",
      location: "Los Angeles, CA",
      description: [
        "Collected, preprocessed, and filtered a dataset of over 40,000 TikTok videos using TikTok's API that processes JSON data, enabling investigation into correlations between TikTok content and eating disorders.",
        "Applied Latent Dirichlet Allocation (LDA) for topic modeling, NLP preprocessing, and sentiment analysis with Python's NLTK and VADER libraries to analyze over 200,000 comments and descriptions.",
        "Performed sentiment analysis on more than 100,000 video descriptions and comments using TextBlob and VADER, classifying emotional tone and combining results with Word2Vec embeddings, enhancing insights into eating disorder portrayal with an accuracy improvement of 15%.",
        "Utilized Seaborn and Matplotlib for correlation analysis and data visualization of over 50 engagement metrics (likes, shares, comments), identifying key trends in hashtag usage (e.g., #EDAwareness) and revealing the top most impactful posts through hashtag analysis."
      ],
      skills: ["Data Analysis", "Machine Learning", "NLP", "Python", "Sentiment Analysis", "Data Visualization"],
      logo: "/experienceLogos/uscisiLogo.jpg"
    },
    {
      title: "Summer Undergraduate Research Intern",
      company: "Melady Lab, USC",
      date: "July 2024 - August 2024",
      location: "Los Angeles, CA",
      description: [
        "Enhanced OpenAI's CLIP Model by improving its ability to detect multimodal misinformation in over 80,000 text-image pairs, focusing on subtle inconsistencies between true text and manipulated images through advanced Multimodal Machine Learning techniques in PyTorch.",
        "Developed a comprehensive, realistic dataset of synthetic misinformation by pairing related but incorrect images with true text, providing over 80,000 challenging examples to improve the model's training, making it more robust against deceptive content compared to random mismatches.",
        "Demonstrated the model's ability to generalize to real-world misinformation scenarios involving sophisticated false image-text relationships, achieving significant improvements in detection capabilities."
      ],
      skills: ["OpenAI", "CLIP Model", "PyTorch", "Multimodal Machine Learning", "Dataset Creation"],
      logo: "/experienceLogos/uscviterbiLogo.jpg"
    },
    {
      title: "Undergraduate Fellow",
      company: "Jane Street Capital",
      date: "July 2024",
      location: "New York, NY",
      description: [
        "Improved query performance by implementing data querying systems using SQLite, optimizing rapid access to large datasets.",
        "Selected as 1 of 37 students for a fully funded 5-day program at Jane Street's NYC office through Unboxed Fellowship.",
        "Participated in trading activities and led a team in the Estimathon, solving quantitative challenges under competitive conditions."
      ],
      skills: ["SQLite", "Data Querying", "Quantitative Analysis", "Trading"],
      logo: "/experienceLogos/janestreetLogo.png"
    },
    {
      title: "Team Leader",
      company: "SkillsUSA",
      date: "November 2023 - April 2024",
      location: "Pasadena, CA",
      description: [
        "Led a team of four to design and prototype a robotic wrist, resulting in a 225% improvement in pixel pickup efficiency through multiple design and testing iterations.",
        "Streamlined the engineering process, reducing the robotic wrist's weight and adding a proximity sensor, which decreased mechanical strain and increased motor longevity by 30%, ensuring the prototype was competition-ready.",
        "Achieved recognition as a REGIONAL Finalist and STATE Bronze Medalist, placing 3rd Best Engineering Project in California."
      ],
      skills: ["Robotics", "Team Leadership", "Engineering", "Prototyping"],
      logo: "/experienceLogos/skillsusaLogo.png"
    },
    {
      title: "Lead Developer",
      company: "FIRST Robotics",
      date: "September 2023 - February 2024",
      location: "Los Angeles, CA",
      description: [
        "Optimized robotic task accuracy and performance by deploying machine learning models through TensorFlow, training a vision-based system using convolutional neural networks (CNNs).",
        "Enhanced operational efficiency by engineering autonomous and teleoperated robotic control systems using Java, integrating a network of sensors for real-time data acquisition.",
        "Reached Top 5 out of 32 teams as FIRST Tech Challenge CENTERSTAGE Robotics REGIONAL Semifinalist."
      ],
      skills: ["TensorFlow", "Machine Learning", "Java", "Robotics", "Autonomous Systems"],
      logo: "experienceLogos/firstLogo.jpeg"
    },
    {
>>>>>>> Stashed changes
      title: "Summer Intern",
      company: "theCoderSchool Pasadena",
      date: "Jun 2023",
      location: "Pasadena, CA",
<<<<<<< Updated upstream
      description: "Teaching different Coding Languages to people ages 7-18.",
=======
      description: ["Teaching different Coding Languages to people ages 7-18."],
>>>>>>> Stashed changes
      skills: ["Lua (Roblox)", "Scratch", "Teaching"],
      logo: "/experienceLogos/coderschoolLogo.jpeg"
    }
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< Updated upstream
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
=======
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
>>>>>>> Stashed changes
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
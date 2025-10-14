import React, { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceItem = React.forwardRef(
  ({ title, company, date, location, description, skills, logo, researchLink, researchText }, ref) => (
  <div ref={ref} className="mb-8 border-l-2 border-gray-700 pl-4">
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
    <ul className="mt-2 text-gray-300 list-disc pl-5">
      {description.map((item, index) => (
        <li key={index} className="mt-2">{item}</li>
      ))}
    </ul>
    {skills && (
      <div className="mt-2 flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-700 text-white text-sm px-2 py-1 rounded mr-2 mt-2">
            {skill}
          </span>
        ))}
      </div>
    )}
    {researchLink && (
      <div className="mt-4">
        <a
          href={researchLink}
          className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {researchText || "See Research Paper Here"}
        </a>
      </div>
    )}
  </div>
));

export default function WorkExperience() {
  const [showAll, setShowAll] = useState(false);
  const experienceRefs = useRef([]);

  const experiences = [
    {
      title: "Software Developer",
      company: "LavaLab — USC's Premier Startup Incubator",
      date: "September 2025 - Present",
      location: "Los Angeles, CA",
      description: [
        "Building a full-stack MVP with a PM and designer, learning end-to-end product development through customer discovery, problem framing, rapid prototyping, and MVP iteration.",
        "Engaging in product-builder training covering usability testing, shipping, and pitching—guided by YC/Zero-to-One principles and alumni workshops in design, frontend, and storytelling.",
        "Preparing for Pitch & Demo Night with comprehensive training in startup methodologies and hands-on experience in building scalable products from concept to market."
      ],
      skills: ["Full-Stack Development", "Product Development", "Customer Discovery", "Rapid Prototyping", "MVP Development", "Startup Methodologies", "YC Principles", "Pitching"],
      logo: "/activityLogos/lavalabLogo.jpg"
    },
    {
      title: "Software Developer",
      company: "Quant SC — USC's Premier Quantitative Trading Society",
      date: "September 2025 - Present",
      location: "Los Angeles, CA",
      description: [
        "Developing TradeSC, a peer-to-peer over-the-counter (OTC) trading simulator for Quant SC's market-making activities.",
        "Learning quant finance fundamentals including expected value & decision-making, market microstructure, derivatives (ETFs, futures, options), alpha discovery, backtesting, and optimization—translating theory into code via weekly exercises and trading simulations."
      ],
      skills: ["Trading Systems", "OTC Markets", "RFQ Systems", "Market Microstructure", "Derivatives", "Backtesting", "Quantitative Finance", "Full-Stack Development", "Real-time Systems"],
      logo: "/activityLogos/quantscLogo.ico"
    },
    {
      title: "Undergraduate Research Intern — Kalshi Prediction Markets & Causal Inference (2024 US Presidential Election-Bets Impact)",
      company: "USC Information Sciences Institute (ISI) — HUMANS Lab",
      date: "May 2025 - Present",
      location: "Los Angeles, CA",
      description: [
        "Built a cross-platform data pipeline to study how Kalshi's 2024 presidential market relates to online discourse—ingesting X/Twitter posts (Playwright, XScraper) and Kalshi order-book history via API, standardizing datasets with Python/Pandas/NumPy for time-series analysis.",
        "Modeled market–messaging dynamics by time-aligning Kalshi price shocks with partisan posts, using Granger-causality and DiD tests."
      ],
      skills: ["Python", "Pandas", "NumPy", "Playwright", "XScraper", "Granger Causality", "Difference-in-Differences", "Time Series Analysis", "API Integration"],
      logo: "/experienceLogos/uscisiLogo.jpg",
      researchLink: "http://github.com/bryanrg22/electionBetsImpact",
      researchText: "See GitHub Repository Here"
    },
    {
      title: "Undergraduate Fellow",
      company: "D. E. Shaw",
      date: "September 2025",
      location: "New York, NY",
      description: [
        "Chosen for a funded 3‑day program at D. E. Shaw's NYC office via Connect Fellowship",
      ],
      skills: ["Quantitative Finance", "Connect Fellowship", "Market Analysis", "Research Collaboration"],
      logo: "/experienceLogos/deshaw.avif"
    },
    {
      title: "Undergraduate Fellow",
      company: "Jane Street",
      date: "May 2025",
      location: "New York, NY",
      description: [
        "Selected as 1 of 14 (FOCUS ’25) for funded Jane Street fellowships, participating in trader/engineer sessions, including an Estimathon and live trading games, across in-office NYC days.",
        "Strengthened market-microstructure and data fundamentals by working through ETF fair-value exercises, interpreting order-book depth, and writing introductory SQL; practiced pricing and inventory management under uncertainty in hands-on workshops."
      ],
      skills: ["SQLite", "Data Querying", "Quantitative Analysis", "Trading"],
      logo: "/experienceLogos/janestreetLogo.png"
    },
    {
      title: "Undergraduate Research Intern — LLM-assisted AI for TikTok Eating-Disorder Dataset (EDTok)",
      company: "USC Information Sciences Institute (ISI) — HUMANS Lab",
      date: "August 2024 - Present",
      location: "Los Angeles, CA",
      description: [
        "Published EDTok, an ethics-compliant, multimodal (video + text) TikTok dataset of 43,040 videos and 577,071 comments (2019–2024), by building an ingestion/curation pipeline using the TikTok Research API with PykTok.",
        "Raised dataset precision by 24% using a two-stage filter—weak-supervision rules + LLM-assisted zero-shot relevance classification (Google Gemini) with prompt engineering validated via manual review samples (~99% on 200 videos ; 100% Eating Disorder-related on 300 videos).",
        "Surfaced platform-scale insights on dataset (537M views, 79.9M likes, 962k shares across 10.9k users) via longitudinal analysis, BERTopic topic modeling, and multi-label emotion classification, linking themes to affect (e.g., recovery to optimism/joy; body-image to fear/sadness)."
      ],
      skills: ["Python", "PykTok", "Google Gemini", "BERTopic", "LLM Prompt Engineering", "Weak Supervision", "Multi-label Classification", "Longitudinal Analysis", "TikTok Research API"],
      logo: "/experienceLogos/uscisiLogo.jpg",
      researchLink: "https://arxiv.org/abs/2505.02250",
      researchText: "See Research Paper Here"
    },
    {
      title: "Undergraduate Research Intern — Interpretable AI for Image–Text Misinformation Detection",
      company: "University of Southern California — Melady Lab",
      date: "July 2024 - August 2024",
      location: "Los Angeles, CA",
      description: [
        "Improved out-of-context image–text detection to 68% accuracy (AUC ≈ 0.73) on NewsCLIPpings by adding a learned query ranker over pre-trained Vision-Language Models (CLIP, BLIP-2) with CLIP-retrieved hard-negatives to create challenging pairs using PyTorch.",
        "Trained a lightweight 4-class evidence ranker that fuses image, caption, and query embeddings (CLIP/BLIP-2) to score evidence supportiveness.",
        "Outperformed transfer-learning baselines (fine-tuned CLIP) using a feature-based approach: frozen CLIP/BLIP-2 encoders with zero-shot checks feeding a learned query ranker, improving accuracy by 5.6% (62.6% to 68.2%) and AUC by 0.058 (0.672 to 0.730) on NewsCLIPpings."
      ],
      skills: ["PyTorch", "CLIP", "BLIP-2", "Vision-Language Models", "NewsCLIPpings", "Misinformation Detection", "Hard Negative Mining", "Transfer Learning", "Feature Fusion"],
      logo: "/experienceLogos/uscviterbiLogo.jpg"
    },
    {
      title: "Undergraduate Fellow",
      company: "Jane Street",
      date: "July 2024",
      location: "New York, NY",
      description: [
        "Selected as 1 of 37 (Unboxed ’24) for funded Jane Street fellowships, participating in trader/engineer sessions, including an Estimathon and live trading games, across in-office NYC days.",
        "Wrote over 150+ lines of SQL for data analysis and awarded a $2,000 scholarship",
        "Completed 30+ hours of coursework in statistics, market-making activities, and computer programming, achieving 15% return improvement in fast-paced market simulation games under mentorship of researchers and software engineers"
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
      logo: "/experienceLogos/firstLogo.jpeg"
    },
    {
      title: "Summer Intern",
      company: "theCoderSchool Pasadena",
      date: "Jun 2023",
      location: "Pasadena, CA",
      description: [
        "Coached K-12 students in programming languages and skills, delivering instruction in languages such as C++, C#, Lua, Python, and Arduinos, leading to an improvement in student coding proficiency as measured by pre-and post-assessment scores",
        "Implemented engaging lessons on fundamental programming concepts using tools like Scratch and Arduino, fostering a hands-on learning environment that enhanced students' understanding of Artificial Intelligence principles and their applications."
      ],
      skills: ["Python", "Lua", "C++", "C#", "Arduinos"],
      logo: "/experienceLogos/coderschoolLogo.jpeg"
    }
  ];

  useEffect(() => {
    experienceRefs.current = experienceRefs.current.slice(0, experiences.length);
  }, [experiences]);

  const scrollToExperience = (index) => {
    const element = experienceRefs.current[index];
    if (element) {
      const yOffset = -100; // Adjust this value to fine-tune the scroll position
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setShowAll(true);
  };

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {experiences.map((exp, index) => (
            <img
              key={index}
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-12 h-12 rounded-full object-cover cursor-pointer transition-transform hover:scale-110"
              onClick={() => scrollToExperience(index)}
            />
          ))}
        </div>
        {displayedExperiences.map((exp, index) => (
          <ExperienceItem 
            key={index} 
            {...exp} 
            ref={el => experienceRefs.current[index] = el}
          />
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
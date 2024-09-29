import React from 'react';

const logos = [
  { src: "/LandingPersonalPage/skillsLogo/pythonLogo.png", alt: "Python" },
  { src: "/LandingPersonalPage/skillsLogo/cppLogo.png", alt: "C++" },
  { src: "/LandingPersonalPage/skillsLogo/cLogo.png", alt: "C" },
  { src: "/LandingPersonalPage/skillsLogo/javaLogo.png", alt: "Java" },
  { src: "/LandingPersonalPage/skillsLogo/javascriptLogo.png", alt: "JavaScript" },
  { src: "/LandingPersonalPage/skillsLogo/htmlLogo.png", alt: "HTML" },
  { src: "/LandingPersonalPage/skillsLogo/cssLogo.png", alt: "CSS" },
  { src: "/LandingPersonalPage/skillsLogo/sqlLogo.png", alt: "SQL" },
  { src: "/LandingPersonalPage/skillsLogo/graphqlLogo.png", alt: "GraphQL" },
  { src: "/LandingPersonalPage/skillsLogo/flaskLogo.png", alt: "Flask" },
  { src: "/LandingPersonalPage/skillsLogo/reactLogo.png", alt: "React" },
  { src: "/LandingPersonalPage/skillsLogo/nextLogo.png", alt: "Next.js" },
  { src: "/LandingPersonalPage/skillsLogo/tailwindcssLogo.png", alt: "TailWindCSS" },
  { src: "/LandingPersonalPage/skillsLogo/fastapiLogo.png", alt: "FastAPI" },

  { src: "/LandingPersonalPage/skillsLogo/anacondaLogo.png", alt: "Anaconda" },
  { src: "/LandingPersonalPage/skillsLogo/pandasLogo.png", alt: "Pandas" },
  { src: "/LandingPersonalPage/skillsLogo/numpyLogo.png", alt: "NumPy" },
  { src: "/LandingPersonalPage/skillsLogo/matplotlibLogo.png", alt: "Matplotlib" },
  { src: "/LandingPersonalPage/skillsLogo/pytorchLogo.png", alt: "PyTorch" },
  { src: "/LandingPersonalPage/skillsLogo/tensorflowLogo.png", alt: "TensorFlow" },
  { src: "/LandingPersonalPage/skillsLogo/firebaseLogo.png", alt: "Firebase" },
  { src: "/LandingPersonalPage/skillsLogo/geminiLogo.png", alt: "Google Gemini" },
  { src: "/LandingPersonalPage/skillsLogo/chatgptLogo.png", alt: "OpenAI ChatGPT" },
];

const ScrollingLogos = () => {
  return (
    <div className="flex space-x-16 overflow-hidden group">
      <div className="flex animate-loop-scroll space-x-16 group-hover:paused">
        {logos.map((logo, index) => (
          <img key={index} loading="lazy" src={logo.src} className="max-w-none h-12" alt={logo.alt} />
        ))}
      </div>
      <div className="flex animate-loop-scroll space-x-16 group-hover:paused" aria-hidden="true">
        {logos.map((logo, index) => (
          <img key={index} loading="lazy" src={logo.src} className="max-w-none h-12" alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
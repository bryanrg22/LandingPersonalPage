import React from 'react';

const logos = [
  { src: "/skillsLogo/pythonLogo.png", alt: "Python" },
  { src: "/skillsLogo/cppLogo.png", alt: "C++" },
  { src: "/skillsLogo/cLogo.png", alt: "C" },
  { src: "/skillsLogo/javaLogo.png", alt: "Java" },
  { src: "/skillsLogo/javascriptLogo.png", alt: "JavaScript" },
  { src: "/skillsLogo/htmlLogo.png", alt: "HTML" },
  { src: "/skillsLogo/cssLogo.png", alt: "CSS" },
  { src: "/skillsLogo/sqlLogo.png", alt: "SQL" },
  { src: "/skillsLogo/graphqlLogo.png", alt: "GraphQL" },
  { src: "/skillsLogo/flaskLogo.png", alt: "Flask" },
  { src: "/skillsLogo/reactLogo.png", alt: "React" },
  { src: "/skillsLogo/nextLogo.png", alt: "Next.js" },
  { src: "/skillsLogo/tailwindcssLogo.png", alt: "TailWindCSS" },
  { src: "/skillsLogo/fastapiLogo.png", alt: "FastAPI" },
  
  { src: "/skillsLogo/anacondaLogo.png", alt: "Anaconda" },
  { src: "/skillsLogo/pandasLogo.png", alt: "Pandas" },
  { src: "/skillsLogo/numpyLogo.png", alt: "NumPy" },
  { src: "/skillsLogo/matplotlibLogo.png", alt: "Matplotlib" },
  { src: "/skillsLogo/pytorchLogo.png", alt: "PyTorch" },
  { src: "/skillsLogo/tensorflowLogo.png", alt: "TensorFlow" },
  { src: "/skillsLogo/firebaseLogo.png", alt: "Firebase" },
  { src: "/skillsLogo/geminiLogo.png", alt: "Google Gemini" },
  { src: "/skillsLogo/chatgptLogo.png", alt: "OpenAI ChatGPT" },
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
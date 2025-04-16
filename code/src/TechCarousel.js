import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter'
const features = [
  {
    icon: <FaHtml5 className="text-orange-600" size={100} />,
    title: "HTML5",
  },
  {
    icon: <FaCss3Alt className="text-blue-500" size={100} />,
    title: "CSS3",
  },
  {
    icon: <FaReact className="text-cyan-400 animate-spin-slow" size={100} />,
    title: "React JS",
  },
  {
    icon: <FaBootstrap className="text-purple-600" size={100} />,
    title: "Bootstrap",
  },
  {
    icon: <SiTailwindcss className="text-sky-400" size={100} />,
    title: "Tailwind CSS",
  },
];

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div style={{paddingTop:'200px'}} className="w-full max-w-xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-6">My Languages of Web Stack</h2>
      <div className="relative pt-5">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
          <div className="mb-4">{features[currentIndex].icon}</div>
          <p className="text-gray-800 text-lg font-semibold">{features[currentIndex].title}</p>
        </div>

        {/* Arrows */}
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black">
          <ChevronLeft size={28} />
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>

    <h1 className="text-2xl font-bold pb-5" style={{paddingTop:'100px',textAlign:'center'}}>
    Hi, I am{' '}
    <span  className="font-mono" style={{  fontWeight: 'bold' }}>
    
      <Typewriter
        words={['a Web Developer', 'a Good Coder', 'a Excellent Designer']}
        loop={Infinity}
        cursor
        cursorStyle="..."
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  </h1>
  <br></br>
  
  </>
  );
}
 
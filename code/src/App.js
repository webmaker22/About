import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typewriter } from 'react-simple-typewriter'
import myBackground from './p13.jpg'; // adjust path based on your folder
import TechCarousel from "./TechCarousel";
import { Home as HomeIcon, User, Layers, Mail } from 'lucide-react';

import Tech from "./Tech";
import {
 
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Image, Nav, Offcanvas, Container, Navbar as BootstrapNavbar } from "react-bootstrap";
import boyz from "./profile.jpeg"

const Navbar = () => (
  <div>
     <BootstrapNavbar expand={false} className="bg-dark navbar-dark fixed-top">
  <Container className="d-flex justify-content-between">
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BootstrapNavbar.Brand href="#home" className="mx-auto">My Portfolio</BootstrapNavbar.Brand>

    <BootstrapNavbar.Offcanvas
      className="circular-offcanvas bg-dark navbar-dark"
      id="basic-navbar-nav"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
  <Nav className="me-auto text-center pt-5">
  <a href="#home" style={{color:'royalblue'}} className="flex items-center gap-2 justify-center hover:bg-white font-bold hover:text-black px-4 py-2 rounded transition-all duration-300 mb-2">
  <HomeIcon size={18} /> Home
</a>

    <a href="#about" className="flex items-center gap-2 justify-center text-secondary font-bold hover:bg-white hover:text-black px-4 py-2 rounded transition-all duration-300 mb-2">
      <User size={18} /> About
    </a>
    <a href="#Skills" className="flex items-center gap-2 justify-center text-secondary font-bold hover:bg-white hover:text-black px-4 py-2 rounded transition-all duration-300 mb-2">
      <Layers size={18} /> Skills
    </a>
    <a href="#Projects" className="flex items-center gap-2 justify-center text-black font-bold hover:bg-white hover:text-black px-4 py-2 rounded transition-all duration-300 mb-2">
      <Layers size={18} /> Projects
    </a>
    <a href="#contact" style={{color:'royalblue'}} className="flex items-center gap-2 font-bold justify-center hover:bg-white hover:text-black px-4 py-2 rounded transition-all duration-300">
      <Mail size={18} /> Contact
    </a>
  </Nav>
</Offcanvas.Body>
    </BootstrapNavbar.Offcanvas>
  </Container>
</BootstrapNavbar>
  </div>
);

const Home = () => (
  <motion.div id="home"  style={{paddingBottom:'5px', backgroundImage: `url(${myBackground})`, backgroundSize: 'cover', height: '100vh'}}    itial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-center min-h-screen flex flex-col items-center justify-center">
    <div className="flex flex-col items-center justify-center pt-5">
  <Image 
    src={boyz} 
    alt="Boyz" 
    className="rounded-full w-[239px] h-[279px] object-cover" 
  />
</div>
    <h2 style={{paddingTop:'10px'}} className="text-4xl font-bold mt-4">Welcome  
      {' '}
      <span style={{color:'blue' , fontWeight:'bold'}}>
      <Typewriter
          words={['To My Portfolio']}
          loop={Infinity}
          cursor
          cursorStyle="."
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    

    </h2>
    <h1 className="text-2xl font-bold" style={{paddingTop:'10px'}}>
      Hi, I am{' '}
      <span style={{ color: 'blue', fontWeight: 'bold' }}>
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
  </motion.div>
);

const About = () => (
  
  <motion.div id="about" style={{backgroundColor:'white'}}  initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-center min-h-screen flex flex-col justify-center">
    <h2 style={{paddingTop:'50px'}} className="text-4xl font-bold">About Me</h2>
    <h4 className="mt-4 text-gray-600 font-bold">Hi I'm Web Developer & Fastlearning Coder</h4>
    <p className=" font-bold pt-5">I Have Completed my higher education & College Degree and Now, Studying Bachelor Degree in Computer Science. Over for 1 years, I have gained hands-on experience in Frontened Web Developing in Basic Languages Like HTML , CSS , BOOTSTRAP , <span style={{color:'Highlight'}}>Specially</span> "React" also Learning Tailwind language And getting more Expert in Web Languages </p>
    <ul className="mt-4  text-left mx-auto max-w-2xl ">
    <li>'Proficient in HTML5, CSS3, JavaScript',</li>
    <li style={{paddingTop:"3px"}}>'Strong hands-on experience with React.js and modern frontend libraries',</li>
    <li style={{paddingTop:"3px"}}>'Skilled in creating responsive, mobile-first designs using Tailwind CSS & Bootstrap',</li>
    <li style={{paddingTop:"3px"}}>'Ability to translate UI/UX designs into pixel-perfect components',</li>
    <li style={{paddingTop:"3px"}}>'Experienced with version control (Git, GitHub)',</li>
    <li style={{paddingTop:"3px"}}>'Strong understanding of RESTful APIs and frontend integration',</li>
    <li style={{paddingTop:"3px"}}>'Passionate about writing clean, maintainable, and well-documented code',</li>
    <li style={{paddingTop:"3px"}}>'Knowledge of performance optimization and accessibility best practices',</li>
    <li style={{paddingTop:"3px"}}>'Quick learner with a focus on continuous improvement and keeping up with tech trends',</li>
    <li style={{paddingTop:"3px"}}>'Great communicator and team collaborator in agile environments',</li>
    <li style={{paddingTop:"3px"}}>'Problem solver with a user-focused mindset',</li>
    </ul>
    <p className="mt-4  font-bold" >I believe in delivering the best possible quality and quantity to all my clients for ensuring long-term partnerships.</p>
    <h2 className="text-4xl font-bold pt-5">Services</h2>
<p className=" pt-5 font-bold">
  Your business deserves to grow without the headache of inefficient Web Making Talent. As a dedicated Web Developer, I bring scalable solutions to life.
</p>

<div className="mt-4 text-left mx-auto max-w-2xl">
  <p>🚀 Build responsive and high-performance websites</p>
  <p>💡 Custom web applications tailored to your business needs</p>
  <p>🎯 Code-Fixing solver</p>
  <p>🧠 Reduce hiring costs by working with a reliable full-stack developer</p>
  <p>📈 Ensure long-term success with maintainable and scalable code</p>
</div>

<br />

<p className="font-bold">
  With over 15 years of combined team experience, we've supported businesses in Software Development, Fintech, EdTech, and Consulting sectors.
</p>
<p className="font-bold">I’m here to help YOU succeed in the digital landscape.</p>

<h3 className="text-2xl font-bold pt-4">Additional Services</h3>
<ul className="list-disc list-inside text-left mt-2  text-center">
  <li style={{marginLeft:'13px',paddingTop:'10px'}}>🌐 Web Development & Maintenance</li>
  <li  style={{marginLeft:'10px',paddingTop:'5px'}}>🛠️ Technical Support & IT Consulting</li>
  <li style={{marginRight:'50px',paddingTop:'5px'}}>📊 Business & HR Consulting</li>
  <li style={{marginLeft:'20px',paddingTop:'5px'}}>🔧 Human Resources (HR) Outsourcing</li>
</ul>


  </motion.div>
);

const Skills = () => (
  <motion.div id="Skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{backgroundColor:'slategrey'}}>
    <div>
      <TechCarousel />
      
    </div>
  </motion.div>
);
const Sites = () => (
  <motion.div id="Projects">
    <div>
      < Tech />
    </div>
    <br></br>
  </motion.div>
);
const Contact = () => (
  <motion.div id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-center min-h-screen flex flex-col justify-center" style={{backgroundColor:'midnightblue'}}>
    <h2 className="text-4xl font-bold">Contact Me</h2>
    <p className="mt-4 text-gray-600 font-bold">Feel free to reach out through my email or social media.</p>
     <div className=" p-6 text-center rounded-md">
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <div className="flex justify-center space-x-6">
                
                <a
  href="https://www.linkedin.com/in/ar-it-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-gray-200">        
           <FontAwesomeIcon icon={faLinkedin} style={{color:'blue'}} size="2x" />
                </a>
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=araiagent222@gmail.com&su=Portfolio%20Contact&body=Hello%2C%20I%20would%20like%20to%20connect%20with%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline text-lg font-semibold"
>
      
    
                  <FontAwesomeIcon icon={faEnvelope} style={{color:'red'}} size="2x" />
                </a>
              </div>
            </div>
  </motion.div>
);

const App = () => (
  <div className="min-h-screen bg-gray-100 text-gray-900">
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Sites/>
    <Contact />
  </div>
);

export default App;

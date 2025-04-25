import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';



function App() {
  return (
    <div>
      <Navbar />

      <section
  id="home"
  className="min-h-[85vh] flex flex-col justify-start pt-6 items-center bg-gradient-to-b from-white to-blue-50 text-gray-800 px-4"
>

        {/* NEW: Profile image, details & links */}
<div className="mt-10 flex flex-col items-center">
  <img
    src="/profile.jpg"
    alt="Shalini Nistala"
    className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
  />
   <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
    Hi, I'm <span className="text-blue-600">Shalini Nistala</span>
  </h2>

  <p className="text-lg text-gray-700">MS CS Student @ California State University, Los Angeles</p>
  <p className="text-lg text-gray-700">Ex Software Engineer — TCS @ Apple</p>
  <p className="text-sm text-gray-700 mb-6">Los Angeles, California, USA</p>

  <div className="flex gap-6 mb-6 text-4xl">
    <a href="https://linkedin.com/in/shalini-nistala" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
      <FaLinkedin />
    </a>
    <a href="https://github.com/shalini3112" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
      <FaGithub />
    </a>
  </div>

</div>

       
       {/* <p className="text-lg md:text-xl mb-6 text-center max-w-xl">
          I'm a <span className="font-semibold underline text-blue-600">Software Developer</span> who crafts clean, modern web apps with great user experiences.
        </p> */}
        
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <a
    href="#projects"
    className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow hover:bg-blue-700 transition text-center"
  >
    View Projects
  </a>
  <a
    href="/resume.pdf"
    download
    className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full border border-blue-600 shadow hover:bg-blue-50 transition text-center"
  >
    Download Resume
  </a>
</div>

      </section>
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;

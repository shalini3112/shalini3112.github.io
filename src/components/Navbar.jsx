function Navbar() {
    return (
      <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-200 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-200 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#resume" className="hover:text-blue-200 transition-colors">Resume</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
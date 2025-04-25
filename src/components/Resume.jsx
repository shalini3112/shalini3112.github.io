function Resume() {
    return (
      <section id="resume" className="py-20 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Resume</h2>
          <p className="text-lg mb-6">
            Here’s a copy of my resume – feel free to view or download it!
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full shadow hover:bg-blue-700 transition"
          >
            View / Download Resume
          </a>
        </div>
      </section>
    );
  }
  
  export default Resume;
  
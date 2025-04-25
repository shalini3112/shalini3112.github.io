function About() {
    return (
      <section id="about" className="py-20 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">About Me</h2>
  
          <div className="space-y-6 text-lg leading-relaxed text-justify mb-12">
            <p>
              I'm a Software Engineer with a strong foundation in Java, Python, SQL, and API development. I'm currently pursuing my Master’s in Computer Science at California State University, Los Angeles, and will graduate in December 2025.
            </p>
            <p>
              At Tata Consultancy Services, I collaborated with Apple to design and deploy high-performance APIs using Java Spring Boot and SAP BTP. My work reduced shipment processing time by 20% and improved task execution by 30%. I’ve worked across cloud platforms (SAP Hana, Cloud Foundry), tax process automation, and secure data integration from on-premise S4 HANA to the cloud.
            </p>
            <p>
              My expertise spans full-stack development, system performance optimization, and data-driven engineering. I'm proficient with frameworks like Spring Boot and SAP CAPM, data science tools such as NumPy, Pandas, and TensorFlow, and frontend technologies like HTML, CSS, JavaScript, and Bootstrap. I also work with databases including MySQL, PostgreSQL, SQLite, MongoDB, and SAP Hana.
            </p>
            <p>
              I have hands-on experience with Jenkins, JIRA, JUnit, and Mockito, and I’m passionate about building scalable systems and mentoring in fast-paced, collaborative environments. Let’s connect and explore opportunities in software development, cloud, and data engineering!
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Languages & Frameworks</h3>
              <p className="text-gray-600">
                JavaScript, Kotlin, Python, Java, SQL, Node.js, Express, Spring Boot, SAP CAPM
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Tools & Technologies</h3>
              <p className="text-gray-600">
                MongoDB, MySQL, PostgreSQL, SAP Hana, Git, GitHub, Jenkins, JIRA, TensorFlow, OpenAI Gym, REST APIs
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  
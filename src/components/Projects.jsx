function Projects() {
  const projects = [
    {
      title: "Meal Planner Application",
      description: "A web app that helps users plan meals, generate shopping lists, and track nutrition. Built with Node.js, Express.js, MongoDB, and Svelte.js.",
      tech: ["Node.js", "Express.js", "MongoDB", "Svelte.js"],
      link: "https://github.com/shalini3112/Meal-Planner-Application"
    },
    {
      title: "Blackjack Simulation with Gym",
      description: "A simulation of 500,000 Blackjack games using OpenAI Gym's Blackjack-v1 environment. Records win, lose, and draw stats using a predefined strategy.",
      tech: ["Python", "OpenAI Gym", "Blackjack-v1"],
      link: "https://github.com/shalini3112/Blackjack-Analysis-Project"
    },
    {
      title: "Portfolio Website",
      description: "This site you're looking at – a personal portfolio made with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://github.com/shalini3112/shalini3112.github.io"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Tech:</strong> {project.tech.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact</h2>
        <p className="text-lg mb-4">Want to connect? Reach out anytime!</p>

        <p className="text-md mb-2">Email: nkshalini3112@gmail.com</p>
        <p className="text-md mb-6">LinkedIn: Shalini Nistala</p>

        <div className="flex justify-center gap-10 mt-6 text-4xl">
          <a
            href="https://github.com/shalini3112"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-black hover:text-gray-800"
          >
            <FaGithub />
            <span className="text-base mt-2">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/shalini-nistala"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin />
            <span className="text-base mt-2">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

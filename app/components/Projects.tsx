"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image"; // Next.js optimized image

// Projects Data
const projects = [
  {
    title: "CarXchange - Vehicle Exchange Platform",
    description:
      "An interactive platform for users to buy, sell, and exchange vehicles with real-time updates. This is a group project where I have worked on Frontend.",
    image: "/carXchange.jpeg",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Dhruvbarot1/carxchange",
    demo: "https://carxchange.com",
  },
  {
    title: "Survey on ChatGPT",
    description:
      "A data analysis project exploring ChatGPT usage in academia, leveraging Python and Pandas.",
    image: "/Chatgpt.jpeg",
    technologies: ["Python", "Pandas", "Data Visualization", "Google Forms"],
    github: "https://github.com/Dhruvbarot1/chatgpt-survey",
    demo: "https://your-chatgpt-survey-demo.com",
  },
  {
    title: "Weather Forecast App",
    description:
      "A responsive weather forecast app powered by ReactJS and OpenWeatherMap API.",
    image: "/Weather Forecast.jpeg",
    technologies: ["React.js", "OpenWeatherMap API", "CSS", "JavaScript"],
    github: "https://github.com/Dhruvbarot1/Weather-Forecast-App.git",
    demo: "https://your-weatherapp-demo.com",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A chat application with real-time messaging functionality, built with WebSockets and Node.js.",
    image: "/ChatApp.jpeg",
    technologies: ["React", "Node.js", "WebSockets", "MongoDB"],
    github: "https://github.com/Dhruvbarot1/Real-Time-Chat-App.git",
    demo: "https://your-chatapp-demo.com",
  },
  {
    title: "AI-Powered Blog Generator",
    description:
      "An AI-based blog generator that creates high-quality articles using OpenAI API.",
    image: "/Blog.jpeg",
    technologies: ["Next.js", "OpenAI", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/Dhruvbarot1/AI-Blog-Generator.git",
    demo: "https://your-aiblog-demo.com",
  },
  {
    title: "Expense Tracker",
    description:
      "A finance management tool with authentication, charts, and spending insights.",
    image: "/Expense Tracker.jpeg",
    technologies: ["React", "TypeScript", "Firebase", "Chart.js"],
    github: "https://github.com/Dhruvbarot1/Expense-Tracker.git",
    demo: "https://your-expensetracker-demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 my-20">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        My <span className="text-white">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300"
          >
            {/* Project Image - Keep Full Image but Make It Smaller */}
            <div className="relative flex justify-center items-center overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={320} // Reduced width
                height={200} // Reduced height
                className="rounded-lg object-contain" // Ensures full image is shown without cropping
              />
            </div>

            {/* Project Title & Description */}
            <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub & Live Demo Links */}
            <div className="flex justify-between mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all"
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

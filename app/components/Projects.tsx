"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image"; // Import Next.js Image for optimization

// Projects Data
const projects = [
  {
    title: "CarXchange - Vehicle Exchange Platform",
    description:
      "A platform where users can buy, sell, and exchange vehicles seamlessly with real-time updates.",
    image: "/images/carxchange.png", // Ensure this image exists in public/images
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Dhruvbarot1/carxchange", // Update with actual link
    demo: "https://carxchange.com", // Update with actual demo link
  },
  {
    title: "Real-Time Chat App",
    description: "A real-time chat application using WebSockets, Node.js, and React.",
    image: "/images/chat-app.jpg", // Ensure this image exists
    technologies: ["React", "Node.js", "WebSockets", "MongoDB"],
    github: "https://github.com/Dhruvbarot1/chat-app",
    demo: "https://your-chatapp-demo.com",
  },
  {
    title: "AI-Powered Blog Generator",
    description: "An AI-driven blog content generator using OpenAI API and Next.js.",
    image: "/images/ai-blog.jpg", // Ensure this image exists
    technologies: ["Next.js", "OpenAI", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/Dhruvbarot1/ai-blog",
    demo: "https://your-aiblog-demo.com",
  },
  {
    title: "Expense Tracker",
    description: "A full-stack expense tracker with authentication, charts, and financial insights.",
    image: "/images/expense-tracker.jpg", // Ensure this image exists
    technologies: ["React", "TypeScript", "Firebase", "Chart.js"],
    github: "https://github.com/Dhruvbarot1/expense-tracker",
    demo: "https://your-expensetracker-demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 my-20">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        My <span className="text-white">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300"
          >
            {/* Project Image - Using Next.js Optimized <Image /> */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Project Title & Description */}
            <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
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

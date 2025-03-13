"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaCoffee, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto my-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
      Let&apos;s <span className="text-white">Connect</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Email */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaEnvelope className="text-blue-400" /> Email Me
          </h3>
          <p className="mt-2 text-gray-400">Let&apos;s talk about your project</p>
          <a href="mailto:barotdhruv05@gmail.com" className="text-blue-500 mt-2 block">barotdhruv05@gmail.com</a>
        </motion.div>

        {/* LinkedIn */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaLinkedin className="text-blue-500" /> LinkedIn
          </h3>
          <p className="mt-2 text-gray-400">Let&apos;s connect professionally</p>
          <a href="https://linkedin.com/in/dhruv-barot-b070a2266/" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">View Profile</a>
        </motion.div>

        {/* GitHub */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaGithub className="text-white" /> GitHub
          </h3>
          <p className="mt-2 text-gray-400">Check out my code</p>
          <a href="https://github.com/Dhruvbarot1" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">View Projects</a>
        </motion.div>

        {/* Coffee Chat */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaCoffee className="text-yellow-500" /> Coffee Chat
          </h3>
          <p className="mt-2 text-gray-400">Let&apos;s discuss ideas over coffee</p>
          <a 
            href="https://calendar.app.google/QXUxjQqXV1ANVLgk9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 mt-2 block hover:underline flex items-center gap-1"
          >
            Schedule a Meet <FaExternalLinkAlt />
          </a>
        </motion.div>
      </div>

      {/* Footer Message */}
      <p className="text-center text-gray-400 mt-6">
        Whether you have a project in mind, want to collaborate, or just want to say hi, I&apos;m always open to discussing new opportunities and ideas.
      </p>

      {/* Chat Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-500 transition">
          💬 Always happy to chat!
        </button>
      </div>
    </section>
  );
}

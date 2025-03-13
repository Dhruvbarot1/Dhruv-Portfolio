"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiPostman, SiIntellijidea , SiAdobexd, SiTailwindcss, SiKubernetes, SiFigma } from "react-icons/si";


export default function Skills() {
  return ( 
    <section id="skills" className="container mx-auto my-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        My <span className="text-white">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Frontend */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaReact className="text-blue-400" /> Frontend
          </h3>
          <ul className="mt-3 text-gray-400 space-y-2">
            <li className="flex items-center gap-2"><SiJavascript className="text-yellow-400" /> JavaScript</li>
            <li className="flex items-center gap-2"><SiTypescript className="text-blue-500" /> TypeScript</li>
            <li className="flex items-center gap-2"><FaReact className="text-blue-400" /> React</li>
            <li className="flex items-center gap-2"><SiTailwindcss className="text-teal-400" /> Tailwind CSS</li>
          </ul>
        </motion.div>

        {/* Backend */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaNodeJs className="text-green-400" /> Backend
          </h3>
          <ul className="mt-3 text-gray-400 space-y-2">
            <li className="flex items-center gap-2"><FaNodeJs className="text-green-400" /> Node.js</li>
            <li className="flex items-center gap-2"><SiExpress className="text-gray-400" /> Express.js</li>
            <li className="flex items-center gap-2"><SiMongodb className="text-green-500" /> MongoDB</li>
            <li className="flex items-center gap-2"><FaDatabase className="text-gray-400" /> REST APIs</li>
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaTools className="text-yellow-400" /> Tools
          </h3>
          <ul className="mt-3 text-gray-400 space-y-2">
            <li className="flex items-center gap-2"><SiPostman className="text-orange-400" /> Postman</li>
            <li className="flex items-center gap-2"><SiIntellijidea className="text-orange-400" /> Intellijidea</li>
            <li className="flex items-center gap-2"><SiAdobexd className="text-red-400" /> Adobe XD</li>
            <li className="flex items-center gap-2"><SiFigma className="text-purple-400" /> Figma</li>
          </ul>
        </motion.div>

        {/* DevOps */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaAws className="text-orange-500" /> DevOps
          </h3>
          <ul className="mt-3 text-gray-400 space-y-2">
            <li className="flex items-center gap-2"><FaDocker className="text-blue-400" /> Docker</li>
            <li className="flex items-center gap-2"><FaAws className="text-orange-500" /> AWS</li>
            <li className="flex items-center gap-2"><FaGitAlt className="text-red-500" /> CI/CD Pipelines</li>
            <li className="flex items-center gap-2"><SiKubernetes className="text-blue-500" /> Kubernetes</li>
          </ul>
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-center text-gray-400 mt-6">
      I leverage my expertise in modern frontend frameworks, robust backend systems, creative design tools, and advanced DevOps practices to build scalable, high-performance web applications. My comprehensive skill set allows me to create seamless digital experiences tailored for today&apos;s dynamic web landscape.
      </p>
    </section>
  );
}

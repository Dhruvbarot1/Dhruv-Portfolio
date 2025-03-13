"use client";

import { FaDownload, FaFilePdf, FaRunning, FaMusic, FaCamera, FaGamepad, FaPlane } from "react-icons/fa";

export default function PersonalData() {
  return (
    <section id="personal-data" className="container mx-auto px-6 my-20">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        My <span className="text-white">Personal Data</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Resume Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaFilePdf className="text-red-500" /> Resume
          </h3>
          <p className="mt-2 text-gray-400 italic">
          &quot;Your resume is the first impression make it powerful, make it memorable, make it YOU.&quot;
          </p>
          
          <div className="mt-4">
            <a
              href="/public/resume.pdf"
              download
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>

        {/* Career Philosophy Statement */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white">Career Philosophy</h3>
          <p className="mt-2 text-gray-400">
            Technology is the bridge between ideas and reality. I believe in building scalable, efficient, and impactful solutions that enhance human experiences. 
          </p>
          <p className="mt-2 text-gray-400">
            With a passion for continuous learning and innovation, I strive to create software that not only solves problems but also inspires progress.
          </p>
        </div>

        {/* Hobbies Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white">Hobbies</h3>
          <p className="mt-2 text-gray-400">Here are some activities I enjoy:</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2 text-gray-300">
              <FaRunning className="text-yellow-400" /> Running & Fitness
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaMusic className="text-green-400" /> Listening to Music
            </li>  
            <li className="flex items-center gap-2 text-gray-300">
              <FaCamera className="text-blue-400" /> Photography  
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaPlane className="text-blue-400" /> Traveling
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <FaGamepad className="text-red-400" /> Playing Video Games
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

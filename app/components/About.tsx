"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaUsers, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="container mx-auto my-12 px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src="/profile1.jpg"  // Update with your actual image path
            alt="Dhruv Barot"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Side - About Text & Skills */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-grey-400"
          >
            🚀 I'm a passionate frontend developer with expertise in building modern web and mobile applications.
          </motion.h2>

          <p className="text-gray-400 mt-4">
            With a strong foundation in **React and React Native**, I create seamless user experiences that delight users.
          </p>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaCode className="text-blue-400" /> Development
              </h3>
              <p className="text-gray-400 mt-2">Passionate about clean code and modern technologies.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaBrain className="text-yellow-400" /> Problem Solving
              </h3>
              <p className="text-gray-400 mt-2">Love tackling complex challenges.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaLightbulb className="text-green-400" /> Learning
              </h3>
              <p className="text-gray-400 mt-2">Always exploring new technologies.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaUsers className="text-purple-400" /> Collaboration
              </h3>
              <p className="text-gray-400 mt-2">Working with teams to build high-quality applications.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

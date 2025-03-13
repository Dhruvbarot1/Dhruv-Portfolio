"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="container mx-auto my-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Text Section */}
        <div>
          <h2 className="text-5xl font-bold text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Dhruv Barot
            </span>
          </h2>

          <p className="text-grey-400 mt-4 text-lg leading-relaxed">
          🔹 Front-End Developer | UI/UX Designer | React & JavaScript Enthusiast
          </p>

          <p className="text-grey-400 mt-4 text-lg leading-relaxed">
            🚀 Aspiring Front-End Developer & UI/UX Designer passionate about crafting clean, modern, and interactive web applications.
          </p>
          <p className="text-grey-400 mt-4 text-lg">
            💡 I specialize in building high-performance ⚡, scalable 🔥 applications with modern frameworks and DevOps practices 🛠️.  
            I craft beautiful 🎨, responsive 📱, and user-friendly 💡 digital experiences using cutting-edge web technologies.
          </p>
          <p className="text-grey-400 mt-4 text-lg">
            🔥 Currently focusing on Full Stack Development 🏗️ & Cloud Technologies ☁️ to create efficient ✅, scalable 📈, and robust solutions for the future of web and mobile applications.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="border border-gray-400 px-6 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
          <Image
            src="/profile.jpg"  // Make sure the image is inside the public/ folder
            alt="Dhruv Barot"
            width={300}
            height={300}
            className="rounded-full border-4 border-gray-700 shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile"; // First Section
import About from "./components/About"; // Second Section
import Skills from "./components/Skills";
import Projects from "./components/Projects"; // Moved Projects Up
import PersonalData from "./components/PersonalData"; // Added Personal Data
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* 1️⃣ Profile Section (First) */}
      <section id="profile" className="container mx-auto px-6 my-20">
        <Profile />
      </section>

      {/* 2️⃣ About Section (Second) */}
      <section id="about" className="container mx-auto px-6 my-20">
        <About />
      </section>

      {/* 3️⃣ Skills Section */}
      <section id="skills" className="container mx-auto px-6 my-20">
        <Skills />
      </section>

      {/* 4️⃣ Projects Section */}
      <section id="projects" className="container mx-auto px-6 my-20">
        <Projects />
      </section>

      {/* 5️⃣ Personal Data (Resume, Cover Letter, Career Goals) */}
      <section id="personal-data" className="container mx-auto px-6 my-20">
        <PersonalData />
      </section>

      {/* 6️⃣ Contact Section */}
      <section id="contact" className="container mx-auto px-6 my-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

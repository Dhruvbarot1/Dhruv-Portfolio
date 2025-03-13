"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold text-purple-400">Dhruv Barot</h1>

        <ul className="hidden md:flex space-x-6">
          <li><Link href="#about" className="hover:text-purple-400">About</Link></li>
          <li><Link href="#skills" className="hover:text-purple-400">Skills</Link></li>
          <li><Link href="#projects" className="hover:text-purple-400">Projects</Link></li>
          <li><Link href="#personal-data" className="hover:text-purple-400">Personal Data</Link></li>
          <li><Link href="#contact" className="hover:text-purple-400">Contact</Link></li>
        </ul>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-xl p-2 rounded-md focus:outline-none"
        >
          {mounted && (theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />)}
        </button>
      </div>
    </nav>
  );
}

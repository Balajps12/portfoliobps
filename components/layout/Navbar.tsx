"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/80
        backdrop-blur-xl
        border-b
        border-slate-200
      "
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="font-bold text-xl text-slate-900"
        >
          BALAJ
        </a>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-slate-700">

          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#research" className="hover:text-blue-600 transition">
              Research
            </a>
          </li>

          <li>
            <a href="#leadership" className="hover:text-blue-600 transition">
              Leadership
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-blue-600 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#certifications" className="hover:text-blue-600 transition">
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          <a
  href="https://1drv.ms/b/c/81dc9ab96006fd62/IQDLjhj8GCn8QpUBQFLdwi8hAR_O0nMDoaDIojRKdWN2jgU?e=nPVVBz"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded-lg
    hover:bg-blue-700
    transition
  "
>
  Resume
</a>

        </div>

      </nav>
    </header>
  );
}
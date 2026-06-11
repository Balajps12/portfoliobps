"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Floating from "@/components/ui/Floating";
import Parallax from "@/components/ui/Parallax";

export default function Hero() {
  return (
<section
  className="
min-h-screen
flex
items-center
justify-center
bg-slate-50
dark:bg-gradient-to-br
dark:from-[#071426]
dark:via-[#081a31]
dark:to-[#0b1f3a]
px-6
pt-24
overflow-hidden
"
>      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <Parallax direction="left">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 tracking-wide">
              Hello, I'm Balaj
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              Business Analyst
            </h1>

            <h2 className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-200 mt-4">
              Analytics, Strategy & Process Improvement
            </h2>

            <p className="mt-8 text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed text-justify">
              MSc International Management & Global Business candidate with
              expertise in analytics, business research, AI-enabled solutions,
              and process optimization. Passionate about transforming data into
              actionable insights and driving smarter business decisions.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="inline-flex items-center justify-center min-w-[180px] bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-medium shadow-lg"
              >
                View Projects
              </a>

              <a
  href="https://1drv.ms/b/c/81dc9ab96006fd62/IQDLjhj8GCn8QpUBQFLdwi8hAR_O0nMDoaDIojRKdWN2jgU?e=nPVVBz"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center
    min-w-[180px]
    border
    border-slate-300
    bg-white
    text-slate-700
    px-6
    py-3
    rounded-xl
    hover:bg-slate-100
    transition-all
    duration-300
    font-medium
  "
>
  View Resume
</a>

            </div>
          </motion.div>
        </Parallax>

        {/* Right Content */}
        <Parallax direction="right">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Floating>
              <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/30 dark:bg-blue-400/20 blur-3xl"></div>

                {/* Portrait */}
                <Image
                  src="/profile-anime.png"
                  alt="Balaj Anime Portrait"
                  fill
                  priority
                  className="object-cover rounded-full border-4 border-white shadow-2xl"
                />

              </div>
            </Floating>
          </motion.div>
        </Parallax>

      </div>
    </section>
  );
}
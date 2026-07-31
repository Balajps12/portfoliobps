import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Education from "@/components/sections/Education";
import Leadership from "@/components/sections/Leadership";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Experience />

        <Skills />

        <Projects />

        <Research />

        <Education />


        <Leadership />



        <Certifications />

        <Contact />

      </main>

      <Footer />
    </>
  );
}
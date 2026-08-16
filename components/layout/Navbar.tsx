"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Education", href: "#education" },
  { name: "Leadership", href: "#leadership" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;

      for (const item of links) {
        const section = document.querySelector(
          item.href
        ) as HTMLElement | null;

        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(item.href.substring(1));
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener(
      "scroll",
      handleScroll
    );
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300

        ${
          scrolled
            ? "bg-white/80 dark:bg-[#081A31]/80 backdrop-blur-xl border-b border-slate-200 dark:border-blue-900/40 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#hero"
          className="
            text-2xl
            font-bold
            tracking-wide
            text-slate-900
            dark:text-white
          "
        >
          Balaj
        </a>

        {/* Desktop Navigation */}

        <ul className="hidden lg:flex items-center gap-8">

          {links.map((item) => (

            <li key={item.name}>

              <a
                href={item.href}
                aria-label={`Go to ${item.name}`}
                className={`
                  group
                  relative
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active === item.href.substring(1)
                      ? "text-blue-600"
                      : "text-slate-700 dark:text-slate-300 hover:text-blue-600"
                  }

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                  focus-visible:ring-offset-2
                  rounded
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute
                    left-0
                    -bottom-1
                    h-0.5
                    bg-blue-600
                    transition-all
                    duration-300

                    ${
                      active === item.href.substring(1)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />

              </a>

            </li>

          ))}

        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          <ThemeToggle />

          <a
            href="https://1drv.ms/b/c/81dc9ab96006fd62/IQC49tZrnlNDSr11QicrCSAnAf-Jn-Zn9DXGtoTTLoKKX2Q?e=sNaQjc"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              md:flex
              items-center
              gap-2

              bg-blue-600
              hover:bg-blue-700

              text-white

              px-5
              py-2.5

              rounded-xl

              font-medium

              shadow-lg
              hover:shadow-blue-500/30

              transition-all
              duration-300

              hover:-translate-y-0.5
            "
          >
            <Download size={18} />

            Resume
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              p-2
              rounded-lg
              text-slate-700
              dark:text-white
            "
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </nav>
            {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
            lg:hidden
            bg-white
            dark:bg-[#081A31]
            border-t
            border-slate-200
            dark:border-blue-900/40
            px-6
            py-6
            shadow-xl
          "
        >
          <div className="flex flex-col gap-5">

            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-label={`Go to ${item.name}`}
                className={`
                  font-medium
                  transition-colors
                  duration-300

                  ${
                    active === item.href.substring(1)
                      ? "text-blue-600"
                      : "text-slate-700 dark:text-slate-300 hover:text-blue-600"
                  }
                `}
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://1drv.ms/b/c/81dc9ab96006fd62/IQC49tZrnlNDSr11QicrCSAnAf-Jn-Zn9DXGtoTTLoKKX2Q?e=sNaQjc"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-2

                bg-blue-600
                hover:bg-blue-700

                text-white

                rounded-xl

                px-5
                py-3

                transition-all
                duration-300
              "
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>
        </div>
      )}

    </header>
  );
}
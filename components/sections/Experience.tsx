import FadeIn from "@/components/ui/FadeIn";

const experiences = [
  {
    company: "ADLYTICA Sp. z o.o.",
    role: "Enterprise AI & Business Operations Intern",
    duration: "June 2026 – Present",
    location: "Nysa, Poland (Remote)",
    type: "Internship",

    description:
      "Supporting enterprise AI initiatives while gaining practical experience in cloud technologies, business operations, AI-powered workflows, market research, and strategic analysis within an international technology environment.",

    responsibilities: [
      "Learn enterprise AI platform operations and deployment workflows.",
      "Gain practical exposure to AWS, Google Cloud, and Microsoft Azure ecosystems.",
      "Support business development, market research, and strategic analysis initiatives.",
      "Explore AI agents, private LLMs, and intelligent document processing systems.",
      "Participate in cross-functional team meetings, workshops, and partner sessions.",
      "Develop practical knowledge of enterprise AI solutions and startup operations.",
    ],

    technologies: [
      "Enterprise AI",
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Business Research",
      "Market Analysis",
      "AI Agents",
      "Private LLMs",
      "Document Processing",
      "Business Operations",
    ],

    impact:
      "Enterprise AI • Cloud Technologies • Business Operations • Market Research",
  },

  {
    company: "BLR Corporate Services",
    role: "Quality Analyst Intern",
    duration: "July 2026 – Present",
    location: "Coimbatore, India (Remote)",
    type: "Internship",

    description:
      "Supporting software quality assurance activities through manual testing, automation testing concepts, defect reporting, and Agile collaboration while developing practical knowledge of modern testing methodologies.",

    responsibilities: [
      "Learn Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC) methodologies.",
      "Perform manual testing by designing, executing, and validating test cases.",
      "Gain practical exposure to automation testing concepts and testing frameworks.",
      "Identify, document, and report software defects while supporting quality assurance processes.",
      "Participate in Agile daily stand-up meetings and collaborate with cross-functional teams.",
      "Maintain testing documentation, defect reports, and daily activity records.",
      "Develop practical knowledge of software quality assurance, testing strategies, and industry best practices.",
    ],

    technologies: [
      "Manual Testing",
      "Automation Testing",
      "Software QA",
      "STLC",
      "SDLC",
      "Test Case Design",
      "Functional Testing",
      "Regression Testing",
      "Defect Reporting",
      "Bug Tracking",
      "Agile",
      "Quality Documentation",
    ],

    impact:
      "Software QA • Manual Testing • STLC • Agile Collaboration",
  },
];

export default function Experience() {
  return (
    <FadeIn>
      <section
        id="experience"
        className="py-24 bg-white dark:bg-[#081A31]"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}

          <div className="mb-16">

            <p className="text-blue-600 font-semibold mb-3">
              Professional Experience
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Professional Experience
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl text-justify">
              Building practical experience across Enterprise AI, Software
              Quality Assurance, cloud technologies, business operations, and
              digital transformation through international internships while
              pursuing postgraduate studies.
            </p>

          </div>

          {/* Experience Cards */}

          <div className="space-y-10">

            {experiences.map((exp) => (

              <div
                key={exp.company}
                className="
                  bg-white
                  dark:bg-[#102544]
                  rounded-3xl
                  border
                  border-slate-200
                  dark:border-blue-900/40
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                  duration-500
                "
              >

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">

                  <div>

                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                      {exp.type}
                    </span>

                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>

                    <h4 className="text-xl text-blue-600 mt-2">
                      {exp.company}
                    </h4>

                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                      {exp.location}
                    </p>

                  </div>

                  <div className="text-slate-600 dark:text-slate-300 font-medium">
                    {exp.duration}
                  </div>

                </div>

                <p className="mt-8 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  {exp.description}
                </p>

                {/* Responsibilities */}

                <div className="mt-8">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Key Responsibilities & Learning
                  </h4>

                  <ul className="space-y-3">

                    {exp.responsibilities.map((item) => (

                      <li
                        key={item}
                        className="flex gap-3 text-slate-600 dark:text-slate-300"
                      >
                        <span className="text-blue-600 font-bold">•</span>

                        <span>{item}</span>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Skills */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {exp.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-slate-100
                        dark:bg-slate-800
                        text-slate-700
                        dark:text-slate-300
                        text-sm
                        font-medium
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Focus Areas */}

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Focus Areas
                  </h4>

                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.impact}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}
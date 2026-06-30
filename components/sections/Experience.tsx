import FadeIn from "@/components/ui/FadeIn";

const experiences = [
  {
    company: "ADLYTICA Sp. z o.o.",
    role: "Enterprise AI & Business Operations Intern",
    duration: "June 2026 – Present",
    location: "Nysa, Poland (Remote)",
    type: "Internship",

    description:
      "Working in a training-focused internship gaining practical exposure to enterprise AI, venture development, cloud technologies, and business operations while collaborating within an international technology ecosystem.",

    responsibilities: [
      "Learn enterprise AI platform operations and deployment workflows.",
      "Gain practical exposure to AWS, Google Cloud, and Microsoft Azure ecosystems.",
      "Support business development, market research, and strategic analysis initiatives.",
      "Explore AI agents, private LLMs, and intelligent document processing systems.",
      "Participate in cross-functional team meetings, workshops, and partner sessions.",
      "Develop practical knowledge of enterprise AI solutions and startup operations."
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
      "Business Operations"
    ],
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

          <div className="mb-16">
            <p className="text-blue-600 font-semibold mb-3">
              Professional Experience
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Industry Experience
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl text-justify">
              Building practical experience in enterprise AI, cloud technologies,
              business operations, and venture development through an
              international internship while pursuing postgraduate studies.
            </p>
          </div>

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

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Key Learning Areas
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

            </div>
          ))}

        </div>
      </section>
    </FadeIn>
  );
}
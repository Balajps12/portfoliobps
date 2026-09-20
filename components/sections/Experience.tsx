import FadeIn from "@/components/ui/FadeIn";

const experiences = [
  {
    company: "ADLYTICA Sp. z o.o.",
    role: "AI Automation Intern",
    duration: "June 2026 – Present",
    location: "Poland (Remote)",
    type: "Internship",

    description:
      "Developing practical experience in enterprise AI and automation, with a focus on AI agents, LLMs, intelligent document processing, cloud platforms, and technology-enabled business processes.",

    responsibilities: [
      "Develop AI-powered automation workflows using AI agents, LLMs, intelligent document processing, and APIs.",
      "Research AI technologies and identify opportunities for business process and workflow automation.",
      "Explore enterprise AI solutions and the application of emerging technologies to operational processes.",
      "Gain practical exposure to AWS, Microsoft Azure, and Google Cloud platforms.",
      "Participate in research, workshops, and team activities related to AI platforms and business operations.",
    ],

    technologies: [
      "AI Automation",
      "AI Agents",
      "LLMs",
      "Intelligent Document Processing",
      "APIs",
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Business Research",
      "Workflow Automation",
    ],

    impact:
      "AI Automation • Enterprise AI • Cloud Platforms • Business Operations",
  },

  {
    company: "BLR Corporate Services",
    role: "Business & Operations Analyst Intern",
    duration: "July 2026 – Present",
    location: "India (Remote)",
    type: "Internship",

    description:
      "Supporting business and operational activities through research, analysis, documentation, and process improvement as part of a business assignment with ERA (Elaine Ryan & Associates Ltd), Ireland.",

    responsibilities: [
      "Support business and operational activities involving research, analysis, documentation, and process improvement.",
      "Analyse information and structure findings to support business initiatives and decision-making.",
      "Contribute to technology-enabled business improvement and organisational activities.",
      "Support the preparation and organisation of information for business and operational requirements.",
    ],

    technologies: [
      "Business Analysis",
      "Business Research",
      "Operations",
      "Process Improvement",
      "Documentation",
      "Data Analysis",
      "Decision Support",
      "Stakeholder Communication",
    ],

    impact:
      "Business Analysis • Operations • Research • Process Improvement",
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

            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
              Professional Experience
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Experience Across Business, Data & AI
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl text-justify">
              Building practical experience across AI automation, business
              analysis, research, operations, cloud technologies, and
              technology-enabled process improvement through international
              professional experience.
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

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">

                  <div>

                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                      {exp.type}
                    </span>

                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>

                    <h4 className="text-xl text-blue-600 dark:text-blue-400 mt-2">
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

                {/* Description */}
                <p className="mt-8 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-8">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Key Responsibilities
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
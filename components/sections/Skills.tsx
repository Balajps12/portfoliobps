import FadeIn from "@/components/ui/FadeIn";

const skillCategories = [
  {
    icon: "📊",
    title: "Business & Strategy",
    skills: [
      "Business Analysis",
      "Business Process Improvement",
      "Strategic Thinking",
      "KPI Reporting",
      "Stakeholder Management",
      "Digital Transformation",
      "Business Research",
    ],
  },

  {
    icon: "📈",
    title: "Data & Analytics",
    skills: [
      "Excel",
      "SQL",
      "Python",
      "Power BI",
      "Data Visualization",
      "Predictive Modelling",
      "Statistical Analysis",
      "Data Cleaning",
    ],
  },

  {
    icon: "🤖",
    title: "Enterprise AI & Automation",
    skills: [
      "AI Workflow Automation",
      "Large Language Models",
      "Prompt Engineering",
      "AI Agents",
      "CrewAI",
      "OpenRouter API",
      "Document Processing",
      "Workflow Design",
    ],
  },

  {
    icon: "🧪",
    title: "Software Quality",
    skills: [
      "Manual Testing",
      "Automation Testing",
      "Software Quality Assurance",
      "Software Testing Life Cycle (STLC)",
      "Software Development Life Cycle (SDLC)",
      "Test Case Design",
      "Test Execution",
      "Functional Testing",
      "Regression Testing",
      "Defect Reporting",
      "Bug Tracking",
      "Agile Methodology",
      "Quality Documentation",
    ],
  },

  {
    icon: "🤝",
    title: "Leadership & Collaboration",
    skills: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Team Collaboration",
      "Cross-cultural Communication",
      "Research",
      "Presentation Skills",
      "Adaptability",
    ],
  },
];

export default function Skills() {
  return (
    <FadeIn>
      <section
        id="skills"
        className="py-24 bg-slate-50 dark:bg-[#0B1F3A]"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}

          <div className="mb-16">

            <p className="text-blue-600 font-semibold mb-3">
              Core Expertise
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Skills & Capabilities
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-justify">
              Combining business strategy, analytics, enterprise AI, software
              quality assurance, and leadership to solve complex business
              problems and deliver technology-driven solutions.
            </p>

          </div>

          {/* Skills Grid */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {skillCategories.map((category) => (

              <div
                key={category.title}
                className="
                  bg-white
                  dark:bg-[#102544]
                  rounded-3xl
                  p-8
                  border
                  border-slate-200
                  dark:border-blue-900/40
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                <h3 className="flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-white mb-6">

                  <span className="text-3xl">
                    {category.icon}
                  </span>

                  {category.title}

                </h3>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-blue-50
                        dark:bg-slate-800
                        text-blue-700
                        dark:text-blue-400
                        text-sm
                        font-medium
                        hover:bg-blue-600
                        hover:text-white
                        dark:hover:bg-blue-600
                        transition-all
                        duration-300
                        cursor-default
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}
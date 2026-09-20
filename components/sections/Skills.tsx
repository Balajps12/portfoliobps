import FadeIn from "@/components/ui/FadeIn";

const skillCategories = [
  {
    icon: "📊",
    title: "Business & Strategy",
    skills: [
      "Business Analysis",
      "Strategic Analysis",
      "Business Research",
      "Market Research",
      "Operations",
      "Process Improvement",
      "Decision Support",
      "KPI Analysis",
    ],
  },

  {
    icon: "📈",
    title: "Data & Analytics",
    skills: [
      "Python",
      "SQL",
      "R",
      "Excel",
      "Data Analysis",
      "Machine Learning",
      "NLP",
      "Predictive Analytics",
      "Data Visualisation",
    ],
  },

  {
    icon: "🤖",
    title: "AI & Automation",
    skills: [
      "Generative AI",
      "AI Agents",
      "LLMs",
      "Prompt Engineering",
      "AI Workflow Automation",
      "CrewAI",
      "OpenRouter",
      "API Integration",
      "Intelligent Document Processing",
    ],
  },

  {
    icon: "🤝",
    title: "Professional Skills",
    skills: [
      "Problem Solving",
      "Stakeholder Communication",
      "Research",
      "Documentation",
      "Presentation",
      "Cross-functional Collaboration",
      "Agile",
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

            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
              Core Expertise
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Skills & Capabilities
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-justify">
              A combination of business analysis, data analytics, AI
              technologies, and professional capabilities developed through
              academic research, internships, and practical projects.
            </p>

          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">

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
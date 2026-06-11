import FadeIn from "@/components/ui/FadeIn";

const skillCategories = [
  {
    title: "Business & Strategy",
    skills: [
      "Business Analysis",
      "Process Improvement",
      "Strategic Thinking",
      "KPI Reporting",
      "Stakeholder Coordination",
      "Digital Transformation",
    ],
  },
  {
    title: "Analytics",
    skills: [
      "Excel",
      "SQL",
      "Python",
      "Power BI",
      "Data Visualization",
      "Predictive Modelling",
      "Statistical Analysis",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "AI Workflow Automation",
      "Prompt Engineering",
      "LLMs",
      "CrewAI",
      "OpenRouter",
      "Multi-Agent Systems",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Team Collaboration",
      "Research",
      "Presentation Skills",
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

          <div className="mb-16">
            <p className="text-blue-600 font-semibold mb-3">
              Core Expertise
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Skills & Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
                className="
                  bg-white
                  dark:bg-slate-950
                  rounded-3xl
                  p-8
                  border
                  border-slate-200
                  dark:border-slate-800
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
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
                        hover:scale-105
                        transition-all
                        duration-300
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
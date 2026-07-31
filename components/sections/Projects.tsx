import FadeIn from "@/components/ui/FadeIn";

const projects = [
  {
    title: "AI Creator Operating System",
    featured: true,
    status: "Completed",
    category: "AI & Automation",
    color: "blue",

    github: "https://github.com/Balajps12/ai-creator-os",

    description:
      "Built an AI-powered operating system that autonomously researches, plans, generates, and manages content workflows using intelligent AI agents and workflow orchestration.",

    impact: [
      "Reduced manual content creation workflows through AI automation.",
      "Designed scalable multi-step AI pipelines for productivity.",
      "Demonstrated enterprise-ready workflow automation concepts.",
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "OpenRouter API",
      "AI Agents",
      "Automation",
      "Workflow Design",
    ],
  },

  {
    title: "Multi-Agent AI Systems",
    featured: false,
    status: "Completed",
    category: "AI & Automation",
    color: "blue",

    github:
      "https://github.com/Balajps12/ai-automation-platform",

    description:
      "Engineered autonomous multi-agent systems capable of reasoning, memory management, planning, research, and task orchestration.",

    impact: [
      "Automated complex knowledge workflows.",
      "Designed collaborative AI agent architecture.",
      "Improved execution efficiency through intelligent automation.",
    ],

    tech: [
      "Python",
      "CrewAI",
      "Large Language Models",
      "OpenRouter API",
      "Workflow Design",
    ],
  },

  {
    title: "Customer Churn Prediction & Retention Analytics",
    featured: false,
    status: "Completed",
    category: "Analytics",
    color: "green",

    github:
      "https://github.com/Balajps12/Transaction-Attrition-Prediction",

    description:
      "Developed predictive machine learning models to identify customer churn risks and generate actionable retention insights.",

    impact: [
      "Processed over 10,000 customer records.",
      "Generated retention-focused business insights.",
      "Improved decision-making through predictive analytics.",
    ],

    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Excel",
      "Predictive Analytics",
    ],
  },

  {
    title: "Intelligent Music Recommendation Engine",
    featured: false,
    status: "Completed",
    category: "Analytics",
    color: "green",

    github:
      "https://github.com/Balajps12/Music-Genre-Recommendation-System",

    description:
      "Designed a machine learning recommendation system capable of personalized music genre classification and recommendation.",

    impact: [
      "Achieved 92.9% genre classification accuracy.",
      "Improved recommendation relevance.",
      "Applied machine learning for personalization.",
    ],

    tech: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Data Analysis",
    ],
  },

  {
    title: "Marine Species Detection using Faster R-CNN",
    featured: false,
    status: "Completed",
    category: "Computer Vision",
    color: "orange",

    github:
      "https://github.com/Balajps12/Marine-Species-Detection-using-Faster-R-CNN",

    description:
      "Implemented a deep learning object detection model using Faster R-CNN to identify marine species from underwater imagery.",

    impact: [
      "Automated biodiversity monitoring.",
      "Applied computer vision to marine conservation.",
      "Demonstrated practical deep learning implementation.",
    ],

    tech: [
      "Python",
      "PyTorch",
      "Faster R-CNN",
      "Computer Vision",
      "Deep Learning",
    ],
  },

  {
    title: "Creative Storytelling with AI",
    featured: false,
    status: "Completed",
    category: "AI & Automation",
    color: "blue",

    github:
      "https://github.com/Balajps12/Creative-Storytelling-with-AI",

    description:
      "Developed a generative AI storytelling platform capable of producing interactive narratives and creative content.",

    impact: [
      "Showcased practical Generative AI applications.",
      "Enhanced creative content generation.",
      "Demonstrated prompt engineering workflows.",
    ],

    tech: [
      "Python",
      "Generative AI",
      "Prompt Engineering",
      "Large Language Models",
    ],
  },

  {
    title: "Automated Diet & Food Delivery Platform",
    featured: false,
    status: "Prototype",
    category: "Product Innovation",
    color: "purple",

    github:
      "https://github.com/Balajps12/Automated-Diet-Food-Delivery",

    description:
      "Designed a personalized nutrition platform combining AI recommendations, operational automation, and business strategy for health-tech services.",

    impact: [
      "Developed a scalable startup concept.",
      "Integrated AI into personalized nutrition.",
      "Focused on customer-centric product innovation.",
    ],

    tech: [
      "Product Strategy",
      "Business Model",
      "AI",
      "Operations",
    ],
  },
];

export default function Projects() {
  return (
    <FadeIn>
      <section
        id="projects"
        className="py-24 bg-white dark:bg-[#081A31]"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}

          <div className="mb-16">

            <p className="text-blue-600 font-semibold mb-3">
              Portfolio
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Projects & Technical Portfolio
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-justify">
              A curated portfolio showcasing enterprise AI, business analytics,
              machine learning, software engineering, and product innovation
              projects focused on solving real-world business challenges through
              technology.
            </p>

          </div>

          {/* Metrics */}

          <div className="grid md:grid-cols-3 gap-6 mb-16">

            <div className="rounded-2xl border border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#102544] p-6 text-center shadow-sm">

              <h3 className="text-4xl font-bold text-blue-600">
                7+
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Projects
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#102544] p-6 text-center shadow-sm">

              <h3 className="text-4xl font-bold text-blue-600">
                92.9%
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Model Accuracy
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#102544] p-6 text-center shadow-sm">

              <h3 className="text-4xl font-bold text-blue-600">
                10K+
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Records Analysed
              </p>

            </div>

          </div>

          {/* Projects Grid */}

          <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
            <div
              key={project.title}
              className={`
                ${
                  project.featured
                    ? "lg:col-span-2"
                    : ""
                }
                rounded-3xl
                border
                border-slate-200
                dark:border-blue-900/40
                bg-white
                dark:bg-[#102544]
                p-8
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                hover:border-blue-500
                transition-all
                duration-500
              `}
            >
              {/* Top */}

              <div className="flex items-start justify-between gap-4 flex-wrap">

                <div>

                  <span
                    className={`
                      inline-block
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                      mb-4

                      ${
                        project.color === "blue"
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : project.color === "green"
                          ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : project.color === "orange"
                          ? "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                          : "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                      }
                    `}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                </div>

                <span
                  className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold

                    ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    }
                  `}
                >
                  {project.status}
                </span>

              </div>

              {/* Description */}

              <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                {project.description}
              </p>

              {/* Business Impact */}

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Business Impact
                </h4>

                <ul className="space-y-3">

                  {project.impact.map((item) => (

                    <li
                      key={item}
                      className="flex gap-3 text-slate-600 dark:text-slate-300"
                    >

                      <span className="text-green-600 font-bold">
                        ✓
                      </span>

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

              </div>

              {/* Technologies */}

              <div className="mt-8">

                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Technology Stack
                </h4>

                <div className="flex flex-wrap gap-3">

                  {project.tech.map((tech) => (

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
                        hover:bg-blue-600
                        hover:text-white
                        dark:hover:bg-blue-600
                        transition-all
                        duration-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* Footer */}

              <div className="mt-10 flex items-center justify-between flex-wrap gap-4">

                {project.featured && (

                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    ⭐ Featured Project
                  </span>

                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    text-white
                    font-medium
                    hover:bg-blue-700
                    hover:gap-3
                    transition-all
                    duration-300
                  "
                >
                  View on GitHub →

                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  </FadeIn>

);
}
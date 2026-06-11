import FadeIn from "@/components/ui/FadeIn";

const projects = [
  {
    title: "AI Creator Operating System",
    category: "AI & Automation",
    github: "https://github.com/Balajps12/ai-creator-os",
    description:
      "Built an AI-powered operating system for autonomous content research, generation, workflow orchestration, and productivity automation.",
    impact:
      "Created scalable AI workflows capable of reducing manual content operations and improving execution efficiency.",
    tech: ["Next.js", "AI Agents", "Automation", "OpenRouter"],
  },

  {
    title: "Multi-Agent AI Systems",
    category: "AI & Automation",
    github: "https://github.com/Balajps12/ai-automation-platform",
    description:
      "Engineered autonomous multi-agent systems capable of reasoning, research, memory management, and task orchestration.",
    impact:
      "Designed intelligent agent workflows that automate complex knowledge work processes.",
    tech: ["CrewAI", "LLMs", "OpenRouter", "Workflow Design"],
  },

  {
    title: "Creative Storytelling with AI",
    category: "AI & Automation",
    github: "https://github.com/Balajps12/Creative-Storytelling-with-AI",
    description:
      "Developed an AI-driven storytelling platform capable of generating dynamic narratives and creative content experiences.",
    impact:
      "Demonstrated practical applications of generative AI for content creation and user engagement.",
    tech: ["Generative AI", "Prompt Engineering", "Python"],
  },

  {
    title: "Intelligent Music Recommendation Engine",
    category: "Analytics & Machine Learning",
    github:
      "https://github.com/Balajps12/Music-Genre-Recommendation-System",
    description:
      "Designed a recommendation and classification system using machine learning algorithms for personalized music discovery.",
    impact:
      "Achieved 92.9% genre classification accuracy while improving recommendation relevance.",
    tech: ["Python", "Machine Learning", "Analytics"],
  },

  {
    title: "Customer Churn Prediction & Retention Analytics",
    category: "Analytics & Machine Learning",
    github:
      "https://github.com/Balajps12/Transaction-Attrition-Prediction",
    description:
      "Analyzed customer behavior patterns and developed predictive models to identify churn risks.",
    impact:
      "Processed over 10,000 customer records to generate retention-focused business insights.",
    tech: ["Python", "Predictive Modeling", "Data Analysis", "Excel"],
  },

  {
    title: "Marine Species Detection using Faster R-CNN",
    category: "Analytics & Machine Learning",
    github:
      "https://github.com/Balajps12/Marine-Species-Detection-using-Faster-R-CNN",
    description:
      "Implemented a deep learning object detection framework for identifying marine species using Faster R-CNN.",
    impact:
      "Applied computer vision techniques to automate marine biodiversity monitoring.",
    tech: ["Deep Learning", "Computer Vision", "Python"],
  },

  {
    title: "Automated Diet & Food Delivery Platform",
    category: "Startup & Product Innovation",
    github:
      "https://github.com/Balajps12/Automated-Diet-Food-Delivery",
    description:
      "Conceptualized a personalized nutrition and food delivery platform integrating analytics, AI recommendations, and operational automation.",
    impact:
      "Developed a scalable startup concept focused on health-tech personalization and customer convenience.",
    tech: ["Product Strategy", "AI", "Operations", "Business Model"],
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
              Featured Work
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Featured Projects & Innovation Portfolio
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-3xl text-justify">
              A portfolio of analytics, artificial intelligence,
              automation, machine learning, and product innovation
              projects demonstrating problem-solving, technical
              expertise, and business impact.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#102544]">
              <h3 className="text-3xl font-bold text-blue-600">
                7
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Projects Delivered
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#102544]">
              <h3 className="text-3xl font-bold text-blue-600">
                92.9%
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                ML Classification Accuracy
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-blue-900/40 bg-white dark:bg-[#102544]">
              <h3 className="text-3xl font-bold text-blue-600">
                10K+
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Records Analysed
              </p>
            </div>

          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">

            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  border
                  border-slate-200
                  dark:border-blue-900/40
                  rounded-3xl
                  p-8
                  bg-white
                  dark:bg-[#102544]
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-3
                  hover:scale-[1.02]
                  transition-all
                  duration-500
                "
              >
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Business Impact
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
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

                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-blue-600
                      text-white
                      px-4
                      py-2
                      rounded-xl
                      hover:bg-blue-700
                      transition-all
                      duration-300
                    "
                  >
                    GitHub Repository
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


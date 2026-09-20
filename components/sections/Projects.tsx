import FadeIn from "@/components/ui/FadeIn";

const projects = [
  {
    title: "AI Creator Operating System",
    featured: true,
    status: "Completed",
    category: "AI & Automation",
    color: "blue",

    github: "https://github.com/Balajps12/ai-creator-os",

    problem:
      "Content creation workflows can involve multiple repetitive stages, including research, planning, generation, and workflow management.",

    approach:
      "Built an AI-powered operating system that combines intelligent agents, LLMs, APIs, and workflow orchestration to support automated content workflows.",

    highlights: [
      "Designed a multi-step workflow for AI-assisted content research and generation.",
      "Explored agent-based workflow orchestration for content operations.",
      "Applied AI automation concepts to a practical content-management use case.",
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

    problem:
      "Complex knowledge tasks often require multiple capabilities such as research, reasoning, planning, memory, and task coordination.",

    approach:
      "Developed multi-agent workflows using specialised AI agents to explore reasoning, memory, planning, research, and task orchestration.",

    highlights: [
      "Designed collaborative AI agent workflows.",
      "Explored reasoning, memory, planning, and research capabilities.",
      "Applied agent orchestration concepts to complex knowledge tasks.",
    ],

    tech: [
      "Python",
      "CrewAI",
      "Hermes",
      "LLMs",
      "OpenRouter",
      "AI Agents",
    ],
  },

  {
    title: "Customer Churn Analysis",
    featured: false,
    status: "Completed",
    category: "Data & Analytics",
    color: "green",

    github:
      "https://github.com/Balajps12/Transaction-Attrition-Prediction",

    problem:
      "Customer attrition can make it difficult for organisations to identify customers who may be at higher risk of leaving.",

    approach:
      "Applied predictive modelling and machine learning techniques to customer data to analyse churn patterns and identify potential retention insights.",

    highlights: [
      "Analysed a dataset containing 10,000+ customer records.",
      "Applied predictive modelling to customer attrition analysis.",
      "Generated insights that can support data-informed retention decisions.",
    ],

    tech: [
      "Python",
      "Machine Learning",
      "Predictive Modelling",
      "Pandas",
      "Scikit-learn",
    ],
  },

  {
    title: "Music Recommendation & Genre Classification",
    featured: false,
    status: "Completed",
    category: "Data & Analytics",
    color: "green",

    github:
      "https://github.com/Balajps12/Music-Genre-Recommendation-System",

    problem:
      "Music platforms need effective ways to classify music and support personalised recommendations from available data.",

    approach:
      "Developed a machine learning-based system for music genre classification and recommendation using Python and analytical techniques.",

    highlights: [
      "Achieved approximately 92.9% genre classification accuracy.",
      "Applied machine learning to music classification and recommendation.",
      "Explored data-driven approaches to personalised music experiences.",
    ],

    tech: [
      "Python",
      "SQL",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Data Analysis",
    ],
  },

  {
    title: "Marine Species Detection",
    featured: false,
    status: "Completed",
    category: "Computer Vision",
    color: "orange",

    github:
      "https://github.com/Balajps12/Marine-Species-Detection-using-Faster-R-CNN",

    problem:
      "Identifying marine species from underwater imagery presents a computer vision challenge due to the complexity of image-based detection.",

    approach:
      "Implemented a Faster R-CNN object detection approach to identify marine species from underwater images.",

    highlights: [
      "Applied deep learning to an image-based marine species detection problem.",
      "Implemented object detection using Faster R-CNN.",
      "Explored a computer vision application in the context of marine imagery.",
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
    category: "Generative AI",
    color: "blue",

    github:
      "https://github.com/Balajps12/Creative-Storytelling-with-AI",

    problem:
      "Generative AI can be used to support creative content creation, but effective outputs depend on how prompts and language models are structured.",

    approach:
      "Developed an AI-based storytelling project exploring generative content creation and prompt engineering with large language models.",

    highlights: [
      "Explored Generative AI for creative storytelling.",
      "Applied prompt engineering techniques to content generation.",
      "Demonstrated a practical application of large language models.",
    ],

    tech: [
      "Python",
      "Generative AI",
      "Prompt Engineering",
      "LLMs",
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

    problem:
      "Personalised nutrition services require coordination between customer needs, dietary recommendations, food delivery, and operational processes.",

    approach:
      "Designed a prototype concept combining personalised recommendations, AI, operational automation, and business model thinking for a health-tech food delivery platform.",

    highlights: [
      "Developed a prototype for a personalised nutrition and food delivery concept.",
      "Explored how AI could support personalised recommendations.",
      "Combined product strategy, business model thinking, and operational considerations.",
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

            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
              Portfolio
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Projects & Technical Portfolio
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed text-justify">
              A selection of projects across AI automation, data analytics,
              machine learning, computer vision, and product innovation,
              demonstrating how technical approaches can be applied to
              practical problems.
            </p>

          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">

            <div
              className="
                rounded-2xl
                border
                border-slate-200
                dark:border-blue-900/40
                bg-white
                dark:bg-[#102544]
                p-6
                text-center
                shadow-sm
              "
            >
              <h3 className="text-4xl font-bold text-blue-600">
                7
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Featured Projects
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-slate-200
                dark:border-blue-900/40
                bg-white
                dark:bg-[#102544]
                p-6
                text-center
                shadow-sm
              "
            >
              <h3 className="text-4xl font-bold text-blue-600">
                92.9%
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Genre Classification Accuracy
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-slate-200
                dark:border-blue-900/40
                bg-white
                dark:bg-[#102544]
                p-6
                text-center
                shadow-sm
              "
            >
              <h3 className="text-4xl font-bold text-blue-600">
                10K+
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Customer Records Analysed
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

                {/* Problem */}
                <div className="mt-8">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Problem
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    {project.problem}
                  </p>

                </div>

                {/* Approach */}
                <div className="mt-6">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Approach
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    {project.approach}
                  </p>

                </div>

                {/* Project Highlights */}
                <div className="mt-8">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Project Highlights
                  </h4>

                  <ul className="space-y-3">

                    {project.highlights.map((item) => (

                      <li
                        key={item}
                        className="flex gap-3 text-slate-600 dark:text-slate-300"
                      >

                        <span className="text-blue-600 font-bold">
                          •
                        </span>

                        <span>{item}</span>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Technologies */}
                <div className="mt-8">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Technologies
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
import FadeIn from "@/components/ui/FadeIn";

const education = [
  {
    degree: "MSc International Management & Global Business",
    institution: "University of Limerick",
    location: "Limerick, Ireland",
    period: "2025 – 2026",
    status: "Completed",
    achievement: "Expected 2:1 Honours",

    details:
      "Developed a multidisciplinary foundation in international management, global business strategy, leadership, organisational behaviour, international marketing, human resource management, finance, and project management.",

    highlights: [
      "Global Business Strategy",
      "International Marketing",
      "International Human Resource Management",
      "Leadership & Change",
      "Corporate Responsibility",
      "Project Management",
    ],
  },

  {
    degree: "Integrated MSc in Computational Statistics & Data Analytics",
    institution: "Vellore Institute of Technology (VIT)",
    location: "Vellore, India",
    period: "2020 – 2025",
    status: "Graduated",
    achievement: "First Class Honours • CGPA: 8.11 / 10",

    details:
      "Developed a strong analytical foundation through statistics, machine learning, artificial intelligence, predictive analytics, data analytics, and computational methods.",

    highlights: [
      "Statistics",
      "Machine Learning",
      "Artificial Intelligence",
      "Python",
      "SQL",
      "Data Analytics",
      "Predictive Analytics",
      "Research",
    ],
  },
];

export default function Education() {
  return (
    <FadeIn>
      <section
        id="education"
        className="py-24 bg-white dark:bg-[#081A31]"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">

            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
              Academic Journey
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Education
            </h2>

            <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              My academic background combines international management,
              business strategy, statistics, data analytics, and artificial
              intelligence, providing a multidisciplinary foundation for
              understanding and solving business problems.
            </p>

          </div>

          {/* Education Cards */}
          <div className="space-y-8">

            {education.map((item) => (

              <div
                key={item.degree}
                className="
                  bg-white
                  dark:bg-[#102544]
                  border
                  border-slate-200
                  dark:border-blue-900/40
                  rounded-3xl
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                  duration-500
                "
              >

                {/* Top */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

                  <div>

                    <span
                      className="
                        inline-block
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium
                        mb-4
                        bg-green-100
                        text-green-700
                        dark:bg-green-900/30
                        dark:text-green-400
                      "
                    >
                      {item.status}
                    </span>

                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-blue-600 dark:text-blue-400 text-lg font-medium">
                      {item.institution}
                    </p>

                    <p className="text-slate-500 dark:text-slate-400">
                      {item.location}
                    </p>

                  </div>

                  <div className="text-left lg:text-right">

                    <p className="font-semibold text-slate-700 dark:text-slate-300">
                      {item.period}
                    </p>

                    <p className="mt-2 text-blue-600 dark:text-blue-400 font-medium">
                      {item.achievement}
                    </p>

                  </div>

                </div>

                {/* Description */}
                <p className="mt-8 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  {item.details}
                </p>

                {/* Academic Highlights */}
                <div className="mt-8">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Academic Highlights
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {item.highlights.map((highlight) => (

                      <span
                        key={highlight}
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
                        {highlight}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}
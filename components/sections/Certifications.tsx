import FadeIn from "@/components/ui/FadeIn";

const certifications = [
  {
    title: "Statistical Computing Using Python",
    issuer: "CHRIST University",
    date: "Jan 2023",
    type: "Certificate",
    description:
      "Developed foundational skills in statistical computing, data analysis, and Python-based analytical workflows.",
    link:
      "https://1drv.ms/b/c/81dc9ab96006fd62/IQBxiBVp3Y4STp8Yy3brBoXBAbfhSt4BX7REGwFd3-kvut0?e=auqsNH",
  },

  {
    title: "From Excel to Power BI",
    issuer: "Coursera",
    date: "Mar 2024",
    type: "Course Certificate",
    description:
      "Developed knowledge of business intelligence concepts, dashboard development, data visualisation, and reporting using Power BI.",
    link:
      "https://1drv.ms/b/c/81dc9ab96006fd62/IQAZkmXrGlXZQZ0H6jqxWsIjARDP68Y3xWR4LWHZeVuY7JI?e=L2GYPY",
  },

  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "Coursera",
    date: "Mar 2024",
    type: "Course Certificate",
    description:
      "Developed skills in SQL querying, relational databases, data extraction, and Python integration for data analytics.",
    link:
      "https://1drv.ms/b/c/81dc9ab96006fd62/IQC82hY44hq_T64f4CWK9nmBATmrcQmmykMGD3tQIujU8YQ?e=fSbBOc",
  },

  {
    title: "Introduction to Machine Learning on AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2024",
    type: "Course Certificate",
    description:
      "Developed an understanding of machine learning fundamentals and AWS-based approaches to data-driven and AI applications.",
    link:
      "https://1drv.ms/b/c/81dc9ab96006fd62/IQCtsMWbs-BmRJ4k-jDfAYJqAZ2F-H65_mxozl_fGmFBOWs?e=IFGgX1",
  },

  {
    title: "Foundations of Prompt Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2026",
    type: "Training Completion",
    description:
      "Completed AWS training focused on foundational concepts and practices for prompt engineering and generative AI interactions.",
    link: "",
  },

  {
    title: "Essentials of Prompt Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2026",
    type: "Training Completion",
    description:
      "Completed AWS training covering essential prompt engineering concepts and techniques for working with generative AI systems.",
    link: "",
  },

  {
    title: "Introduction to AWS Solutions",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2026",
    type: "Training Completion",
    description:
      "Completed introductory AWS training focused on understanding AWS solutions and cloud-based technology concepts.",
    link: "",
  },

  {
    title: "AWS Partner: Data Foundations on AWS (Business)",
    issuer: "Amazon Web Services (AWS)",
    date: "Sep 2026",
    type: "Completion Certificate",
    description:
      "Completed AWS Partner training focused on data foundations and AWS concepts from a business perspective.",
    link: "",
  },
];

export default function Certifications() {
  return (
    <FadeIn>
      <section
        id="certifications"
        className="py-24 bg-white dark:bg-[#102544]"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">

            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
              Professional Development
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Certifications & Training
            </h2>

            <p className="text-slate-600 mt-4 max-w-4xl leading-relaxed text-justify dark:text-slate-300">
              Continuous learning across data analytics, business
              intelligence, databases, machine learning, prompt engineering,
              and AWS technologies, supporting the development of both
              analytical and technology-focused capabilities.
            </p>

          </div>

          {/* Certifications */}
          <div className="space-y-8">

            {certifications.map((cert) => (

              <div
                key={cert.title}
                className="
                  border
                  border-slate-200
                  dark:border-blue-900/40
                  rounded-3xl
                  p-8
                  lg:p-10
                  bg-white
                  dark:bg-[#102544]
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                  {/* Left Content */}
                  <div className="flex-1">

                    {/* Type Badge */}
                    <span
                      className="
                        inline-block
                        px-3
                        py-1
                        rounded-full
                        bg-blue-50
                        dark:bg-blue-900/30
                        text-blue-700
                        dark:text-blue-400
                        text-sm
                        font-medium
                        mb-4
                      "
                    >
                      {cert.type}
                    </span>

                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      {cert.title}
                    </h3>

                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
                      {cert.issuer} • {cert.date}
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                      {cert.description}
                    </p>

                  </div>

                  {/* Right Button */}
                  <div className="flex items-center">

                    <a
                      href={cert.link || "#"}
                      target={cert.link ? "_blank" : undefined}
                      rel={cert.link ? "noopener noreferrer" : undefined}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        px-6
                        py-3
                        bg-blue-600
                        text-white
                        rounded-xl
                        hover:bg-blue-700
                        hover:-translate-y-1
                        transition-all
                        duration-300
                        whitespace-nowrap
                        font-medium
                      "
                    >
                      View Certificate
                    </a>

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
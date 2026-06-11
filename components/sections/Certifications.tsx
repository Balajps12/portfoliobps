import FadeIn from "@/components/ui/FadeIn";

const certifications = [
  {
    title: "Statistical Computing Using Python",
    issuer: "CHRIST University",
    date: "Jan 2023",
    description:
      "Developed foundational skills in statistical computing, data analysis, and Python-based analytical workflows.",
    link: "https://1drv.ms/b/c/81dc9ab96006fd62/IQBxiBVp3Y4STp8Yy3brBoXBAbfhSt4BX7REGwFd3-kvut0?e=auqsNH",
  },
  {
    title: "From Excel to Power BI",
    issuer: "Coursera",
    date: "Mar 2024",
    description:
      "Learned business intelligence concepts, dashboard development, data visualization, and reporting using Power BI.",
    link: "https://1drv.ms/b/c/81dc9ab96006fd62/IQAZkmXrGlXZQZ0H6jqxWsIjARDP68Y3xWR4LWHZeVuY7JI?e=L2GYPY",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "Coursera",
    date: "Mar 2024",
    description:
      "Built expertise in SQL querying, relational databases, data extraction, and Python integration for analytics.",
    link: "https://1drv.ms/b/c/81dc9ab96006fd62/IQC82hY44hq_T64f4CWK9nmBATmrcQmmykMGD3tQIujU8YQ?e=fSbBOc",
  },
  {
  title: "Introduction to Machine Learning on AWS",
  issuer: "Amazon Web Services (AWS)",
  date: "Mar 2024",
  description:
    "Gained practical understanding of machine learning fundamentals, AWS cloud-based AI services, predictive analytics workflows, and data-driven decision-making applications.",
  link: "https://1drv.ms/b/c/81dc9ab96006fd62/IQCtsMWbs-BmRJ4k-jDfAYJqAZ2F-H65_mxozl_fGmFBOWs?e=IFGgX1",
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
            <p className="text-blue-600 font-semibold mb-3">
              Professional Development
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Certifications
            </h2>

            <p className="text-slate-600 mt-4 max-w-4xl leading-relaxed text-justify dark:text-slate-300">
              Continuous learning has been a key part of my academic and
              professional development, enabling me to strengthen my
              capabilities in analytics, business intelligence,
              databases, and data-driven decision-making.
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
                  rounded-3xl
                  p-10
                  bg-white
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                  {/* Left Content */}
                  <div className="flex-1">

                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      {cert.title}
                    </h3>

                    <p className="text-blue-600 font-medium mb-6">
                      {cert.issuer} • {cert.date}
                    </p>

                    <p className="text-slate-600 leading-relaxed text-justify">
                      {cert.description}
                    </p>

                  </div>

                  {/* Right Button */}
                  <div className="flex items-center">

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
                        transition-all
                        duration-300
                        whitespace-nowrap
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
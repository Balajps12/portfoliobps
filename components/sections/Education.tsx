const education = [
  {
    degree: "MSc International Management & Global Business",
    institution: "University of Limerick, Ireland",
    period: "2025 – 2026",
    details:
      "Expected award: 2:1 honours. Focused on international business strategy, management, global markets, and organizational decision-making.",
  },
  {
    degree: "Integrated MSc in Computational Statistics & Data Analytics",
    institution: "Vellore Institute of Technology (VIT), India",
    period: "2020 – 2025",
    details:
      "Graduated with First Class Honours (CGPA 8.11/10) . Specialized in statistics, analytics, machine learning, data science, and business intelligence.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-[#081A31]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-blue-600 font-semibold mb-3">
            Academic Journey
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
        </div>

        <div className="space-y-8">

          {education.map((item) => (
            <div
              key={item.degree}
              className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>

                  <p className="text-blue-600 font-medium dark:text-slate-300">
                    {item.institution}
                  </p>
                </div>

                <div className="text-slate-500 dark:text-white">
                  {item.period}
                </div>

              </div>

              <p className="text-slate-600 leading-relaxed dark:text-slate-300">
                {item.details}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
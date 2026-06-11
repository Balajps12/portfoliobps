const experiences = [
  {
    title: "Secretary",
    organization: "International Society, University of Limerick",
    period: "2025 – Present",
    description:
      "Coordinating communication, event planning, and operational support for multicultural student initiatives and society activities.",
  },
  {
    title: "Registered Volunteer",
    organization: "PVA, University of Limerick",
    period: "2025 – 2026",
    description:
      "Participated in structured volunteering initiatives while balancing postgraduate academic responsibilities.",
  },
  {
    title: "Academic Support Volunteer",
    organization: "Make A Difference (MAD), India",
    period: "2021 – 2022",
    description:
      "Mentored orphaned students through structured academic guidance, tutoring, and educational support.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-24 bg-slate-50 dark:bg-[#0B1F3A]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-blue-600 font-semibold mb-3">
            Leadership & Community Impact
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Leadership & Volunteering
          </h2>
        </div>

        <div className="space-y-8">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-blue-600 font-medium ">
                    {item.organization}
                  </p>
                </div>

                <div className="text-slate-500">
                  {item.period}
                </div>

              </div>

              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
import FadeIn from "@/components/ui/FadeIn";

const leadership = [
  {
    title: "Secretary",
    organization: "International Society, University of Limerick",
    location: "Limerick, Ireland",
    period: "2025 – 2026",
    type: "Leadership",

    description:
      "Supported the coordination and administration of the International Society, contributing to communications, documentation, event planning, and collaboration within a multicultural university community.",

    achievements: [
      "Supported communication and coordination between committee members and students.",
      "Contributed to planning and organising society events and activities.",
      "Supported society documentation, administration, and organisational activities.",
      "Collaborated with university and external stakeholders on society-related activities.",
    ],

    skills: [
      "Communication",
      "Event Coordination",
      "Organisation",
      "Team Collaboration",
      "Stakeholder Coordination",
      "Cross-cultural Collaboration",
    ],
  },

  {
    title: "Registered Volunteer",
    organization: "President's Volunteer Awards, University of Limerick",
    location: "Limerick, Ireland",
    period: "2025 – 2026",
    type: "Volunteer",

    description:
      "Contributed to volunteering activities within the University of Limerick community alongside postgraduate academic commitments.",

    achievements: [
      "Participated in university volunteering initiatives.",
      "Contributed to community-focused activities.",
      "Received the Gold President's Volunteer Award for volunteering contributions.",
    ],

    skills: [
      "Community Engagement",
      "Teamwork",
      "Communication",
      "Adaptability",
    ],
  },

  {
    title: "Academic Support Volunteer",
    organization: "Make A Difference (MAD), India",
    location: "India",
    period: "2021 – 2022",
    type: "Volunteer",

    description:
      "Provided academic assistance and learning support to school students through volunteering activities focused on education and student development.",

    achievements: [
      "Supported students through academic assistance and learning activities.",
      "Contributed to education-focused volunteering initiatives.",
      "Worked with students through structured learning support.",
    ],

    skills: [
      "Mentoring",
      "Communication",
      "Teaching",
      "Leadership",
      "Social Impact",
    ],
  },
];

export default function Leadership() {
  return (
    <FadeIn>
      <section
        id="leadership"
        className="py-24 bg-slate-50 dark:bg-[#0B1F3A]"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">

            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
              Leadership & Community
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Leadership & Volunteering
            </h2>

            <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Experience beyond academics and professional work, with a focus
              on communication, organisation, collaboration, event
              coordination, and community involvement.
            </p>

          </div>

          {/* Cards */}
          <div className="space-y-8">

            {leadership.map((item) => (

              <div
                key={`${item.organization}-${item.title}`}
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
                      className={`
                        inline-block
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium
                        mb-4

                        ${
                          item.type === "Leadership"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }
                      `}
                    >
                      {item.type}
                    </span>

                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-blue-600 dark:text-blue-400 text-lg font-medium">
                      {item.organization}
                    </p>

                    <p className="text-slate-500 dark:text-slate-400">
                      {item.location}
                    </p>

                  </div>

                  <div className="text-slate-600 dark:text-slate-300 font-medium">
                    {item.period}
                  </div>

                </div>

                {/* Description */}
                <p className="mt-8 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  {item.description}
                </p>

                {/* Contributions */}
                <div className="mt-8">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Key Contributions
                  </h4>

                  <ul className="space-y-3">

                    {item.achievements.map((achievement) => (

                      <li
                        key={achievement}
                        className="flex gap-3 text-slate-600 dark:text-slate-300"
                      >
                        <span className="text-blue-600 font-bold">
                          •
                        </span>

                        <span>{achievement}</span>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Skills */}
                <div className="mt-8">

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Skills Developed
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {item.skills.map((skill) => (

                      <span
                        key={skill}
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
                        {skill}
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
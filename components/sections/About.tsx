import FadeIn from "@/components/ui/FadeIn";
import Counter from "@/components/ui/Counter";

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="
min-h-screen
flex
items-center
justify-center
bg-slate-50
dark:bg-gradient-to-br
dark:from-[#071426]
dark:via-[#081a31]
dark:to-[#0b1f3a]
px-6
pt-24
overflow-hidden
"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="mb-16">
            <p className="text-blue-600 font-semibold mb-3">
              About Me
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Transforming Data into Smarter Business Decisions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Content */}
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-justify">

  <p>
    I am currently pursuing an MSc in International Management & Global
    Business at the University of Limerick, building on a strong analytical
    foundation from my Integrated MSc in Computational Statistics &
    Data Analytics.
  </p>

  <p>
    My interests span business analysis, enterprise AI, software quality
    assurance, digital transformation, analytics, and process improvement.
    Through international internships, academic research, and AI-driven
    projects, I enjoy solving business problems using data, technology,
    and structured decision-making.
  </p>

  <p>
    My goal is to bridge business strategy with technology by designing
    data-driven solutions that improve operational efficiency, support
    strategic decision-making, and create measurable business value for
    organisations.
  </p>

</div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">

              <div
                className="
                  p-6
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-800
                  dark:bg-slate-900
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-4xl font-bold text-blue-600">
                  <Counter end={6} />+
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Major Analytics & AI Projects
                </p>
              </div>

              <div
                className="
                  p-6
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-800
                  dark:bg-slate-900
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-4xl font-bold text-blue-600">
                  <Counter end={4} />
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Professional Certifications
                </p>
              </div>

              <div
                className="
                  p-6
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-800
                  dark:bg-slate-900
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-4xl font-bold text-blue-600">
                  <Counter end={2} />
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Professional Internships
                </p>
              </div>

              <div
                className="
                  p-6
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-800
                  dark:bg-slate-900
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                <h3 className="text-4xl font-bold text-blue-600">
                  <Counter end={3} />+
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Leadership & Volunteer Roles
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}
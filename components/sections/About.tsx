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
        <div className="max-w-7xl mx-auto px-6 w-full">

          {/* Section Header */}
          <div className="mb-16">
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
              About Me
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Connecting Business Problems with Data & Technology
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Content */}
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-justify">

              <p>
                I am a business and analytics professional with an MSc in
                International Management & Global Business from the University
                of Limerick and an Integrated MSc in Computational Statistics &
                Data Analytics from VIT.
              </p>

              <p>
                My experience spans AI automation, business research, data
                analytics, and technology-enabled process improvement. Through
                professional internships, academic research, and independent
                projects, I work across both business and technical contexts
                to structure problems, analyse information, and develop
                practical solutions.
              </p>

              <p>
                I have a particular interest in applying data, AI, and emerging
                technologies to business and operational challenges. This
                includes exploring AI agents and LLM-based workflows,
                conducting business and market research, and using analytical
                methods to turn information into actionable insights.
              </p>

              <p>
                My approach is straightforward: understand the business
                problem, structure the available information, apply the right
                analytical or technological approach, and translate the
                findings into practical business insight.
              </p>

            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">

              {/* Analytics & AI Projects */}
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
                  <Counter end={7} />+
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Analytics, AI & Technology Projects
                </p>
              </div>

              {/* Education */}
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
                  MSc Degrees
                </p>
              </div>

              {/* Internships */}
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

              {/* Leadership */}
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
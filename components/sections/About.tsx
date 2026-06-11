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
              Turning Data Into Better Business Decisions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Content */}
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify mb-6">
                I am currently pursuing an MSc in International
                Management & Global Business at the University of
                Limerick, building on my academic foundation in
                Computational Statistics & Data Analytics.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify mb-6">
                My interests lie at the intersection of business,
                analytics, process improvement, and digital
                transformation. Through academic research,
                AI-enabled automation projects, and analytical
                problem-solving, I enjoy transforming complex
                information into actionable insights.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                I aspire to contribute to organizations through
                business analysis, operational excellence, and
                data-driven decision-making while helping teams
                navigate technology-driven change.
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
                  Master's Degrees
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
import FadeIn from "@/components/ui/FadeIn";

export default function Research() {
  return (
    <FadeIn>
      <section
        id="research"
        className="py-24 bg-slate-50 dark:bg-[#0B1F3A]"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}

          <div className="mb-16">

            <p className="text-blue-600 font-semibold mb-3">
              Research & Thought Leadership
            </p>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Master's Dissertation
            </h2>

            <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Conducting research at the intersection of international human
              resource management, recruitment strategy, and business analytics,
              with a focus on understanding how multinational organisations
              communicate talent expectations through graduate recruitment
              programmes.
            </p>

          </div>

          {/* Main Card */}

          <div
            className="
              bg-white
              dark:bg-[#102544]
              border
              border-slate-200
              dark:border-blue-900/40
              rounded-3xl
              p-10
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >

            {/* Status */}

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

              <span
                className="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  rounded-full
                  bg-green-100
                  text-green-700
                  dark:bg-green-900/30
                  dark:text-green-400
                  font-medium
                  text-sm
                "
              >
                In Progress
              </span>

              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Expected Completion • August 2026
              </span>

            </div>

            {/* Title */}

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              Recruitment Signalling and Global Talent Expectations in
              Multinational Organisations
            </h3>

            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              This research investigates how multinational organisations signal
              competencies, behaviours, and talent expectations through graduate
              recruitment programmes across consulting, technology, and
              pharmaceutical industries using computational text analysis and
              qualitative thematic interpretation.
            </p>

            {/* Research Cards */}

            <div className="grid lg:grid-cols-3 gap-8 mt-10">

              {/* Research Focus */}

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 p-6">

                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-5">
                  🎯 Research Focus
                </h4>

                <ul className="space-y-3 text-slate-600 dark:text-slate-300">

                  <li>• Recruitment signalling</li>

                  <li>• Employer branding strategies</li>

                  <li>• Global talent expectations</li>

                  <li>• Graduate recruitment programmes</li>

                  <li>• Signalling Theory</li>

                </ul>

              </div>

              {/* Methodology */}

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 p-6">

                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-5">
                  📚 Methodology
                </h4>

                <ul className="space-y-3 text-slate-600 dark:text-slate-300">

                  <li>• Qualitative Multiple Case Study</li>

                  <li>• Computational Text Analysis</li>

                  <li>• Braun & Clarke Thematic Analysis</li>

                  <li>• Cross-industry Comparison</li>

                  <li>• Secondary Data Research</li>

                </ul>

              </div>

              {/* Research Tools */}

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 p-6">

                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-5">
                  💻 Research Tools
                </h4>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Python",
                    "Google Colab",
                    "Web Scraping",
                    "Pandas",
                    "NLTK",
                    "OpenPyXL",
                    "Matplotlib",
                    "Text Analytics",
                    "Topic Modelling",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="
                        px-3
                        py-2
                        rounded-full
                        bg-blue-50
                        dark:bg-slate-800
                        text-blue-700
                        dark:text-blue-400
                        text-sm
                        font-medium
                      "
                    >
                      {tool}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* Bottom Information */}

            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">

              <div className="grid md:grid-cols-2 gap-8">

                <div>

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Academic Institution
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300">
                    University of Limerick, Ireland
                  </p>

                </div>

                <div>

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Research Domain
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300">
                    International Management • Human Resource Management •
                    Business Analytics
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}
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

            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
              Research
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Master's Dissertation
            </h2>

            <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Research at the intersection of international human resource
              management, recruitment strategy, and computational text
              analysis, examining how multinational organisations communicate
              talent expectations through graduate recruitment programmes.
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
                Completed
              </span>

              <span className="text-slate-500 dark:text-slate-400 font-medium">
                2026
              </span>

            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              Recruitment Signalling and Global Talent Expectations in
              Multinational Organisations: A Text Analysis of Graduate
              Recruitment Programmes
            </h3>

            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              This dissertation analysed 29 graduate recruitment webpages
              across consulting, technology, and pharmaceutical organisations
              to examine the competencies, behaviours, and talent expectations
              signalled to prospective graduates. Computational text analysis
              was used to identify recurring language patterns and themes
              across the selected organisations and industries.
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

                  <li>• Global talent expectations</li>

                  <li>• Graduate recruitment programmes</li>

                  <li>• Competencies and behaviours</li>

                  <li>• Cross-industry recruitment differences</li>

                </ul>

              </div>

              {/* Methodology */}
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 p-6">

                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-5">
                  📚 Research Methods
                </h4>

                <ul className="space-y-3 text-slate-600 dark:text-slate-300">

                  <li>• Computational Text Analysis</li>

                  <li>• Natural Language Processing (NLP)</li>

                  <li>• Word-Frequency Analysis</li>

                  <li>• Co-occurrence Analysis</li>

                  <li>• Structural Topic Modelling (STM)</li>

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
                    "R",
                    "NLP",
                    "Text Analysis",
                    "Structural Topic Modelling",
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

            {/* Business & HR Relevance */}
            <div className="mt-10">

              <div
                className="
                  rounded-2xl
                  bg-blue-50
                  dark:bg-blue-900/20
                  border
                  border-blue-100
                  dark:border-blue-900/40
                  p-6
                "
              >

                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Business & HR Relevance
                </h4>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  The research connects computational text analysis with
                  practical questions in talent management and recruitment.
                  By analysing the language used in graduate recruitment
                  programmes, the study provides insight into how multinational
                  organisations communicate expected competencies and
                  behaviours to prospective talent, while identifying patterns
                  that vary across industries.
                </p>

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
                    University of Limerick, Kemmy Business School, Ireland
                  </p>

                </div>

                <div>

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Research Domain
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300">
                    International Management • Human Resource Management •
                    Recruitment • Text Analytics
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
export default function Research() {
  return (
    <section
      id="research"
      className="py-24 bg-slate-50 dark:bg-[#0B1F3A]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-blue-600 font-semibold mb-3">
            Research & Thought Leadership
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Master's Thesis
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm">

          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Recruitment Signalling and Global Talent Expectations in Multinational Organisations
          </h3>

          <p className="text-slate-600 leading-relaxed mb-6">
            Ongoing master's research examining how multinational organisations communicate expectations for early-career global talent through graduate recruitment programmes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                Research Focus
              </h4>

              <ul className="space-y-2 text-slate-600">
                <li>• Recruitment communication analysis</li>
                <li>• Employer branding strategies</li>
                <li>• Global talent expectations</li>
                <li>• Signalling Theory applications</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                Methodology
              </h4>

              <ul className="space-y-2 text-slate-600">
                <li>• Computational text analysis</li>
                <li>• Topic modelling</li>
                <li>• Cross-industry comparison</li>
                <li>• International HRM frameworks</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-white font-bold text-xl">
              Balaj Parasuraman Sangeetha
            </h3>

            <p className="text-slate-400 mt-2">
              Business Analyst | Strategy, Analytics & Operations
            </p>
          </div>

          <div className="flex gap-6">

            <a
              href="https://github.com/Balajps12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/balaj-ps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:balaj.12@outlook.com"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              Email
            </a>

          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-blue-900/20 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Balaj Parasuraman Sangeetha. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
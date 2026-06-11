export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          © {new Date().getFullYear()} Balaj Parasuraman Sangeetha
        </div>

        <div className="flex gap-6">

          <a
            href="https://www.linkedin.com/in/balaj-ps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Balajps12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="mailto:balaj.12@outlook.com"
            className="hover:text-white transition"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
}
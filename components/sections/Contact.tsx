export default function Contact() {
  return (
<section
  id="contact"
  className="
    relative
    py-24
    bg-[#071426]
    text-white
    border-t
    border-blue-900/40
  "
>
      <div className="max-w-4xl mx-auto px-6 text-center">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
</div>
        <p className="text-blue-400 font-semibold mb-3">
          Let's Connect
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Ready to Create Impact Through Analytics & Strategy
        </h2>

        <p className="text-slate-300 text-lg mb-10">
          I'm currently seeking internships, graduate opportunities,
          and business analyst roles where I can contribute through
          analytics, process improvement, and data-driven decision-making.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">

          <a
            href="mailto:balaj.12@outlook.com"
            className="
bg-blue-600
text-white
px-6
py-3
rounded-xl
hover:bg-blue-700
hover:scale-105
transition-all
duration-300"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/balaj-ps"
            target="_blank"
            rel="noopener noreferrer"
            className="
border
border-blue-900/40
px-6
py-3
rounded-xl
hover:bg-[#102544]
hover:scale-105
transition-all
duration-300
"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Balajps12"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-500 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            GitHub
          </a>

        </div>

        <div className="text-slate-400">
          <p>Balaj Parasuraman Sangeetha</p>
          <p>Limerick, Ireland</p>
        </div>

      </div>
    </section>
  );
}
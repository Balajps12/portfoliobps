import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  return (
    <FadeIn>
      <section
        id="contact"
        className="
          relative
          py-24
          bg-[#071426]
          text-white
          border-t
          border-blue-900/40
          overflow-hidden
        "
      >

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div
            className="
              absolute
              top-16
              left-1/2
              -translate-x-1/2
              w-[650px]
              h-[650px]
              rounded-full
              bg-blue-500/10
              blur-[150px]
            "
          />

        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          {/* Heading */}
          <p className="text-blue-400 font-semibold mb-3">
            Let's Connect
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">

            Let's Build
            <br />

            <span className="text-blue-400">
              Practical Business Solutions
            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            I am open to opportunities across business, data, AI, analytics,
            strategy, and operations where I can combine analytical thinking,
            business understanding, and technology to solve practical
            organisational challenges.
          </p>

          {/* Areas of Interest */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "Business Analysis",
              "Data Analytics",
              "AI & Automation",
              "Strategy",
              "Operations",
              "Technology",
            ].map((item) => (

              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-900/30
                  border
                  border-blue-700/40
                  text-blue-300
                  text-sm
                  font-medium
                "
              >
                {item}
              </span>

            ))}

          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">

            {/* Email */}
            <a
              href="mailto:balaj.12@outlook.com"
              className="
                bg-blue-600
                hover:bg-blue-700
                px-7
                py-4
                rounded-xl
                font-medium
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/balaj-ps"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-blue-700/40
                px-7
                py-4
                rounded-xl
                hover:bg-[#102544]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Balajps12"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-slate-600
                px-7
                py-4
                rounded-xl
                hover:bg-slate-800
                transition-all
                duration-300
                hover:scale-105
              "
            >
              GitHub
            </a>

            {/* CV */}
            <a
              href="https://1drv.ms/b/c/81dc9ab96006fd62/IQCmhEfRgJ8uQK0O9AcsnMkHAYaVT1CSwSXTcJB02YDS_kA?e=pEeFnK"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-slate-600
                px-7
                py-4
                rounded-xl
                hover:bg-slate-800
                transition-all
                duration-300
                hover:scale-105
              "
            >
              View CV
            </a>

          </div>

          {/* Footer Information */}
          <div className="mt-14 pt-10 border-t border-slate-700">

            <div className="grid md:grid-cols-2 gap-8 text-center">

              {/* Location */}
              <div>

                <p className="text-blue-400 font-semibold mb-2">
                  Location
                </p>

                <p className="text-slate-300">
                  Limerick, Ireland
                </p>

              </div>

              {/* Areas of Interest */}
              <div>

                <p className="text-blue-400 font-semibold mb-2">
                  Areas of Interest
                </p>

                <p className="text-slate-300">
                  Business • Data • AI • Analytics • Strategy • Operations
                </p>

              </div>

            </div>

            <p className="mt-10 text-slate-400 text-sm leading-relaxed">

              Thank you for visiting my portfolio. I welcome conversations
              with professionals, recruiters, and organisations working across
              business and technology.

            </p>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}
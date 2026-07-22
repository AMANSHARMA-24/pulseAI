import { ArrowRight, FileText, HeartPulse } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row">
        
        {/* Left */}
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700">
            AI Powered Medical Assistant
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Get Instant
            <span className="text-teal-600"> First Aid </span>
            Guidance Anytime
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Describe an emergency, upload first-aid PDFs, ask medical
            questions, and quickly notify your emergency contact using AI.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button
              onClick={() => navigate("/first-aid")}
              className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Get Started
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => navigate("/pdf-assistant")}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <FileText size={20} />
              PDF Assistant
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex h-72 w-72 items-center justify-center rounded-full bg-teal-100 shadow-xl sm:h-96 sm:w-96">
          <HeartPulse className="text-teal-600" size={180} />
        </div>
      </div>
    </section>
  );
}

export default Hero;

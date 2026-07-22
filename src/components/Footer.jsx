import { HeartPulse, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <HeartPulse
              className="text-teal-600"
              size={24}
            />

            <h2 className="text-lg font-bold text-slate-800">
              Pulse AI
            </h2>
          </div>

          <p className="mt-2 max-w-md text-sm text-slate-500">
            AI-powered first aid assistant for quick guidance,
            PDF medical assistance, and emergency support.
          </p>
        </div>


        {/* Social Links */}
        <div className="flex items-center gap-4">

          <a
            href="mailto:narendraman1234@gmail.com"
            className="rounded-full bg-slate-100 p-3 transition hover:bg-teal-100 hover:text-teal-600"
          >
            <Mail size={20} />
          </a>


          <a
            href="https://github.com/AMANSHARMA-24"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-100 p-3 transition hover:bg-teal-100 hover:text-teal-600"
          >
            <FaGithub size={20} />
          </a>


          <a
            href="https://www.linkedin.com/in/aman-sharma-296352291/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-100 p-3 transition hover:bg-teal-100 hover:text-teal-600"
          >
            <FaLinkedin size={20} />
          </a>

        </div>

      </div>


      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © {year} Pulse AI. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
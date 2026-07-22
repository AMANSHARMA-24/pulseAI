import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HeartPulse, BrainCircuit, FileText, Mail } from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "AI First Aid Guidance",
    description:
      "Get instant first aid suggestions by describing an emergency situation.",
  },
  {
    icon: BrainCircuit,
    title: "AI Powered RAG System",
    description:
      "Uses retrieval augmented generation to provide context-based answers.",
  },
  {
    icon: FileText,
    title: "PDF Assistant",
    description:
      "Upload medical documents and ask questions directly from them.",
  },
  {
    icon: Mail,
    title: "Emergency Alerts",
    description:
      "Save emergency contacts and send alerts quickly when needed.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-12">
        {/* Heading */}

        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 sm:text-5xl">
            About Pulse AI
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            Pulse AI is an AI-powered healthcare assistant designed to
            provide quick first aid guidance, document-based medical
            assistance, and emergency contact support.
          </p>
        </div>


        {/* Features */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-teal-100 p-3">
                  <Icon
                    size={28}
                    className="text-teal-600"
                  />
                </div>

                <h2 className="text-lg font-semibold text-slate-800">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>


        {/* Disclaimer */}

        {/* <div className="mt-12 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <h3 className="font-semibold text-yellow-800">
            Medical Disclaimer
          </h3>

          <p className="mt-2 text-sm leading-6 text-yellow-700">
            This application is created for educational purposes only.
            In serious emergencies, always contact professional medical
            services immediately.
          </p>
        </div> */}
      </main>

      <Footer />
    </div>
  );
}

export default About;
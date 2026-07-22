import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AlertTriangle, Home } from "lucide-react";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle
              size={45}
              className="text-red-600"
            />
          </div>

          <h1 className="mt-8 text-5xl font-bold text-slate-800">
            404
          </h1>

          <h2 className="mt-3 text-2xl font-semibold text-slate-700">
            Page Not Found
          </h2>

          <p className="mt-4 text-slate-500">
            Sorry, the page you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
          >
            <Home size={20} />
            Go Back Home
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
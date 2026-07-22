import { useState } from "react";

import Navbar from "../components/Navbar";
import ChatSection from "../components/ChatSection";
import ResultsSection from "../components/ResultsSection";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import Footer from "../components/Footer";

import { getFirstAidGuidance } from "../services/firstAidService";
import { getErrorMessage } from "../utils/getErrorMessage";

function FirstAid() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmed = query.trim();

    if (!trimmed || loading) return;

    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const response = await getFirstAidGuidance(trimmed);
      setAnswer(response);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <ChatSection
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
            loading={loading}
          />

          <div className="space-y-4">
            <ErrorAlert
              message={error}
              onDismiss={() => setError("")}
            />

            {loading && (
              <div className="rounded-2xl bg-white shadow">
                <LoadingSpinner />
              </div>
            )}

            {!loading && answer && (
              <ResultsSection answer={answer} />
            )}

            {!loading && !answer && !error && (
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-8 text-center">
                <h2 className="text-lg font-semibold text-slate-700">
                  AI Response
                </h2>

                <p className="mt-3 text-slate-500">
                  Describe the emergency to receive first aid guidance.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FirstAid;
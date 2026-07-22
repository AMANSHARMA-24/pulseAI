import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PdfUpload from "../components/PdfUpload";
import QuestionBox from "../components/QuestionBox";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import ResultsSection from "../components/ResultsSection";

import { uploadPdf, askQuestion } from "../services/pdfService";
import { getErrorMessage } from "../utils/getErrorMessage";

function PdfAssistant() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError("");

    try {
      await uploadPdf(file);
      setUploaded(true);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleAsk = async (e) => {
    e.preventDefault();

    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const response = await askQuestion(question);
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
          <div className="space-y-6">
            <PdfUpload
              file={file}
              setFile={setFile}
              uploaded={uploaded}
              loading={loading}
              handleUpload={handleUpload}
            />

            <QuestionBox
              question={question}
              setQuestion={setQuestion}
              handleAsk={handleAsk}
              disabled={!uploaded || loading}
            />
          </div>

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
                  PDF Response
                </h2>

                <p className="mt-3 text-slate-500">
                  Upload a PDF and ask questions to receive answers.
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

export default PdfAssistant;
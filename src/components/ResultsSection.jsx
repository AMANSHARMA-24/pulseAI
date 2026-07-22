import { ClipboardCheck, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

function ResultsSection({ answer }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(answer);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-teal-100 p-2">
            <ClipboardCheck className="text-teal-600" size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              First Aid Guidance
            </h2>

            <p className="text-sm text-slate-500">
              AI generated response
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
        >
          {copied ? (
            <>
              <CheckCircle2
                size={18}
                className="text-green-600"
              />
              Copied
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy
            </>
          )}
        </button>
      </div>

      <div className="max-h-[550px] overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-5">
        <pre className="whitespace-pre-wrap break-words font-sans text-[15px] leading-7 text-slate-700">
          {answer}
        </pre>
      </div>
    </div>
  );
}

export default ResultsSection;
import { Send, MessageSquare, Loader2 } from "lucide-react";

function QuestionBox({
  question,
  setQuestion,
  handleAsk,
  disabled,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <MessageSquare
            size={28}
            className="text-blue-600"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Ask a Question
          </h2>

          <p className="text-sm text-slate-500">
            Ask anything related to your uploaded PDF.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleAsk}
        className="space-y-5"
      >
        <textarea
          rows={6}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Example: What are the symptoms of heat stroke?"
          disabled={disabled}
          className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200 disabled:cursor-not-allowed disabled:bg-slate-100"
        />

        <button
          type="submit"
          disabled={disabled}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {disabled ? (
            <>
              <Loader2
                size={20}
                className="animate-spin"
              />
              Upload PDF First
            </>
          ) : (
            <>
              <Send size={20} />
              Ask Question
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default QuestionBox;
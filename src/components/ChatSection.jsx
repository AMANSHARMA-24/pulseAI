import { Send, Loader2 } from "lucide-react";

const examples = [
  "Person has a deep cut on the hand.",
  "Someone has fainted suddenly.",
  "Minor burn from hot water.",
  "Nose bleeding after a fall.",
];

function ChatSection({
  query,
  setQuery,
  handleSubmit,
  loading,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-slate-800">
        First Aid Assistant
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Describe the emergency in detail to receive AI-powered first aid
        guidance.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-5"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Describe the Emergency
          </label>

          <textarea
            rows={8}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Example: My friend has a deep cut on his hand and there is heavy bleeding..."
            className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Generating...
            </>
          ) : (
            <>
              <Send size={20} />
              Get First Aid Guidance
            </>
          )}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">
          Example Prompts
        </h3>

        <div className="flex flex-wrap gap-3">
          {examples.map((example) => (
            <button
              key={example}
              onClick={() => setQuery(example)}
              className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm text-teal-700 transition hover:bg-teal-100"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatSection;

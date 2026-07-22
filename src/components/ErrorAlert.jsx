import { AlertCircle, X } from "lucide-react";

function ErrorAlert({ message, onDismiss }) {
  if (!message) return null;

  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <AlertCircle
          size={24}
          className="mt-0.5 shrink-0 text-red-600"
        />

        <div>
          <h3 className="font-semibold text-red-700">
            Something went wrong
          </h3>

          <p className="mt-1 text-sm text-red-600">
            {message}
          </p>
        </div>
      </div>

      <button
        onClick={onDismiss}
        className="rounded-lg p-1 text-red-500 transition hover:bg-red-100 hover:text-red-700"
      >
        <X size={20} />
      </button>
    </div>
  );
}

export default ErrorAlert;
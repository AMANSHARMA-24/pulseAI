import { Loader2, HeartPulse } from "lucide-react";

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16">
      <div className="relative">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100">
          <HeartPulse
            size={38}
            className="text-teal-600"
          />
        </div>

        <Loader2
          size={90}
          className="absolute -top-[5px] -left-[5px] animate-spin text-teal-500"
        />
      </div>

      <h2 className="mt-8 text-xl font-semibold text-slate-800">
        Analyzing the Situation...
      </h2>

      <p className="mt-2 max-w-md text-center text-sm leading-6 text-slate-500">
        Our AI is reviewing the emergency details and preparing the most
        relevant first aid guidance.
      </p>

      <div className="mt-8 flex gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-teal-500"></span>
        <span
          className="h-3 w-3 animate-bounce rounded-full bg-teal-500"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="h-3 w-3 animate-bounce rounded-full bg-teal-500"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>
    </div>
  );
}

export default LoadingSpinner;

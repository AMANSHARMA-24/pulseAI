import { FileText, UploadCloud, CheckCircle2 } from "lucide-react";

function PdfUpload({
  file,
  setFile,
  uploaded,
  loading,
  handleUpload,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-red-100 p-3">
          <FileText className="text-red-600" size={28} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Upload PDF
          </h2>

          <p className="text-sm text-slate-500">
            Upload your medical or first aid PDF to start chatting.
          </p>
        </div>
      </div>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 transition hover:border-teal-500 hover:bg-teal-50">
        <UploadCloud
          size={45}
          className="mb-4 text-slate-500"
        />

        <p className="text-center text-slate-600">
          Click to choose a PDF file
        </p>

        <p className="mt-2 text-xs text-slate-400">
          Only PDF files are supported
        </p>

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      {file && (
        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="font-medium text-slate-700">
            Selected File
          </p>

          <p className="mt-1 break-all text-sm text-slate-500">
            {file.name}
          </p>
        </div>
      )}

      {uploaded && (
        <div className="mt-5 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-700">
          <CheckCircle2 size={22} />
          PDF uploaded successfully.
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="mt-6 w-full rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Uploading..." : "Upload PDF"}
      </button>
    </div>
  );
}

export default PdfUpload;
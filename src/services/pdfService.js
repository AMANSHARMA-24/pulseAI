import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


// Session ID generate/get karo
function getSessionId() {
  let sessionId = localStorage.getItem("pdf_session_id");

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem("pdf_session_id", sessionId);
  }

  return sessionId;
}


// Upload PDF
export async function uploadPdf(file) {
  const formData = new FormData();

  formData.append("pdf", file);

  // sessionId bhejna hai
  formData.append(
    "sessionId",
    getSessionId()
  );

  try {
    const response = await axios.post(
      `${API_URL}/api/pdf/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;

  } catch (error) {
    throw error;
  }
}


// Ask Question from PDF
export async function askQuestion(question) {
  try {
    const response = await axios.post(
      `${API_URL}/api/pdf/ask`,
      {
        query: question,

        // sessionId bhejna hai
        sessionId: getSessionId(),
      }
    );

    return response.data.answer;

  } catch (error) {
    throw error;
  }
}
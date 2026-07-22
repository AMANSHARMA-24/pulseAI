import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


// Upload PDF
export async function uploadPdf(file) {
  const formData = new FormData();

  formData.append("pdf", file);

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
      }
    );

    return response.data.answer;

  } catch (error) {
    throw error;
  }
}
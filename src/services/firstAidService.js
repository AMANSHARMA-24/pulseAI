import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function getFirstAidGuidance(query) {
  try {
    const response = await axios.post(
      `${API_URL}/api/chat/first-aid`,
      {
        query,
      }
    );

    return response.data.answer;

  } catch (error) {
    throw error;
  }
}
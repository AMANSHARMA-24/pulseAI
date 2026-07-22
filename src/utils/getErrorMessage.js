export function getErrorMessage(error) {
  if (error.response?.data?.error) {
    return error.response.data.error;
  }

  if (error.code === "ECONNABORTED") {
    return "Request timed out. Please try again.";
  }

  if (error.message === "Network Error") {
    return "Cannot connect to server. Please check backend.";
  }

  return (
    error.message ||
    "Something went wrong. Please try again."
  );
}
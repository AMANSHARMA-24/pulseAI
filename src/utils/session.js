export const getSessionId = () => {
  let sessionId = localStorage.getItem("pdf_session_id");

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem(
      "pdf_session_id",
      sessionId
    );
  }

  return sessionId;
};
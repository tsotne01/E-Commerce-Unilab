import { createContext, useState } from "react";

export const messageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const setMessageError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const setMessageSuccess = (msg) => {
    setSuccess(msg);
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  const value = {
    setMessageError,
    setMessageSuccess,
  };
  return (
    <messageContext.Provider value={value}>
      {children}
      {error && (
        <div className="fixed right-4 bottom-4 w-72 min-h-12 bg-red-50 border-l-8 border-red-500 text-red-700 rounded-md shadow-md p-4 flex items-center gap-3">
          <svg
            className="w-6 h-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Error</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span className="text-lg">{error}</span>
          <button
            type="button"
            onClick={() => setError("")}
            className="ml-auto text-sm bg-red-200 hover:bg-red-300 rounded-full py-1 px-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Dismiss
          </button>
        </div>
      )}
      {success && (
        <div className="fixed right-4 bottom-4 w-72 min-h-12 bg-green-50 border-l-8 border-green-500 text-green-700 rounded-md shadow-md p-4 flex items-center gap-3">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Success</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-lg">{success}</span>
          <button
            type="button"
            onClick={() => setSuccess("")}
            className="ml-auto text-sm bg-green-200 hover:bg-green-300 rounded-full py-1 px-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Dismiss
          </button>
        </div>
      )}
    </messageContext.Provider>
  );
};

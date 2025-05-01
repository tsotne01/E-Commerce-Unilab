import { createPortal } from "react-dom";

function MessageBox({ type, message }) {
  const classlist = type === "success" ? "text-green-700" : "text-red-700";
  return (
    <div className="fixed right-4 bottom-4 w-80 h-12 bg-white rounded-lg shadow-md p-4">
      <p className={`text-lg ${classlist}`}>{message}</p>
    </div>
  );
}

export default createPortal(MessageBox, document.querySelector("#modal"));

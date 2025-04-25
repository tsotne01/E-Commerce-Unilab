const Button = ({ type, children }) => {
  if (type === "primary") {
    return (
      <button
        type="button"
        className="py-4 w-full bg-black text-white rounded-md"
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
export default Button;

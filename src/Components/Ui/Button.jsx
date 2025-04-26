const Button = ({ variant, type, className, children }) => {
  if (variant === "primary") {
    return (
      <button
        type={type}
        className={`cursor-pointer py-4 w-full bg-black text-white rounded-md ${className}`}
      >
        {children}
      </button>
    );
  }
  if (variant === "continuewith") {
    return (
      <button
        type={type}
        className={`cursor-pointer bg-white border-1 text-black w-full font-bold py-2 px-4 rounded ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      className={`cursor-pointerbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;

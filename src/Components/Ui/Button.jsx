const Button = ({ variant, type = "button", className, children, onClick }) => {
  if (variant === "primary") {
    return (
      <button
        type={type}
        className={`cursor-pointer py-4 w-full bg-black text-white rounded ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  if (variant === "secondary") {
    return (
      <button
        type={type}
        className={`cursor-pointer bg-white border-1 text-black w-full satoshi py-2 px-4 rounded ${className}`}
      >
        {children}
      </button>
    );
  }
  if (variant === "continuewith") {
    return (
      <button
        type={type}
        className={`cursor-pointer bg-white border-1 text-black w-full font-bold rounded ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      className={`cursor-pointerpy-2 px-4 ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;

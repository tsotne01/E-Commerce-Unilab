const Input = ({
  icon,
  label,
  type,
  value,
  placeholder,
  className,
  onChange = () => {},
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={` flex items-center p-2 ${className}`}>
      <label htmlFor={label} className="flex gap-3">
        <img className="w-6 h-6 cursor-pointer" src={icon} alt="Input Icon" />
        <input
          id={label}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="focus:outline-none"
        />
      </label>
    </div>
  );
};

export default Input;

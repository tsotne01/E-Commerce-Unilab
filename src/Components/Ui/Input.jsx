const Input = ({
  icon,
  label,
  type,
  value,
  placeholder,
  className,
  onChange = () => {},
  ...rest
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={` flex items-center  ${className}`}>
      <label htmlFor={label} className="flex gap-3">
        {icon && (
          <img className="w-6 h-6 cursor-pointer" src={icon} alt="Input Icon" />
        )}
        <input
          id={label}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          {...rest}
        />
      </label>
    </div>
  );
};

export default Input;

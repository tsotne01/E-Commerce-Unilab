import React from "react";

const TextInput = ({
  id,
  name,
  placeholder,
  value,
  type,
  onChange,
  className,
  icon,
}) => {
  return (
    <div className="flex flex-col">
      <label className="hidden" htmlFor={id}>
        {name}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={className}
        />
        {icon && <img src={icon} alt={name} />}
      </label>
    </div>
  );
};

export default TextInput;

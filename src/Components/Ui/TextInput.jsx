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
      <label htmlFor={id}>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`${className} w-full`}
        />
        {icon && <img src={icon} alt={name} />}
      </label>
    </div>
  );
};

export default TextInput;

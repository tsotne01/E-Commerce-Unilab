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
  ...rest
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
          {...rest}
        />
        {icon && <img src={icon} alt={name} />}
      </label>
    </div>
  );
};

export default TextInput;

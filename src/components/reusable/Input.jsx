import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", placeholder = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 font-medium  mb-2" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type={type}
        id={label}
        name={label}
        className={`${className} w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600`}
        placeholder={placeholder}
        ref={ref}
        {...props}
        required
      />
    </div>
  );
});
export default Input;

import React from "react";
import { IFormField } from "../../interfaces/form-field.interface";

const FormInput: React.FC<IFormField> = ({
  label,
  name,
  placeholder,
  type,
  handleChange,
}) => {
  return (
    <div key={label} className="w-full flex flex-col mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        className="border border-gray-200 p-2"
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;

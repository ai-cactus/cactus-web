import React from "react";

interface IProps {
  loading: boolean;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const Input = ({ loading, name, type, placeholder, required }: IProps) => {
  return (
    <input
      type={type}
      required={required}
      name={name}
      id={name}
      placeholder={placeholder}
      disabled={loading}
      className="px-6 h-16 bg-[#010023]  rounded-[20px] placeholder:text-white disabled:opacity-50"
    />
  );
};

export default Input;

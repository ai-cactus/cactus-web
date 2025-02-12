import React from "react";

interface IProps {
  loading: boolean;
  name: string;
  placeholder: string;
  required: boolean;
}

const Textarea = ({ loading, name, placeholder, required }: IProps) => {
  return (
    <textarea
      required={required}
      name={name}
      id={name}
      placeholder={placeholder}
      disabled={loading}
      className="px-6 h-16 py-2 bg-[#010023]  rounded-[20px] placeholder:text-white disabled:opacity-50 min-h-[8.6875rem]"
    />
  );
};

export default Textarea;

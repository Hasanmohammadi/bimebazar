import { HTMLInputTypeAttribute } from "react";

interface InputPropsI {
  className?: string;
  placeholder?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: any) => void;
  value?: string;
}

export default function Input({
  className,
  placeholder,
  name,
  type,
  onChange,
  value,
}: InputPropsI) {
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
      />
    </>
  );
}

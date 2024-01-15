import { HTMLInputTypeAttribute } from "react";

interface InputPropsI {
  className?: string;
  placeholder?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
}

export default function Input({
  className,
  placeholder,
  name,
  type,
}: InputPropsI) {
  return (
    <>
      <input className={className} placeholder={placeholder} type={type} />
    </>
  );
}

import { HTMLInputTypeAttribute } from "react";

interface Props {
  onChange?: () => void;
  placeholder?: string;
  inputType?: string;
  type: HTMLInputTypeAttribute;
  name: string;
}

const Input = ({ name, placeholder, onChange, inputType, type }: Props) =>
  inputType === "text" ? (
    <input
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder || "title"}
      className=" placeholder-opacity-25"
    />
  ) : (
    <textarea
      name={name}
      placeholder={placeholder || "description"}
      className="min-h-[150px]"
    />
  );

export default Input;

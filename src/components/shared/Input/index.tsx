import { IInputTypes } from "../../../types/input";

const Input = ({
  value,
  name,
  placeholder,
  onChange,
  inputType,
  type,
}: IInputTypes) =>
  inputType === "text" ? (
    <input
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder || "title"}
      className=" placeholder-opacity-25"
      value={value}
    />
  ) : (
    <textarea
      name={name}
      placeholder={placeholder || "description"}
      className="min-h-[150px]"
      value={value}
    />
  );

export default Input;

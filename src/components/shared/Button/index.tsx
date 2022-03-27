import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  buttonType?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({ disabled, type, buttonType, children, onClick }: Props) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`${
      buttonType === "primary"
        ? "bg-gradient-to-r from-green-400 to-blue-500 text-black shadow-[0_15px_60px_-10px_#0ff39c7d]"
        : "border border-primary bg-transparent text-primary hover:bg-primary hover:text-black"
    }  leading-tight font-kanit duration-500 min-w-[170px] hover:px-10 py-3 px-6 rounded-xl ${disabled && 'cursor-not-allowed'}`}
  >
    {children}
  </button>
);

export default Button;

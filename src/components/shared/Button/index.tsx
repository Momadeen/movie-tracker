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
        ? "bg-primary hover:bg-secondary text-black"
        : "border border-primary bg-transparent text-primary hover:bg-primary hover:text-black"
    }  leading-tight  font-kanit duration-500 min-w-[120px]  py-2 px-4 rounded`}
  >
    {children}
  </button>
);

export default Button;

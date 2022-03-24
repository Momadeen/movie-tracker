import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button = ({ type, children, onClick }: Props) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-primary hover:bg-secondary leading-tight  font-kanit duration-500 min-w-[120px] text-black py-2 px-4 rounded"
  >
    {children}
  </button>
);

export default Button;

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => (
  <button onClick={onClick} className="bg-primary hover:bg-secondary leading-tight  font-kanit duration-500 text-white py-2 px-4 rounded">
    {children}
  </button>
);

export default Button;

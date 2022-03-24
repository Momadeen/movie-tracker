import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => (
  <button className="bg-blue-600 hover:bg-blue-700 duration-500 text-white py-2 px-4 rounded">
    {children}
  </button>
);

export default Button;

import { ReactNode } from "react";
import Header from "../Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="w-screen h-screen bg-bg">
    <div className="flex flex-col container mx-auto">
      <Header />
      {children}
    </div>
  </div>
);

export default Layout;

import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="w-screen h-screen pb-8 overflow-x-hidden bg-bg">
    <div className="flex flex-col ">{children}</div>
  </div>
);

export default Layout;

import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="grid place-items-center background-none">
      <div className="min-h-screen">{children}</div>
    </section>
  );
};

export default Layout;

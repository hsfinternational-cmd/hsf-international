import React from 'react'; 
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b"><nav className="flex gap-4"><Link to="/">Home</Link><Link to="/about">About</Link></nav></header>
      <main className="flex-grow">{children}</main>
      <footer className="p-4 border-t">© 2026 HSF International</footer>
    </div>
  );
};
export default Layout;

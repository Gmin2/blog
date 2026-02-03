import React from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navItems = [
    { label: 'about', path: '/' },
    { label: 'blog', path: '/blog' },
  ];

  return (
    <div className="h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar Section */}
      <nav className="w-full md:w-64 lg:w-72 flex-shrink-0 px-6 pt-12 md:pt-24 md:pl-16 lg:pl-24 bg-white z-10">
        <ul className="flex flex-row md:flex-col gap-6 md:gap-3 items-center md:items-start">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `
                  font-serif-italic text-[15px] transition-all duration-300 block
                  ${isActive 
                    ? 'text-gray-700 font-normal' 
                    : 'text-gray-400 hover:text-gray-600'}
                `}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Section */}
      <main className="flex-1 flex flex-col min-h-0 border-t md:border-t-0 md:border-l border-gray-100 relative">
        <div className="flex-1 overflow-y-auto px-6 py-12 md:py-24 md:pl-16 lg:pl-20 scroll-smooth">
          <div className="max-w-2xl w-full">
            {children}
          </div>
          {/* Bottom padding to ensure content doesn't hit the edge */}
          <div className="h-32"></div>
        </div>
      </main>
    </div>
  );
};

export default Layout;


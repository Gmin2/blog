import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Search as SearchIcon, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useState, useEffect } from "react";
import { Search } from "./Search";

function Item({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <li
      className={`transition-colors hover:transform-none -mx-2 ${
        isActive
          ? 'text-rurikon-800 font-medium'
          : 'text-rurikon-300 hover:text-rurikon-600'
      }`}
    >
      <Link
        to={to}
        className="inline-block w-full px-2 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-dotted focus-visible:text-rurikon-600"
        draggable={false}
      >
        {children}
      </Link>
    </li>
  );
}

export function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <nav className="mobile:mr-6 sm:mr-10 md:mr-14 w-full mobile:w-16 flex flex-col justify-between mobile:h-[calc(100vh-4rem)] mobile:sticky mobile:top-6 sm:top-10 md:top-14">
        <ul className="lowercase text-right mb-6 mobile:mb-0 flex gap-2 justify-end mobile:block">
          <Item to="/">About</Item>
          <Item to="/blog">Blogs</Item>
        </ul>

        <div className="hidden mobile:flex flex-col gap-4 items-end pb-4">
          {isBlogPost && (
            <Link 
              to="/blog" 
              className="text-rurikon-300 hover:text-rurikon-600 transition-colors p-1"
              title="Back to thoughts"
            >
              <ArrowLeft size={18} />
            </Link>
          )}
          
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-rurikon-300 hover:text-rurikon-600 transition-colors p-1"
            title="Search (Cmd+K)"
          >
            <SearchIcon size={18} />
          </button>

          <button 
            onClick={toggleTheme}
            className="text-rurikon-300 hover:text-rurikon-600 transition-colors p-1"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { blogPosts } from '../data/blogData';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Focus input when opened
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Cmd/Ctrl+K to open (handled in parent usually, but we can add listener here too if needed)
  // Handle Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredPosts = query
    ? blogPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5) // Limit to 5 results
    : [];

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0a0a0a] rounded-xl shadow-2xl ring-1 ring-black/5 dark:ring-[#262626] overflow-hidden transition-all transform duration-300 ease-out">
        <div className="flex items-center px-4 py-3 border-b border-gray-100 dark:border-[#262626]">
          <SearchIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search thoughts..."
            className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 text-lg h-8"
          />
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 rounded">ESC</span>
          </div>
        </div>

        {query && (
          <div className="max-h-[60vh] overflow-y-auto">
            {filteredPosts.length > 0 ? (
              <ul className="py-2">
                {filteredPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.id}`}
                      onClick={onClose}
                      className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-rurikon-500"
                    >
                      <div className="text-base font-medium text-gray-900 dark:text-gray-100">
                        {post.title}
                      </div>
                      {post.excerpt && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                          {post.excerpt}
                        </div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                <p className="text-sm">No results found for "{query}"</p>
              </div>
            )}
          </div>
        )}
        
        {!query && (
           <div className="px-4 py-12 text-center text-gray-400 dark:text-gray-600">
             <p className="text-sm">Type to search...</p>
           </div>
        )}
      </div>
    </div>,
    document.body
  );
}

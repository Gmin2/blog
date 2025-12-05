import { useState, useEffect } from "react";
import { Github, Sun, Moon } from "lucide-react";

interface HeaderProps {
  title: string;
  postCount: number;
}

export function Header({ title, postCount }: HeaderProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Apply theme on mount and when it changes
    applyTheme(isDark);
  }, [isDark]);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty('--color-terminal-bg', '#1a1a1a');
      root.style.setProperty('--color-terminal-fg', '#e0e0e0');
      root.style.setProperty('--color-terminal-muted', '#888888');
      root.style.setProperty('--color-terminal-border', '#333333');
      root.style.setProperty('--color-terminal-hover', '#2a2a2a');
      root.style.setProperty('--color-terminal-accent', '#ffffff');
    } else {
      root.style.setProperty('--color-terminal-bg', '#ffffff');
      root.style.setProperty('--color-terminal-fg', '#1a1a1a');
      root.style.setProperty('--color-terminal-muted', '#666666');
      root.style.setProperty('--color-terminal-border', '#e0e0e0');
      root.style.setProperty('--color-terminal-hover', '#f5f5f5');
      root.style.setProperty('--color-terminal-accent', '#000000');
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="mb-15 pb-5 border-b border-terminal-border">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Gmin2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-muted hover:text-terminal-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/Min2_gg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-muted hover:text-terminal-accent transition-colors duration-200"
            aria-label="X (Twitter)"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <button
            onClick={toggleTheme}
            className="text-terminal-muted hover:text-terminal-accent transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <p className="text-[13px] text-terminal-muted">
        {postCount} {postCount === 1 ? "post" : "posts"}
      </p>
    </header>
  );
}



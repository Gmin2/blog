import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export function CodeBlock({ children, className, inline }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const language = className?.replace('language-', '') || '';
  
  // Robustly handle children to get text content
  const codeContent = typeof children === 'string' 
    ? children 
    : Array.isArray(children) 
      ? children.join('') 
      : String(children);

  useEffect(() => {
    if (codeRef.current) {
      // console.log('Highlighting:', { language, codeContent }); // Debug log
      
      try {
        if (language && hljs.getLanguage(language)) {
          codeRef.current.innerHTML = hljs.highlight(codeContent, { language }).value;
        } else {
          const result = hljs.highlightAuto(codeContent);
          codeRef.current.innerHTML = result.value;
        }
        codeRef.current.classList.add('hljs');
      } catch (e) {
        console.error('Highlight error:', e);
        codeRef.current.textContent = codeContent; // Fallback
      }
    }
  }, [codeContent, language]);

  if (inline) {
    return (
      <code 
        className={`inline text-[0.805rem] sm:text-[13.8px] md:text-[0.92rem] bg-rurikon-50 px-1 py-0.5 rounded ${className || ''}`}
      >
        {children}
      </code>
    );
  }

  return (
    <code
      ref={codeRef}
      className={`block text-[0.805rem] sm:text-[13.8px] md:text-[0.92rem] ${className || ''}`}
    >
      {children}
    </code>
  );
}

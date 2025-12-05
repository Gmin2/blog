// This file is auto-generated from markdown files in docs/
// Do not edit manually - run 'pnpm run process-blog' to regenerate

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    "id": "getting-started-with-modern-web-development",
    "title": "Getting Started with Modern Web Development",
    "excerpt": "Explore the fundamentals of modern web development and learn how to build scalable applications with the latest technologies.",
    "content": "# Getting Started with Modern Web Development\n\nModern web development has evolved significantly over the past few years. With the introduction of new frameworks, tools, and best practices, developers now have more options than ever to build fast, scalable, and maintainable applications.\n\n## The Modern Stack\n\nToday's web development ecosystem is rich with powerful tools:\n\n- **React** for building interactive user interfaces\n- **TypeScript** for type-safe JavaScript\n- **Vite** for lightning-fast development\n- **Tailwind CSS** for utility-first styling\n\n## Best Practices\n\nWhen building modern web applications, consider these key principles:\n\n1. **Component-based architecture**: Break your UI into reusable components\n2. **Type safety**: Use TypeScript to catch errors early\n3. **Performance optimization**: Lazy load components and optimize bundle size\n4. **Accessibility**: Ensure your app is usable by everyone\n\n## Conclusion\n\nThe web development landscape continues to evolve, but focusing on fundamentals and best practices will help you build better applications regardless of the tools you choose.",
    "date": "2024-12-01",
    "author": "Alex Johnson",
    "readTime": "5 min read",
    "category": "Development",
    "tags": [
      "web development",
      "react",
      "typescript"
    ]
  },
  {
    "id": "the-art-of-clean-code",
    "title": "The Art of Clean Code",
    "excerpt": "Learn how to write maintainable, readable code that your future self and teammates will thank you for.",
    "content": "# The Art of Clean Code\n\nWriting clean code is an art that every developer should master. Clean code is not just about making your code work—it's about making it readable, maintainable, and elegant.\n\n## Why Clean Code Matters\n\nClean code has several benefits:\n\n- **Easier to understand**: Other developers (and future you) can quickly grasp what the code does\n- **Easier to maintain**: Making changes becomes less risky and time-consuming\n- **Fewer bugs**: Clear code is less prone to errors\n- **Better collaboration**: Teams work more efficiently with clean codebases\n\n## Key Principles\n\n### 1. Meaningful Names\n\nChoose descriptive names for variables, functions, and classes:\n\n```typescript\n// Bad\nconst d = new Date();\n\n// Good\nconst currentDate = new Date();\n```\n\n### 2. Small Functions\n\nKeep functions focused on a single task:\n\n```typescript\n// Each function does one thing well\nfunction validateEmail(email: string): boolean { ... }\nfunction sendEmail(to: string, subject: string): void { ... }\n```\n\n### 3. DRY Principle\n\nDon't Repeat Yourself—extract common logic into reusable functions.\n\n## Conclusion\n\nClean code is a journey, not a destination. Continuously refactor and improve your code as you learn new patterns and best practices.",
    "date": "2024-11-28",
    "author": "Sarah Chen",
    "readTime": "7 min read",
    "category": "Best Practices",
    "tags": [
      "clean code",
      "programming",
      "best practices"
    ]
  }
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

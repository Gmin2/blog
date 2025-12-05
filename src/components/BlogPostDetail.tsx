import type { BlogPost } from "../data/blogData";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export function BlogPostDetail({ post, onBack }: BlogPostDetailProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-[700px] mx-auto px-5 py-15">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[13px] text-terminal-muted mb-10 py-1.5 transition-colors duration-200 hover:text-terminal-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* Article Header */}
        <header className="mb-10 pb-5 border-b border-terminal-border">
          <h1 className="text-2xl font-semibold mb-3 leading-tight">{post.title}</h1>
          <div className="text-[13px] text-terminal-muted flex gap-4 flex-wrap">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="text-sm leading-loose blog-content">
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-xl font-semibold my-8 first:mt-0 leading-tight" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-lg font-semibold my-7 leading-tight" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-base font-semibold my-6 leading-tight" {...props} />
              ),
              p: ({ node, ...props }) => <p className="mb-4 leading-loose" {...props} />,
              ul: ({ node, ...props }) => <ul className="mb-4 pl-6 list-disc" {...props} />,
              ol: ({ node, ...props }) => <ol className="mb-4 pl-6 list-decimal" {...props} />,
              li: ({ node, ...props }) => <li className="mb-2 leading-loose" {...props} />,
              code: ({ node, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <code className={className} {...props}>
                    {children}
                  </code>
                ) : (
                  <code className="bg-terminal-hover px-1.5 py-0.5 rounded text-[13px] border border-terminal-border" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Tags */}
        <div className="mt-10 pt-5 border-t border-terminal-border">
          <div className="text-[13px] text-terminal-muted mb-2">Tags</div>
          <div className="flex gap-3 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-terminal-muted px-2 py-1 border border-terminal-border rounded transition-all duration-200 hover:text-terminal-accent hover:border-terminal-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



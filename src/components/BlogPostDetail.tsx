import type { BlogPost } from "../data/blogData";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

interface BlogPostDetailProps {
  post: BlogPost;
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <div className="text-rurikon-500">
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="font-semibold mb-7 text-rurikon-600 text-balance text-2xl" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="font-semibold mt-14 mb-7 text-rurikon-600 text-balance text-xl" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="font-semibold mt-14 mb-7 text-rurikon-600 text-balance text-lg" {...props} />
          ),
          p: ({ node, ...props }) => <p className="mt-7 leading-7" {...props} />,
          ul: ({ node, ...props }) => <ul className="mt-7 list-disc list-outside marker:text-rurikon-200 pl-5" {...props} />,
          ol: ({ node, ...props }) => <ol className="mt-7 list-decimal list-outside marker:text-rurikon-200 pl-5" {...props} />,
          li: ({ node, ...props }) => <li className="pl-1.5 leading-7" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-bold text-rurikon-600" {...props} />,
          a: ({ node, href, ...props }) => (
            <Link
              to={href || "#"}
              className="break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="pl-6 -ml-6 sm:pl-10 sm:-ml-10 md:pl-14 md:-ml-14 not-mobile:text-rurikon-400 mt-7 border-l-4 border-rurikon-200 italic"
              {...props}
            />
          ),
          pre: ({ node, ...props }) => (
            <pre className="blog-pre mt-7 whitespace-pre md:whitespace-pre-wrap" {...props} />
          ),
          code: ({ node, className, children, ...props }) => {
            // @ts-ignore
            const inline = props.inline || false;
            return (
              <CodeBlock className={className} inline={inline}>
                {children}
              </CodeBlock>
            );
          },
          img: ({ node, ...props }) => (
            <img className="rounded-lg mt-7 w-full" loading="lazy" {...props} />
          ),
          hr: ({ node, ...props }) => <hr className="my-14 w-24 border-rurikon-border" {...props} />,
        }}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
}

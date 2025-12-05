import { useState, useMemo } from "react";
import { blogPosts } from "../data/blogData";
import { Header } from "./Header";

interface BlogListProps {
  onPostClick: (postId: string) => void;
}

export function BlogList({ onPostClick }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  // Group posts by year
  const postsByYear = useMemo(() => {
    const grouped = filteredPosts.reduce((acc, post) => {
      const year = new Date(post.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    }, {} as Record<string, typeof filteredPosts>);

    // Sort years descending
    return Object.entries(grouped).sort(([a], [b]) => Number(b) - Number(a));
  }, [filteredPosts]);

  return (
    <div className="min-h-screen">
      <div className="max-w-[900px] mx-auto px-5 py-15">
        {/* Header with social links */}
        <Header title="Blog" postCount={filteredPosts.length} />

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`text-[13px] bg-transparent border px-3 py-1 rounded cursor-pointer transition-all duration-200 font-mono ${
              selectedCategory === null
                ? "text-terminal-accent/80 border-terminal-accent/40 bg-terminal-hover"
                : "text-terminal-muted/80 border-terminal-border hover:text-terminal-accent/80 hover:border-terminal-accent/30"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-[13px] bg-transparent border px-3 py-1 rounded cursor-pointer transition-all duration-200 font-mono ${
                selectedCategory === category
                  ? "text-terminal-accent/80 border-terminal-accent/40 bg-terminal-hover"
                  : "text-terminal-muted/80 border-terminal-border hover:text-terminal-accent/80 hover:border-terminal-accent/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts by Year */}
        {postsByYear.map(([year, posts]) => (
          <div key={year} className="mb-10">
            <h2 className="text-[13px] text-terminal-muted mb-4 font-medium">{year}</h2>
            <div className="space-y-0">
              {posts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => onPostClick(post.id)}
                  className="flex items-baseline py-2 border-b transition-all duration-200 gap-5 cursor-pointer border-transparent hover:bg-terminal-hover hover:border-b-terminal-border hover:px-2 hover:-mx-2"
                >
                  <time className="text-[13px] text-terminal-muted min-w-[80px] shrink-0">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="flex-1 text-sm">{post.title}</span>
                  <span className="text-xs text-terminal-muted min-w-[80px] text-right shrink-0">
                    {post.readTime}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-terminal-muted">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}



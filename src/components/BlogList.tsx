import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export function BlogList() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Format date to match new UI style (YYYY.MM.DD)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <div>
      <ul>
        {sortedPosts.map((post) => (
          <li key={post.id} className="font-medium">
            <Link 
              to={`/blog/${post.id}`}
              className="group flex gap-1 -mx-2 px-2 justify-between items-center focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-dotted focus-visible:text-rurikon-600"
              draggable={false}
            >
              <span className="block text-rurikon-500 group-hover:text-rurikon-700 group-focus-visible:text-rurikon-700 transition-colors">
                {post.title}
              </span>
              <span className="text-sm dot-leaders flex-1 text-rurikon-100 font-normal group-hover:text-rurikon-500 group-focus-visible:text-rurikon-500 transition-colors group-hover:transition-none leading-none" />
              <time className="block text-rurikon-200 tabular-nums font-normal tracking-tighter group-hover:text-rurikon-500 group-focus-visible:text-rurikon-500 transition-colors group-hover:transition-none self-start">
                {formatDate(post.date)}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

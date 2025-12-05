import { useState } from "react";
import { BlogList } from "./components/BlogList";
import { BlogPostDetail } from "./components/BlogPostDetail";
import { getBlogPostById } from "./data/blogData";

function App() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = selectedPostId ? getBlogPostById(selectedPostId) : null;

  return (
    <div className="min-h-screen">
      {selectedPost ? (
        <BlogPostDetail
          post={selectedPost}
          onBack={() => setSelectedPostId(null)}
        />
      ) : (
        <BlogList onPostClick={setSelectedPostId} />
      )}
    </div>
  );
}

export default App;


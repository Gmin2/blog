import { Routes, Route, useParams } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import { BlogList } from "./components/BlogList";
import { BlogPostDetail } from "./components/BlogPostDetail";
import { getBlogPostById } from "./data/blogData";

function App() {
  return (
    <div className="flex flex-col mobile:flex-row w-full p-6 sm:p-10 md:p-14 text-sm leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7 text-rurikon-500 antialiased">
      <div className="fixed sm:hidden h-6 sm:h-10 md:h-14 w-full top-0 left-0 z-30 pointer-events-none content-fade-out" />
      <Navbar />
      <main className="relative flex-1 max-w-2xl [contain:inline-size]">
        <div className="absolute w-full h-px bg-rurikon-border right-0 mobile:right-auto mobile:left-0 mobile:w-px mobile:h-full" />
        <article className="pl-0 pt-6 mobile:pt-0 mobile:pl-6 sm:pl-10 md:pl-14">
          <Routes>
            <Route index element={<About />} />
            <Route path="blog" element={<BlogList />} />
            <Route 
              path="blog/:id" 
              element={<BlogPostDetailWrapper />} 
            />
            <Route path="*" element={<About />} />
          </Routes>
        </article>
      </main>
    </div>
  );
}

// Wrapper component to get post from URL params
function BlogPostDetailWrapper() {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : undefined;
  
  if (!post) {
    return (
      <div className="text-gray-700">
        <p>Post not found.</p>
      </div>
    );
  }
  
  return <BlogPostDetail post={post} />;
}

export default App;

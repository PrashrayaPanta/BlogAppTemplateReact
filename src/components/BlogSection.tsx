import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // adjust your import

interface Blog {
  id: string;
  title: string;
  image: string;
  date: string;
  slug: string;
}

export default function BlogSection() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // simulate API call
    setTimeout(() => {
      // Example: fetched blogs
      setBlogs([
        {
          id: "1",
          title: "First Blog",
          image: "https://via.placeholder.com/300",
          date: "2025/07/17",
          slug: "first-blog",
        },
        {
          id: "2",
          title: "Second Blog",
          image: "https://via.placeholder.com/300",
          date: "2025/08/05",
          slug: "second-blog",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="px-2">
      <h2 className="text-3xl font-bold mb-6">Our Blog</h2>

      {loading ? (
        // Skeletons while loading
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2].map((i) => (
            <Skeleton
              key={i}
              className="p-4 border rounded-lg shadow-md h-80"
            />
          ))}
        </div>
      ) : blogs.length === 0 ? (
        // No data
        <h1 className="text-3xl text-center">No Blog Data</h1>
      ) : (
        // Blog cards
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
              <a
                href={`/blogs/${blog.slug}`}
                className="text-orange-500 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

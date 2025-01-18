import React, { useEffect } from "react";
import { getBlogs } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const GalleryComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.getBlogs);
  const navigate = useNavigate();
  const blogs = data?.data || [];

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-bold text-red-500">Error: {error}</p>
      </div>
    );
  }

  // Filter blogs that have an image
  const blogsWithImages = blogs.filter((blog) => blog.image);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-emerald-600">
        Gallery
      </h1>

      {/* Instagram-like Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogsWithImages.length > 0 ? (
          blogsWithImages.map((blog) => (
            <div
              key={blog.blogs_id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <img
                  src={`http://localhost:5000/uploads/${blog.image}`}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author Name */}
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-800">
                  {blog.author_name}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No images available in the gallery.
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryComponent;

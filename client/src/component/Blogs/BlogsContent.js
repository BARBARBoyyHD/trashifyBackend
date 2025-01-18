import React, { useEffect } from "react";
import { getBlogs } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { FaPlus } from "react-icons/fa";

const BlogsContent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.getBlogs);
  const navigate = useNavigate();
  const blogs = data?.data || [];

  const buttonBlogs = () => {
    navigate("/pages/create/blogs");
  };

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

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="flex justify-between w-full">
        <div className="flex justify-center items-center text-center">
          <h1 className="text-4xl font-bold mb-8 text-emerald-600">
            Blogs Content
          </h1>
        </div>
        <div>
          <button
            onClick={buttonBlogs}
            className="border p-4 rounded-[8px] text-white bg-emerald-600 hover:bg-emerald-500 hover:animate-bounce"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {blogs.length > 0 ? (
          blogs.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl hover:animate-bounce transition-all duration-300"
            >
              <div>
                <Link to={`/pages/blogs/${item.blogs_id}`}>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h2>
                </Link>
                <p className="text-sm text-gray-500 mb-4">
                  By: {item.author_name}
                </p>
                {item.image ? (
                  <img
                    src={`http://localhost:5000/uploads/${item.image}`}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
                    <p className="text-gray-600">No Image Available</p>
                  </div>
                )}
                <p className="text-gray-700 text-sm mb-4">{item.body}</p>
                <div className="flex justify-between text-gray-500 text-sm">
                  <p>Posted: {item.created_at}</p>
                  <p>Blog ID: {item.blogs_id}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center w-full">
            No blogs available.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogsContent;

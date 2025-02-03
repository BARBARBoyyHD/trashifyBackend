import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userBlogs } from "../../redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

const UserBlogs = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.userBlogs);
  const navigate = useNavigate();
  const blogs = data?.data || [];

  useEffect(() => {
    dispatch(userBlogs());
  }, [dispatch]);

  const handleDelete = async (blogs_id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this blog?"
      );
      if (!confirmed) return;

      const response = await axios.delete(
        `http://localhost:5000/api/deleteBlogs/${blogs_id}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert(response.data.message);
        dispatch(userBlogs()); // Refresh the blog list
      } else {
        throw new Error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert(error.response?.data?.message || "Failed to delete blog");
    }
  };

  const handleEdit = (blogs_id) => {
    navigate(`/pages/blogs/update/${blogs_id}`);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex gap-2">
        <p className="text-center text-black font-bold">
         You haven't created any blogs
        </p>
        <button
          onClick={() => navigate("/pages/create/blogs")}
          className="border p-4 rounded-[8px] text-white bg-emerald-600 hover:bg-emerald-500 hover:animate-bounce"
        >
          <FaPlus />
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">User Blogs</h1>
      <div className="mb-2">
        <button
          onClick={() => navigate("/pages/create/blogs")}
          className="border p-4 rounded-[8px] text-white bg-emerald-600 hover:bg-emerald-500 hover:animate-bounce"
        >
          <FaPlus />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="text-center text-red-500">
            Error fetching blogs: {error.message || "Something went wrong"}
          </p>
        ) : blogs.length > 0 ? (
          blogs.map((item) => (
            <div
              key={item.blogs_id}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <Link to={`/pages/blogs/${item.blogs_id}`}>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-purple-500 mb-4">
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
              </Link>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => handleEdit(item.blogs_id)}
                  className="p-2 text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(item.blogs_id)}
                  className="p-2 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center w-full">
            You haven't created any blogs.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserBlogs;

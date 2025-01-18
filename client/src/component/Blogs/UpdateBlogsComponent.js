import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarContent from "../../component/Navbar/NavbarContent";

const UpdateBlogsComponent = () => {
  const { blogs_id } = useParams();
  const navigate = useNavigate();
  console.log("blogs_id:", blogs_id); // Debug: Check blogs_id

  const [blogData, setBlogData] = useState({
    title: "",
    body: "",
    author_name: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect triggered"); // Debug: Check if useEffect runs
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/getSingleBlogs/${blogs_id}`,
          {
            withCredentials: true,
          }
        );
        console.log("get single data :", response.data); // Debug: Check API response
        setBlogData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog data:", err); // Debug: Log errors
        setError("Failed to fetch blog data");
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [blogs_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogData((prevData) => ({
          ...prevData,
          image: reader.result, // Store base64 string
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/updateBlogs/${blogs_id}`,
        blogData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert("Blog updated successfully!");
        navigate(`/pages/blogs/${blogs_id}`);
      }
    } catch (err) {
      setError("Failed to update blog");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <header className="fixed top-0 left-0">
        <NavbarContent />
      </header>

      <div className="container mx-auto p-6 mt-16">
        <h1 className="text-3xl font-bold text-center mb-8">Edit Blog</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={blogData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="author_name"
              className="block text-sm font-medium text-gray-700"
            >
              Author Name
            </label>
            <input
              type="text"
              id="author_name"
              name="author_name"
              value={blogData.author_name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Body
            </label>
            <textarea
              id="body"
              name="body"
              value={blogData.body}
              onChange={handleInputChange}
              rows="6"
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {blogData.image && (
              <div className="mt-2">
                <img
                  src={`http://localhost:5000/uploads/${blogData.image}`}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogsComponent;

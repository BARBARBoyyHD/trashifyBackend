import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBlogs } from "../../redux";
import { useNavigate } from "react-router-dom";

const CreateBlogsComponent = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.postBlogs);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    subject: "",
    body: "",
    image: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (id === "image") {
      // Update image file
      setForm((prevState) => ({
        ...prevState,
        image: files[0],
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", form.title);
    formDataToSend.append("subject", form.subject);
    formDataToSend.append("body", form.body);
    if (form.image) {
      formDataToSend.append("image", form.image);
    }

    dispatch(
      postBlogs(formDataToSend, (response) => {
        if (response === 201) {
          navigate("/pages/blogs");
        }
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create New Blog
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Author Name */}

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={form.title}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={form.subject}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter subject"
              required
            />
          </div>

          {/* Body */}
          <div>
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Body
            </label>
            <textarea
              id="body"
              value={form.body}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter the content of the blog"
              rows="4"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {loading ? "Submitting..." : "Create Blog"}
            </button>
          </div>
        </form>

        {/* Error / Success Message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {data && !error && (
          <p className="text-green-500 text-center mt-4">
            Blog created successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateBlogsComponent;

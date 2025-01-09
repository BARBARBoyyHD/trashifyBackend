import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleBlogs } from "../../redux";
import { useParams } from "react-router-dom";

const ReadSingleBlogs = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.singleBlogs);
  const {id :item_id} = useParams()

  useEffect(() => {
    if (item_id) {
      dispatch(singleBlogs(item_id));
    }
  }, [dispatch, item_id]);

  // ✅ Improved error and loading handling
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  
  // ✅ Proper condition check for empty data
  if (!data || Object.keys(data).length === 0) {
    return <p>No blog data available.</p>;
  }

  return (
    <div className="p-8">
         <h1 className="text-2xl font-bold">{data.title}</h1>
         {data.image ? (
        <img
          src={`http://localhost:5000/uploads/${data.image}`}
          alt={data.title}
          className="rounded-lg w-full"
        />
      ) : (
        <p className="mt-4 text-gray-400 italic">No image available.</p>
      )}
     
      <p className="text-gray-500">Author: {data.author_name}</p>
      <p className="mt-4">{data.body}</p>
      <p className="text-sm text-gray-400">Published on: {data.created_at}</p>

      {/* ✅ Handle null image properly */}
     
    </div>
  );
};

export default ReadSingleBlogs;

import React, { useEffect } from "react";
import UserBlogs from "../Blogs/UserBlogs";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../redux";
import LoadingSpinner from "../Loading/LoadingSpinner";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      {/* User Profile Section */}
      <section className="bg-emerald-600 p-6 rounded-lg shadow-lg mb-8">
        {/* Checking if data is an array */}
        {data && Array.isArray(data) && data.length > 0 ? (
          <div className="text-lg space-y-2 text-white">
            <p>
              <strong>Username:</strong> {data[0].username}
            </p>
            <p>
              <strong>Email:</strong> {data[0].email}
            </p>
            <p>
              <strong>Birthday:</strong> {data[0].birthday}
            </p>
          </div>
        ) : (
          <p>No profile data available.</p>
        )}
      </section>

      {/* User Blogs Section */}
      <section>
        <UserBlogs />
      </section>
    </div>
  );
};

export default UserProfile;

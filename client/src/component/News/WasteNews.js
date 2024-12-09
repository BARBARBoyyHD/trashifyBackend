import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../Loading/LoadingSpinner"; // Import the Spinner component
import { getNews } from "../../redux/"; // Import the getNews action

const WasteNews = () => {
  const dispatch = useDispatch();

  // Access the news, loading, and error state from Redux
  const { loading, error, news } = useSelector((state) => state.news);

  // Dispatch the getNews action when the component mounts
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  // If loading, show spinner
  if (loading) {
    return <LoadingSpinner />;
  }

  // If there's an error, display an error message
  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        Error fetching news: {error}
      </div>
    );
  }

  // If no news articles, display a message
  if (!Array.isArray(news) || news.length === 0) {
    return <div className="text-center mt-10">No news articles found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 bg-[#F2EED7]"
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold">{article.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              By {article.author || "Unknown"} -{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-[10px] bg-[#4C4B16] hover:bg-[#6A691F] transition-colors rounded-md"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteNews;

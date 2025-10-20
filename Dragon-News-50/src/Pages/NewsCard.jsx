import React from "react";
import { FaEye, FaShareAlt, FaRegBookmark, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    // published_date,
    thumbnail_url,
    details,
    rating,
    total_view,
    id,
    // tags,
  } = news;

  // Date format
  const date = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden mb-5">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg mb-3 hover:text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} alt={title} className="w-full" />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-700 leading-relaxed">
        {details.slice(0, 200)}...
        <Link to={`/news-details/${id}`}>
          <span className="text-blue-600 font-medium cursor-pointer ml-1">
            Read More
          </span>
        </Link>
      </div>

      {/* Footer */}
      <div className="px-4 pb-3 flex items-center justify-between text-sm text-gray-600 border-t pt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2">
          <FaEye className="text-gray-500" /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

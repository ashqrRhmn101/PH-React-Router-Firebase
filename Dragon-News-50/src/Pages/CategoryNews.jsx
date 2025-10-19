import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(id, data);

  const [categoryNews, setCategoryNews] = useState([]);
  // console.log(categoryNews);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterBreakingNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterBreakingNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      // console.log(filterNews);
      setCategoryNews(filterNews);
    }
  }, [id, data]);

  return (
    <div>
      <h1 className="font-bold mb-5">
        Dragon News Home ( {categoryNews.length} ){" "}
        <span className="text-sm text-accent">news Found</span>
      </h1>
      <div>
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;

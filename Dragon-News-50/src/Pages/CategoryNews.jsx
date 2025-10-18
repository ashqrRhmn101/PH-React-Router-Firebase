import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id,data);

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const filterNews = data.filter((news) => news.category_id == id);
    // console.log(filterNews);
    setCategoryNews(filterNews);
  }, [id, data]);

  return (
    <div>
      <h1 className="font-bold">
        Dragon News Home ( {categoryNews.length} ){" "}
        <span className="text-sm text-accent">news Found</span>
      </h1>
    </div>
  );
};

export default CategoryNews;

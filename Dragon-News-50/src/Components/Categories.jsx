import React, { use } from "react";
import { Link, NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  //   console.log(categories);

  return (
    <div>
      <h1 className="font-bold">All Categories {categories.length}</h1>
      {categories.map((category) => (
        <NavLink className='flex flex-col py-3 items-start text-center pl-10' key={category.id} to={`/category/${category.id}`}>
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

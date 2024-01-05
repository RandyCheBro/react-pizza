import React from "react";

import { categories } from "../assets/constants/categories";

function Categories({categoryId, handleChangeCategory}) {

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => handleChangeCategory(index)}
            className={categoryId === index ? "active" : ""}
            key={index}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

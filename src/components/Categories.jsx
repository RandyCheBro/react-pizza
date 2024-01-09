import React from "react";

import { categories } from "../assets/constants/categories";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

function Categories() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => dispatch(setCategoryId(index))}
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

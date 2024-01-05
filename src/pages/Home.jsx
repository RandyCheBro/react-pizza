import React from "react";
import axios from "axios";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sort, setSort] = React.useState(0);
  const filter = ["rating","-rating", "price", "-price", "title"];

  const getItems = async () => {
    try {
      const { data } = await axios.get(
        `https://e9ed366f32a5f982.mokky.dev/items?sortBy=${filter[sort]}${
          categoryId !== 0 ? `&category=${categoryId}` : ""
        }`
      );
      setItems(data);
      setIsLoading(false);
    } catch (error) {
      alert("Не удалось получить список товаров");
      console.log(error);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    getItems();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          handleChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort handleChangeSort={(i) => setSort(i)} sort={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;

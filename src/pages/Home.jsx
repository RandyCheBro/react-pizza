import React from "react";
import axios from "axios";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Cart from "./Cart";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getItems = async () => {
    try {
      const { data } = await axios.get(
        "https://e9ed366f32a5f982.mokky.dev/items"
      );
      setItems(data);
      setIsLoading(false);
    } catch (error) {
      alert("Не удалось получить список товаров");
      console.log(error);
    }
  };

  React.useEffect(() => {
    getItems();
  }, []);
  return (
      <>
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </>
  );
}

export default Home;

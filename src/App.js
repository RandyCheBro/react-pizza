import React from "react";
import axios from "axios";

import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";

import "./scss/app.scss";

function App() {
  const [items, setItems] = React.useState([]);

  const getItems = async () => {
    try {
      const {data} = await axios.get("https://e9ed366f32a5f982.mokky.dev/items");
      setItems(data)
    } catch (error) {
      alert('Не удалось получить список товаров')
      console.log(error);
    }
  };

  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

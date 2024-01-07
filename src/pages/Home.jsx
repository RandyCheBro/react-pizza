import React from "react";
import axios from "axios";

import { AppContext } from "../contexts/AppContext";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

function Home() {
  const { searchValue } = React.useContext(AppContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sort, setSort] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const filter = ["rating", "-rating", "price", "-price", "title"];
  const [dataPages, setDataPages] = React.useState({});

  console.log(dataPages);

  const getItems = async () => {
    const category = categoryId !== 0 ? `&category=${categoryId}` : "";
    const search = searchValue ? `&title=*${searchValue}` : "";
    try {
      const { data } = await axios.get(
        `https://e9ed366f32a5f982.mokky.dev/items?page=${currentPage}&limit=4&sortBy=${filter[sort]}${category}${search}`
      );
      setItems(data.items);
      setDataPages(data.meta);
      setIsLoading(false);
    } catch (error) {
      alert("Не удалось получить список товаров");
      console.log(error);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    getItems();
    /* window.scrollTo(0, 0); */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort, searchValue, currentPage]);

  const sceletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

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
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagination
        onChangePage={(number) => setCurrentPage(number)}
        dataPages={dataPages}
      />
    </div>
  );
}

export default Home;

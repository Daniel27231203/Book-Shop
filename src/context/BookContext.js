import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const createCon = createContext();
export const UseBookContext = () => useContext(createCon);

const API = "http://localhost:3000/product";
function BookContext({ children }) {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState(1);

  //! FakeDataBase && Read
  function addProduct(obj) {
    axios.post(API, obj);
  }
  function getProduct() {
    axios.get(API).then((res) => {
      setData(res.data);
    });
  }

  // ! Filter

  function booksSort(value) {
    if (value === "all") {
      getProduct();
    } else if (value === "A-Z") {
      const sortData = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setData(sortData);
    } else if (value === "Z-A") {
      const sortData = [...data].sort((a, b) => b.name.localeCompare(a.name));
      setData(sortData);
    } else if (value === "High to Low") {
      let sortData = [...data].sort((a, b) => b.price - +a.price);
      setData(sortData);
    } else if (value === "Low to High") {
      let sortData = [...data].sort((a, b) => a.price - +b.price);
      setData(sortData);
    }
  }

  //! basket

  function toBasket(id) {
    let local = JSON.parse(localStorage.getItem("basket")) || [];
    let basketId = data.filter((el) => id == el.id);
    local.push(basketId);
    localStorage.setItem("basket", JSON.stringify(local));
  }
  function getBasket() {
    let local = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(local);
  }

  // ! delete
  function deleteData(id) {
    console.log(id);
    let local = JSON.parse(localStorage.getItem("basket")) || [];
    let deleteitem = local.map((el) => el.filter((e) => e.id !== id));
    localStorage.setItem("basket", JSON.stringify(deleteitem));
    getBasket();
  }

  // ! counter
  function counterPlus(num) {
    setCount(count + 1);
  }

  function counterMin() {
    return count > 1 ? setCount(count - 1) : count;
  }

  let values = {
    addProduct,
    getProduct,
    data,
    booksSort,
    toBasket,
    getBasket,
    basket,
    deleteData,
    count,
    counterPlus,
    counterMin,
  };
  return <createCon.Provider value={values}>{children}</createCon.Provider>;
}

export default BookContext;

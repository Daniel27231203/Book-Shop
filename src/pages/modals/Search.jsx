import React, { useEffect } from "react";
import { UseBookContext } from "../../context/BookContext";
import { BsBasket3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./modals.css";

function Search({ search }) {
  let nav = useNavigate();
  const { getProduct, data } = UseBookContext();
  useEffect(() => {
    getProduct();
  }, []);
  let filtSearch = data.filter((el) => {
    return el.name.toLowerCase().includes(search.toLowerCase());
  });
  function hendlerBasket() {
    nav("/Basket");
  }

  return (
    <div id="search">
      <div className="container">
        <div className="search">
          {filtSearch.map((el) => (
            <div className="search-boxes">
              <img src={el.image} alt="" />
              <div className="search-boxes-box-basket">
                <h3>{el.price} сом</h3>
                <button onClick={hendlerBasket}>
                  <BsBasket3Fill />
                </button>
              </div>
              <h2>{el.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

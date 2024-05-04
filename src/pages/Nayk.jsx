import React from "react";
import { UseBookContext } from "../context/BookContext";
import { NavLink } from "react-router-dom";
import { BsBasket3Fill } from "react-icons/bs";
import { useEffect } from "react";

function Nayk(props) {
  const { getProduct, data, booksSort, toBasket } = UseBookContext();
  useEffect(() => {
    getProduct();
  }, []);
  let filtNayk = data.filter((el) => el.category == "Nauc");
  return (
    <div id="Nayk">
      <section id="detectiveCategory">
        <div className="container">
          <div className="detectiveCategory">
            <h1>Категории</h1>
            <div className="detective-Category-box">
              <div className="Category-Detective">
                <NavLink to="/Detective">Детектив</NavLink>
              </div>
              <div className="Category-Fantastic">
                <NavLink to="/Fantastic">Фантастика</NavLink>
              </div>
              <div className="Category-Pric">
                <NavLink to="/Pric">Приключения</NavLink>
              </div>
              <div className="Category-Nayk">
                <NavLink to="/Nayk">Научная</NavLink>
              </div>
              <div className="Category-Psiholog">
                <NavLink to="/Psiholog">Психология</NavLink>
              </div>
            </div>
            <div className="detective-block">
              <div className="detective-text-header">
                <h2 className="detective-h2">
                  <span>Главная /</span> Научная
                </h2>
                <select
                  onChange={(e) => booksSort(e.target.value)}
                  name=""
                  id=""
                >
                  <option value="all">all</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="High to Low">High to Low</option>
                  <option value="Low to High">Low to High</option>
                </select>
              </div>
              <div className="detective-block-cards">
                {filtNayk.map((el) => (
                  <div className="detective-block-card">
                    <img src={el.image} alt="" />
                    <div className="detective-block-card-basket">
                      <h3>{el.price} сом</h3>
                      <button onClick={() => toBasket(el.id)}>
                        <BsBasket3Fill />
                      </button>
                    </div>
                    <h2>{el.name}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nayk;

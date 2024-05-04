import React, { useEffect, useState } from "react";
import "./pages.css";
import TakePassword from "./TakePassword";
import BookImage1 from "../images/rptgtpxd-1396254731.avif";
import BookImage2 from "../images/BookImage2.jpg";
import BookImage3 from "../images/BookIMage3.jpeg";
import { NavLink } from "react-router-dom";
import { UseBookContext } from "../context/BookContext";
import { BsBasket3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Home({ takePass, setTakePass }) {
  const [imageState, setImageState] = useState(BookImage1);
  const { getProduct, data, booksSort, toBasket } = UseBookContext();

  let nav = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div id="home">
      <div style={{ display: takePass }}>
        <TakePassword setTakePass={setTakePass} />
      </div>
      <section id="homeImage">
        <div className="homeImage">
          <img src={imageState} alt="" />
        </div>
      </section>
      <section id="homeCategory">
        <div className="container">
          <div className="homeCategory">
            <h1>Категории</h1>
            <div className="home-Category-box">
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
          </div>
        </div>
      </section>
      <section id="homeCards">
        <div className="container">
          <div className="homeCards">
            <div className="homeCards-title">
              <h1>Возможно, Вам понравится</h1>
              <select onChange={(e) => booksSort(e.target.value)} name="" id="">
                <option value="all">all</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </div>
          <div className="homeCards-cards">
            {data.map((el) => (
              <div className="homeCards-cards-card">
                <img src={el.image} alt="" />
                <div className="homeCards-cards-card-basket">
                  <h3>{el.price} сом</h3>
                  <button
                    onClick={() => {
                      toBasket(el.id);
                    }}
                  >
                    <BsBasket3Fill />
                  </button>
                </div>
                <h2>{el.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import "./modals.css";
import { UseBookContext } from "../../context/BookContext";
import { MdDelete } from "react-icons/md";

function Basket(props) {
  const { getBasket, basket, deleteData, count, counterPlus, counterMin } =
    UseBookContext();

  useEffect(() => {
    getBasket();
  }, []);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <h4>
            <span>Главная / Корзина /</span> Оформление заказа
          </h4>
          <div className="basket-block">
            <div className="information-for-people">
              <div className="information-for-people-box">
                <h1>Контакные данные</h1>
                <input type="text" placeholder="Фио*" />
                <input type="text" placeholder="Телефон*" />
              </div>
              <div className="information-for-people-box">
                <h1>Оплата</h1>
                <select name="" id="">
                  <option value="nalichka">
                    Оплачу наличными при получении заказа
                  </option>
                  <option value="karta">
                    Оплата с банковской картой через PayBox
                  </option>
                </select>
                <button>Оплатить</button>
              </div>
            </div>
            <div className="delivery">
              <div className="delivery-first-box">
                <h1>Доставка</h1>
                <p>Выберите удобный способ доставки для этого заказа.</p>
                <select name="" id="">
                  <option value="vyzov">Самовывоз</option>
                  <option value="delivery">Доставка курьером</option>
                </select>
                <input
                  type="text"
                  placeholder="Область, город (район, село), улица, дом№, кв.№*"
                />
              </div>
              <div className="delivery-second-box">
                <div className="delivery-second-box-title">
                  <h3>Общая сумма:</h3>
                  <h2>3000$</h2>
                </div>
                <h3>Ещё не оплачено</h3>
              </div>
            </div>
            <div className="basket-cards">
              <div className="to-basket-cards">
                {basket.map((el) =>
                  el.map((e) => (
                    <div className="to-basket-card">
                      <img src={e.image} alt="" />
                      <div className="to-basket-card-title">
                        <h2>выбор {e.name}</h2>
                        <h3>{e.price} сом</h3>
                        <div className="to-basket-card-title-block-btn">
                          <button onClick={counterMin}>-</button>
                          <span>{count}</span>
                          <button
                            onClick={() => {
                              counterPlus(e.id);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="to-basket-title-delete-block">
                          <h5>Удалить</h5>
                          <button
                            onClick={() => {
                              deleteData(e.id);
                            }}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <h6>сумма: 6000 сом</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;

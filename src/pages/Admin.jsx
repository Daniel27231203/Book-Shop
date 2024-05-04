import React, { useEffect, useState } from "react";
import "./pages.css";
import { UseBookContext } from "../context/BookContext";

function Admin(props) {
  let options = [
    {
      value: "Fantactic",
      label: "фантастика",
      id: 1,
    },
    {
      value: "Detectiv",
      label: "Детектив",
      id: 2,
    },
    {
      value: "Pric",
      label: "Приключения",
      id: 3,
    },
    {
      value: "Nauc",
      label: "Научная",
      id: 4,
    },
    {
      value: "Psiholog",
      label: "Психология",
      id: 4,
    },
  ];

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [category, setCategory] = useState("");
  const { addProduct } = UseBookContext();

  function handlerSubmit() {
    let newObj = {
      image,
      name,
      price,
      des,
      category,
    };
    if (
      image.length !== 0 &&
      name.length !== 0 &&
      price.length !== 0 &&
      des.length !== 0 &&
      category.length !== 0
    ) {
      addProduct(newObj);
      setImage("");
      setName("");
      setPrice("");
      setDes("");
    } else {
      alert("заполните все поля");
    }
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin-add">
            <input
              onChange={(e) => setImage(e.target.value)}
              className="admin-input-image"
              type="text"
              placeholder="Upload photo"
              value={image}
            />
            <div className="admin-block">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Product Name"
                value={name}
              />
              <div className="admin-box">
                <select
                  name=""
                  id=""
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {options.map((el) => (
                    <option value={el.value}>{el.label}</option>
                  ))}
                </select>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="Price"
                  value={price}
                />
              </div>
              <input
                onChange={(e) => setDes(e.target.value)}
                type="text"
                placeholder="Product description..."
                value={des}
              />
              <button onClick={handlerSubmit}>save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

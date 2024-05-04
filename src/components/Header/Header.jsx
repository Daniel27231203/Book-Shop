import React, { useState } from "react";
import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { UseBookContext } from "../../context/BookContext";

function Header({ setTakePass, setSearch }) {
  let nav = useNavigate();
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <h1
              onClick={() => {
                nav("/Home");
              }}
              className="logo"
            >
              BOOKShop
            </h1>
            <div className="header-search-block">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search here"
              />
              <button
                onClick={() => {
                  nav("/Search");
                }}
              >
                <IoSearch />
              </button>
            </div>
            <div className="header-admin-block">
              <div className="header-basket-box">
                <button
                  onClick={() => {
                    nav("/Basket");
                  }}
                >
                  <SlBasket />
                </button>
                <span>корзина</span>
              </div>
              <div
                onClick={() => {
                  setTakePass("block");
                }}
                className="header-admin-box"
              >
                <button>
                  <RiAdminFill />
                </button>
                <span>Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

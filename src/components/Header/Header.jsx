import React, { useState } from "react";
import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Header({ setTakePass }) {
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
              <input type="text" placeholder="Search here" />
              <button>
                <IoSearch />
              </button>
            </div>
            <div className="header-admin-block">
              <div className="header-basket-box">
                <button>
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

import React, { createContext, useContext } from "react";

const createCon = createContext();
export const UseBookContext = () => useContext(createCon);

const API = "http://localhost:3000/product";
function BookContext({ children }) {
  let values = {};
  return <createCon.Provider value={values}>{children}</createCon.Provider>;
}

export default BookContext;

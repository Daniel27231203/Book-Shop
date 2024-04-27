import React from "react";
import "./pages.css";

function Admin(props) {
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin-add">
            <input
              className="admin-input-image"
              type="file"
              placeholder="Upload photo"
            />
            <div className="admin-block">
              <input type="text" placeholder="Product Name" />
              <div className="admin-box">
                <select name="" id="">
                  <option value="Detectiv">Детектив</option>
                  <option value="Nauk">Научная</option>
                  <option value="Fantastic">фантастика</option>
                  <option value="Pric">Приключения</option>
                </select>
                <input type="number" placeholder="Price" />
              </div>
              <input type="text" placeholder="Product description..." />
              <button>save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

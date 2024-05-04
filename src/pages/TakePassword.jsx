import React, { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import "./pages.css";
import { useNavigate } from "react-router-dom";

function TakePassword({ setTakePass }) {
  let nav = useNavigate();

  const [passwordValue, setPasswordValue] = useState("");
  const [inputStyle, setInputStyle] = useState("2px solid rgb(9, 9, 57)");
  function getAdmin() {
    if (passwordValue == "Admin") {
      nav("/Admin");
    } else {
      setInputStyle("2px solid red");
      alert("Неправильные данные");
    }
  }
  return (
    <div id="takePassword">
      <div className="container">
        <div className="takePassword">
          <div className="tekePassword-box">
            <button
              onClick={() => {
                setTakePass("none");
              }}
              className="x"
            >
              <CiCircleMinus />
            </button>
            <input
              style={{ outline: inputStyle }}
              onChange={(e) => setPasswordValue(e.target.value)}
              type="password"
              placeholder="PASSWORD"
            />
            <button onClick={getAdmin}>sing in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakePassword;

import React from "react";
import "./pages.css";
import TakePassword from "./TakePassword";

function Home({ takePass, setTakePass }) {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div style={{ display: takePass }}>
            <TakePassword setTakePass={setTakePass} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

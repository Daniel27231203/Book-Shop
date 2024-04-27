import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [takePass, setTakePass] = useState("none");

  return (
    <div className="App">
      <Header setTakePass={setTakePass} takePass={takePass} />
      <Routes>
        <Route
          path="/Home"
          element={<Home takePass={takePass} setTakePass={setTakePass} />}
        />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

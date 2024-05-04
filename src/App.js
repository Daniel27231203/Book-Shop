import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Detective from "./pages/Detective";
import Fantastic from "./pages/Fantastic";
import Pric from "./pages/Pric";
import Nayk from "./pages/Nayk";
import Psiholog from "./pages/Psiholog";
import Basket from "./pages/modals/Basket";
import Search from "./pages/modals/Search";

function App() {
  const [takePass, setTakePass] = useState("none");
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header
        setTakePass={setTakePass}
        takePass={takePass}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="/Home"
          element={<Home takePass={takePass} setTakePass={setTakePass} />}
        />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Detective" element={<Detective />} />
        <Route path="/Fantastic" element={<Fantastic />} />
        <Route path="/Pric" element={<Pric />} />
        <Route path="/Nayk" element={<Nayk />} />
        <Route path="/Psiholog" element={<Psiholog />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/Search" element={<Search search={search} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

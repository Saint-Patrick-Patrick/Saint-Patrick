import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./view/Register/Register";
import { Home } from "./view/Home/Home";
import { NavBar } from "./global/NavBar/NavBar"

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

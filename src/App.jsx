import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./view/Register/Register";
import { Home } from "./view/Home/Home";
import { NavBar } from "./global/NavBar/NavBar"
import Login from "./view/Login/Login";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./view/Register/Register";
import { Home } from "./view/Home/Home";
import { NavBar } from "./global/NavBar/NavBar"
import Login from "./view/Login/Login";
import About from "./view/About/About";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authUser } from "./features/apiPetitions";
import Main from "./view/Main/Main";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('tkn')
    if (token) {
      authUser(token, dispatch)

    }
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

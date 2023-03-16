import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./view/Register/Register";
import { Home } from "./view/Home/Home";
import { NavBar } from "./global/NavBar/NavBar"
import Login from "./view/Login/Login";
import Wallet from "./view/wallet/wallet";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authUser } from "./features/apiPetitions";

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
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </>
  );
}

export default App;

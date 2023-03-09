import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./view/Home/components/Register/Register";
import LandingPage from "./view/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

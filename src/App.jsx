import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./view/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;

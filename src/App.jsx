import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Credits from "./pages/Credits";
import CreditDetail from "./pages/CreditDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/credit/:id" element={<CreditDetail />} />
      </Routes>
    </>
  );
}

export default App;

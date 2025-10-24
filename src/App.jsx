import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import About from "./pages/About";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

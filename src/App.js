import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Netflixshow from "./pages/netflixShow/Netflixshow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/netflixshow" element={<Netflixshow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

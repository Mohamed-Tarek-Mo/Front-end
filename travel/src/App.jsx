import "./App.css";
import NavBar from "./components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;

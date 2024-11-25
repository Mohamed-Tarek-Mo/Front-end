import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CodeEditor from "./Pages/CodeEditor";
import Account from "./Pages/Account";
import Templates from "./Pages/Templates";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container  pt-3">
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/CodeEditor" element={<CodeEditor />}></Route>
          <Route path="/Account" element={<Account />}></Route>
          <Route path="/Templates" element={<Templates />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

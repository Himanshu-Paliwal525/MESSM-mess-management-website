import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import AllMess from "./components/AllMess/AllMess";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/navbar";
import MessDesc from "./components/messDesc";
function App() {
    return (
        <BrowserRouter className="App">
            <div className="messm">
                <div className="justify-between sm:justify-center flex-grow-0  sm:flex-grow">
                    <span className="text-5xl sm:text-8xl">MESS - M</span>
                </div>
                <Link to="/login">
                    <button className="app-login" type="button">
                        Login
                    </button>
                </Link>
            </div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mess" element={<AllMess />} />
                <Route path="/mess/:id" element={<MessDesc />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

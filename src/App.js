import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import messm from './Images/Mess-m.png'
import Home from "./components/Home/Home";
import AllMess from "./components/AllMess/AllMess";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/navbar";
import MessDesc from "./components/messDesc";
function App() {
    return (
        <BrowserRouter>
            <div className="flex justify-between items-center px-16 border-b-2 shadow-lg sticky top-0 bg-white z-30 w-full">
                <NavLink to='/' className="flex items-center gap-11">
                    <img src={messm} alt="" className="h-20 py-2" />
                    <span className="text-3xl mess-m">MESS - M</span>
                </NavLink>
                
                <div>
                    <Navbar/>
                </div>
                <Link to="/login">
                    <button className="bg-green-800 text-white px-4 py-1 rounded-lg text-lg hover:bg-green-700" type="button">
                        Login
                    </button>
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mess" element={<AllMess filter={'All Types of messes'} />}>
                <Route path="budget-friendly" element={<AllMess filter={'Budget Friendly'}/>}/>
                <Route path="premium-meals" element={<AllMess filter={'Premium Meals'}/>}/>
                <Route path="fast-food" element={<AllMess filter={'Fast Foods'}/>}/>
                <Route path="non-veg" element={<AllMess filter={'Non-Veg Items'}/>}/>
                </Route>
                
                <Route path="/mess/:id" element={<MessDesc />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

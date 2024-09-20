import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/userContext";

import React, { useState } from "react";
import messm from "./Images/Mess-m.png";
import Home from "./components/Home/Home";
import AllMess from "./components/AllMess/AllMess";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/navbar";
import MessDesc from "./components/messDesc";
import Search from "./components/Search/Search";
import AboutPage from "./components/About/About";
import Contact from "./components/About/Contact";
function App() {
    const [logout, setLogout] = useState(false);
    const url = useLocation();
    return (
        <UserProvider>
            <div className="flex justify-between items-center sm:px-16 px-2 border-b-2 shadow-lg sticky top-0 bg-white z-30 w-full">
                <NavLink to="/" className="sm:flex items-center gap-11">
                    <img src={messm} alt="" className="h-16  sm:h-20 py-2" />
                    <span className=" hidden sm:text-3xl mess-m md:block">
                        MESS - M
                    </span>
                </NavLink>

                <div>
                    <Navbar />
                </div>
                <Link to="/login">
                    {logout ? (
                        <button
                            className="bg-green-800 text-white px-4 py-1 rounded-lg text-base sm:text-lg hover:bg-green-700"
                            type="button"
                            onClick={() => {
                                localStorage.removeItem("auth-token");
                                setLogout(false);
                            }}
                        >
                            Logout
                        </button>
                    ) : url.pathname !== "/login" ? (
                        <button
                            className="bg-green-800 text-white px-4 py-1 rounded-lg text-base sm:text-lg hover:bg-green-700"
                            type="button"
                        >
                            Login
                        </button>
                    ) : (
                        <></>
                    )}
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route
                    path="/budget-friendly"
                    element={<AllMess filter={"Budget Friendly"} />}
                />
                <Route
                    path="/premium-meals"
                    element={<AllMess filter={"Premium Meals"} />}
                />
                <Route
                    path="/fast-food"
                    element={<AllMess filter={"Fast Foods"} />}
                />
                <Route
                    path="/non-veg"
                    element={<AllMess filter={"nonveg"} />}
                />
                <Route
                    path="/allmesses"
                    element={<AllMess filter={"All Messes"} />}
                />

                <Route path="/mess/:id" element={<MessDesc />} />
                <Route
                    path="/login"
                    element={<Login setLogout={setLogout} />}
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </UserProvider>
    );
}

export default App;

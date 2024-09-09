import React, { useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Login = ({ setLogout }) => {
    const { setUser } = useContext(UserContext);
    const [status, setStatus] = React.useState("login");
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleChange = async (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("https://messm-mess-management-website.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                localStorage.setItem("auth-token", data.token);
                console.log("token saved successfully!");
                setLogout(true);
            }
            navigate("/");
            setUser(formData.username);
        } else {
            alert("There is a problem in getting response!");
        }
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await fetch("https://messm-mess-management-website.onrender.com/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: formData.username,
                email: formData.email,
                password: formData.password,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                localStorage.setItem("auth-token", data.token);
                setLogout(true);
            }
            navigate("/");
            setUser(formData.username);
        } else {
            alert("There is a problem in getting response!");
        }
    };
    return (
        <div className="flex justify-center">
            <form
                onSubmit={status === "login" ? handleLogin : handleSignup}
                className="login flex flex-col bg-lime-100 px-11 py-12 rounded-2xl my-6 gap-10"
            >
                <div className="flex flex-col">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        value={formData.username}
                        name="username"
                        onChange={handleChange}
                        placeholder="Enter your username"
                    />
                </div>
                {status === "signup" ? (
                    <div className="flex flex-col">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                            placeholder="Enter your Email"
                        />
                    </div>
                ) : (
                    <></>
                )}
                <div className="flex flex-col">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </div>
                {status === "signup" ? (
                    <span>
                        Already have an account,
                        <span
                            className="text-red-600 pl-2 cursor-pointer font-bold hover:underline"
                            onClick={() => setStatus("login")}
                        >
                            Click Here
                        </span>
                    </span>
                ) : (
                    <span>
                        Don't have an account ?
                        <span
                            onClick={() => setStatus("signup")}
                            className="text-red-500 pl-2 cursor-pointer font-bold hover:underline"
                        >
                            Signup Here
                        </span>
                    </span>
                )}
                <button type="submit">
                    {" "}
                    {status === "signup" ? "Sign Up" : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;

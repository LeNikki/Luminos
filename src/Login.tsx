import signin from "./assets/signin.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

function SignUp() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [userExistError, setUserExistError] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        credentials
      );
      setUserExistError(false);
      // You can also log the response if needed
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
      setUserExistError(true);
    }
  };

  useEffect(() => {
    let timer: number;
    if (userExistError) {
      timer = setTimeout(() => {
        setUserExistError(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [userExistError]);

  return (
    <div className="flex bg-slate-100 h-screen  width-full justify-center items-center">
      <div className="w-3/4 h-3/4 flex shadow-xl rounded-3xl">
        <form
          onSubmit={loginUser}
          className="bg-white w-1/2 flex flex-col items-center rounded-l-3xl p-10"
        >
          <div className="w-full flex items-center mb-8 justify-between  ">
            {" "}
            <NavLink to="/">
              {" "}
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <h1 className="font-bold ml-14 flex items-center ">
              Welcome Back!
            </h1>
            <p className="text-white">Login</p>
          </div>

          <section className="m-3 w-full">
            <label htmlFor="email">Email</label>
            <input
              value={credentials.email}
              name="email"
              type="text"
              placeholder="Username"
              onChange={handleInput}
              className="border-2 w-full p-1 rounded-md"
            />
          </section>

          <section className="m-3 w-full">
            <label htmlFor="password">Password</label>
            <input
              value={credentials.password}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInput}
              className="border-2 w-full p-1 rounded-md"
            />
          </section>

          <button
            type="submit"
            className="p-2 bg-yellow-600 hover:bg-yellow-800 w-52 m-5 text-white rounded-xl"
          >
            Login
          </button>
          {userExistError ? (
            <p className="text-red-500 text-xs text-center mt-5">
              Email and password does not match
            </p>
          ) : (
            " "
          )}
        </form>
        <div className="bg-yellow-600 w-1/2  rounded-r-3xl">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-white text-center mb-10">
              New Here?
            </h1>
            <img src={signin} className="w-56" />
            <p className="text-white mt-5">Create an account instead</p>
            <NavLink
              to="/register"
              className="p-2  text-center text-white bg-yellow-800 hover:bg-yellow-800/70 w-52 m-5 rounded-xl"
            >
              Sign me up!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

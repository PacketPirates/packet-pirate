import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setErrorMessage(
        "Already used email or password is not 6 or more characters!"
      );
      console.log(e.message);
      
    }
  };
  return (
    <div
      className="bg-gradient-to-b  from-sky-500 to-blue-900 w-full
    text-white h-screen"
    >
      <div className="max-w-[700px] mx-auto p-4">
        <div>
          <h1 className="text-2xl font-bold py-2">Join Us</h1>
          <p className="pt-56">
            Already have an account?{" "}
            <Link to="/signin" className="underline">
              Sign in.
            </Link>
            {errorMessage && <div className="error text-red-500"> {errorMessage} </div>}{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 text-black"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 text-black"
              type="password"
            />
          </div>
          <button className="mx-auto text-center bg-sky-500 w-36 shadow-md shadow-sky-600 mt-4 h-10 text-lg rounded-md">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

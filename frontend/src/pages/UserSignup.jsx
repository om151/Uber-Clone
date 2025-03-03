import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-14 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-base mb-2 font-medium">What's your Name</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border-0  text-base placeholder:text-sm"
            />

            <input
              required
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border-0 text-base placeholder:text-sm"
            />
          </div>

          <h3 className="text-base mb-2 font-medium">What's your Email</h3>

          <input
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border-0 w-full text-base placeholder:text-sm"
          />

          <h3 className="text-base mb-2 font-medium">Enter Password</h3>

          <input
            required
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border-0 w-full text-base placeholder:text-sm"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a account?
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[9px] leading-tight">
        This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;

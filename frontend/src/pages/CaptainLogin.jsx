import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData , setCaptainData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({email:email, password:password})
      console.log(captainData);
      setEmail("");
      setPassword("");
    };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
    <img className="w-20 mb-3" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

    <form onSubmit={submitHandler}>

      <h3 className="text-lg mb-2 font-medium">What's your Email</h3>

      <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required type="email"
      placeholder="email@example.com"
      className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border-0 w-full text-lg placeholder:text-base"
        />



      <h3 className="text-lg mb-2 font-medium">Enter Password</h3>

      <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required type="password"
      placeholder="Enter password"
      className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border-0 w-full text-lg placeholder:text-base"
       />


      <button  className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">Login</button>

      
    </form>
    <p className="text-center">Join a fleet? <Link to='/captain-signup' className="text-blue-600">Register as a Captian</Link></p>
    </div>
    <div>
      <Link to='/login' className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base">Sign in as User</Link>
    </div>
  </div>
  );
}

export default CaptainLogin;
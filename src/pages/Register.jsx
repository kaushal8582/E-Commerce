import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();

        if(!email || !password){
            alert("Email or password is required !")
            return;
        }

        let url ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcLA6ljLUIeeJySs-Tj-rSxv8o5q0C0AA";

        try {
            let response = await fetch(url,{
                method:"POST",
                body : JSON.stringify({
                    email : email,
                    password : password,
                    returnSecureToken : true
                }),
                headers : {
                    "Content-Type": "application/json",
                }
            });
            let data = await response.json();
            if (response.ok){
                alert("Login successfully ");
                navigate("/login");
            }

        } catch (error) {
            console.log(error);
        }
    }



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <Link to={"/login"}>
            <h2>Already have an account Login</h2>
          </Link>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

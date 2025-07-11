"use client";

import { useState } from "react";
import axios from "axios";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        number,
        password,
      });

      console.log("Registered Successfully:", res.data);
      alert("Registered Successfully!");
      setName("");
      setEmail("");
      setNumber("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed");
    }
  };

  return (
    <section className="w-full h-[721px] bg-white flex items-center justify-center">
      <div className="flex flex-row gap-10 justify-between items-center">
        <div>
          <img
            src="/images/login/regiss.avif"
            alt="Registration"
            className="h-[600px] w-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-[#264ECA] h-[600px] w-[400px] flex flex-col items-center gap-8 shadow-lg border border-white-500 rounded-lg p-6"
        >
          <h1 className="text-[#264ECA] text-2xl font-bold">Registration</h1>

          <div className="w-full flex flex-col gap-4 items-center">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-500 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264ECA] "
              required
            />

            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-500 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264ECA]"
              required
            />

            <input
              type="number"
              placeholder="Enter Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border border-gray-500 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264ECA]"
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-500 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264ECA]"
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-500 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264ECA]"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-700 transition w-full"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

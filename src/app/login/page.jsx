"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login successful:", res.data);
      alert("Login Successful!");

      localStorage.setItem("token", res.data.token);

      // Redirect to dashboard or home page
      // router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials or server error.");
    }
  };

  return (
    <section className="w-full h-[721px] bg-gradient-to-r from-gray-600 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white h-[500px] w-[400px] flex flex-col items-center gap-6 shadow-lg rounded-lg p-6"
      >
        <img
          src="/images/login/login.jpg"
          alt="Login"
          className="h-28 w-28 rounded-full object-cover shadow-md"
        />

        <h1 className="text-2xl font-bold text-[#264ECA]">Login</h1>

        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder-gray-500 text-gray-600 border border-gray-400 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264ECA]"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="placeholder-gray-500 text-gray-600 border border-gray-400 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#264ECA]"
            required
          />
        </div>

        <div className="flex gap-4 w-full justify-between">
          <button
            type="submit"
            className="bg-white text-[#264ECA] text-lg w-[150px] font-bold p-3 border border-[#264ECA] cursr-pointer rounded-lg hover:bg-[#264ECA] hover:text-white transition"
          >
            Login
          </button>

          <Link href="/register">
            <button
              type="button"
              className="bg-white text-[#264ECA] text-lg w-[150px] font-bold p-3 border border-[#264ECA] cursor-pointer rounded-lg hover:bg-[#264ECA] hover:text-white transition"
            >
              Register
            </button>
          </Link>
        </div>

        <p className="text-[#264ECA] text-sm cursor-pointer hover:underline">
          Forgot Password?
        </p>
      </form>
    </section>
  );
}

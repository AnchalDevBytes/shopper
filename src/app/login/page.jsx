"use client";

import { login } from "@/lib/features/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(login({username:user.username, password:user.password}))
      router.replace("/");
    } catch (error) {
      console.error("Error in login page" +error.message);
    }
  }

  return (
    <div className="bg-fuchsia-900/50 h-screen flex  items-center justify-center">
      <div className="flex flex-col gap-10  bg-fuchsia-950 hover:bg-gradient-to-tr hover:from-fuchsia-950 hover:to-purple-950/70 p-14 rounded-xl ">
        <h1 className="text-4xl font-bold tracking-wider text-center">Login</h1>
        <form 
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
        >
          <div className="flex flex-col text-start">
            <label
              htmlFor="username"
              className="text-lg font-medium tracking-widest text-purple-500/50"
            >
              Username:
            </label>
            <input
              className="p-2 rounded-md text-black"
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter Your Username"
            />
          </div>
          <div className="flex flex-col text-start">
            <label
              htmlFor="password"
              className="text-lg font-medium tracking-widest text-purple-500/50"
            >
              Password:
            </label>
            <input
              className="p-2 rounded-md text-black"
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({...user , password:e.target.value})}
              placeholder="Enter Your Password"
            />
          </div>
          <button type="submit"
            className="px-3 py-[7px] hover:bg-sky-500/80 active:bg-sky-600/70 transition-all bg-sky-600 rounded-md text-slate-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

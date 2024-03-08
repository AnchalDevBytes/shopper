"use client";

import { login } from "@/lib/features/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const isLoading = useSelector((state)=>state.auth.loader);
  console.log(isLoading);
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(login({username:user.username, password:user.password}))
      router.replace("/");
    } catch (error) {
      console.error("Error in login page" + error.message);
    }
  }

  return (
    <div className="bg-fuchsia-900/50 h-screen flex  items-center justify-center">
      <div className="flex flex-col gap-10  bg-fuchsia-950 hover:bg-gradient-to-tr hover:from-fuchsia-950 hover:to-purple-950/70 p-14 rounded-xl shadow-black shadow">
        <h1 className="text-xl font-extrabold md:text-4xl md:font-bold text-fuchsia-400 tracking-[10px] md:tracking-wider text-center">Login</h1>
        <form 
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2 text-start">
            <label
              htmlFor="username"
              className="text-lg font-medium tracking-[3px] text-purple-300/70"
            >
              Username:
            </label>
            <input
              className="p-2 rounded-md text-purple-200 bg-fuchsia-800 outline-1 outline-fuchsia-900 outline-dotted shadow shadow-black/50"
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter Your Username"
            />
          </div>
          <div className="flex flex-col gap-2 text-start">
            <label
              htmlFor="password"
              className="text-lg font-medium tracking-[3px] text-purple-300/70"
            >
              Password:
            </label>
            <input
              className="p-2 rounded-md text-purple-200 bg-fuchsia-800 outline-1 outline-fuchsia-900 outline-dotted shadow shadow-black/50"
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({...user , password:e.target.value})}
              placeholder="Enter Your Password"
            />
          </div>
          <button disabled={isLoading} type="submit"
            className="px-3 py-[7px] hover:bg-fuchsia-500 hover:tracking-wider active:bg-fuchsia-600/70 transition-all bg-fuchsia-600 rounded-md text-slate-300"
          >
            {
              isLoading ? "...fetching user" : "Login"
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

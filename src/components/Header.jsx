"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { initializeStates, logout } from "@/lib/features/authSlice";
import { useRouter } from "next/navigation";
import { IoHeart } from "react-icons/io5";

const Header = () => {
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition < 20) {
        setVisible(true);
      } else {
        setVisible(
          previousScrollPosition > currentScrollPosition ||
            currentScrollPosition < 20
        );
      }
      setPreviousScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousScrollPosition]);

  //total product in cart
  const cartProduct = useSelector((state) => state.cart.productCart);
  const totalQuantity = cartProduct.reduce((total, product) => total + product.quantity, 0)
  
  const handleLogout = () => {
    dispatch(logout())
    router.replace("/login")
  }

  useEffect(()=>{
    dispatch(initializeStates());
  },[dispatch])

  const authStatus = useSelector(state => state.auth.authStatus)


  return (
    <header
      className={`bg-transparent py-3 px-[10vw] fixed w-full z-50 ${
        visible ? "m-0" : "-m-40"
      }`}
    >
      <ul className="flex justify-between items-center">
        <Link
          href={"/"}
          className="lg:text-xl md:text-base text-sm font-extralight cursor-pointer hover:font-normal transition-all ease-in-out duration-100 text-slate-100 tracking-wider"
        >
          Shoppy
        </Link>
        <Link
          href={"/products"}
          className="lg:text-xl md:text-base text-sm font-extralight cursor-pointer hover:font-normal transition-all ease-in-out duration-100 text-slate-100 tracking-wider"
        >
          Products
        </Link>
        <div className="flex gap-6 md:gap-10 lg:gap-20 items-center">
          <Link
            href={"/cart"}
            className="relative"
          >
            <FaShoppingCart className="lg:text-xl md:text-lg text-sm font-extralight cursor-pointer" />
            <span className="bg-red-500 h-4 w-4  absolute rounded-full -top-2 -left-4 text-slate-100 text-xs text-center">{totalQuantity}</span>
          </Link>
          <Link
            href={"/wishlist"}
          >
            <IoHeart className={`lg:text-2xl md:text-xl text-base font-extralight cursor-pointer ${router.pathname === '/wishlist' ? "text-red-500" : ""}`}/>
          </Link>
          {
            authStatus ? (
              <button className="lg:text-xl md:text-base text-sm font-extralight cursor-pointer hover:font-normal transition-all ease-in-out duration-100 text-slate-100 tracking-wider" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link className="lg:text-xl md:text-base text-sm font-extralight cursor-pointer hover:font-normal transition-all ease-in-out duration-100 text-slate-100 tracking-wider" href="/login">
                Login
              </Link>
            )
          }
        </div>
      </ul>
    </header>
  );
};

export default Header;

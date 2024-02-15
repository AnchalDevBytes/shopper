"use client";
import { Button, CartCard } from "@/components";
import { clearCart } from "@/lib/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch()
  const cartProduct = useSelector((state) => state.cart.productCart);

  const totalPrice = cartProduct.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
  const totalProduct = cartProduct.reduce((total, cartItem) => total + cartItem.quantity, 0)

  return (
    <div className="flex flex-col py-20 min-h-screen w-screen bg-purple-950/50 gap-10">
      <div className="w-[80vw] h-[85vh] mx-auto border border-neutral-300" >
        <h1 className="text-center text-3xl tracking-wide font-semibold font-montserrat mt-5 text-pink-400/50">YOUR CART</h1>
        <div className="flex flex-col py-5 h-[68vh] ">
          <div className="min-h-full overflow-y-scroll mt-3">
            {cartProduct?.length > 0 ? (
              <div className="flex flex-col gap-10">
                {cartProduct.map((cartItem) => (
                  <CartCard key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center">
                Your cart is empty
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between p-2 md:px-10 md:py-5 border-t border-neutral-300">
          <h3 className="md:text-3xl text-lg font-bold">TOTAL: ${totalPrice}</h3>
          <Button clicFun={() => dispatch(clearCart())} text={"Clear Cart"}/>
        </div>
      </div>

      {/* checkout card */}
      <div className="w-[80vw] flex justify-end mx-auto">
      <div className="bg-fuchsia-950 p-10 max-w-[20vw] flex flex-col gap-3 rounded-xl">
          <p className="text-lg flex items-center gap-2 tracking-wider text-slate-300 font-semibold">Total Product : <span className="text-xl font-bold text-white">{totalProduct}</span> </p>
          <p className="text-lg flex items-center gap-2 tracking-wider text-slate-300 font-semibold">Total cost to pay : <span className="text-xl font-bold text-white">$ {totalPrice}</span></p>
          <Button text={"CHECKOUT"}/>
      </div>
      </div>
    </div>
  );
};

export default CartPage;

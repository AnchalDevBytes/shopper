"use client";
import { Button, CartCard, ScrollToTopBtn } from "@/components";
import { clearCart } from "@/lib/features/cartSlice";
import { MdCleaningServices } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "@/utils/checkout";

const CartPage = () => {
  const dispatch = useDispatch()
  const cartProduct = useSelector((state) => state.cart.productCart);

  const totalPrice = cartProduct.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  const totalProduct = cartProduct.reduce((total, cartItem) => total + cartItem.quantity, 0);

  return (
    <div className="flex flex-col py-20 min-h-screen bg-purple-950/50 gap-10">
      <div className="w-[95vw] lg:w-[80vw] h-[85vh] mx-auto border border-neutral-300" >
        <h1 className="text-center text-2xl md:text-3xl tracking-wide font-semibold font-montserrat mt-5 text-pink-400/50">YOUR CART</h1>
        <div className="flex relative flex-col py-5 h-[68vh] ">
          <div id="cartScroll" className="min-h-full overflow-y-scroll mt-3">
            {cartProduct?.length > 0 ? (
              <>
              <div className="flex flex-col gap-10">
                {cartProduct?.map((cartItem) => (
                  <CartCard key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
              <div className="absolute bottom-8 right-8 max-w-6xl z-10 w-[80vw] flex mx-auto justify-end">
                <ScrollToTopBtn targetId="cartScroll"/>
              </div>
              </>
            ) : (
              <div className="flex items-center justify-center">
                Your cart is empty
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between p-2 md:px-10 lg:py-6 md:py-12 py-5 border-t border-neutral-300 items-center ">
          <h3 className="md:text-3xl text-lg font-bold">TOTAL: ${totalPrice}</h3>
          <Button clicFun={() => dispatch(clearCart())} text={<MdCleaningServices/>}/>
        </div>
      </div>

      {/* checkout card */}
      <div className="w-[80vw] flex justify-center md:justify-end mx-auto">
      <div className="bg-fuchsia-950 p-10 lg:max-w-[20vw] flex flex-col gap-3 rounded-xl">
          <p className="md:text-lg text-base flex items-center gap-2 tracking-wider text-slate-300 font-semibold">Total Product : <span className="md:text-xl text-lg font-bold text-white">{totalProduct}</span> </p>
          <p className="md:text-lg text-base flex items-center gap-2 tracking-wider text-slate-300 font-semibold">Total cost to pay : <span className="md:text-xl text-lg font-bold text-white">$ {totalPrice}</span></p>
          <Button clicFun={(()=>{
            checkout({
              lineItems : [{price : "price_1OlWMNSFGPYEJ6fLciHzFAhW", quantity : 1}]
            })
          })} text={"CHECKOUT"}/> 
      </div>
      </div>
    </div>
  );
};

export default CartPage;

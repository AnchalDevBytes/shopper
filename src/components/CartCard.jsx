import { decrement, increment, removeFromCart } from "@/lib/features/cartSlice";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { Button } from ".";
import Link from "next/link";

const CartCard = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex p-2 md:p-5 bg-fuchsia-950 hover:bg-gradient-to-br justify-evenly gap-4 md:justify-normal md:gap-3 lg:gap-20 hover:from-fuchsia-950 hover:to-purple-950/70 mx-2 md:mx-5 lg:mx-32 rounded-2xl">
        <div className="md:h-32 h-16 md:w-32 w-16 rounded-xl">
          <img
            className="w-full h-full rounded-xl"
            src={cartItem?.thumbnail}
            alt={cartItem?.title}
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2 max-w-[100px] md:max-w-xs lg:max-w-md">
          <Link href={`/product-detail/${cartItem?.id}`} className="font-bold text-sm hover:text-pink-400/50 cursor-pointer active:text-pink-400/70 md:text-2xl lg:text-3xl">
            {cartItem?.title}
          </Link>
          <p className="hidden md:flex text-gray-400 text-[8px] md:text-sm lg:text-base ">
            {cartItem?.description.slice(0, 30)}...
          </p>
          <p className="text-green-700 font-bold text-xs md:text-lg lg:text-xl">
            ${cartItem?.price?.toFixed(2)}
          </p>
        </div>
        <div className=" flex flex-col gap-2 md:gap-4 lg:gap-6 items-center">
          <div className="lg:px-6 lg:py-2">
            <p className="lg:text-3xl md:text-xl text-xs text-pink-600 font-bold flex flex-col md:flex-row md:gap-2 items-center">
              Subtotal:{" "}
              <span className="md:text-lg text-xs text-white">
                ${(cartItem?.price * cartItem?.quantity)?.toFixed(2)}
              </span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Button className={"px-[6px] text-center py-[2px] md:px-5 md:py-3"} text="-" clicFun={() => dispatch(decrement(cartItem.id))} />
            <span className="lg:text-lg text-xs text-white">{cartItem?.quantity}</span>
            <Button className={"px-[6px] text-center py-[2px] md:px-5 md:py-3"} text="+" clicFun={() => dispatch(increment(cartItem.id))} />
          </div>
        </div>
        <div className="flex items-center pl-2">
          <Button className={"px-[6px] py-[4px] md:px-5 md:py-3"}
            text={
              <MdDelete className="active:bg-red-300 text-xs md:text-sm lg:text-lg hover:text-red-500" />
            }
            bgClass={"bg-red-500"}
            clicFun={() => dispatch(removeFromCart(cartItem.id))}
          />
        </div>
    </div>
  );
};

export default CartCard;

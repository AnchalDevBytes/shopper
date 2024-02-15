import { decrement, increment, removeFromCart } from "@/lib/features/cartSlice";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { Button } from ".";

const CartCard = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex p-5 bg-fuchsia-950 hover:bg-gradient-to-br hover:from-fuchsia-950 hover:to-purple-950/70 gap-20 mx-32 rounded-2xl">
      <div className="h-32 w-32 rounded-xl">
        <img
          className="h-32 w-32 rounded-xl"
          src={cartItem?.thumbnail}
          alt={cartItem?.title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg md:text-3xl">{cartItem?.title}</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-md">
          {cartItem?.description.slice(0,35)}...
        </p>
        <p className="text-green-700 font-bold text-lg md:text-xl">
          ${cartItem?.price?.toFixed(2)}
        </p>
      </div>
      <div className=" flex flex-col gap-2 md:gap-6 items-center">
        <div className="px-6 py-2">
          <p className="md:text-3xl text-xl text-pink-600 font-bold flex gap-2 items-center">
            Subtotal:{" "}
            <span className="md:text-lg text-base text-white">
              ${(cartItem?.price * cartItem?.quantity)?.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Button text="-" clicFun={() => dispatch(decrement(cartItem.id))} />
          <span className="text-lg text-white">{cartItem?.quantity}</span>
          <Button text="+" clicFun={() => dispatch(increment(cartItem.id))} />
        </div>
      </div>
      <div className="flex items-center">
        <Button
          text={<MdDelete size={20} className="active:bg-red-300 hover:text-red-500"/>}
          bgClass={"bg-red-500"}
          clicFun={() => dispatch(removeFromCart(cartItem.id))}
        />
      </div>
    </div>
  );
};

export default CartCard;

import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addWishes, removeWishes } from "@/lib/features/wishlistSlice";

const WishlistBtn = ({product}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.list);

  const isInWishlist = (productId) => {
    return wishlist?.some((product) => product.id === productId);
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      dispatch(removeWishes(product?.id));
    } else {
      dispatch(addWishes(product));
    }
  };

  return (
    <button
      className="p-2 bg-gray-500/40 rounded-full"
      onClick={handleWishlist}
    >
      {isInWishlist(product?.id) ? (
        <IoHeart className="text-red-600 lg:text-3xl text-xl md:text-2xl" />
      ) : (
        <IoHeartOutline className="lg:text-3xl text-xl md:text-2xl" />
      )}
    </button>
  );
};

export default WishlistBtn;

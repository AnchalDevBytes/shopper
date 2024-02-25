import { useRouter } from "next/navigation";

const HighlightCard = ({ product }) => {
  const router = useRouter();
  return (
    <div onClick={()=>router.push(`/product-detail/${product?.id}`)} className="w-72 h-[300px] py-2 rounded-md shadow shadow-black cursor-pointer hover:scale-105 transition-all flex flex-col gap-2 bg-fuchsia-950 hover:bg-gradient-to-br hover:from-fuchsia-950 hover:to-purple-950/70 hover:backdrop-filter hover:backdrop-blur-lg p-2">
      <img
        src={product?.thumbnail}
        alt=""
        className="w-full h-32 object-cover rounded-md"
      />
      <div className="flex flex-col px-1 gap-2">
        <h2 className="text-base font-semibold text-gray-200">
          {product?.title}
        </h2>
        <p className="text-xs text-gray-400">
          {product?.description?.slice(0, 60)}...
        </p>
        <span className="text-sm font-bold text-pink-600">
          ${product?.price}
        </span>
        <div className="flex justify-between">
          <span className="text-xs text-gray-200">
            Rating:{" "}
            <b className="text-xs text-green-700 font-semibold">
              {product?.rating}
            </b>
          </span>
          <span className="ml-1 text-xs text-gray-200">
            Stock:{" "}
            <b className="text-xs text-green-700 font-semibold">
              {product?.stock}
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;

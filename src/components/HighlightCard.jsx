import Image from "next/image";
import { useRouter } from "next/navigation";

const HighlightCard = ({ product }) => {
  const router = useRouter();
  return (
    <div onClick={()=>router.push(`/product-detail/${product?.id}`)} className="md:w-72 w-64 rounded-md shadow shadow-black cursor-pointer hover:scale-105 transition-all flex flex-col gap-2 bg-fuchsia-950 hover:bg-gradient-to-br hover:from-fuchsia-950 hover:to-purple-950/70 hover:backdrop-filter hover:backdrop-blur-lg p-2">
      <div className="w-full h-24 md:h-32">
        <Image
          height={720}
          width={1280}
          src={product?.thumbnail}
          alt={product?.title}
          className="w-full h-full object-cover object-center rounded-md"
        />
      </div>
      <div className="flex flex-col px-1 gap-2 py-2">
        <h2 className="text-base font-semibold text-gray-200">
          {product?.title.slice(0,30)}
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

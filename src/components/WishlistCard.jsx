import { convertToStars } from "@/utils/starRating";
import Image from "next/image";
import Link from "next/link";

const WishlistCard = ({product}) => {
    return (
        <div className="flex p-2 md:p-5 bg-fuchsia-950 hover:bg-gradient-to-br gap-4 md:justify-normal md:gap-7 lg:gap-20 hover:from-fuchsia-950 hover:to-purple-950/70 mx-2 md:mx-5 lg:mx-32 rounded-2xl">
          <div className="md:h-32 h-16 md:w-32 w-16 rounded-xl">
            <Image
              className="rounded-xl h-full w-full object-cover"
              height={720}
              width={1280}
              src={product?.thumbnail}
              alt={product?.title}
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-2 max-w-[130px] md:max-w-xs">
            <Link href={"/products"} className="font-bold text-sm hover:text-pink-400/50 cursor-pointer active:text-pink-400/70 md:text-2xl lg:text-3xl">
              {product?.title}
            </Link>
            <p className="flex text-gray-400 text-[8px] md:text-sm lg:text-base ">
              {product?.description?.slice(0, 40)}...
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-green-700 font-bold text-xs md:text-lg lg:text-xl">
              ${product?.price?.toFixed(2)}
            </p>
            <p className="text-sm text-gray-300 font-bold flex items-center gap-1">
                  {" "}
                  <span className="hidden md:flex">Rating:{" "}</span>
                  <span className=" text-[10px] text-gray-300 flex gap-1 ">
                    {convertToStars(product?.rating)}
                  </span>
            </p>
            <p className="text-[10px] text-pink-400 font-bold">
                ({product?.stock} in stock)
            </p>
          </div>
    </div>
    );
}

export default WishlistCard;
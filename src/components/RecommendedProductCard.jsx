import Image from "next/image";
import { useRouter } from "next/navigation";


const RecommendedProductCard = ({product}) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/product-detail/${product?.id}`)} className="flex p-2 md:p-4 bg-fuchsia-950 hover:bg-gradient-to-br justify-evenly gap-4 md:justify-normal md:gap-5 hover:from-fuchsia-950 hover:to-purple-950/70 mx-2  rounded-2xl max-w-2xl md:max-w-none md:min-w-[500px]">
        <div className="md:h-32 h-16 md:w-32 w-16 rounded-xl">
          <Image
            height={720}
            width={1280}
            className="w-full h-full rounded-xl object-cover"
            src={product?.thumbnail}
            alt={product?.title}
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2 max-w-xs ">
          <div className="md:font-bold font-medium text-xs hover:text-pink-400/50 cursor-pointer active:text-pink-400/70 md:text-xl tracking-wide lg:text-2xl">
            {product?.title}
          </div>
          <p className="flex text-gray-400 text-[8px] md:text-xs lg:text-sm ">
            {product?.description?.slice(0, 50)}...
          </p>
          <p className="text-green-700 font-bold text-[10px] md:text-lg lg:text-xl">
            ${product?.price?.toFixed(2)}
          </p>
        </div>
    </div>
    );
}

export default RecommendedProductCard;
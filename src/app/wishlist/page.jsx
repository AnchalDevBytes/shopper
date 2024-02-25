"use client"
import { HighlightCard } from "@/components";
import { useSelector } from "react-redux";

const WishlistPage = () => {

    const wishlist = useSelector(state => state.list)

    return (
        <div className="w-screen min-h-screen bg-fuchsia-950/50 flex items-center pt-20 flex-col gap-12">
          <h1 className="text-4xl tracking-widest font-montserrat font-semibold">Wishlist</h1>
          <div className="flex  justify-center lg:gap-20 gap-10 lg:mx-80 flex-wrap overflow-y-scroll min-h-screen">
            {
                wishlist?.length > 0 ? (wishlist?.map((product) => (
                    <HighlightCard key={product?.id} product={product}/>
                ))) : (
                    <div className="flex items-center justify-center">
                    Your wishlist is empty
                  </div>
                )
            }
          </div>
        </div>
    );
}

export default WishlistPage;
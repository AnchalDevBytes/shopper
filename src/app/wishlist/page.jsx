"use client";
import { ScrollToTopBtn, WishlistCard } from "@/components";
import { useSelector } from "react-redux";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.list);

  return (
    <div className="w-screen min-h-screen bg-fuchsia-950/50 flex items-center py-20 flex-col gap-12">
      <h1 className="text-4xl tracking-widest font-montserrat font-semibold">
        Wishlist
      </h1>
      <div id="wishlistScroll" className="flex overflow-y-scroll scroll-hide h-[70vh]">
        {wishlist?.length > 0 ? (
        <>
          <div className="flex flex-col gap-10 ">
          {  wishlist?.map((product) => (
            <WishlistCard key={product?.id} product={product} />
          ))}
        </div>
        <div className="absolute bottom-[10vh] md:bottom-[20vh] right-[10vw] lg:right-[20vw] max-w-6xl z-10 w-[80vw] flex mx-auto justify-end">
          <ScrollToTopBtn targetId={"wishlistScroll"}/>
        </div>
        </>
        ) : (
          <div className="flex items-center justify-center">
            Your wishlist is empty
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;

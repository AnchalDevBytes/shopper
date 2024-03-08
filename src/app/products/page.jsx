"use client";
import { HighlightCard, ScrollToTopBtn } from "@/components";
import HighlightSkeletonCard from "@/components/HighlightSkeletonCard";
import { fetchAllProducts } from "@/lib/features/filterSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const filterProducts = useSelector((state) => state.filter.filteredProducts);
  const isLoading = useSelector((state) => state.filter.loading);


  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="md:w-[60vw] flex items-center flex-col h-screen py-10 md:h-[90vh]">
      <h1 className="text-4xl font-bold mb-2 tracking-[5px]">Products</h1>
      { isLoading ? (
        <div className="flex flex-wrap scroll-hide items-center justify-center gap-10 lg:gap-16 px-10 py-5 overflow-y-scroll">
          {[...Array(10)]?.map((_, i) => (
                <HighlightSkeletonCard key={`productSkeleton-${i}`}/>
              ))}
        </div>
      ) : (
        <>
          {filterProducts?.length === 0 ? (
            <div className="py-20 tracking-[5px] font-light text-pink-400 animate-pulse font-montserrat text-lg  px-14">
              <p>No products available</p>
              </div>
          ) : (
            <div
              id="filterScroll"
              className="flex flex-wrap scroll-hide items-center justify-center gap-8 md:gap-10 lg:gap-16 px-10 py-5 overflow-y-scroll"
            >
              {filterProducts?.map((product) => (
                <HighlightCard key={product?.id} product={product} />
              ))}
            </div>
          )}

          <div className="absolute bottom-8 md:bottom-24 md:right-24 lg:right-96 lg:bottom-24 max-w-6xl z-10 w-[80vw] flex mx-auto justify-end">
            <ScrollToTopBtn targetId="filterScroll" />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsPage;

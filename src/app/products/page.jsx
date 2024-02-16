"use client";
import { HighlightCard, ScrollToTopBtn } from "@/components";
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
    <div className="w-screen md:w-[60vw] flex items-center flex-col h-screen -mt-10 md:-mt-0 mb-10 md:mb-0 md:h-[80vh]">
      <h1 className="text-4xl font-bold mb-2">Products Here</h1>
      {isLoading ? (
        <div>...loading cards skeleton</div>
      ) : (
        <>
        <div
          id="filterScroll"
          className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 px-10 py-5 overflow-y-scroll"
        >
          {filterProducts.length === 0 ? (
            <div>No products available</div>
          ) : (
            filterProducts?.map((product) => (
              <HighlightCard key={product?.id} product={product} />
            ))
          )}
        </div>
        <div className="absolute bottom-8 md:bottom-24 md:right-24 lg:right-96 lg:bottom-24 max-w-6xl z-10 w-[80vw] flex mx-auto justify-end">
          <ScrollToTopBtn targetId="filterScroll" />
        </div>
        </>
      )}
    </div>
  );
};

export default ProductsPage;

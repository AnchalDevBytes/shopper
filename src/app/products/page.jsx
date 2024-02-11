"use client";
import { HighlightCard } from "@/components";
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
    <div className="w-[60vw] border-s-2 border-e-2 h-[80vh] border-blue-950 flex items-center flex-col">
      <h1 className="text-4xl font-bold mb-2">Products Here</h1>
      {
        isLoading ? (
            <div>...loading cards skeleton</div>
        ) : (
            <div className="flex flex-wrap items-center justify-center gap-16 px-10 py-5 overflow-y-scroll">
                {
                    filterProducts.length === 0 ? (
                        <div>No products available</div>
                    ) : (
                        filterProducts?.map((product) => (
                            <HighlightCard key={product?.id} product={product} />
                        ))
                    )
                }
            </div>
        )
      }
    </div>
  );
};

export default ProductsPage;

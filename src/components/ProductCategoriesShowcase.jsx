"use client"
import { getCategories } from "@/lib/features/ProductSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCategoriesShowcase = () => {

    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.filter.products);
    const allCategories = useSelector(state => state.product.categories)

    useEffect(() => {
        dispatch(getCategories(allProducts));
    },[allProducts, dispatch]);

  return (
    <section className="bg-purple-950/50 h-[70vh] w-full flex flex-col pt-16 items-center gap-10">
      <div className="flex flex-col gap-1 md:gap-2 items-center">
        <h1 className="md:text-4xl text-2xl font-bold tracking-widest font-montserrat ">
          EXPLORE
        </h1>
        <p className="md:text-3xl text-xl font-medium font-montserrat tracking-widest text-pink-600/40">
          other
        </p>
        <h1 className="md:text-5xl text-3xl font-bold tracking-widest font-montserrat ">
          CATEGORIES
        </h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start gap-3 md:max-w-[50%] md:gap-x-20 md:gap-y-10 justify-center md:mt-10">
        {allCategories?.slice(12,18)?.map((category) => (
            <div key={category} className="flex flex-row">
               <button
                className="text-xl font-bold font-montserrat text-pink-600/80 border-r-2 border-l-2 rounded-lg px-4 ">
                {category.toUpperCase()}
              </button>
            </div>
        ))}
      </div>
        <Link href={`/products`} className="text-sm font-light bg-purple-600 p-2 md:px-5 md:py-3 w-fit rounded-md transition-all hover:bg-purple-700 active:bg-purple-300">Show all</Link>
    </section>
  );
};

export default ProductCategoriesShowcase;
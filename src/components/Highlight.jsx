"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HighlightCard, ScrollDownBtn } from ".";
import { fetchAllProducts } from "@/lib/features/filterSlice";

const Highlight = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      await dispatch(fetchAllProducts());
    } catch (error) {
      console.error("Error:" + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const allProducts = useSelector((state) => state.filter.products);

  const topFiveProduct = useMemo(() => allProducts?.filter(
    (product) => product.rating > 4.5
  )?.slice(1,6),[allProducts]);

  return (
    <section className="bg-purple-950/50 min-h-screen pt-14 flex flex-col items-center gap-10 relative">
      <div className="flex flex-col gap-1 md:gap-2 items-center">
        <p className="md:text-2xl text-lg font-medium font-montserrat tracking-widest text-pink-600/40">
          Today&apos;s
        </p>
        <h1 className="md:text-5xl text-3xl font-bold tracking-widest font-montserrat ">
          HIGHLIGHT
        </h1>
      </div>
      <div className="pb-20">
      {
        loading ? (
          <div className="flex items-center justify-center text-3xl font-medium">...loading...</div>
        ) : (
          <div className="flex  justify-center lg:gap-24 gap-10 lg:mx-80 flex-wrap">
        {topFiveProduct?.map((product) =>
          <HighlightCard key={product?.id} product={product}/>
        )}
      </div>
        )
      }
      </div>
      <ScrollDownBtn/>
    </section>
  );
};

export default Highlight;

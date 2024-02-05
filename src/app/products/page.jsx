"use client"
import { HighlightCard } from "@/components";
import { getAllProducts } from "@/lib/features/ProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            await dispatch(getAllProducts())
        } catch (error) {
            console.error("Error occured in product listing " +error );
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const allProducts = useSelector(state => state.product.allProducts)
    // console.log(allProducts);


    return (
        <div className="w-[60vw] bg-slate-700 h-[80vh] flex items-center py-8 flex-col">
            <h1 className="text-4xl font-bold mb-5">Products Here</h1>
            <div className="flex flex-wrap items-center justify-center gap-16 px-10 py-10 overflow-y-scroll">
                {allProducts.products?.map((product) => (
                    <HighlightCard key={product?.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
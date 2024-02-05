"use client"
import { HighlightCard } from "@/components";
import { getCategoriesProduct } from "@/lib/features/ProductSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryProduct = () => {
    const {category} = useParams()
    // console.log(id);
    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            await dispatch(getCategoriesProduct(category))
        } catch (error) {
            console.error("Error in fetching single category data" +error);
        }
    }

    useEffect(() => {
        fetchData()
    },[category])

    const categoryProduct = useSelector(state => state.product.categoriesProduct)
    // console.log(categoryProduct);

    return (
        <div className="w-[60vw] bg-slate-700 h-[80vh] flex items-center py-8 flex-col">
            <h3 className="text-4xl font-bold mb-3 text-center">{category.toUpperCase()}</h3>
            <div className="flex flex-wrap items-center justify-center gap-12 px-10 py-10">
                {categoryProduct.products?.map((product) => (
                    <HighlightCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default CategoryProduct;
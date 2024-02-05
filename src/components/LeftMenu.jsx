"use client"
import { getCategories } from "@/lib/features/ProductSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LeftMenu = () => {
    const dispatch = useDispatch()
    const router = useRouter();

    const fetchData = async () => {
        try {
            await dispatch(getCategories())
        } catch (error) {
            console.error("Error in fetching categories" +error);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const allCategories = useSelector(state => state.product.categories)
    // console.log(allCategories);

    return (
        <div className="h-[80vh] w-[15vw] rounded-lg bg-slate-700 p-10">
            <div>
                <h3 className="text-2xl font-semibold mb-2">Category</h3>
                    <select className="flex flex-col gap-1 bg-fuchsia-950 rounded-md py-3 px-5 text-white text-sm">
                        <option className="py-2 px-5 rounded-md bg-purple-950" onClick={()=>router.push('/products')} value="all-products">
                            All Products
                        </option>
                        {allCategories?.map((category) => (
                            <option className="py-3 px-5 rounded-md bg-purple-950 text-purple-950" onClick={()=>router.push(`/products/categories/${category}`)} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
            </div>
        </div>
    );
}

export default LeftMenu;
'use client'
import { HeroSection, Highlight, FeaturedProducts, ProductCategoriesShowcase } from "@/components";
import { getHomeCategoryProducts } from "@/lib/features/homeCategorySlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {

  const data = useSelector((state) => state.homeCategory )
  const dispatch = useDispatch();
  const [homeCategoryData, setHomeCategoryData] = useState({
    smartphones : [],
    groceries : [],
    jwelleries : [],
    loading : false
  })
  
  useEffect(()=>{
    const fetchData = async () => {
      await dispatch(getHomeCategoryProducts('smartphones'));
      await dispatch(getHomeCategoryProducts('groceries'));
      await dispatch(getHomeCategoryProducts('womens-jewellery'));
    }
    fetchData()
  },[dispatch])


  useEffect(() => {
    if (data.smartphones.length > 0 && data.groceries.length > 0 && data.jwelleries.length > 0) {
      setHomeCategoryData({
        smartphones: data.smartphones,
        groceries: data.groceries,
        jwelleries: data.jwelleries,
        loading: data.isLoading,
      });
    }
  }, [data]);
  

  return (
   <div className="min-h-screen">
    <HeroSection/>
    <hr className="w-[90vw] mx-auto" />
    <Highlight />
    <hr className="w-[90vw] mx-auto" />
    <FeaturedProducts
      tinyText="Sexy"
      text="Smartphones"
      categoryData={homeCategoryData.smartphones}
      loading={homeCategoryData.loading}
    />
    <hr className="w-[90vw] mx-auto" />
    <FeaturedProducts
      tinyText="Good"
      text="Groceries"
      categoryData={homeCategoryData.groceries}
      loading={homeCategoryData.loading}
    />
     <hr className="w-[90vw] mx-auto" />
     <FeaturedProducts
      tinyText="Jaadui"
      text="Jwellery"
      categoryData={homeCategoryData.jwelleries}
      loading={homeCategoryData.loading}
     />
     <hr className="w-[90vw] mx-auto" />
     <ProductCategoriesShowcase/>
   </div>
  );
};

export default HomePage;

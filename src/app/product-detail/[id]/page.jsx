"use client";
import { Button, RecommendedProductCard, WishlistBtn } from "@/components";
import { addToCart } from "@/lib/features/cartSlice";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { convertToStars } from "@/utils/starRating";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allProducts = useSelector((state) => state.filter.products);
  const product = allProducts?.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.thumbnail);
  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts
  );

  //filter product based on category of product
  const categoryProduct = filteredProducts.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  // for dynamic images
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <div className=" flex flex-col bg-purple-950/50 min-h-screen justify-center  py-20 md:py-28 gap-12 md:gap-20 lg:gap-32 ">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20 justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-7">
          <div className="h-[250px] w-[320px] md:h-[320px] flex justify-center items-center lg:h-[320px] md:w-[500px] lg:w-[450px] rounded-xl">
            <Image
              className="rounded-xl object-cover h-full w-full"
              src={selectedImage}
              alt={product?.title}
              height={1080}
              width={1920}
            />
          </div>
          <div className="flex md:flex-col justify-evenly">
            {
              product?.images?.map((image, index) => {
                  return (
                    <Image
                      key={index}
                      height={720}
                      width={900}
                      className="md:w-14 h-10 w-10 md:h-14 object-cover border-2 rounded-full mr-2"
                      src={image}
                      alt={`PI ${index + 1}`}
                      onClick={() => handleImageClick(image)}
                    />
                  )
                })
              }
          </div>
        </div>
        <div className=" bg-fuchsia-950 bg-gradient-to-br from-fuchsia-950 to-purple-950/70 hover:bg-gradient-to-tr hover:from-fuchsia-950 hover:to-purple-950/70 lg:w-[40vw] w-[80vw] rounded-2xl py-7 px-10 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <Link
                href={"/products"}
                className="font-bold text-xl md:text-4xl hover:text-pink-400/70 transition-all active:text-pink-400/70"
              >
                {product?.title}
              </Link>
              <p className="text-gray-300 text-sm md:text-base font-extralight tracking-wider">
                {product?.description}
              </p>
              <p className="text-green-700 font-bold text-lg md:text-xl">
                ${product?.price?.toFixed(2)}
              </p>
            </div>
            <div className="flex gap-2">
              <span className=" bg-gray-200 rounded-full px-3 py-1 md:px-6 md:py-3 text-sm font-semibold text-gray-700">
                {product?.category}
              </span>
              <span className=" bg-gray-200 rounded-full px-3 py-1 md:px-6 md:py-3 text-sm font-semibold text-gray-700">
                {product?.brand}
              </span>
            </div>
            <div className=" flex flex-col gap-1">
              <p className="text-base text-gray-300 font-bold flex items-center gap-2">
                {" "}
                Rating:{" "}
                <span className=" text-sm text-gray-300 flex gap-1 ">
                  {convertToStars(product?.rating)}
                </span>
              </p>
              <p className="text-sm text-gray-300 font-bold flex gap-2 items-center">
                Stock:{" "}
                <span className="text-base text-pink-400 ">
                  ({product?.stock} in stock)
                </span>
              </p>
              <p className="text-sm font-bold text-gray-300 flex gap-2 items-center">
                Discount:{" "}
                <span className="text-base  text-red-400 animate-pulse">
                  {product?.discountPercentage} %
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <Button
              text={"AddTOCart"}
              clicFun={() => dispatch(addToCart(product))}
            />
            <WishlistBtn product={product} />
          </div>
        </div>
      </div>
      {/* recommendedProduct */}
      <div className="flex flex-col gap-10 items-start justify-center px-[10vw]">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl tracking-widest">
          Recommended Product with the same category
        </h2>
        <div className="flex flex-col md:w-[80vw] md:mx-auto py-2 md:flex-row gap-5 scroll-hide md:overflow-x-auto">
          {categoryProduct?.map((recommendedProduct) => (
            <RecommendedProductCard
              key={recommendedProduct?.id}
              product={recommendedProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;

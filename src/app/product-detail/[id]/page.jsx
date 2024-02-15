"use client";
import { Button } from "@/components";
import { addToCart } from "@/lib/features/cartSlice";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaStarHalf } from "react-icons/fa";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allProducts = useSelector((state) => state.filter.products);

  const product = allProducts.find((item) => item.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.thumbnail);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const convertToStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (rating > fullStars && rating <= fullStars + 0.5) {
      stars.push(<FaStarHalf key="half" className="text-yellow-400" />);
    } else if (rating > fullStars + 0.5) {
      stars.push(<FaStar key={fullStars} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="bg-purple-950/50 h-screen w-screen flex items-center justify-center gap-20">
      <div className="flex gap-7">
        <div className="h-[320px] w-[450px] rounded-xl">
          <img
            className="h-full w-full rounded-xl"
            src={selectedImage}
            alt={product?.title}
          />
        </div>
        <div className="flex flex-col justify-evenly">
          {product?.images?.map((image, index) => (
            <img
              key={index}
              className="w-10 h-10 md:w-14 md:h-14 object-cover border-2 rounded-full mr-2"
              src={image}
              alt={`PI ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          ))}{" "}
        </div>
      </div>
      <div className=" bg-fuchsia-950 bg-gradient-to-br from-fuchsia-950 to-purple-950/70 hover:bg-gradient-to-tr hover:from-fuchsia-950 hover:to-purple-950/70 w-[40vw] rounded-2xl py-7 px-10 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl md:text-4xl">{product?.title}</h2>
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
            <p className="text-base text-gray-300 font-bold flex items-center gap-2"> Rating: <span className=" text-sm text-gray-300 flex gap-1 ">{convertToStars(product?.rating)}</span>
            </p>
            <p className="text-sm text-gray-300 font-bold flex gap-2 items-center">
              Stock: <span className="text-base text-pink-400 ">({product?.stock} in stock)</span>
            </p>
            <p className="text-sm font-bold text-gray-300 flex gap-2 items-center">
              Discount: <span className="text-base  text-red-400 animate-pulse">{product?.discountPercentage} %</span>
            </p>
          </div>
        </div>
        <div>
          <Button text={"AddTOCart"} clicFun={() => dispatch(addToCart(product))}/>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;

"use client";
import { useEffect, useState } from "react";
import { MdCleaningServices } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, filterProducts } from "@/lib/features/filterSlice";
import { getBrands, getCategories } from "@/lib/features/ProductSlice";

const LeftMenu = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.filter.products);
  const allCategories = useSelector((state) => state.product.categories);
  const allBrands = useSelector((state) => state.product.brands);

  const [showFilters, setShowFilters] = useState(false);

  const handleFilter = (filterType, filterValue) => {
    if(filterType === 'price') {
        const splitCalc = filterValue.split("-")
        const value = {
          min : Number(splitCalc[0]),
          max : Number(splitCalc[1]),
        }
        dispatch(filterProducts({filterType, filterValue : value}));
    } else {
      dispatch(filterProducts({ filterType, filterValue }));
    }
  };

  useEffect(() => {
    dispatch(getCategories(allProducts));
    dispatch(getBrands(allProducts));
  }, [allProducts, dispatch]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="md:h-[80vh] md:w-[30vw] lg:w-[15vw] mt-20 md:mt-0 rounded-lg md:p-4 lg:p-10 flex flex-col bg-fuchsia-950 shadow-black shadow">
      {/*for small screens */}
      <div className="block md:hidden mb-4">
        <button
          onClick={toggleFilters}
          className="text-base text-center tracking-widest px-2 py-1 font-montserrat text-pink-300 "
        >
          Apply Filters
        </button>
      </div>

      {/* Filters for medium and large screens */}
      <div className={showFilters ? "block" : "hidden md:flex"}>
        <div className="md:h-[80vh] md:w-[30vw] lg:w-[15vw] w-[80vw] p-5 md:mt-0 rounded-lg md:p-10 flex flex-col gap-3">
          {/* cateories */}
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal md:gap-2">
            <h3 className="md:text-base text-sm tracking-[5px] font-normal md:font-semibold mb-2">
              Category
            </h3>
            <select
              name="category"
              className="w-36 border-fuchsia-950 bg-fuchsia-800 text-white shadow shadow-fuchsia-900 rounded-md py-2 px-5 outline-none text-sm scroll-hide"
              onChange={(e) => handleFilter("category", e.target.value)}
            >
              {allCategories.map((category) => (
                <option
                  key={category}
                  className="py-2 px-5 rounded-md bg-purple-950 text-fuchsia-300"
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* price filter */}
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal md:gap-2 mt-4">
            <h3 className="md:text-base text-sm tracking-[5px] font-normal md:font-semibold mb-2">
              Price Filter
            </h3>
            <select
              name="price"
              className="w-36 border-fuchsia-950 bg-fuchsia-800 text-white shadow shadow-fuchsia-900 rounded-md py-2 px-5 outline-none text-sm scroll-hide"
              onChange={(e) => handleFilter("price", e.target.value)}
            >
              <option value={"0-2000"}>All Prices</option>
              <option value="0-100">0 - 100</option>
              <option value="100-300">100 - 300</option>
              <option value="300-500">300 - 500</option>
              <option value="500-1000">500 - 1000</option>
              <option value="1000-2000">1000 - 2000</option>
            </select>
          </div>
          {/* rating filter */}
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal md:gap-2 mt-4">
            <h3 className="md:text-base text-sm tracking-[5px] font-normal md:font-semibold mb-2">
              Rating Filter
            </h3>
            <select
              name="rating"
              className="w-36 border-fuchsia-950 bg-fuchsia-800 text-white shadow shadow-fuchsia-900 rounded-md py-2 px-5 outline-none text-sm scroll-hide"
              onChange={(e) => handleFilter("rating", e.target.value)}
            >
              <option value="0">All Ratings</option>
              <option value="4.5">atleast 4.5</option>
              <option value="4">atleast 4</option>
              <option value="3">atleast 3</option>
              <option value="2">atleast 2</option>
            </select>
          </div>

          {/* brand filter */}
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal md:gap-2 mt-4">
            <h3 className="md:text-base text-sm tracking-[5px] font-normal md:font-semibold mb-2">
              Brand Filter
            </h3>
            <select
              name="brand"
              className="w-36 border-fuchsia-950 bg-fuchsia-800 text-white shadow shadow-fuchsia-900 rounded-md py-2 px-5 outline-none text-sm scroll-hide"
              onChange={(e) => handleFilter("brand", e.target.value)}
            >
              {allBrands.map((brand, index) => (
                <option value={brand} key={index}>
                  {brand}
                </option>
              ))}
              {/* Add options for different brands */}
            </select>
          </div>
          <button
            onClick={() => dispatch(clearFilters())}
            className="px-4 mt-5 active:bg-red-500 py-2 w-fit md:w-full rounded-md border-red-600 border-2 bg-red-800/50 text-white font-bold text-lg flex gap-2 items-center"
          >
            Clear <MdCleaningServices />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;

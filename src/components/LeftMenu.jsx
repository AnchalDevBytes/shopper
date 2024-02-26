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
    dispatch(filterProducts({ filterType, filterValue }));
  };

  useEffect(() => {
    dispatch(getCategories(allProducts));
    dispatch(getBrands(allProducts));
  }, [allProducts, dispatch]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="md:h-[80vh] md:w-[30vw] lg:w-[15vw] w-screen mt-10 md:mt-0 rounded-lg p-10 flex flex-col">
      {/*for small screens */}
      <div className="block md:hidden mb-4">
        <button onClick={toggleFilters} className="text-lg tracking-widest font-montserrat text-pink-300 ">
          Apply Filters
        </button>
      </div>
      {/* Filters for medium and large screens */}
      <div className={showFilters ? "block" : "hidden md:flex"}>
        <div className="md:h-[80vh] md:w-[30vw] lg:w-[15vw] w-[80vw] p-5 md:mt-0 rounded-lg md:p-10 flex flex-col">
          {/* cateories */}
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal md:gap-2">
            <h3 className="md:text-2xl text-sm font-normal tracking-wider md:font-semibold mb-2">
              Category
            </h3>
            <select
              name="category"
              className="flex flex-col gap-1 w-36 bg-fuchsia-950 rounded-md py-3 px-5 text-white text-sm"
            >
              {allCategories.map((category) => (
                <option
                  key={category}
                  className="py-2 px-5 rounded-md bg-purple-950"
                  value={category}
                  onClick={() => handleFilter("category", category)}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* price filter */}
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal md:gap-2 mt-4">
            <h3 className="md:text-2xl text-sm font-normal tracking-wider md:font-semibold mb-2">
              Price Filter
            </h3>
            <select
              name="price"
              className="flex flex-col gap-1 w-36 bg-fuchsia-950 rounded-md py-3 px-5 text-white text-sm"
            >
              <option
                onClick={() => handleFilter("price", { min: 0, max: 2000 })}
              >
                All Prices
              </option>
              <option
                value="0-100"
                onClick={() => handleFilter("price", { min: 0, max: 100 })}
              >
                0 - 100
              </option>
              <option
                value="100-300"
                onClick={() => handleFilter("price", { min: 100, max: 300 })}
              >
                100 - 300
              </option>
              <option
                value="300-500"
                onClick={() => handleFilter("price", { min: 300, max: 500 })}
              >
                300 - 500
              </option>
              <option
                value="500-1000"
                onClick={() => handleFilter("price", { min: 500, max: 1000 })}
              >
                500 - 1000
              </option>
              <option
                value="1000-2000"
                onClick={() => handleFilter("price", { min: 1000, max: 2000 })}
              >
                1000 - 2000
              </option>
            </select>
          </div>
          {/* rating filter */}
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal md:gap-2 mt-4">
            <h3 className="md:text-2xl text-sm font-normal tracking-wider md:font-semibold mb-2">
              Rating Filter
            </h3>
            <select
              name="rating"
              className="flex flex-col gap-1 w-36 bg-fuchsia-950 rounded-md py-3 px-5 text-white text-sm"
            >
              <option onClick={() => handleFilter("rating", 0)}>
                All Ratings
              </option>
              <option onClick={() => handleFilter("rating", 4.5)}>
                atleast 4.5
              </option>
              <option onClick={() => handleFilter("rating", 4)}>
                atleast 4
              </option>
              <option onClick={() => handleFilter("rating", 3)}>
                atleast 3
              </option>
              <option onClick={() => handleFilter("rating", 2)}>
                atleast 2
              </option>
            </select>
          </div>

          {/* brand filter */}
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal md:gap-2 mt-4">
            <h3 className="md:text-2xl text-sm font-normal tracking-wider md:font-semibold mb-2">
              Brand Filter
            </h3>
            <select
              name="brand"
              className="flex flex-col gap-1 bg-fuchsia-950 rounded-md py-3 px-5 text-white text-sm w-36"
            >
              {allBrands.map((brand) => (
                <option
                  value={brand}
                  key={brand}
                  onClick={() => handleFilter("brand", brand)}
                >
                  {brand}
                </option>
              ))}
              {/* Add options for different brands */}
            </select>
          </div>
          <button
            onClick={() => dispatch(clearFilters())}
            className="px-4 mt-5 active:bg-red-500 py-2 w-fit md:w-full rounded-md bg-red-400 text-white font-bold text-lg flex gap-2 items-center"
          >
            Clear <MdCleaningServices />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
"use client";
import { getBrands, getCategories } from "@/lib/features/ProductSlice";
import { clearFilters, filterProducts } from "@/lib/features/filterSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LeftMenu = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.filter.products)
  const allCategories = useSelector(state => state.product.categories)
  const allBrands = useSelector(state => state.product.brands);

  const handleFilter = (filterType, filterValue) => {
    dispatch(filterProducts({ filterType, filterValue }));
  };

  useEffect(()=>{
    dispatch(getCategories(allProducts))
    dispatch(getBrands(allProducts))
  },[allProducts]);

  return (
    <div className="h-[80vh] w-[15vw] rounded-lg p-10">
      {/* cateories */}
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-2xl font-semibold mb-2">Category</h3>
        <select
          name="category"
          className="flex flex-col gap-1 bg-fuchsia-950 rounded-md py-3 px-5 text-white text-sm"
        >
          {
            allCategories.map(category => (
              <option
                key={category}
                className="py-2 px-5 rounded-md bg-purple-950"
                value={category}
                onClick={()=>handleFilter('category', category)}
              >
                {category}
              </option>
            ))
          }
        </select>
      </div>

      {/* price filter */}
      <div className="flex flex-col items-start gap-2 mt-4">
        <h3 className="text-2xl font-semibold mb-2">Price Filter</h3>
        <select
          name="price"
          className="flex flex-col gap-1 bg-fuchsia-950 rounded-md py-3 px-5 text-white text-sm"
        >
          <option
            onClick={() => handleFilter("price",{min : 0, max : 2000})}
          >All Prices</option>
          <option
            value="0-100"
            onClick={() => handleFilter("price",{min : 0, max : 100})}
          >
            
            0 - 100
            
          </option>
          <option
            value="100-300"
            onClick={() => handleFilter("price",{min : 100, max : 300})}
          >
            100 - 300
          </option>
          <option
            value="300-500"
            onClick={() => handleFilter("price",{min : 300, max : 500})}
          >
            300 - 500
          </option>
          <option
            value="500-1000"
            onClick={() => handleFilter("price",{min : 500, max : 1000})}
          >
            500 - 1000
          </option>
          <option
            value="1000-2000"
            onClick={() => handleFilter("price",{min : 1000, max : 2000})}
          >
            1000 - 2000
          </option>
        </select>
      </div>

      {/* rating filter */}
      <div className="flex flex-col items-start gap-2 mt-4">
        <h3 className="text-2xl font-semibold mb-2">Rating Filter</h3>
        <select
          name="rating"
          className="flex flex-col gap-1 bg-fuchsia-950 rounded-md py-3 px-5 text-white text-sm"
        >
          <option onClick={() => handleFilter("rating", 0)}>All Ratings</option>
          <option onClick={() => handleFilter("rating", 4.5)}>atleast 4.5</option>
          <option onClick={() => handleFilter("rating", 4)}>atleast 4</option>
          <option onClick={() => handleFilter("rating", 3)}>atleast 3</option>
          <option onClick={() => handleFilter("rating", 2)}>atleast 2</option>
        </select>
      </div>

      {/* brand filter */}
      <div className="flex flex-col items-start gap-2 mt-4">
        <h3 className="text-2xl font-semibold mb-2">Brand Filter</h3>
        <select
          name="brand"
          className="flex flex-col gap-1 bg-fuchsia-950 rounded-md py-3 px-5 text-white text-sm max-w-36"
        >
          {
            allBrands.map(brand => (
              <option 
                value={brand}
                key={brand}
                onClick={()=>handleFilter("brand", brand)}
              >
                {brand}
              </option>
            ))
          }
          {/* Add options for different brands */}
        </select>
      </div>
      <button
        onClick={()=>dispatch(clearFilters())}
        className="px-4 mt-5 active:bg-red-500 py-2 rounded-md bg-red-400 text-white font-bold text-lg"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default LeftMenu;

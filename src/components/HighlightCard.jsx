const HighlightCard = ({ product }) => {
  return (
    <div className="w-64 h-[250px] rounded-md shadow-md hover:scale-105 transition-all flex flex-col gap-2 bg-gray-200 p-2">
      <img
        src={product.thumbnail}
        alt=""
        className="w-full h-24 object-cover rounded-md"
      />
      <div className="flex flex-col px-1 gap-1">
        <h2 className="text-base font-semibold text-gray-800">
          {product.title}
        </h2>
        <p className="text-xs text-gray-600">
          {product.description.slice(0, 60)}...
        </p>
        <span className="text-sm font-bold text-pink-600">
          ${product.price}
        </span>
        <div className="flex justify-between">
          <span className="text-xs text-gray-700">
            Rating:{" "}
            <b className="text-xs text-green-700 font-semibold">
              {product.rating}
            </b>
          </span>
          <span className="ml-1 text-xs text-gray-700">
            Stock:{" "}
            <b className="text-xs text-green-700 font-semibold">
              {product.stock}
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;

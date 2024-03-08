const HighlightSkeletonCard = () => {
  return (
    <div className="md:w-72 w-64 rounded-md shadow shadow-black cursor-pointer hover:scale-105 transition-all flex flex-col gap-2 bg-fuchsia-950 hover:bg-gradient-to-br hover:from-fuchsia-950 hover:to-purple-950/70 hover:backdrop-filter hover:backdrop-blur-lg p-2">
      <div className="w-full h-24 md:h-32 bg-slate-700 rounded-md"></div>
      <div className="flex flex-col px-1 gap-4 py-3">
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            <div className="h-3 bg-slate-700 rounded w-2/3"></div>
            <div className="h-2 bg-slate-700 w-1/2 rounded"></div>
            <div className="flex justify-between">
                <div className="h-3 bg-slate-700 w-16 rounded"></div>
                <div className="h-3 bg-slate-700 w-16 rounded"></div>
            </div>
      </div>
    </div>
  );
};
export default HighlightSkeletonCard;

import { HighlightCard } from ".";
import HighlightSkeletonCard from "./HighlightSkeletonCard";

const FeaturedProducts = ({ tinyText, text, categoryData, loading }) => {
  const topProducts = categoryData?.slice(1, 4);

  return (
    <section className="bg-fuchsia-950/50 min-h-screen md:min-h-[70vh] items-center justify-center py-10 lg:py-20">
      <div className="flex flex-col gap-1 md:gap-2 items-center">
        <p className="md:text-2xl text-lg font-medium font-montserrat tracking-widest text-pink-600/40">
          {tinyText}
        </p>
        <h1 className="md:text-5xl text-3xl font-bold tracking-widest font-montserrat ">
          {text}
        </h1>
      </div>
      { loading ? (
        <div className="flex flex-col gap-7 md:flex-row flex-wrap justify-evenly items-center pt-10 lg:pt-24">
          {[...Array(3)]?.map((_, i) => (
            <HighlightSkeletonCard key={`FeaturedSkeleton-${i}`} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-7 md:flex-row flex-wrap justify-evenly items-center pt-10 lg:pt-24">
          {topProducts?.map((product) => (
            <HighlightCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;

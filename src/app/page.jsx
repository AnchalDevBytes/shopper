import { HeroSection, Highlight } from "@/components";

const HomePage = () => {
  return (
   <div className="min-h-screen">
    <HeroSection/>
    <hr className="w-[90vw] mx-auto" />
    <Highlight />

   </div>
  );
};

export default HomePage;

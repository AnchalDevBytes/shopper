"use client"
import { useEffect, useRef, useState } from "react";
import { ScrollDownBtn } from ".";

const HeroSection = () => {

  const word = 'Shopper';
  const [displayText, setDisplayText] = useState('');
  const animationRef = useRef(null);

  useEffect(() => {
    const typeAndDelete = (index) => {
      const firstLetter = word[0];
      const restOfWord = word.slice(1, index);
  
      setDisplayText(firstLetter + restOfWord);
  
      if (index < word.length) {
        setTimeout(()=>{
          animationRef.current = requestAnimationFrame(() => typeAndDelete(index + 1));
        },[500])
      } else {
        setTimeout(() => deleteText(word.length - 1), 300);
      }
    };
  
    const deleteText = (index) => {
      const firstLetter = word[0];
      const restOfWord = word.slice(1, index);
  
      setDisplayText(firstLetter + restOfWord);
  
      if (index >= 1) {
        animationRef.current = requestAnimationFrame(() => deleteText(index - 1));
      } else {
        setTimeout(() => typeAndDelete(1), 400);
      }
    };
  
    setTimeout(() => typeAndDelete(1), 300);
  
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [word]);

  return (
    <section style={{
      backgroundImage : 'url(/assets/heroBg.jpg)',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat',
        backgroundAttachment : 'fixed'
      }}
      className={`h-screen`}
    >
      <div className="h-screen bg-gradient-to-br from-fuchsia-950/95 to-purple-800/20 flex flex-col items-center justify-center gap-20 lg:gap-5 backdrop-filter backdrop-blur-xl relative">
        <h1 className="lg:text-[50px] md:text-2xl text-sm md:mb-20 tracking-[10px] md:tracking-[35px] lg:tracking-[50px] font-montserrat border-b-8 leading-none text-center font-thin pb-4 md:pb-10 md:-mt-72 px-5 lg:mt-10 border-dotted border-fuchsia-700 rounded-b-[100px] z-0 welcome-animation">welcome</h1>
        <p className="lg:text-[250px] md:text-[120px] text-7xl text lg:-my-32 md:-my-28 font-extrabold z-10 tracking-widest text-fuchsia-300 to-animation">to</p>
        <h2 className="lg:text-[300px] md:text-[160px] text-[80px] px-10 w-[98%]  lg:w-[80%] flex items-center justify-center tracking-tighter md:mt-20 lg:tracking-normal md:font-bold font-poorstory leading-none pt-5 border-t-4 border-fuchsia-700 bg-gradient-to-b from-fuchsia-700/80 text-pink-600 to-transparent rounded-t-[50px] md:rounded-t-[100px] backdrop-filter backdrop-blur-md z-20 shopper-animation font-montserrat transition-all">{displayText}<span className="font-thin text-white lg:text-7xl text-5xl animate-pulse">|</span></h2>
        <ScrollDownBtn/>
      </div>
    </section>
  );
};

export default HeroSection;
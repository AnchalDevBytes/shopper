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
      className={`w-screen h-screen`}
    >
      <div className="h-screen bg-gradient-to-br from-fuchsia-950/95 to-purple-800/40 flex flex-col items-center justify-center gap-5 backdrop-filter backdrop-blur-md">
        <h1 className="text-[50px] mb-20 tracking-[50px] font-montserrat border-b-8 leading-none text-center font-thin pb-10 px-5 mt-10 border-dotted border-fuchsia-700 backdrop-filter rounded-b-[100px] z-0 welcome-animation">welcome</h1>
        <p className="text-[250px] -my-32 font-extrabold z-10 tracking-widest text-fuchsia-300 to-animation">to</p>
        <h2 className="text-[300px] px-10 w-[80%] flex items-center justify-center font-bold font-poorstory leading-none pt-5 border-t-4 border-fuchsia-700 bg-gradient-to-b from-fuchsia-700/80 text-pink-600 to-transparent rounded-t-[100px] backdrop-filter backdrop-blur-sm z-20 shopper-animation font-montserrat transition-all">{displayText}<span className="font-thin text-white text-7xl animate-pulse">|</span></h2>
        <ScrollDownBtn/>
      </div>
    </section>
  );
};

export default HeroSection;
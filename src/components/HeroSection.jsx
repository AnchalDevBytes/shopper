const HeroSection = () => {
    return (
        <section className="relative items-center flex flex-col justify-center bg-fuchsia-700/80 min-h-screen">
        <h1 className="text-[250px] font-bold text-purple-400 relative z-10 -mb-32 tracking-wide">WELCOME</h1>
        <div className="relative z-30 ">
        <img className="rounded-full" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxsZXJ5fGVufDB8fDB8fHww" alt="" />
        <h1 className="text-[150px] absolute top-14 left-1/3 font-bold text-slate-300 z-30 tracking-wide">TO</h1>
        </div>
        <h1 className="text-[250px] font-bold text-pink-600 -mt-32 relative z-30 tracking-wide transform ">
          SHOPPER
        </h1>
      </section>
    );
}

export default HeroSection;
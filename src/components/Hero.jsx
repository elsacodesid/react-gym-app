import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>It's Time to Get</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          FIT<span className="text-blue-400 font-medium">NORMOUS</span>
        </h1>
        <p className="text-sm md:text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          eos, perferendis fugit quis tenetur quas!
        </p>
        <div className="justify-center">  <button className="px-8 py-4 rounded-medium border-2 border-blue-400 border-solid bg-slate-900 blueShadow duration-100 w-80"><p>Accept & Begin</p></button></div>
      
      </div>
    </div>
  );
};

export default Hero;

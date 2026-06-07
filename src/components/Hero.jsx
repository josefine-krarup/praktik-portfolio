"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const Hero = () => {
  const text = "Frontend-developer";
  const [animatedText, setAnimatedText] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="bg-primary-brown min-h-screen relative overflow-hidden p-10 lg:p-0">
      <div className="max-w-[1100px] mx-auto pt-10 lg:pt-20">
        <h1 className="script-font text-white text-3xl mb-10 lg:text-5xl ">{animatedText}</h1>

        <div className="relative">
          <div className="absolute top-20 right-0 z-0">
            <h2 className="text-blue-100/50 text-9xl font-extrabold uppercase leading-none hidden md:block">Portfolio</h2>
            <h2 className="text-blue-100/50 text-9xl font-extrabold uppercase leading-none hidden md:block">Portfolio</h2>
            <h2 className="text-blue-100/50 text-9xl font-extrabold uppercase leading-none hidden md:block">Portfolio</h2>
          </div>

          <div className="relative z-10">
            <h2 className="absolute -top-5 lg:-top-11 lg:right-0 z-20 text-secondary-blue text-5xl lg:text-9xl font-extrabold uppercase leading-none">Portfolio</h2>
            <Image src="/assets/profilbillede.JPG" alt="Profil billede" width={500} height={600} className="object-cover pt-15 lg:pt-0" />
            <div className="absolute lg:-bottom-30 lg:-left-45 bg-background px-14 lg:px-28 py-6 shadow-lg z-20">
              <h3 className="text-2xl lg:text-4xl">Josefine von Bruhn Krarup</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

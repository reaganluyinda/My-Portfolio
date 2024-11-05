import React, { useEffect, useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import myImage from "../assets/Reagan.jpg";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      t1.from("#hero-title", {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
      })
        .from(
          "#hero-subheading",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          "#hero-text",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          "#hero-btn",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          "#hero-img",
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6 "
      ref={heroRef}
    >
      <div className="mt-16 lg:mt-20">
        <h1 id="hero-title" className=" text-4xl uppercase lg:text-7xl">
          {PROFILE.name}
        </h1>
        <h2
          id="hero-subheading"
          className=" pt-4 bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent"
        >
          {PROFILE.role}
        </h2>
      </div>
      <p
        id="hero-text"
        className=" max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl"
      >
        {PROFILE.subheading}
      </p>
      <a
        href="/Reagan's resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className=" mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
        id="hero-btn"
      >
        <span>Download Resume</span>
        <RiArrowRightUpLine />
      </a>
      <img
        src={myImage}
        alt={PROFILE.name}
        width={350}
        height="350"
        className=" rounded-3xl border border-purple-300/20 p-1"
        id="hero-img"
      />
    </section>
  );
};

export default Hero;

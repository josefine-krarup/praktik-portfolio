"use client";
import Headings from "./Headings";
import { motion } from "framer-motion";

const Banner = () => {
  const skills = ["HTML", "CSS", "JavaScript", "Astro", "Tailwind", "Next.js", "React", "API", "Responsive Design", "GitHub", "Figma", "UX/UI", "Adobe Illustrator"];

  return (
    <section className="overflow-hidden mb-10">
      <Headings title="Skills" variant="right" background="blue" />
      <motion.div
        className="flex w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-5 lg:mx-10 text-xl lg:text-3xl uppercase  whitespace-nowrap hover:text-secondary-blue">{skill}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner;

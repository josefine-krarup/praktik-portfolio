"use client";
import Link from "next/link";

const Button = ({ title, href }) => {
  return (
    <Link href={href} className="group relative overflow-hidden bg-secondary-blue w-40 py-3 m-4 text-xl inline-flex items-center justify-center transition-all duration-300 hover:scale-105">
      <span className="absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[200%]" />
      <span className="relative z-10">{title}</span>
    </Link>
  );
};

export default Button;

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = ({ image, href, title, subtitle, description, variant = "left" }) => {
  const imageLeft = variant === "left";
  const offset = imageLeft ? -120 : 120;

  return (
    <motion.div initial={{ opacity: 0, x: offset }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:gap-20 items-center max-w-[1000px] mx-auto px-8 lg:px-0 mb-15 lg:mb-0">
      <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
        {href ? (
          <Link href={href} className="inline-block">
            <Image src={image} alt="Projekt" width={400} height={300} className="rounded-lg shadow-lg  mb-2 lg:mb-30 scale-100 hover:scale-105 transition-transform duration-300" />
          </Link>
        ) : (
          <Image src={image} alt="Projekt" width={400} height={300} className="rounded-lg shadow-lg  mb-2 lg:mb-30" />
        )}
      </div>

      <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
        <h3 className="text-lg lg:text-xl font-semibold lg:font-bold mb-2">{title}</h3>

        <h4 className="lg:text-xl font-medium mb-5">{subtitle}</h4>

        <p className="lg:text-lg mb-10 lg:mb-30">{description}</p>
      </div>
    </motion.div>
  );
};

export default Projects;

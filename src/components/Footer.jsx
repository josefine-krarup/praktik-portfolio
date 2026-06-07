import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Button from "./Button";

const Footer = () => {
  return (
    <section className="bg-primary-brown py-15 lg:py-20">
      <div className="max-w-[1000px] mx-auto px-8 lg:px-0">
        <h2 className="uppercase text-secondary-blue text-6xl lg:text-8xl font-extrabold text-center mb-20">Kontakt</h2>

        <div className="block md:grid grid-cols-2 items-center">
          <div className="space-y-10">
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="flex h-12 w-12 lg:h-15 lg:w-15 items-center justify-center rounded-full bg-secondary-blue transition-all">
                <FaPhoneAlt className="text-xl lg:text-3xl text-black" />
              </div>

              <a href="tel:+4553542002" className="text-white text-lg lg:text-2xl hover:text-secondary-blue transition">
                +45 53 54 20 02
              </a>
            </div>

            <div className="flex items-center gap-4 lg:gap-8">
              <div className="flex h-12 w-12 lg:h-15 lg:w-15 items-center justify-center rounded-full bg-secondary-blue transition-all">
                <IoIosMail className="text-2xl lg:text-4xl text-black" />
              </div>

              <a href="mailto:jose.krarup@hotmail.com" className="text-white text-lg lg:text-2xl hover:text-secondary-blue transition">
                jose.krarup@hotmail.com
              </a>
            </div>
          </div>

          <div className="block md:flex flex-col items-end gap-2 mt-10 lg:mt-0">
            <Button title="GitHub" href="https://github.com/josefine-krarup/" />
            <Button title="LinkedIn" href="https://www.linkedin.com/in/josefine-krarup-0b6307219" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

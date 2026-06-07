const Headings = ({ title, variant = "left", background = "blue" }) => {
  const alignment = variant === "right" ? "text-right" : "text-left";

  const colors = background === "white" ? "bg-white" : "bg-secondary-blue";

  return (
    <div className={alignment}>
      <div className={`inline-block px-7 lg:px-10 py-2 lg:py-5 mt-15 mb-15 ${colors}`}>
        <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold uppercase">{title}</h2>
      </div>
    </div>
  );
};

export default Headings;

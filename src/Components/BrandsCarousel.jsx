import calvinKlein from "../assets/Logo/CalvinKlein.svg";
import versace from "../assets/Logo/Versace.svg";
import prada from "../assets/Logo/Prada.svg";
import gucci from "../assets/Logo/Gucci.svg";
import zara from "../assets/Logo/Zara.svg";

const BrandsCarousel = () => {
  return (
    <div className="carousel w-full min-h-[122px] bg-black flex justify-center items-center flex-wrap py-10 md:py-0 md:flex-nowrap gap-4 sm:gap-6 md:gap-9 lg:gap-[106px] ">
      <div className="carousel-item">
        <img src={versace} alt="Versace" />
      </div>
      <div className="carousel-item">
        <img src={zara} alt="Zara" />
      </div>

      <div className="carousel-item">
        <img src={gucci} alt="Gucci" />
      </div>
      <div className="carousel-item">
        <img src={prada} alt="Prada" />
      </div>
      <div className="carousel-item">
        <img src={calvinKlein} alt="Calvin Klein" />
      </div>
    </div>
  );
};

export default BrandsCarousel;

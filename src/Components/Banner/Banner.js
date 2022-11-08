import React from "react";
import banner from "../../assets/images/law.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel rounded-box">
        <div className="carousel-item w-full">
          <img className="w-full h-1/2" src={banner} alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

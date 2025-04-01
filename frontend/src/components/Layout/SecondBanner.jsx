import React from "react";
import bouquetTexture from "../../assets/bouquet_texture.jpg";
import { Link } from "react-router-dom";

const SecondBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-8 border-t border-gray-200">
      <div className="flex items-center text-9xl lg:gap-8 font-bold">
        {"BOUQUET".split("").map((letter, index) => (
          <div
            key={index}
            className="w-24 h-36 mx-1 flex items-center justify-center"
            style={{
              backgroundImage: `url(${bouquetTexture})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            {letter}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-lg text-gray-600 max-w-lg mx-auto">
        For the best and freshest flowers in town, Bouquet Bar has exactly what
        you’re looking for! Check out our wide selection of floral arrangements
        to make your next occasion memorable.
      </p>
      <Link
        to="#"
        className="mt-6 inline-block bg-primary-green text-white font-semibold text-lg py-2 px-4 rounded hover:bg-green-600 transition duration-300"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default SecondBanner;

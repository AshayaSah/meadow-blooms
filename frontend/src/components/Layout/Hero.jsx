import { Link } from "react-router-dom";
import heroImg from "../../assets/hero_banner_v3.svg";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Hero Banner"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className="container text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Bouquet <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Tread Yourself or Your Loved Ones with Our Latest Collection. <br />
            Handcrafted Custom Bouquet, Forever in Bloom!
          </p>
          <Link
            to="#"
            className="bg-primary-green text-white-950 px-6 py-2 rounded-md shadow-lg text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;

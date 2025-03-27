import React from "react";

const About = () => {
  return (
    <div className="bg-background-DEFAULT text-text-DEFAULT overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/1600/900?random=10')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center">
              About <span className="text-primary-green">Us</span>
            </h1>
            <p className="text-md md:text-lg text-white max-w-2xl text-center">
              Where passion meets craftsmanship in every exquisite detail
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/800/1000?random=11"
                alt="Handcrafted fabric bouquet"
                className="w-full h-auto"
              />
            </div>

            <div>
              <div className="mb-6">
                <span className="inline-block py-1 px-3 text-xs uppercase tracking-wider bg-primary-green text-white rounded-full">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Crafting{" "}
                <span className="text-primary-green">Timeless Beauty</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  At Bloom Haven, we specialize in crafting exquisite bouquets
                  that are handcrafted from high-quality fabrics. Our designs
                  are aesthetic and fully customizable to meet our customers'
                  unique preferences.
                </p>
                <p>
                  Whether for a special occasion or a heartfelt gift, we take
                  pride in creating fabric bouquets that last a lifetime. Each
                  piece represents our commitment to excellence and attention to
                  detail.
                </p>
                <p>
                  Founded on the principles of quality and sustainability, our
                  journey began with a simple idea: to create beauty that
                  endures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 px-6 bg-background-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block py-1 px-3 text-xs uppercase tracking-wider bg-primary-green text-white rounded-full">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-primary-green">Elegance</span> in Every
                Detail
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Our mission is to bring beauty and elegance to every moment
                  through meticulously handcrafted fabric bouquets. We are
                  committed to offering sustainable, high-quality, and
                  custom-made arrangements that reflect our customers'
                  individuality and style.
                </p>
                <p>
                  Each bouquet is carefully designed to ensure timeless charm
                  and sophistication. We believe in creating not just products,
                  but memories that last forever.
                </p>
                <p>
                  Through our dedication to excellence, we aim to redefine the
                  art of gifting and celebration with creations that speak
                  volumes about the moments they commemorate.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://picsum.photos/400/600?random=12"
                      alt="Our craft"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://picsum.photos/400/800?random=13"
                      alt="Our materials"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-10">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://picsum.photos/400/800?random=14"
                      alt="Our process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://picsum.photos/400/600?random=15"
                      alt="Our workshop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 text-xs uppercase tracking-wider bg-primary-green text-white rounded-full">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Principles that{" "}
              <span className="text-primary-green">Guide Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Craftsmanship",
                description:
                  "Meticulous attention to detail in every stitch and fold of our fabric bouquets.",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary-green"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                ),
              },
              {
                title: "Sustainability",
                description:
                  "Creating everlasting beauty without compromising our commitment to the environment.",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary-green"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 4L12 12M12 12L20 4M12 12L4 20M12 12L20 20"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                ),
              },
              {
                title: "Personalization",
                description:
                  "Tailoring each creation to reflect the unique personality and style of our customers.",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary-green"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-green mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 px-6 bg-primary-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Magic of Bloom Haven
          </h2>
          <p className="text-lg mb-8">
            Discover our collection of handcrafted fabric bouquets and find the
            perfect piece for your special moment.
          </p>
          <a
            href="/products"
            className="inline-block py-3 px-8 bg-white text-primary-green rounded-full font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Explore Our Collections
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

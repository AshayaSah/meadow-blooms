import React, { useState, useEffect } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "About Our Products",
      faqs: [
        {
          question: "What materials do you use for your fabric bouquets?",
          answer:
            "Our bouquets are crafted using high-quality fabrics including silk, cotton, satin, and specialty ribbons. We handpick materials that best mimic the texture and appearance of real flowers while ensuring durability and long-lasting beauty.",
        },
        {
          question: "How long do fabric bouquets last?",
          answer:
            "Our fabric bouquets are designed to last a lifetime with proper care. Unlike fresh flowers, they won't wilt or fade, making them perfect keepsakes for special occasions and memorable events.",
        },
        {
          question: "Are your bouquets scented?",
          answer:
            "By default, our bouquets are unscented. However, we offer an optional light fragrance service for an additional fee. You can choose from several nature-inspired scents that can be applied to your bouquet.",
        },
        {
          question: "How should I care for my fabric bouquet?",
          answer:
            "To maintain your bouquet's beauty, keep it away from direct sunlight to prevent fading. Occasionally dust with a soft brush or use a cool hair dryer on low setting to remove dust. Avoid exposure to moisture or extreme humidity.",
        },
      ],
    },
    {
      title: "Customization",
      faqs: [
        {
          question: "Can I customize my bouquet?",
          answer:
            "Absolutely! We specialize in creating custom bouquets tailored to your preferences. From color schemes to specific flower types, ribbon selections, and arrangement styles, we can craft the perfect arrangement for your specific needs.",
        },
        {
          question: "Can you match specific colors for my event?",
          answer:
            "Yes! We can match specific color schemes for weddings, parties, or any special event. You can provide color swatches, Pantone codes, or photos of your desired colors, and we'll create bouquets that perfectly complement your theme.",
        },
        {
          question: "Can you recreate a specific flower arrangement?",
          answer:
            "We can recreate arrangements based on photos or descriptions. Whether it's a bouquet you saw online, in a magazine, or even your original wedding bouquet, we'll work with you to craft a fabric version that captures its essence.",
        },
        {
          question: "Do you offer memorial bouquets with sentimental fabrics?",
          answer:
            "Yes, we offer memorial bouquets that can incorporate pieces of meaningful fabric such as clothing from loved ones. These special keepsake bouquets provide a beautiful way to preserve memories. Please contact us directly to discuss these custom projects.",
        },
      ],
    },
    {
      title: "Ordering & Delivery",
      faqs: [
        {
          question: "What is your delivery timeframe?",
          answer:
            "For standard orders, delivery typically takes 5-7 business days. Custom bouquets may require 2-3 weeks depending on complexity and current order volume. Rush orders are available for an additional fee, subject to availability.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship worldwide! International shipping rates and delivery times vary by location. Please contact us for specific information about shipping to your country. International orders may be subject to customs fees upon delivery.",
        },
        {
          question: "What is your return policy?",
          answer:
            "Due to the custom nature of our products, we don't accept returns. However, if you receive a damaged product, please contact us within 48 hours with photos, and we'll work to resolve the issue. Custom orders cannot be cancelled once production has begun.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes, once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account on our website to view order status and tracking details.",
        },
      ],
    },
    {
      title: "Special Occasions",
      faqs: [
        {
          question: "Do you offer wedding packages?",
          answer:
            "Yes! We offer comprehensive wedding packages that include bridal bouquets, bridesmaid bouquets, boutonnieres, corsages, and decorative arrangements. Contact us for a consultation to discuss your wedding needs and receive a custom quote.",
        },
        {
          question: "How far in advance should I order for a wedding?",
          answer:
            "For weddings, we recommend placing your order at least 3-4 months in advance. For wedding seasons (spring and summer), earlier is better. This gives us ample time to design, customize, and perfect your wedding flowers.",
        },
        {
          question: "Do you offer bouquet preservation services?",
          answer:
            "We offer a unique service where we can create fabric replicas of your real wedding bouquet or special occasion flowers. This allows you to keep an exact copy of your meaningful flowers forever. Contact us for details about this custom service.",
        },
        {
          question: "Can you create seasonal or holiday-themed bouquets?",
          answer:
            "Absolutely! We create themed bouquets for all seasons and holidays. From autumn-inspired arrangements to Christmas centerpieces and spring-themed bouquets, we can craft the perfect seasonal decoration for your home or event.",
        },
      ],
    },
    {
      title: "Business & Wholesale",
      faqs: [
        {
          question: "Do you offer bulk discounts for events?",
          answer:
            "Yes, we offer volume discounts for large orders such as wedding parties, corporate events, or wholesale purchases. The discount percentage varies based on quantity. Contact us with your requirements for a custom quote.",
        },
        {
          question: "Can you create displays for my business or store?",
          answer:
            "We work with businesses to create custom floral displays for storefronts, office spaces, and commercial environments. Our fabric arrangements are perfect for businesses seeking beautiful, maintenance-free decor that makes a lasting impression.",
        },
        {
          question: "Do you offer workshop or DIY kits?",
          answer:
            "We offer DIY kits for those who want to try their hand at creating fabric flowers. Each kit comes with all necessary materials and detailed instructions. We also occasionally host virtual and in-person workshops for groups.",
        },
        {
          question: "Can I become a reseller of your products?",
          answer:
            "We do offer wholesale partnerships for qualified retailers. Please contact us with information about your business, and we'll provide details about our wholesale program, minimum order requirements, and pricing structure.",
        },
      ],
    },
  ];

  // Filter categories and FAQs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCategories(faqCategories);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = faqCategories
      .map((category) => {
        // Filter FAQs within each category
        const filteredFaqs = category.faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query)
        );

        // Return the category with filtered FAQs
        return {
          ...category,
          faqs: filteredFaqs,
        };
      })
      .filter((category) => category.faqs.length > 0); // Only keep categories with matching FAQs

    setFilteredCategories(filtered);

    // Auto-expand questions that match the search query
    if (filtered.length > 0 && filtered[0].faqs.length > 0) {
      setActiveIndex(`0-0`); // Set the first matching question as active
    }
  }, [searchQuery]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Count total results
  const totalResults = filteredCategories.reduce(
    (total, category) => total + category.faqs.length,
    0
  );

  return (
    <div className="bg-background-DEFAULT text-text-DEFAULT overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/api/placeholder/1600/900')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center">
              Frequently Asked{" "}
              <span className="text-primary-green">Questions</span>
            </h1>
            <p className="text-md md:text-lg text-white max-w-2xl text-center">
              Everything you need to know about our handcrafted fabric bouquets
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 text-xs uppercase tracking-wider bg-primary-green text-white rounded-full">
                Have Questions?
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              We're Here to <span className="text-primary-green">Help</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our most frequently asked questions below. If you
              can't find what you're looking for, don't hesitate to{" "}
              <a href="/contact" className="text-primary-green hover:underline">
                contact us
              </a>{" "}
              directly.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="py-8 px-6 bg-background-secondary">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full py-4 px-6 pr-24 rounded-full border-2 border-gray-200 focus:outline-none focus:border-primary-green"
            />
            {searchQuery ? (
              <button
                onClick={clearSearch}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            ) : null}
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          {searchQuery && (
            <div className="mt-4 text-gray-600">
              Found {totalResults} {totalResults === 1 ? "result" : "results"}{" "}
              for "{searchQuery}"
            </div>
          )}
        </div>
      </div>

      {/* FAQ Categories Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-semibold mb-8 pb-3 border-b-2 border-primary-green inline-block">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const index = `${categoryIndex}-${faqIndex}`;
                    const isActive = activeIndex === index;

                    // Highlight matching text if there's a search query
                    const highlightText = (text) => {
                      if (!searchQuery.trim()) return text;

                      const regex = new RegExp(`(${searchQuery})`, "gi");
                      const parts = text.split(regex);

                      return (
                        <>
                          {parts.map((part, i) =>
                            part.toLowerCase() === searchQuery.toLowerCase() ? (
                              <mark key={i} className="bg-yellow-200">
                                {part}
                              </mark>
                            ) : (
                              part
                            )
                          )}
                        </>
                      );
                    };

                    return (
                      <div
                        key={faqIndex}
                        className="border rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md"
                      >
                        <button
                          className="flex justify-between items-center w-full p-6 text-left bg-background-secondary"
                          onClick={() => toggleAccordion(index)}
                        >
                          <span className="font-medium text-lg">
                            {highlightText(faq.question)}
                          </span>
                          <svg
                            className={`w-5 h-5 text-primary-green transition-transform duration-300 ${
                              isActive ? "transform rotate-180" : ""
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isActive ? "max-h-96 p-6" : "max-h-0"
                          }`}
                        >
                          <p className="text-gray-600">
                            {highlightText(faq.answer)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" strokeLinecap="round" />
              </svg>
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any questions matching "{searchQuery}"
              </p>
              <button
                onClick={clearSearch}
                className="py-2 px-4 bg-primary-green text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Still Have Questions Section */}
      <div className="py-16 px-6 bg-background-secondary">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Still Have{" "}
                <span className="text-primary-green">Questions?</span>
              </h3>
              <p className="text-gray-600 mb-8">
                We're here to help! If you couldn't find the answer to your
                question, please don't hesitate to reach out to us directly.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-primary-green mr-4">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-600">hello@bloomhaven.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 text-primary-green mr-4">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex">
                  <a
                    href="/contact"
                    className="inline-block py-3 px-6 bg-primary-green text-white rounded-full font-medium transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative h-full">
              <img
                src="/api/placeholder/800/600"
                alt="Customer service representative with fabric bouquets"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-6 bg-primary-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Connected with Bloom Haven
          </h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for updates, special offers, and craft
            inspiration.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-green rounded-full font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

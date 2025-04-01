import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-background-DEFAULT text-text-DEFAULT overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/1600/900?random=20')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center">
              Contact <span className="text-primary-green">Us</span>
            </h1>
            <p className="text-md md:text-lg text-white max-w-2xl text-center">
              Reach out to us for personalized creations and inquiries
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 text-xs uppercase tracking-wider bg-primary-green text-white rounded-full">
                Get in Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              We'd Love to{" "}
              <span className="text-primary-green">Hear from You</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Visit Our Studio",
                description:
                  "123 Bloom Street, Floral District, Craftsville, FL 12345",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary-green"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
              },
              {
                title: "Email Us",
                description: "hello@bloomhaven.com",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary-green"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
              {
                title: "Call Us",
                description: "+1 (555) 123-4567",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary-green"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-6 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/800/1000?random=21"
                alt="Contact us - handcrafted fabric bouquet"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Send Us a <span className="text-primary-green">Message</span>
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-primary-green text-white rounded-full font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 text-xs uppercase tracking-wider bg-primary-green text-white rounded-full">
                FAQs
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Frequently Asked{" "}
              <span className="text-primary-green">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long do fabric bouquets last?",
                answer:
                  "Our fabric bouquets are designed to last a lifetime with proper care. Unlike fresh flowers, they won't wilt or fade, making them perfect keepsakes for special occasions.",
              },
              {
                question: "Can I customize my bouquet?",
                answer:
                  "Absolutely! We specialize in creating custom bouquets tailored to your preferences. From color schemes to specific flower types, we can craft the perfect arrangement for you.",
              },
              {
                question: "What is your delivery timeframe?",
                answer:
                  "For standard orders, delivery typically takes 5-7 business days. Custom bouquets may require additional time depending on complexity. Rush orders are available for an additional fee.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes, we ship worldwide! International shipping rates and delivery times vary by location. Please contact us for specific information about shipping to your country.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-background-secondary rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* This would be replaced with an actual map component */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <svg
              className="w-12 h-12 text-primary-green mx-auto mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="font-medium">Bloom Haven Studio</p>
            <p className="text-gray-600 text-sm">
              123 Bloom Street, Floral District
            </p>
            <p className="text-gray-600 text-sm">Craftsville, FL 12345</p>
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

export default Contact;

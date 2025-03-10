import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  const services = [
    {
      title: "IVF Treatment",
      description:
        "State-of-the-art in vitro fertilization with personalized care protocols.",
      icon: "/icons/ivf.svg",
    },
    {
      title: "Fertility Assessment",
      description:
        "Comprehensive evaluation to understand your fertility status and options.",
      icon: "/icons/assessment.svg",
    },
    {
      title: "Genetic Testing",
      description:
        "Advanced genetic screening for informed family planning decisions.",
      icon: "/icons/genetic.svg",
    },
    {
      title: "Egg Freezing",
      description:
        "Preserve your fertility options for the future with our advanced freezing techniques.",
      icon: "/icons/freezing.svg",
    },
  ];

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[var(--primary)]">Our Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of fertility treatments using the
              latest technology and evidence-based approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mb-4 mx-auto">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-3xl font-serif mb-4">Expert Care</h3>
                  <p className="text-lg opacity-90">
                    Dedicated to helping you achieve your dream of parenthood
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-[var(--primary)]">Why Choose Us</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Our fertility specialists have decades of combined
                      experience and are leaders in their field.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Advanced Technology
                    </h3>
                    <p className="text-gray-600">
                      We use the latest technology and techniques to maximize
                      your chances of success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Personalized Care
                    </h3>
                    <p className="text-gray-600">
                      Every patient receives a customized treatment plan
                      tailored to their unique situation.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards building your family. Schedule a
            consultation with our fertility experts.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

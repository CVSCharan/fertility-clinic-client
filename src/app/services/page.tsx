"use client";

import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      title: "IVF Treatment",
      description:
        "State-of-the-art in vitro fertilization with personalized care protocols.",
      features: [
        "Comprehensive fertility evaluation",
        "Customized treatment protocols",
        "Advanced laboratory techniques",
        "Continuous monitoring and support",
      ],
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Egg Freezing",
      description:
        "Preserve your fertility options for the future with our advanced freezing techniques.",
      features: [
        "Fertility preservation consultation",
        "Hormone therapy and monitoring",
        "Vitrification technology",
        "Long-term storage solutions",
      ],
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
          />
        </svg>
      ),
    },
    {
      title: "Genetic Testing",
      description:
        "Advanced genetic screening for informed family planning decisions.",
      features: [
        "Preimplantation genetic testing",
        "Carrier screening",
        "Genetic counseling",
        "Result interpretation",
      ],
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Fertility Assessment",
      description:
        "Comprehensive evaluation to understand your fertility status and options.",
      features: [
        "Hormone level testing",
        "Ultrasound examination",
        "Semen analysis",
        "Personalized treatment planning",
      ],
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900/90 to-blue-800/90">
        <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-pattern"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Comprehensive fertility treatments tailored to your unique
              journey, combining advanced technology with compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-[var(--primary)] mb-6">{service.icon}</div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-[var(--primary)] mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <p className="text-gray-600">
              We guide you through every step of your fertility journey with
              expertise and compassion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "Meet with our specialists to discuss your fertility goals and medical history.",
              },
              {
                step: "2",
                title: "Fertility Assessment",
                description:
                  "Comprehensive testing to evaluate your fertility status and options.",
              },
              {
                step: "3",
                title: "Treatment Plan",
                description:
                  "Develop a personalized treatment plan tailored to your specific needs.",
              },
              {
                step: "4",
                title: "Ongoing Support",
                description:
                  "Continuous monitoring and support throughout your treatment journey.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/90 to-blue-800/90">
        <div className="container">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a consultation with our fertility specialists today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--primary)] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

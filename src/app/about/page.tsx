"use client";

import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      image: "/team/doctor1.jpg",
      description:
        "Board-certified reproductive endocrinologist with over 15 years of experience.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Fertility Specialist",
      image: "/team/doctor2.jpg",
      description:
        "Specialized in advanced IVF techniques and reproductive surgery.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Embryologist",
      image: "/team/doctor3.jpg",
      description:
        "Expert in embryology and cutting-edge laboratory techniques.",
    },
    {
      name: "Jessica Thompson",
      role: "Patient Care Coordinator",
      image: "/team/coordinator.jpg",
      description:
        "Dedicated to providing comprehensive support throughout your fertility journey.",
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
              About FertilityCare
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Dedicated to helping families grow through compassionate care,
              cutting-edge technology, and personalized treatment plans.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At FertilityCare, our mission is to provide hope and support to
                individuals and couples on their journey to parenthood. We
                combine advanced medical expertise with compassionate care to
                offer the best possible outcomes for our patients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in personalized care, understanding that each
                patient's journey is unique. Our team of experts works together
                to provide comprehensive fertility solutions using the latest
                technologies and evidence-based approaches.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="text-[var(--primary)] font-bold text-3xl mb-2">
                    95%
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="text-[var(--primary)] font-bold text-3xl mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">
                    Values We Live By
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li>✓ Excellence in Patient Care</li>
                    <li>✓ Compassion & Understanding</li>
                    <li>✓ Innovation & Research</li>
                    <li>✓ Personalized Attention</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600">
              Our team of experienced professionals is dedicated to providing
              the highest quality care and support throughout your fertility
              journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <svg
                      className="h-20 w-20 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-[var(--primary)] font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
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
              Start Your Journey With Us
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards growing your family with our expert
              team.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--primary)] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

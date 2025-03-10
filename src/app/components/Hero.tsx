"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppointmentModal from "./AppointmentModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90">
        <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-pattern"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-2xl space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
            Your Journey to Parenthood Starts Here
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Expert fertility care with compassion, cutting-edge technology, and
            personalized treatment plans to help you build your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-center text-lg py-4 px-8 rounded-full hover:scale-105 transition-transform"
            >
              Schedule Consultation
            </button>
            <Link
              href="/services"
              className="btn-secondary text-center text-lg py-4 px-8 rounded-full hover:scale-105 transition-transform"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-8 border-t border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="font-bold text-4xl text-[var(--primary)]">
                95%
              </div>
              <div className="text-gray-600 font-medium mt-2">Success Rate</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="font-bold text-4xl text-[var(--primary)]">
                15+
              </div>
              <div className="text-gray-600 font-medium mt-2">
                Years Experience
              </div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="font-bold text-4xl text-[var(--primary)]">
                5000+
              </div>
              <div className="text-gray-600 font-medium mt-2">
                Happy Families
              </div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="font-bold text-4xl text-[var(--primary)]">
                24/7
              </div>
              <div className="text-gray-600 font-medium mt-2">
                Patient Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;

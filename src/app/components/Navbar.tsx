"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AppointmentModal from "./AppointmentModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 h-20">
        <div className="flex justify-between items-center h-full">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 relative">
              <Image
                src="/logo.svg"
                alt="Fertility Clinic Logo"
                fill
                className="w-auto h-auto"
              />
            </div>
            <span className="text-xl font-serif font-semibold text-[var(--primary)]">
              FertilityCare
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-[var(--primary)] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary py-2.5 px-6 rounded-full text-sm font-medium hover:scale-105 transition-transform"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg animate-fadeIn border-t border-gray-100">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-[var(--primary)] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="block w-full btn-primary text-center py-3 rounded-lg font-medium"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;

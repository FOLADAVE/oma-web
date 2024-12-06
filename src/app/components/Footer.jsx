import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6 font-semibold">
      <div className="container mx-auto">
        {/* Divider */}
        <hr className="border-gray-300 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Links Section */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#home" className="hover:text-indigo-950">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-950">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-950">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-950">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons Section */}
          <div className="flex space-x-4">
            <a
              href="https://web.facebook.com/dictionandphonicsman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <Image
                src="/images/communication_15047527.png" // Replace with the path to your Facebook icon
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a
              href="mailto:partnerships@omadiction.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <Image
                src="/images/email_719662.png" // Replace with the path to your Email icon
                alt="Email"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.youtube.com/@dictionoracle8254"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <Image
                src="/images/youtube_255305.png" // Replace with the path to your YouTube icon
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Oma Diction. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

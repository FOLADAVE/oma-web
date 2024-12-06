import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="bg-white mx-auto py-16 px-6" id="contact">
      <div className="text-center mb-10">
        <h2 className="text-indigo-950 font-semibold uppercase tracking-wide">Contact Us</h2>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Get in Touch</h1>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-12 sm:m-16 m-0">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 space-y-6 text-gray-600">
          <h3 className="text-lg font-bold text-indigo-950 flex items-center">
            Send us a message{" "}
            <span className="ml-2">
              <Image src="/images/msg-icon.png" alt="Email Icon" width={30} height={30} />
            </span>
          </h3>
          <p className="text-sm leading-relaxed">
          Thank you for your interest in OMA DICTION. We are here to assist you and provide the information you need. 
          Whether you have questions about our programs, want to inquire about enrollment, or have general inquiries, we&apos;re just a message away.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Image src="/images/mail-icon.png" alt="Email Icon" width={24} height={24} />
              <span className="text-sm font-medium">partnerships@omadiction.pro</span>
            </li>

          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
  <form
    action="https://submit-form.com/LvrjBvQzY"
    method="POST"
    className="space-y-6"
  >
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-600">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
        className="w-96 border-gray-300 rounded-lg shadow-sm p-3 mt-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
      />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter your mobile number"
        required
        className="w-96 border-gray-300 rounded-lg shadow-sm p-3 mt-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-600">
        Write your messages here
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Enter your message"
        required
        className="resize-none w-96 border-gray-300 rounded-lg shadow-sm p-3 mt-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition"
    >
      Submit now →
    </button>
  </form>
</div>
        </div>
    </section>
    
  );
};

export default ContactUs;

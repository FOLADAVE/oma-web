"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Services", path: "#services" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='bg-indigo-950 md:bg-indigo-950 lg:bg-customBlue'>
      <div className="mb-1 sm:mb-2 flex flex-wrap items-center justify-between mx-auto p-4 w-full ">
        <Link href={"#home"} className='pl-9'>
        <Image
      src="/images/oma-logo.png"
      alt="logo"
      width={50}
      height={50}
       // Adjust the value as needed
    />
        </Link>
        <div className="mobile-menu block md:hidden">
          {
            !navbarOpen ? (
              <button 
              onClick={() => setNavbarOpen(true)} 
              className='flex items-center px-3 py-2 border-2 border-white rounded text-white'>
                 <Bars3Icon className='h-5 w-5' />
              </button>
            ) : (
              <button 
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border-2 border-white rounded text-white'>
                 <XMarkIcon className='h-5 w-5' />
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 z-50">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  )
}

export default Navbar
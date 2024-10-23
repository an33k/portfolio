'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = 'home';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id') as string;
      }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      currentSection = 'contact';
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-20'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        <Link href="#home" className={`nav-item ${activeSection === 'home' ? 'bg-white text-black' : ''}`}>
          Home
        </Link>
        <Link href="#projects" className={`nav-item ${activeSection === 'projects' ? 'bg-white text-black' : ''}`}>
          Projects
        </Link>
        <Link href="#about" className={`nav-item ${activeSection === 'about' ? 'bg-white text-black' : ''}`}>
          About
        </Link>
        <Link href="#contact" className={`nav-item ${activeSection === 'contact' ? 'bg-white text-black' : ''}`}>
         Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;

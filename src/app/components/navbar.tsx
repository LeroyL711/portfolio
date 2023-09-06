"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import "../css/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef<HTMLElement[]>([]);
  const handleScroll = () => {
    const scrollYPosition = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((sectionRef) => {
      const section = sectionRef as HTMLElement;
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollYPosition >= sectionOffsetTop - 100 && scrollYPosition < sectionOffsetTop + sectionHeight){
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll('[data-section]'));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="navContainer">
        <div className="navLogo">
          <Link href="/">LEROY LAU</Link>
        </div>
        <button
          className="hamburger"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
        
        {/* Separated desktop and mobile navs due to content flash from opacity changes and transition */}
        <div className={`desktopNav`}>
          <ul>
            <li className={activeSection === 'landing' ? 'active' : ''}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <Link href="#about">
                About
              </Link>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <Link href="#projects">
                Projects
              </Link>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <Link href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={isExpanded ? `navMenu expanded` : `navMenu`}>
          <ul>
            <li>
              <Link href="/" onClick={() => setIsExpanded(!isExpanded)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setIsExpanded(!isExpanded)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setIsExpanded(!isExpanded)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsExpanded(!isExpanded)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

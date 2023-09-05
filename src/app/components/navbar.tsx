"use client";
import Link from "next/link";
import { useState } from "react";
import "../css/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

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
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects">
                Projects
              </Link>
            </li>
            <li>
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

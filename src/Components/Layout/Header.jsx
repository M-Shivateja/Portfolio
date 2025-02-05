import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import insta from "../Images/instagram.svg";
import linkedin from "../Images/linkedin.svg";
import github from "../Images/github2.svg";
import twitter from "../Images/X.svg";

const medias = [
  { src: insta, alt: "Instagram icon", link: "https://www.instagram.com/" },
  {
    src: linkedin,
    alt: "LinkedIn icon",
    link: "https://www.linkedin.com/in/shiva-teja-m-80b616239/",
  },
  { src: github, alt: "GitHub icon", link: "https://github.com/M-Shivateja" },
  {
    src: twitter,
    alt: "X (Twitter) icon",
    link: "https://x.com/mshivateja08?t=y4xiI7JZlEC2RW2qikhpGA&s=08",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full  backdrop-blur-md px-4 py-4 lg:px-10 lg:py-4 z-10 d">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-gray-800 hover:scale-105 duration-300 ">
          <Link
            to="/"
            className="bg-logo-color font-thin font-pacifico py-1 px-3 lg:px-4  rounded-md text-lg "
          >
            shivateja
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links & Social Media (Desktop) */}
        <div className="hidden md:flex items-center justify-center macbookAir:gap-40 gap-16 lg:gap-72">
          <ul className="flex gap-2 lg:gap-12 text-sm lg:text-base  font-semibold lg:font-bold  text-white border border-white/20 px-3 py-2 lg:py-2 lg:px-2 rounded-full dark:text-white">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li
                key={index}
                className="hover:bg-white rounded-full hover:text-black px-3 py-1 transition duration-300"
              >
                <button>
                  <Link to={item === "Home" ? `/` : `/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </button>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4 lg:gap-8 px-3 py-2 lg:px-6 lg:py-3 rounded-full bg-media-color ">
            {medias.map((media, i) => (
              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                <img
                  src={media.src}
                  width={22}
                  height={22}
                  alt={media.alt}
                  className="bg-white rounded-md hover:scale-125 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 bg-black bg-opacity-90 p-4 rounded-lg">
          <ul className="flex flex-col items-center gap-4 text-white delay-105 duration-500">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li key={index} className="hover:text-gray-300 transition">
                <Link
                  to={item === "Home" ? `/` : `/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            {medias.map((media, i) => (
              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                <img
                  src={media.src}
                  width={24}
                  height={24}
                  alt={media.alt}
                  className="bg-white rounded-md hover:scale-125 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;

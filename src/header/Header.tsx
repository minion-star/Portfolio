import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "About Me", href: "about" },
    { name: "Services", href: "services" },
    { name: "Skills", href: "skills" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header className="sticky top-0 left-0 bg-[#0F0036] shadow-md z-50 w-full px-6">
      <div className="w-full flex justify-between items-center py-4 px-5">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-10 rounded-full" />
        </div>

        {/* Navigation for large screens */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection(item.name)}
              className={`cursor-pointer text-white hover:text-orange-500 transition ${
                activeSection === item.name ? "text-orange-500" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0F0036] flex flex-col items-center py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                smooth={true}
                duration={500}
                onClick={() => {
                  setActiveSection(item.name);
                  setIsMenuOpen(false);
                }}
                className={`block py-2 text-white cursor-pointer hover:text-orange-500 transition ${
                  activeSection === item.name ? "text-orange-500" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* Hire Me Button */}
        <button className="hidden md:block bg-white text-[#0F0036] px-5 py-2 rounded-full font-semibold hover:bg-gray-200 cursor-pointer">
          Hire me
        </button>
      </div>
    </header>
  );
};

export default Header;

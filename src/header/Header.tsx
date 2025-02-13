import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");

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
        <div className="w-full flex justify-between items-center py-6 px-5">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-10 rounded-full" />
        </div>

        {/* Navigation */}
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

        {/* Hire Me Button */}
        <button className="bg-white text-[#0F0036] px-5 py-2 rounded-full font-semibold hover:bg-gray-200 cursor-pointer">
          Hire me
        </button>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-scroll";
import { useState } from "react";
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
    <header className="fixed top-0 left-0 w-full bg-[#0F0036] shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-5">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
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
              className={`cursor-pointer text-white hover:text-orange-400 transition ${
                activeSection === item.name ? "text-orange-400" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hire Me Button */}
        <button className="bg-white text-[#0F0036] px-5 py-2 rounded-full font-semibold hover:bg-gray-200">
          Hire me
        </button>
      </div>
    </header>
  );
};

export default Header;
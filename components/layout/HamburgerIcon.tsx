import React from "react";

interface HamburgerIconProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="relative mr-2 w-6 h-6 focus:outline-none lg:hidden flex items-center justify-center"
      aria-label="Menu"
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        />
      </div>
    </button>
  );
};

export default HamburgerIcon;

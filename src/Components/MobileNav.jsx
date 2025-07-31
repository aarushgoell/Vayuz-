import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#131313] border-t border-gray-800 z-50">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-3">
              <span className="block text-sm font-semibold py-2">
                App Development
              </span>
              <span className="block text-sm font-semibold py-2">
                Challenges
              </span>
              <span className="block text-sm font-semibold py-2">
                Hire Developer
              </span>
              <span className="block text-sm font-semibold py-2">
                Community
              </span>
            </div>
            <div className="pt-4 border-t border-gray-800">
              <button className="w-full bg-[#08A7CE] hover:bg-[#0698b8] px-6 py-3 rounded-full font-bold text-sm transition-colors">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  const handleSignIn = () => {
    alert('Sign in functionality will be implemented here');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span 
              className="text-2xl font-bold text-blue-600 cursor-pointer" 
              onClick={() => handleNavigation('home')}
            >
              ProcureSearch
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              href="#" 
              text="Home" 
              active={currentPage === 'home'}
              onClick={() => handleNavigation('home')}
            />
            <NavLink 
              href="#" 
              text="Categories" 
              active={currentPage === 'categories'}
              onClick={() => handleNavigation('categories')}
            />
            <NavLink 
              href="#" 
              text="Pricing" 
              active={currentPage === 'pricing'}
              onClick={() => handleNavigation('pricing')}
            />
            <NavLink 
              href="#" 
              text="About" 
              active={currentPage === 'about'}
              onClick={() => handleNavigation('about')}
            />
            <button 
              onClick={handleSignIn}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink 
              href="#" 
              text="Home" 
              active={currentPage === 'home'}
              onClick={() => handleNavigation('home')}
            />
            <MobileNavLink 
              href="#" 
              text="Categories" 
              active={currentPage === 'categories'}
              onClick={() => handleNavigation('categories')}
            />
            <MobileNavLink 
              href="#" 
              text="Pricing" 
              active={currentPage === 'pricing'}
              onClick={() => handleNavigation('pricing')}
            />
            <MobileNavLink 
              href="#" 
              text="About" 
              active={currentPage === 'about'}
              onClick={() => handleNavigation('about')}
            />
            <button 
              onClick={handleSignIn}
              className="w-full text-left block px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ 
  href, 
  text, 
  active, 
  onClick 
}: { 
  href: string; 
  text: string; 
  active: boolean;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`px-3 py-2 text-sm font-medium ${
      active 
        ? 'text-blue-600' 
        : 'text-gray-600 hover:text-gray-900'
    }`}
  >
    {text}
  </a>
);

const MobileNavLink = ({ 
  href, 
  text, 
  active,
  onClick 
}: { 
  href: string; 
  text: string;
  active: boolean;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`block px-3 py-2 text-base font-medium rounded-md ${
      active
        ? 'text-blue-600 bg-blue-50'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    }`}
  >
    {text}
  </a>
);

export default Navbar;
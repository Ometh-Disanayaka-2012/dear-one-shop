import React, { useState } from 'react';
import type { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isBlingOpen, setIsBlingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftNav: NavItem[] = [
    { 
      label: 'Home', 
      href: '#' 
    },
    { 
      label: 'Shop', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'Custom Gifts', href: '#custom' },
        { label: 'Personalized Items', href: '#personalized' },
        { label: 'Home Decor', href: '#decor' },
        { label: 'Accessories', href: '#accessories' }
      ]
    },
    { 
      label: 'Review', 
      href: '#' 
    },
    { 
      label: 'Poicay', 
      href: '#' 
    },
  ];

  const rightNav: NavItem[] = [
    { 
      label: 'Products', 
      href: '#' 
    },
    { 
      label: 'Bling', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'Jewelry', href: '#jewelry' },
        { label: 'Accessories', href: '#accessories' },
        { label: 'Collections', href: '#collections' }
      ]
    },
    { 
      label: 'Contact us', 
      href: '#' 
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left Navigation */}
        <div className="nav-left">
          {leftNav.map((item) => (
            <div key={item.label} className="nav-item-wrapper">
              {item.hasDropdown ? (
                <div 
                  className="nav-item dropdown"
                  onMouseEnter={() => setIsShopOpen(true)}
                  onMouseLeave={() => setIsShopOpen(false)}
                >
                  <span>{item.label} ▾</span>
                  {isShopOpen && item.dropdownItems && (
                    <div className="dropdown-menu">
                      {item.dropdownItems.map((dropItem) => (
                        <a key={dropItem.label} href={dropItem.href}>
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a href={item.href} className="nav-item">{item.label}</a>
              )}
            </div>
          ))}
        </div>

        {/* Logo */}
        <div className="logo">
          <h1>Dear One.</h1>
        </div>

        {/* Right Navigation */}
        <div className="nav-right">
          {rightNav.map((item) => (
            <div key={item.label} className="nav-item-wrapper">
              {item.hasDropdown ? (
                <div 
                  className="nav-item dropdown"
                  onMouseEnter={() => setIsBlingOpen(true)}
                  onMouseLeave={() => setIsBlingOpen(false)}
                >
                  <span>{item.label} ▾</span>
                  {isBlingOpen && item.dropdownItems && (
                    <div className="dropdown-menu">
                      {item.dropdownItems.map((dropItem) => (
                        <a key={dropItem.label} href={dropItem.href}>
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a href={item.href} className="nav-item">{item.label}</a>
              )}
            </div>
          ))}
          <button className="icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button className="icon-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 2L6 6H3L6 20H18L21 6H18L15 2H9Z"/>
              <circle cx="9" cy="20" r="1"/>
              <circle cx="15" cy="20" r="1"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {[...leftNav, ...rightNav].map((item) => (
            <a key={item.label} href={item.href} className="mobile-menu-item">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
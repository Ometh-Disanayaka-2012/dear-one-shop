import React, { useState } from 'react';
import type { NavItem } from '../types';
import { ShoppingCart } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
  onCartClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount = 0, onCartClick }) => {
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
      href: '#review' 
    },
  ];

  const rightNav: NavItem[] = [
    { 
      label: 'Products', 
      href: '#featured' 
    },
    { 
      label: 'Contact us', 
      href: '#contact' 
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
          
          {/* Updated Cart Button with Count Badge */}
          <button 
            className="icon-btn" 
            aria-label="Cart"
            onClick={onCartClick}
            style={{ position: 'relative' }}
          >
            <ShoppingCart width={20} height={20} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#dc2626',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {cartCount}
              </span>
            )}
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
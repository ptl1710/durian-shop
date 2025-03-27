import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

import { useCart } from '../contexts/CartContext';
import CartDropdown from './Cart';

import styles from '../assets/styles/Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">Sầu Riêng Vương</Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className={styles.desktopNav}>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/products">Sản phẩm</Link></li>
            <li><Link to="/about">Về chúng tôi</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </nav>

        {/* Cart Icon */}
        <div className={styles.cartIcon} onClick={toggleCart}>
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className={styles.cartCount}>{cartItems.length}</span>
          )}
        </div>

        {isCartOpen && <CartDropdown />}

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>Trang chủ</Link></li>
          <li><Link to="/products" onClick={toggleMobileMenu}>Sản phẩm</Link></li>
          <li><Link to="/about" onClick={toggleMobileMenu}>Về chúng tôi</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Liên hệ</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
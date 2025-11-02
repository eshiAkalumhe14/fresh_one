import React, { useEffect } from 'react';
import './header.css';
import logo from '../assets/images/logo.png';
import search from '../assets/images/search.png';
import cart from '../assets/images/cart.png';
import menu from '../assets/images/menu.png';
import home from '../assets/images/home.png';
import about from '../assets/images/about.png';
import shop from '../assets/images/shop.png';
import contact from '../assets/images/contact.png';
import faqs from '../assets/images/faqs.png';

import { useState } from 'react';

function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchToggle = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search submission logic here
    setSearchTerm('');
    setShowSearchBar(false);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="App-header">
      <div className="header_container">
        <div className="header_con1">
          <img src={logo} alt="Fresh One Logo" className="logo" />
          <p className="header_title">Fresh One</p>
        </div>
        <div className="header_con2">
          <div className="header_pt1">
            <div className="icons">
              {/* <div> */}
              {showSearchBar && (
                <div className="search_bar_container">
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      className="search_input"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <button type="submit" className="search_submit_button">
                      Go
                    </button>
                  </form>
                </div>
              )}
              <button className="search_button" onClick={handleSearchToggle}>
                <img src={search} alt="search" className="icon" />
              </button>
              {/* </div> */}

              <div>
                <button className="menu_button" onClick={handleMenuToggle}>
                  <img src={menu} alt="menu" className="icon" />
                </button>
              </div>

              <div className="cart_count_container">
                <img src={cart} alt="cart" className="icon" />
                <div>
                  <p className="cart_count">My Cart</p>
                  <p className="cart_count"> ₦ 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sliding menu section */}
      <div
        className={`menu_section ${showMenu ? 'menu_open' : ''}  ${isScrolled ? 'scrolled' : ''}`}
      >
        <nav className="nav">
          <ul>
            <li>
              <img src={home} alt="Home Icon" className="nav_icon" />
              <a href="/">HOME</a>
            </li>
            <li>
              <img src={about} alt="About Icon" className="nav_icon" />
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <img src={shop} alt="Shop Icon" className="nav_icon" />
              <a href="/shop">SHOP</a>
            </li>
            <li>
              <img src={contact} alt="Contact Icon" className="nav_icon" />
              <a href="/contact">CONTACT</a>
            </li>
            <li>
              <img src={faqs} alt="FAQs Icon" className="nav_icon" />
              <a href="/FAQs">FAQs</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

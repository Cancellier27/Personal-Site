/* eslint-disable linebreak-style */
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  function homeClass() {
    const pagePath = window.location.pathname;
    return pagePath === '/' ? 'selectedHeader' : '';
  }
  function aboutClass() {
    const pagePath = window.location.pathname;
    return pagePath === '/about' ? 'selectedHeader' : '';
  }
  function projectsClass() {
    const pagePath = window.location.pathname;
    return pagePath === '/projects' ? 'selectedHeader' : '';
  }
  function contactClass() {
    const pagePath = window.location.pathname;
    return pagePath === '/contact' ? 'selectedHeader' : '';
  }

  return (
    <header>
      <div className="iconF">
        <span className="icon">
          <i className="fab fa-foursquare" />
        </span>
        <h1><a href="/" className="filipe">FILIPE</a></h1>
      </div>
      <ul className="navBar">
        <li>
          <a href={`${window.location.origin}/`}>Home</a>
          <div className={homeClass()} />
        </li>
        <li>
          <a href={`${window.location.origin}/about`}>About</a>
          <div className={aboutClass()} />
        </li>
        <li>
          <a href={`${window.location.origin}/projects`}>Projects</a>
          <div className={projectsClass()} />
        </li>
        <li>
          <a href={`${window.location.origin}/contact`}>Contact</a>
          <div className={contactClass()} />
        </li>
      </ul>

    </header>
  );
};

export default Header;

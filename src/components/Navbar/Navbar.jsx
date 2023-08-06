import React, { useEffect, useState } from 'react';

import './Navbar.css';
import { Link } from 'react-router-dom';
import Checkbox from '../Checkbox/Checkbox';
import Square from '../Square/Square';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasBoxShadow, setHasBoxShadow] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setHasBoxShadow(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav  style={{boxShadow: hasBoxShadow ? 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' : 'none'}} className='cv__navbar'>
      <div className='cv__navbar-heading'>
        <Square height={15} width={15} color={{ r: 133, g: 29, b: 252 }} className='cv__navbar-heading_square' />
        <Link to='/'>
          <div className='cv__navbar-heading_links'>
            <h1 className='inline'>Alok Awasthi</h1>
            <p className='inline'> / SOFTWARE DEVELOPER </p>
          </div>
        </Link>
       </div>

      <ul className='cv__navbar-links'>
        <li><Link to='/'>ABOUT ME</Link></li>
        <li><Link to='/resume'>RESUME</Link></li>
        <li><Link to='/experience'>EXPERIENCE</Link></li>
        <li><Link to='/contact'>CONTACT</Link></li>
      </ul>

      <div className='cv__navbar-smallscreen'>
        <div className='cv__navbar-smallscreen_menu'>
          <Checkbox checked={isMenuOpen} onChange={toggleMenu}></Checkbox>
        </div>
        {isMenuOpen && (
          <div className={isMenuOpen ? 'cv__navbar-smallscreen_overlay active' : 'cv__navbar-smallscreen_overlay'}>
            <ul className='cv__navbar-smallscreen_links'>
              <li><Link to='/'>ABOUT ME</Link></li>
              <li><Link to='/resume'>RESUME</Link></li>
              <li><Link to='/experience'>EXPERIENCE</Link></li>
              <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;

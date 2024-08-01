// import React from 'react'
// import './Navbar.css'
// import logo from '../../assets/ShkembiLogo.jpg'
// import { useState, useEffect } from 'react'
// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`container ${isScrolled ? 'scrolled' : ''}`}>
//     <img src={logo} alt="" />
//     <ul>
//         <li>Home</li>
//         <li>Services</li>
//         <li>About Us</li>
//         <li><button className='btn'>Contact Us</button></li>  
//     </ul>
// </nav>
//   )
// }

// export default Navbar
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/ShkembiLogo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Shkembi Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus"><button className='btn'>Contact Us</button></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul className="social-media-links">
          <li><a href="https://www.facebook.com/p/Shkembi-Masonry-LLC-100093207729466/?_rdr" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com/shkembimasonry/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: info@shkembimasonry.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Masonry Lane, Bricktown, USA</p>
      </div>
      <div className="footer-section">
        <h3>Find Us</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95526.69395807377!2d-73.10780138242936!3d41.564717036151364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x440d38d906586143%3A0xe7d2bc827f624075!2sShkembi%20Masonry%20LLC!5e0!3m2!1sen!2sus!4v1721048815011!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a leading e-commerce platform offering a wide range of
              products at competitive prices.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@estore.com</li>
              <li>Phone: +967 777666444</li>
              <li>Address: Sana'a Yemen</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
            <a href="#f" className="mx-2" style={{ color: 'orange' }}><FaFacebookF /></a>
              <a href="#f" className="mx-2" style={{ color: 'orange' }}><FaTwitter /></a>
              <a href="#f" className="mx-2" style={{ color: 'orange' }}><FaInstagram /></a>
              <a href="#f" className="mx-2" style={{ color: 'orange' }}><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2024  EStore Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="footer page-container d-flex flex-column justify-content-center">
      <span className="copyright">
        &copy; Neighbourly {1900 + new Date().getYear()}
      </span>
      <nav>
        <a href="/about-us">About</a>
        <a href="/mobile">Mobile</a>
        <a href="/about-us#privacy">Privacy</a>
        <a href="/about-us#safety">Safety</a>
        <a href="/about-us#guidelines">Guidelines</a>
        <a href="/help">Help</a>
        <a href="/terms-and-conditions">Terms</a>
        <a href="/community/lead">Leads</a>
        <a href="/community/organisation">Organisations</a>
        <a href="/business/">Businesses</a>
        <a href="/contact-us">Contact us</a>
        <a href="/blog">Blog</a>
      </nav>
    </footer>
  );
};

export default Footer;

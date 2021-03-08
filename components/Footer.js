import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <a href="/">
        <img
          src="/img/marvelator-logo.png"
          className="footer__logo"
          alt="Marvel logo"
        />
      </a>
      <p className="footer__copyright-text">
        Data provided by
        <a
          href="http://marvel.com"
          className="footer__copyright-link"
          target="_blank"
        >
          Marvel
        </a>
        . © 2014 Marvel -
        <a
          href="https://gpenunuri.com"
          target="_blank"
          className="footer__copyright-link"
        >
          German Peñuñuri
        </a>{" "}
        &copy; 2021
      </p>
    </footer>
  );
};

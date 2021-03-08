import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="header">
      <div className="header__logo-wrap">
        <Link href="/">
          <img
            src="/img/marvelator-logo.png"
            className="header__logo"
            alt="Marvel logo"
          />
        </Link>
      </div>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link href="/stories">
              <a
                className={
                  router.pathname == "/stories"
                    ? "navigation__link navigation__link--active"
                    : "navigation__link"
                }
              >
                Stories
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/comics">
              <a
                className={
                  router.pathname == "/comics" ||
                  router.pathname.includes("/comic")
                    ? "navigation__link navigation__link--active"
                    : "navigation__link"
                }
              >
                Comics
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/">
              <a
                className={
                  router.pathname == "/"
                    ? "navigation__link navigation__link--active"
                    : "navigation__link"
                }
              >
                Home
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/characters">
              <a
                className={
                  router.pathname == "/characters" ||
                  router.pathname.includes("/character")
                    ? "navigation__link navigation__link--active"
                    : "navigation__link"
                }
              >
                Characters
              </a>
            </Link>
          </li>
          <li className="navigation__item">
            <Link href="/about">
              <a
                className={
                  router.pathname == "/about"
                    ? "navigation__link navigation__link--active"
                    : "navigation__link"
                }
              >
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

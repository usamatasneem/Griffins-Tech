import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import MenuItems from "./Menu/MenuItems";
import { menuItems } from "./menuItems";

export default function NavbarTwo({ service }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header-1 style-2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-2 col-sm-5 col-md-4 col-6">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="/img/griffins-logo-orignal.svg"
                    alt="GriffinsTech"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-center align-items-center">
            <div className="menu-wrap">
              <div className="main-menu">
                <ul>
                  {/* ---------------------Home 1, Home 2, Home 3--------------------- */}
                  {/* <li>
                    <a href="#">demos</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">
                          <a>Home 1</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-two">
                          <a>Home 2</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-three">
                          <a>Home 3</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  {/* ---------------------Home 1, Home 2, Home 3--------------------- */}
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/services/web-development">
                          <a>Web Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-maintenance">
                          <a>Web Maintenance</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ecommerce-store">
                          <a>Ecommerce Store</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/api-integration">
                          <a>API Integration</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/landing-pages-building">
                          <a>Landing Pages Building</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/performance-optimization">
                          <a>Performance Optimization</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/projects">Portfolios</a>
                    {/* Demos Pages like faq, team, portfolio, pricing, 404 are commented out */}

                    {/* <ul className="sub-menu">
                      <li>
                        <Link href="/faq">
                          <a>faq</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team">
                          <a>team</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/projects">
                          <a>portfolio</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pricing">
                          <a>pricing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/404">
                          <a>404</a>
                        </Link>
                      </li>
                    </ul> */}
                    {/* Demos Pages like faq, team, portfolio, pricing, 404 are commented out */}
                  </li>
                  <li>
                    <Link href="/news">
                      <a>News</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a href="contact.html">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-right-element text-white">
              {/* <a href="#">login</a> */}
              <Link href="/contact">
                <a className="theme-btn black">get started</a>
              </Link>
            </div>
          </div>
          <div className="d-block d-lg-none col-sm-1 col-md-8 col-6">
            <div className="mobile-nav-wrap">
              <div id="hamburger" onClick={() => setIsOpen((prev) => !prev)}>
                <FaBars />
              </div>

              <div className={`mobile-nav ${isOpen ? "show" : ""}`}>
                <button
                  type="button"
                  className="close-nav"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <FaTimesCircle />
                </button>
                <nav className="sidebar-nav">
                  <ul className="metismenu" id="mobile-menu">
                    {menuItems.map((menu, index) => (
                      <MenuItems isOpenMenu={isOpen} key={index} items={menu} />
                    ))}
                  </ul>

                  <Link href="/contact">
                    <a className="theme-btn d-block mt-4 text-center ms-0">
                      get started
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <div
              className={`overlay ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen((prev) => !prev)}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}

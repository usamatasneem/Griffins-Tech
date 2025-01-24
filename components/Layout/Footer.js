import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-widgets-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="single-footer-widget wow fadeInLeft">
                <div className="about-us-widget">
                  <Link href="/">
                    <a className="footer-logo d-block">
                      <img
                        src="img/griffins-footer-logo-orignal-01.svg"
                        alt="GriffinsTech"
                      />
                    </a>
                  </Link>
                  <p>
                    Griffins Tech offers innovative, user-friendly, and secure
                    website solutions tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
              <div
                className="single-footer-widget wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="widget-title">
                  <h5>Other Pages</h5>
                </div>
                <ul>
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
              <div
                className="single-footer-widget wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="widget-title">
                  <h5>Services</h5>
                </div>
                <ul>
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
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
              <div
                className="single-footer-widget wow fadeInLeft"
                data-wow-delay=".6s"
              >
                <div className="widget-title">
                  <h5>Resources</h5>
                </div>
                <ul>
                  <li>
                    <Link href="/blogs">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>FAQs</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#">
                      <a>Our Products</a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="container">
          <div className="footer-bottom-content d-md-flex justify-content-between">
            <div
              className="site-copyright wow fadeInUp"
              data-wow-delay=".2"
              data-wow-duration="1s"
            >
              <p>
                &copy; 2025{" "}
                <Link href="#">
                  <a>GriffinsTech</a>
                </Link>{" "}
                All Rights Reserved.
              </p>
            </div>
            <div
              className="social-links mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".3"
              data-wow-duration="1s"
            >
              <Link href="https://www.fb.com/griffinstech">
                <a>
                  <FaFacebookF />
                </a>
              </Link>
              <Link href="https://www.twitter.com/griffinstech">
                <a>
                  <FaTwitter />
                </a>
              </Link>
              <Link href="https://www.instagram.com/griffinstech">
                <a>
                  <FaInstagram />
                </a>
              </Link>
              {/* <Link href="https://www.linkedin.com/griffinstech">
                <a>
                  <FaLinkedinIn />
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

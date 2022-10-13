import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo-low-trans.webp"

const Footer = () => {
  return (
    <>
      <div className="agency-footer-area bg-color-f9f5f4 pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="logo-area style3">
                <Link to="/consulting">
                  <img
                    src={logo}
                    style={{ width: "150px" }}
                    className="logo-1"
                    alt="Image"
                  />
                </Link>
                <p>
                  The Road to Wall Street exists to empower others to succeed in
                  the competitive financial marketplace.
                </p>

                <div className="social-links">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="flaticon-facebook-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="flaticon-twitter-3"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="flaticon-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="flaticon-linkedin-1"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="footer-widjet style3">
                <h3>Company</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="/about-us">
                        <i className="flaticon-next"></i>About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <i className="flaticon-next"></i>Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <i className="flaticon-next"></i>Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects">
                        <i className="flaticon-next"></i>Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widjet style3 pl-20">
                <h3>Useful Links</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="#features">
                        <i className="flaticon-next"></i>Features
                      </Link>
                    </li>
                    <li>
                      <Link to="#testimonials">
                        <i className="flaticon-next"></i>Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">
                        <i className="flaticon-next"></i>Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">
                        <i className="flaticon-next"></i>Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="get-in-touch style3">
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href="tel:+12023459999">
                      <i className="flaticon-phone-call-2"></i> +1 201-740-2005
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@Klane.com">
                      {" "}
                      <i className="flaticon-email"></i>{" "}
                      support@theroadtowallstreet.com
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-map-1"></i>
                    <p>501 Route 17 South STE 1, #1074 Paramus, NJ 07652</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-area style4 bg-color-f9f5f4">
        <div className="container">
          <p>© {new Date().getFullYear()} The Road to Wall Street</p>
        </div>
      </div>
    </>
  )
}

export default Footer

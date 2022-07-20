import React from "react";
import styles from "./footer.module.css";
import Link from 'next/link';
const Footer = () => {
  return (
    <>
      <footer className={styles["footer-section"]}>
        <div className="container">
          <div className={`${styles["footer-cta"]} pt-5 pb-5`}>
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className={styles["single-cta"]}>
                  <i className="fas fa-map-marker-alt"></i>
                  <div className={styles["cta-text"]}>
                    <h4>Find us</h4>
                    <span>313603 , Udaipur VallabhNagar Rajasthan</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className={styles["single-cta"]}>
                  <i className="fas fa-phone"></i>
                  <div className={styles["cta-text"]}>
                    <h4>Call us</h4>
                    <span>(+91)9079257904</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className={styles["single-cta"]}>
                  <i className="far fa-envelope-open"></i>
                  <div className={styles["cta-text"]}>
                    <h4>Mail us</h4>
                    <span>neerajchoubisa876@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["footer-content"]} pt-5 pb-5`}>
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className={styles["footer-widget"]}>
                  <div className={styles["footer-logo"]}>
                    <Link href="/">
                      <img
                        src="https://i.ibb.co/QDy827D/ak-logo.png"
                        className="img-fluid"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className={styles["footer-text"]}>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className={styles["footer-social-icon"]}>
                    <span>Follow us</span>
                    <Link href="#">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className={styles["footer-widget"]}>
                  <div className={styles["footer-widget-heading"]}>
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">about</Link>
                    </li>
                    <li>
                      <Link href="/services">services</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">portfolio</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/our-services">Our Services</Link>
                    </li>
                    <li>
                      <Link href="/team">Expert Team</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact us</Link>
                    </li>
                    <li>
                      <Link href="/news">Latest News</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className={styles["footer-widget"]}>
                  <div className={styles["footer-widget-heading"]}>
                    <h3>Subscribe</h3>
                  </div>
                  <div className={`${styles["footer-text"]} mb-25`}>
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className={styles["subscribe-form"]}>
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["copyright-area"]}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className={styles["copyright-text"]}>
                  <p>
                    Copyright &copy; 2018, All Right Reserved{" "}
                    <Link href="https://codepen.io/anupkumar92/">Anup</Link>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className={styles["footer-menu"]}>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms</Link>
                    </li>
                    <li>
                      <Link href="/privacy">Privacy</Link>
                    </li>
                    <li>
                      <Link href="/policy">Policy</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import Link from "next/link";

const Footer1 = () => {
  return (
    <div className="footer-middle">
      <div className="container">
        <div className="subscribe-area">
          <div className="subscribe-shape">
            <div className="subscribe-thumb bounce-animate5">
              <img src="assets/images/resource/small-dot.png" alt="" />
            </div>
            <div className="subscribe-thumb1">
              <img src="assets/images/resource/big-dot.png" alt="" />
            </div>
          </div>
        </div>
        <div className="footer-bg">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="company-info-desc pr-2">
                  <h4 className="widget-title"> About Us </h4>
                  <p>
                    At TellimissionHills, we are committed to providing expert legal counsel and personalized services. Our team of dedicated professionals is here to guide you through complex legal matters with the utmost care and precision.
                  </p>
                </div>
               
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title">Company</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <Link href="/"> Home </Link>
                    </li>
                    <li>
                      <Link href="/about"> About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact"> Contact Us </Link>
                    </li>
                    <li>
                      <Link href="/service"> Services </Link>
                    </li>
                    <li>
                      <Link href="/team"> Our Team </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title"> Legal Services </h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <Link href="/service"> Corporate Law </Link>
                    </li>
                    <li>
                      <Link href="/service"> Family Law </Link>
                    </li>
                    <li>
                      <Link href="/service"> Estate Planning </Link>
                    </li>
                    <li>
                      <Link href="/service"> Criminal Defense </Link>
                    </li>
                    <li>
                      <Link href="/service"> Civil Litigation </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="foorer-shape">
            <div className="footer-thumb">
              <img src="assets/images/resource/red-dot.png" alt="" />
            </div>
            <div className="footer-thumb1 bounce-animate2">
              <img src="assets/images/resource/all-shape.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div className="consen-logo">
                <Link legacyBehavior href="/">
                  <a className="logo_thumb" title="TellimissionHills">
                    <img src="lg.png" style={{width: '100px', height: '50px'}} alt="logo" />
                  <div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>
                    © 2023 <span>TellimissionHills</span> all rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer1;

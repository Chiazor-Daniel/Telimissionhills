import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import 'aos/dist/aos.css';
import Counter from './Counter';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="about-area">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-lg-6 col-md-12" data-aos="fade-right">
            <div className="dreamit-about-thumb">
              <img
                src="banner.jpeg"
                alt=""
                style={{ maxWidth: '600px', borderRadius: '20px', objectFit: 'cover' }}
              />
              <div className="about-shape-thumb1 bounce-animate2">
                <img src="assets/images/about/about-shape2.png" alt="" />
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6 col-md-12" data-aos="fade-left">
            <div className="consen-section-title white pb-10">
              <h2>Reliable Support &</h2>
              <h2><span> Representation </span></h2>
              <p>
                We continually deliver solutions tailored to our clients' needs, ensuring strategic legal guidance and dedicated advocacy in every case.
              </p>
            </div>
            <div className="lines style-two pb-15">
              <div className="line" />
            </div>
            <div className="dreamit-icon-title">
              <h4>Contact Us at Our Port Harcourt Office</h4>
            </div>
            <div className="dreamit-icon-list">
              <ul>
                <li>
                  <i className="flaticon-location-pin" />{" "}
                  <span>No. 197 Odili Road, Opposite Parkland Estate, Trans-Amadi, Port Harcourt, Rivers State, Nigeria</span>
                </li>
                <li>
                  <i className="flaticon-phone" />{" "}
                  <span>08038694203, 07036719282, 08064371940</span>
                </li>
                <li>
                  <i className="flaticon-email" />{" "}
                  <span>telimisionhillsco@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="about-button">
              <Link legacyBehavior href="/service">
                <a>Learn More <i className="bi bi-plus" /></a>
              </Link>
            </div>
          </div>

          {/* About Shapes */}
          <div className="about-shape-thumb2 bounce-animate4" data-aos="zoom-in">
            <img src="assets/images/resource/all-shape.png" alt="" />
          </div>
        </div>

        {/* Counter Section */}
        <div className="row counter-vip">
          <div className="col-lg-12"></div>

          <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="100">
            <div className="counter-single-box">
              <div className="counter-title">
                <h4><Counter end={172} /></h4>
                <p>Completed cases</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="200">
            <div className="counter-single-box">
              <div className="counter-title">
                <h4><Counter end={23} /></h4>
                <span>+</span>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="300">
            <div className="counter-single-box">
              <div className="counter-title">
                <h4><Counter end={38} /></h4>
                <span>+</span>
                <p>Expert Members</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="400">
            <div className="counter-single-box">
              <div className="counter-title">
                <h4><Counter end={200} /></h4>
                <span>+</span>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

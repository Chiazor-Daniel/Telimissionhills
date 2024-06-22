import Breadcumb from "@/src/components/Breadcumb";
import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import LogoSlider from "@/src/components/LogoSlider";
import Layout from "@/src/layout/Layout";
import { testimonial_list_slider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const About = () => {
  return (
    <Layout>
      <Breadcumb pageName={"About Us"} about={'About Us'}/>
      <div className="abouts_areas">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width: '500px', height: '400px'}} alt />
                  <div className="about-inner-content">
                    <div className="abouts_titles">
                      <h3>Leading Chargeback Firm Worldwide</h3>
                      <div className="abouts_icons">
                        <a href="#">
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="https://images.pexels.com/photos/7652039/pexels-photo-7652039.jpeg?auto=compress&cs=tinysrgb&w=600" alt  style={{width: '500px', height: '400px'}} />
                  <div className="abouts_titles upper">
                    <h3>Specializing in Recovering Funds from Online Trading Scams</h3>
                    <div className="abouts_icons">
                      <a href="#">
                        <i className="fas fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="about-text" style={{marginTop: '50px'}}>
            We pride ourselves on having one of the highest success rates in the industry. Our no-nonsense approach to confronting scammers helps us bring our clients' money back. Whether it’s Forex, Binary Options, or Crypto scams, we specialize in recovering your lost funds. Our expert team is dedicated to ensuring that your financial recovery is swift and effective.
          </p>
        </div>
      </div>
      <div className="feature-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5>Features</h5>
                <h2>
                  We Are Global Stakeholder Over 2000+ <span> Companies</span>
                </h2>
                <p className="about-text1">
                  Appropriately enhance principle-centered innovation rather than high standards in platforms. Credibly orchestrate functional.
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>Communicate orthogonal process</span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>Professionally grow cutting-edge paradigms</span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>Professionally grow cutting-edge paradigms</span>
                  </li>
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="faq-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 pl-0">
              {/* Start Accordion */}
              <div className="tab_container">
                <div className="consen-section-title white pb-40 mb-1">
                  <h5> FAQ </h5>
                  <h2>
                    {" "}
                    Freequently Asked <span> Question </span>
                  </h2>
                </div>
                <Faqs />
              </div>
              {/* End Accordion */}
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contract-form-bg">
                <div className="contact-form-title">
                  <h4> Free Consultant </h4>
                  <p> 24/7 anytime Open Our Services </p>
                </div>
                <div className="contact_from">
                  <form onSubmit={(e) => e.preventDefault()} id="dreamit-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input type="text" name="name" placeholder="Name*" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your E-Mail*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            placeholder="Write a Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="quote_button">
                          <button className="btn" type="submit">
                            {" "}
                            <i className="bi bi-gear" /> Free Consultant{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div id="status" />
                </div>
              </div>
            </div>
            <div className="form-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-area style-two mt-5 mt-sm-0" style={{ position: 'absolute', bottom: -80, left: '300px' }}>
          <div className="container">
            <div className="subscribe">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-12">
                  <div className="subscribe-title">
                    <h1>Get your Free Business Consolution</h1>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <a href="tel:09837393403" className="subscribe-icon">
                    <i className="bi bi-telephone-inbound" />
                  </a>
                  <div className="subscribe-title2">
                    <h1> +98 376 (2890) 100 </h1>
                    <p> example@gmail.com </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;

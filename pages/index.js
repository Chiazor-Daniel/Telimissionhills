import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import ProgressBar from "@/src/components/ProgressBar";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
import { testimonial_list_slider } from "@/src/sliderProps";
import pic from "../public/assets/images/sec.webp"
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
import Form from 'react-bootstrap/Form';
const CaseStudies = dynamic(
  () => import("@/src/components/isotope/CaseStudies"),
  {
    ssr: false,
  }
);
const Index2 = () => {
  const[handleShow, setHandleShow] = useState(false)
  const services = [
    {
      icon: 'assets/images/resource/service-icon.png',
      title: 'Initial Consultation',
      number: '01',
      text: 'We start with a detailed consultation to understand your case and assess the possibilities of recovery.',
      link: '/service-details'
    },
    {
      icon: 'assets/images/resource/service-icon3.png',
      title: 'Investigation and Strategy',
      number: '02',
      text: 'Our team conducts a thorough investigation and develops a tailored strategy for fund recovery.',
      link: '/service-details'
    },
    {
      icon: 'assets/images/resource/service-icon2.png',
      title: 'Recovery Process',
      number: '03',
      text: 'We execute the recovery process using advanced techniques and legal avenues to reclaim your funds.',
      link: '/service-details'
    },
    {
      icon: 'assets/images/resource/service-icon.png',
      title: 'Success and Follow-up',
      number: '04',
      text: 'After successful recovery, we provide ongoing support and guidance to prevent future issues.',
      link: '/service-details'
    },
    // Add more services as needed
  ];
  const testimonials = [
    {
      image: 'https://images.pexels.com/photos/6532105/pexels-photo-6532105.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Alice Johnson',
      title: 'Financial Consultant',
      text: '“Their expertise in fund recovery is unmatched. They diligently navigated the complexities of my case and successfully recovered my lost investments.”',
      rating: 5,
    },
    {
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Michael Smith',
      title: 'Investor',
      text: '“I highly recommend their fund recovery services. They provided me with personalized support and were instrumental in recovering funds I thought were lost forever.”',
      rating: 4.8,
    },
    {
      image: 'https://images.pexels.com/photos/6532105/pexels-photo-6532105.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Emily Wong',
      title: 'Legal Advisor',
      text: '“Their strategic approach to fund recovery is commendable. They kept me informed at every step and delivered results beyond my expectations.”',
      rating: 4.9,
    },
    // Add more testimonials as needed
  ];


  return (
    <Layout>
      <div className="slider-area slider2  d-flex align-items-center" style={{ background: 'black' }}>
        <div className="container">
          <div style={{ clipPath: 'polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%)', position: 'absolute', right: 0, height: '100%', width: '50%', top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image src={pic} layout="fill" objectFit="contain" quality={100} />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="slider-content">
                <h1> Retrieve funds</h1>
                <h1>
                  from
                  {" "}
                  <span>
                    swindles
                  </span>{" "}
                </h1>
                <p>
                  Effective strategies are key to creating user-friendly frameworks and optimizing collaborative resources.
                </p>
              </div>

              <div className="slider-button mt-5">
                <Link legacyBehavior href="/service">
                  <a>
                    <i className="bi bi-wallet2" /> Get Your Money Back
                  </a>
                </Link>

              </div>
            </div>
            {/* slider shape */}
            <div className="slider-shape">
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/shape2.png" alt="" />
              </div>
              <div className="slider-shape-thumb4">
                <img src="assets/images/slider/shape3.png" alt="" />
              </div>
              <div className="slider-shape-thumb5 dance">
                <img src="assets/images/slider/circle1.png" alt="" />
              </div>
              <div className="slider-shape-thumb6 bounce-animate">
                <img src="assets/images/slider/circle2.png" alt="" />
              </div>
              <div className="slider-shape-thumb7 bounce-animate2">
                <img src="assets/images/slider/circle3.png" alt="" />
              </div>
              <div className="slider-shape-thumb8 bounce-animate3">
                <img src="assets/images/slider/white-dot.png" alt="" />
              </div>
              <div className="slider-shape-thumb9 ">
                <img src="assets/images/slider/line.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <p style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '50px', fontWeight: 'bold' }}>
        We've helped recover from
      </p>
      <Marquee style={{ width: '60%', margin: 'auto' }}>
        <img src="https://payback-ltd.com/images/carousel1/logo-6.png" width={200} />
        <img src="https://payback-ltd.com/images/carousel1/logo-7.png" width={200} />
        <img src="https://payback-ltd.com/images/carousel1/logo-8.png" width={200} />
        <img src="https://payback-ltd.com/images/carousel1/logo-5.png" width={200} />
      </Marquee>



      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area style-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb mr-lg-4">
                <img src="https://images.pexels.com/photos/8353789/pexels-photo-8353789.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" style={{ borderRadius: '20px', transform: 'scale(0.8)' }} alt />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shpe.png" alt />
                </div>
                <div className="about-shape-thumb3 bounce-animate4">
                  <img src="assets/images/about/about-shape4.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5> About Our Services </h5>
                <h2> We Help You Recover </h2>
                <h2>
                  {" "}
                  Assisting Over 2000 <span> Clients </span>
                </h2>
                <p className="about-text1">
                  {" "}
                  We specialize in recovering lost funds with a focus on personalized strategies. Our expertise ensures effective and practical solutions.
                </p>
              </div>
              <div className="dreamit-icon-box">
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Clear communication throughout the recovery process </span>
                    </li>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Professional and innovative recovery strategies </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className="progress-box">
                <ProgressBar value={85} />
                <div className="circle-progress-title">
                  <h4>
                    {" "}
                    Client <br /> Satisfaction{" "}
                  </h4>
                </div>
                <div className="extra-progress">
                  <ProgressBar value={95} />
                  <div className="circle-progress-title">
                    <h4>
                      {" "}
                      Fund <br /> Recovery{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-wallet2" /> Discover More{" "}
                  </a>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="skill-area style-two" style={{ marginBottom: '50px' }}>
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-12">
              <h1 style={{ color: 'white' }}>Let's ensure the swift return of your funds!</h1>
              <p>If you've been defrauded, reach out to us, and our team of experts will diligently work to secure the swift recovery of your assets.</p>
              <div style={{
      position: 'relative',
      display: 'block',
      width: '50%',
      margin: '0 auto',
      fontFamily: "'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif",
      fontSize: '18px',
      color: '#60666d'
    }}>
      <select style={{
        width: '100%',
        padding: '15px',
        fontSize: '18px',
        color: '#60666d',
        borderRadius: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.1)',
        border: 'none',
        appearance: 'none',
        cursor: 'pointer',
        outline: 'none'
      }}>
        <option value="" disabled selected hidden>Choose a scam type</option>
        <option>Binary Options</option>
        <option>CryptoCurrency</option>
        <option>Forex</option>
        <option>Stock Trading</option>
        <option>Property Scam</option>
        <option>Romance Scam</option>
        <option>Others</option>
      </select>
      <img src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" style={{
        position: 'absolute',
        top: '50%',
        right: '15px',
        transform: 'translateY(-50%)',
        width: '20px',
        opacity: '0.3',
        pointerEvents: 'none'
      }} />
    </div>
    <div className="about-button" >
                <Link legacyBehavior href="">
                  <a>
                    {" "}
                    Get Free Consultation <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>


            </div>
          </div>

        </div>
      </div>
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '600px', borderRadius: '30px' }} alt="About Image" />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt="About Shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2> Fastest Way To Recover </h2>
                <h2>
                  {" "}
                  Your Lost <span> Funds </span>
                </h2>
                <p>
                  We specialize in recovering lost funds with a focus on personalized strategies. Our expertise ensures effective and practical solutions.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>
              <div className="dreamit-icon-title">
                <h4>
                  {" "}
                  Serving Since <span>2015 to Present</span> in New York City, USA{" "}
                </h4>

              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> Expertly recover funds with reliable strategies </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> Personalized approach to each recovery case </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> Dedicated support throughout the recovery process </span>
                  </li>
                </ul>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            {/* about thumb */}
            <div className="about-shape-thumb2 bounce-animate4">
              <img src="assets/images/resource/all-shape.png" alt="Shape Image" />
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              <div className="couter-top-title">
                <h3> Fund Recovery Metrics </h3>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    $ <Counter end={50372.88} dollars={true} />
                  </h4>
                  <p>Funds Recovered So Far</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={26} />
                  </h4>
                  <p>Experienced Team Members</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={78} />
                  </h4>
                  <p>Satisfaction Rate (%)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="row" style={{ paddingRight: '100px', paddingLeft: '100px' }}>
        {services.map((service, index) => (
          <div key={index} className="col-lg-6 col-sm-12 mb-4">
            <div className="dreamit-service-box" style={{ borderRadius: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <div className="service-box-inner">
                <div className="em-service-icon">
                  <img src={service.icon} alt="" />
                </div>
                <div className="em-service-title">
                  <h2>{service.title}</h2>
                </div>
                <div className="service-number">
                  <h1>{service.number}</h1>
                </div>
                <div className="em-service-text">
                  <p>{service.text}</p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}


      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="why-choose-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consen-section-title">
                <h5> Why Choose Us for Fund Recovery? </h5>
                <h2> Regain Your Funds with Confidence </h2>
                <p className="choose-text1">
                  We specialize in recovering lost funds by leveraging strategic methods and expertise. Our approach ensures efficient recovery through proactive solutions tailored to your needs.
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Expertise in navigating complex fund recovery processes </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Utilize advanced recovery methodologies </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Streamline recovery operations </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span> Innovative strategies tailored to each case </span>
                  </li>
                </ul>
              </div>
              <div className="why-choose-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> Learn More{" "}
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-thumb">
                <img src="https://images.pexels.com/photos/7693099/pexels-photo-7693099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fund Recovery" style={{ borderRadius: '30px' }} />
                {/* choose shape thumb */}
                <div className="why-choose-us-image">
                  <div className="why-choose-us-shape-thumb bounce-animate">
                    <img src="assets/images/resource/all-shape2.png" alt="" />
                  </div>
                  <div className="why-choose-us-shape-thumb2 rotateme">
                    <img src="https://consen-react.vercel.app/assets/images/resource/case-shape.png" alt="" />
                  </div>
                  <div className="why-choose-us-shape-thumb3 bounce-animate2">
                    <img src="assets/images/resource/case-shape2.png" alt="" />
                  </div>
                  <div className="why-choose-us-shape-thumb4">
                    <img src="assets/images/about/about-shape4.png" alt="" />
                  </div>
                </div>
                {/* end choose shape thumb */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-50">
                <h5> Testimonials </h5>
                <h2> Marin Watcher Customers </h2>
                <h2>
                  {" "}
                  <span> Reviews </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                <div className="col-6">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={1372} />{" "}
                      </h3>
                      <span>+</span>
                      <p> Happy Customers </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={100} />{" "}
                      </h3>
                      <span>%</span>
                      <p> Satisfaction Rate </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img src="assets/images/resource/testimonial-map.png" alt />
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonial_list_slider}
              className="testimonial_list owl-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="pr-1">
                  <div className="testimonial-single-box">
                    <div className="testimonial-content1">
                      <div className="single-quote-icon">
                        <div className="quote-thumb">
                          <img src={testimonial.image} style={{ width: '100px' }} alt={testimonial.name} />
                        </div>
                        <div className="quote-title">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.title}</p>
                        </div>
                      </div>
                      <div className="em-testimonial-text">
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="em-testi-start-icon">
                        {[...Array(Math.floor(testimonial.rating))].map((star, i) => (
                          <i key={i} className="bi bi-star-fill" />
                        ))}
                        {testimonial.rating % 1 !== 0 && <i className="bi bi-star-half" />}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="owl-dots"></div>
            </Swiper>
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="case-study-area style-three">
        <div className="container">
          <CaseStudies />
        </div>
      </div> */}

      {/* <div className="process-extra-area style-two">
        <div className="container">
          <div className="row justify-content-center process-bg">
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/a.png" alt />
                </div>
                <div className="process-title">
                  <h3>Idea Generate</h3>
                  <p>
                    Collaboratively initiate strategic ex formulate based
                    internal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2 responsive">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/b.png" alt />
                </div>
                <div className="process-title">
                  <h3> System Design </h3>
                  <p>
                    Collaboratively initiate strategic ex formulate based
                    internal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2 upper">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/c.png" alt />
                </div>
                <div className="process-title">
                  <h3> Report Analysis </h3>
                  <p>
                    Collaboratively initiate strategic ex formulate based
                    internal.
                  </p>
                </div>
              </div>
            </div>
            <div className="process-shape">
              <div className="process-shape-thumb3 bounce-animate3">
                <img src="assets/images/resource/all-shape2.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start faq Area */}
      {/*==================================================*/}
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
      {/*==================================================*/}
      {/* End consen faq Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Blog Area */}
      {/*==================================================*/}
      {/* <div className="blog-area style-two">
        <div className="container">
          <div className="row pb-40">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title mobile-center">
                <h2> We Run All Kinds Of Services </h2>
                <h2>
                  {" "}
                  From <span> Technologies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="consen-button text-right pt-4 pt-md-0">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> View all Blog{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog1.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> GRAPHIC </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 25, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Popular Consultants are big Meetup 2023 </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Alex Collins </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog2.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DEVELOPMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 21, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> How to Increase Business Products Sales </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Julia Moris </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog3.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DESIGN </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 20, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> Top 10 Most Populars Google Chrome app</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Amantha </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-shape">
              <div className="port-shape-thumb2 bounce-animate2">
                <img src="assets/images/resource/all-shape6.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End consen Blog Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
    </Layout>
  );
};
export default Index2;

import Counter from "@/src/components/Counter";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import { brandListProps, caseStudyProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import { FaBalanceScale, FaGavel, FaLightbulb, FaShip, FaHome, FaVoteYea, FaHeartBroken } from 'react-icons/fa';
import LawNewsSection from "@/src/components/News";
const Index = () => {
  const services = [
    {
      icon: <FaBalanceScale size={50} className="icon-hover" />,
      title: 'Commercial Law',
      number: '01',
      description: 'Contracts and debt recovery handled with precision and expertise.',
      link: '/service-details'
    },
    {
      icon: <FaGavel size={50} className="icon-hover" />,
      title: 'Arbitration',
      number: '02',
      description: 'Effective dispute resolution through arbitration and mediation.',
      link: '/service-details'
    },
    {
      icon: <FaLightbulb size={50} className="icon-hover" />,
      title: 'Intellectual Property',
      number: '03',
      description: 'Protecting your innovations and creative works with comprehensive IP services.',
      link: '/service-details'
    },
    {
      icon: <FaShip size={50} className="icon-hover" />,
      title: 'Maritime Law',
      number: '04',
      description: 'Navigating maritime regulations and disputes with expertise.',
      link: '/service-details'
    },
    {
      icon: <FaHome size={50} className="icon-hover" />,
      title: 'Private & Property Law',
      number: '05',
      description: 'Expert advice on private and property-related legal matters.',
      link: '/service-details'
    },
    {
      icon: <FaVoteYea size={50} className="icon-hover" />,
      title: 'Election Matters',
      number: '06',
      description: 'Legal guidance on election-related issues and campaign regulations.',
      link: '/service-details'
    },
    {
      icon: <FaHeartBroken size={50} className="icon-hover" />,
      title: 'Matrimonial Causes',
      number: '07',
      description: 'Handling divorce and matrimonial disputes with sensitivity and expertise.',
      link: '/service-details'
    }
  ];
  const slides = [
    {
      src: 'sir1.jpeg',
      alt: 'Slide 1'
    },
    {
      src: 'sir2.jpeg',
      alt: 'Slide 2'
    },
    {
      src: 'ma.jpeg',
      alt: 'Slide 3'
    }
    // Add more slides as needed
  ];

  return (
    <Layout footer={1}>
      {/*==================================================*/}
      {/* Start consen slider Area */}
      {/*==================================================*/}
      <div className="slider-area d-flex align-items-md-center">
        <div className="container">
          <div className="row align-items-center slider-content-container">
            <div className="col-lg-6 col-md-6">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                slidesPerView={1} // Show only one slide per view
                breakpoints={{
                  // Adjust for larger screens
                  640: {
                    slidesPerView: 1, // Set for mobile (640px and below)
                  },
                  768: {
                    slidesPerView: 1, // Set for tablets (768px and below)
                  },
                  1024: {
                    slidesPerView: 1, // For larger screens, adjust if needed
                  },
                }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      style={{
                        width: '540px',
                        height: '540px',
                        clipPath: 'circle(50% at 50% 50%)',
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>

            <div className="col-lg-6 col-md-6">
              <div className="slider-content">
                <h1> Principles Law Partnership </h1>
                <h1>
                  {" "}
                  Where <span>Results Matter</span>
                </h1>
                <p>Expert legal services for the outcomes you need.</p>
              </div>
              <div className="lines pt-20 pb-40">
                <div className="line" />
              </div>
              <div className="banner-buttons" style={{ zIndex: 99, position: 'relative' }}>
                <div className="slider-button">
                  <Link legacyBehavior href="/service">
                    <a>
                      {" "}
                      Get Legal Help <i className="bi bi-plus" />{" "}
                    </a>
                  </Link>
                </div>
                <div className="slider-contact-box">
                  <a className="contact-icon" href="tel:+19876543210">
                    <img src="assets/images/slider/call.png" alt="call icon" />
                  </a>
                  <div className="contact-number">
                    <span> Call Anytime </span>
                    <h3>
                      <a href="tel:+19876543210">+1 (987) 654-3210</a>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* slider shape */}
            <div className="slider-shape">
              <div className="slider-shape-thumb">
                <img src="assets/images/slider/hero-shape.png" alt />
              </div>
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/hero-shape2.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/*End consen slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <div className="" style={{ background: '', paddingTop: '0px' }}>
        <div className="">

          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg-3 col-sm-6 p-0" style={{ cursor: 'pointer' }} key={index}>
                <div className="dreamit-service-box">
                  <div className="service-box-inner">
                    <div className="em-service-icon">
                      {service.icon}
                    </div>
                    <div className="em-service-title">
                      <h2>{service.title}</h2>
                    </div>
                    <div className="service-number">
                      <h1>{service.number}</h1>
                    </div>
                    <div className="em-service-text">
                      <p>{service.description}</p>
                    </div>
                    <div className="service-button">
                      <Link legacyBehavior href={service.link}>
                        <a>
                          {" "}
                          Read More <i className="bi bi-plus" />{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="container row align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/services">
                  <a>
                    {" "}
                    Explore All Services <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="banner.jpeg" alt style={{maxWidth: '600px', borderRadius: '20px', objectFit: 'cover'}}/>
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2>Reliable Support &</h2>
                <h2>
                  <span> Representation </span>
                </h2>
                <p>
                  We continually deliver solutions tailored to our clients' needs, ensuring strategic legal guidance and dedicated advocacy in every case.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>
              <div className="dreamit-icon-title">
                <h4>
                  Contact Us at Our Port Harcourt Office
                </h4>
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
                <Link legacyBehavior href="/about">
                  <a>
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>


            {/* about thumb */}
            <div className="about-shape-thumb2 bounce-animate4">
              <img src="assets/images/resource/all-shape.png" alt />
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <p>Project Complete</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={23} />
                  </h4>
                  <span>+</span>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={38} />
                  </h4>
                  <span>+</span>
                  <p>Exper Member</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <span>+</span>
                  <p>Satisfactions Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
  
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      
      {/*==================================================*/}
      {/* End consen Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Blog Area */}
      {/*==================================================*/}
    <LawNewsSection />
    </Layout>
  );
};
export default Index;

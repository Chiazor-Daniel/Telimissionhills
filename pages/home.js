import Counter from "@/src/components/Counter";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import { brandListProps, caseStudyProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import LawNewsSection from "@/src/components/News";
 import TestimonialsSection from "@/src/components/testimonialcard";
import { TeamSection } from "@/src/components/members";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import ServicesSection from "@/src/components/service";
import AboutSection from "@/src/components/about";
import { FaBalanceScale, FaGavel, FaLightbulb, FaShip, FaHome, FaVoteYea, FaHeartBroken, FaBook, FaDollarSign, FaUsers, FaHandshake, FaFileContract, FaChartLine } from 'react-icons/fa';

const telimissionHillsData = {
  companyName: "TelimissionHills & Co",

  aboutUs: {
    description: "TelimissionHills & Co is a seasoned Law Firm of Legal Practitioners, property consultants and allied services.",
    partners: {
      count: 3,
      experience: "over 30 years post-call"
    },
    expertise: [
      "corporate Law practice",
      "property consultancy",
      "Debt Recovery",
      "Arbitration",
      "Family Law",
      "Maritime Law",
      "Soliciting",
      "Legal Research",
      "Corporate Consultants",
      "general litigation (commercial law & Labour law)",
      "Alternative Dispute Resolution (ADR)",
      "Legal Drafting (MOUs Leases, Contracts, Agreements and Conveyance)",
      "time-tested legal opinions in complex and not so complex areas of Law"
    ]
  },

  missionStatement: {
    mainGoal: "offering excellent legal services while upholding high ethical standards",
    vision: "competing favourably and ultimately taking the lead among reputable Law firms both locally and internationally",
    commitment: "deliver practical legal solutions with utmost prompt professionalism and expertise"
  },

  services: [
    {
      icon: <FaBalanceScale size={50} className="icon-hover" />,
      title: "Commercial Law",
      number: "01",
      description: "Our expert team handles contracts and debt recovery with unmatched precision and strategic insight.",
      link: "/service-details"
    },
    {
      icon: <FaGavel size={50} className="icon-hover" />,
      title: "Arbitration",
      number: "02",
      description: "We offer effective dispute resolution through skilled arbitration and mediation services.",
      link: "/service-details"
    },
    {
      icon: <FaLightbulb size={50} className="icon-hover" />,
      title: "Intellectual Property",
      number: "03",
      description: "Protect your innovations and creative works with our comprehensive intellectual property services.",
      link: "/service-details"
    },
    {
      icon: <FaShip size={50} className="icon-hover" />,
      title: "Maritime Law",
      number: "04",
      description: "Our team expertly navigates maritime regulations and disputes, ensuring favorable outcomes.",
      link: "/service-details"
    },
    {
      icon: <FaHome size={50} className="icon-hover" />,
      title: "Property Law",
      number: "05",
      description: "Receive expert advice on property transactions and disputes with our in-depth property law services.",
      link: "/service-details"
    },
    {
      icon: <FaVoteYea size={50} className="icon-hover" />,
      title: "Election Law",
      number: "06",
      description: "We provide legal guidance on election-related issues and campaign regulations to ensure compliance.",
      link: "/service-details"
    },
    {
      icon: <FaHeartBroken size={50} className="icon-hover" />,
      title: "Family Law",
      number: "07",
      description: "Expert handling of divorce and matrimonial disputes with sensitivity and professionalism.",
      link: "/service-details"
    },
    // New Services
    {
      icon: <FaBook size={50} className="icon-hover" />,
      title: "Corporate Law Practice",
      number: "08",
      description: "Specializing in corporate law matters including governance, compliance, and corporate disputes.",
      link: "/service-details"
    },
    {
      icon: <FaHome size={50} className="icon-hover" />,
      title: "Property Consultancy",
      number: "09",
      description: "Offering expert advice on property investments, management, and legal issues.",
      link: "/service-details"
    },
    {
      icon: <FaDollarSign size={50} className="icon-hover" />,
      title: "Debt Recovery",
      number: "10",
      description: "Providing efficient solutions for recovering outstanding debts through legal channels.",
      link: "/service-details"
    },
    {
      icon: <FaHandshake size={50} className="icon-hover" />,
      title: "Soliciting",
      number: "11",
      description: "Handling legal soliciting services for various types of agreements and negotiations.",
      link: "/service-details"
    },
    {
      icon: <FaFileContract size={50} className="icon-hover" />,
      title: "Legal Research",
      number: "12",
      description: "Conducting thorough legal research to support your cases and legal matters.",
      link: "/service-details"
    },
    {
      icon: <FaUsers size={50} className="icon-hover" />,
      title: "Corporate Consultants",
      number: "13",
      description: "Offering consulting services for corporate management and operational strategies.",
      link: "/service-details"
    },
    {
      icon: <FaChartLine size={50} className="icon-hover" />,
      title: "General Litigation",
      number: "14",
      description: "Expert representation in general commercial and labor law disputes.",
      link: "/service-details"
    },
    {
      icon: <FaBook size={50} className="icon-hover" />,
      title: "Alternative Dispute Resolution (ADR)",
      number: "15",
      description: "Providing alternative methods for resolving disputes outside of traditional court settings.",
      link: "/service-details"
    },
    {
      icon: <FaFileContract size={50} className="icon-hover" />,
      title: "Legal Drafting",
      number: "16",
      description: "Drafting and reviewing MOUs, leases, contracts, agreements, and conveyances with precision.",
      link: "/service-details"
    },
    {
      icon: <FaBook size={50} className="icon-hover" />,
      title: "Time-Tested Legal Opinions",
      number: "17",
      description: "Providing reliable legal opinions on complex and straightforward legal issues.",
      link: "/service-details"
    }
  ],

  whyChooseUs: [
    "Extensive experience across various legal fields",
    "Customized strategies to meet your unique needs",
    "Commitment to achieving favorable outcomes",
    "Dedicated support and clear communication"
  ]
};

SwiperCore.use([Autoplay, Pagination]);

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // animation happens only once
    });
  }, []);
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
     <div className="slider-area d-flex align-items-md-center">
      <div className="container">
        <div className="row align-items-center slider-content-container">
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-right" // Apply AOS animation
          >
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
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
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

          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-left" // Apply AOS animation
          >
            <div className="slider-content">
            <h1> Telimissionhills&Co. </h1>
              <h1 style={{fontSize: '3rem'}}>
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
                    <a href="tel:+19876543210">+234 7036719282</a>{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* slider shape */}
          <div className="slider-shape" data-aos="fade-up">
            <div className="slider-shape-thumb">
              <img src="assets/images/slider/hero-shape.png" alt="shape1" />
            </div>
            <div className="slider-shape-thumb2">
              <img src="assets/images/slider/hero-shape2.png" alt="shape2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServicesSection services={services} />
      <AboutSection />
      <div className="why-choose-us-area py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consen-section-title">
                <h5>Why Choose {telimissionHillsData.companyName}?</h5>
                <h2>Your Trusted Legal Partner</h2>
                <p className="choose-text1">
                  At {telimissionHillsData.companyName}, we specialize in delivering tailored legal solutions with unmatched expertise. Our proactive approach ensures efficient handling of your legal matters, providing you with the confidence and support you need.
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {telimissionHillsData.whyChooseUs.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        flex: '1 1 calc(50% - 16px)', // 50% width minus gap for two items per row
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px', // Space between icon and text
                        color: '#4a4a4a', // Gray color for text
                      }}
                    >
                      <i
                        className="bi bi-arrow-right-circle"
                        style={{
                          color: '#1d4ed8', // Blue color for icon
                          fontSize: '24px', // Icon size
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-thumb">
                <img
                  src="law.jpeg"
                  alt="Legal Services"
                  style={{ borderRadius: '30px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <TeamSection />
    </Layout>
  );
};
export default Index;

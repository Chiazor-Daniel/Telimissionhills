import Breadcumb from "@/src/components/Breadcumb";
import { useState } from "react";
import LogoSlider from "@/src/components/LogoSlider";
import ProgressBar from "@/src/components/ProgressBar";
import ModalForm from "@/src/components/modal";
import Layout from "@/src/layout/Layout";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import TBH from "@/src/components/tbh/tbh";
const Service = () => {
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
  
  return (
    <Layout>  
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start call do action Section */}
      {/*===================================================*/}
      <div className="call-do-action-section" style={{height: '500px', justifyContent: 'center'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 justify-content-center" style={{marginTop: '50px'}}>
              <div className="call-do-action-content text-center">
                <h1 className="text-white">
                Let's ensure the swift return of your funds! <br />
                </h1>
                <p className="text-white" style={{width: 'auto'}}>
                If you've been defrauded, reach out to us, and our team of experts will diligently work to secure the swift recovery of your assets.
                </p>
                <div className="btn-common btn-cda mt-40" onClick={()=>setHandleShow(!handleShow)}>
                  <Link legacyBehavior href="" >
                    <a>Get a Free Consulation</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                  <ModalForm showForm={handleShow} handleToggle={(y)=>setHandleShow(y)}/>
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
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <h1 style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px', color:'gray'}}>How It Works</h1>
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
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Brand Section */}
      {/*===================================================*/}
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
      <TBH />
    </Layout>
  );
};
export default Service;

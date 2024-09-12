import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import 'aos/dist/aos.css';

const ServicesSection = ({ services, all }) => {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration in ms
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <div className="" style={{ background: '', paddingTop: '0px' }}>
      <div className="">
        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-lg-3 col-sm-6 p-0"
              style={{ cursor: 'pointer' }}
              key={index}
            
            >
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
                    <Link legacyBehavior href={'/service'}>
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

        {/* Explore All Services Button */}
        <div className="container row align-items-center mb-90" data-aos="fade-up">
          <div className="col-lg-7 col-md-8 pl-0">
          </div>
          <div className="col-lg-5 col-md-4">
            <div className="consen-button text-right">
              {
                !all && (
              <Link legacyBehavior href="/service">
                <a>
                  {" "}
                  Explore All Services <i className="bi bi-plus" />{" "}
                </a>
              </Link>

                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

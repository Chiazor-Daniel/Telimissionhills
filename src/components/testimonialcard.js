import React, { useEffect } from 'react';
import Avatar from 'react-avatar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialCard = ({ quote, name, company }) => (
  <div className="testimonial-single-box" data-aos="fade-up" data-aos-delay="200">
    <div className="testimonial-content">
      <div className="testimonial-icon">
        <i className="fas fa-quote-right"></i>
      </div>
      <p>{quote}</p>
    </div>
    <div className="testimonial-author">
      <div className="testimonial-author-thumb">
        {/* Using Avatar for author image */}
        <Avatar name={name} round={true} size="80" />
      </div>
      <div className="testimonial-author-title">
        <h4>{name}</h4>
        <span>{company}</span>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Francis Anene",
      company: "BH Logistics",
      quote: "TelimissionHills provides exceptional legal counsel during our Company's partnership with N.M.T USA. Their expertise in corporate law is invaluable."
    },
    {
      name: "Aribibia Billy",
      company: "ARI Marine Services Ltd.",
      quote: "In our complex maritime dispute, TelimissionHills' expertise paid off. They navigated the case with skill, dexterity, and commitment, leading to our achieving the most desired favorable outcome."
    },
    // {
    //   name: "Robert Chen",
    //   company: "Innovate Tech",
    //   quote: "Their intellectual property team helped us secure crucial patents. Their professionalism and attention to detail are unmatched."
    // }
  ];
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="testimonial-area pt-95 pb-70">
      <div className="container">
        {/* Section title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="consen-section-title text-center pb-50">
              <h5>Testimonials</h5>
              <h2 style={{ color: 'white' }}>
                What Our <span>Clients Say</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Testimonial Cards */}
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

import React, { useEffect, useState } from 'react';
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import Avatar from 'react-avatar';
import axios from 'axios';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("https://recover.finnetexh.tech/user/general-route/get-testimonials/");
        const testimonialsData = res.data.message;

        const testimonialsWithImages = await Promise.all(
          testimonialsData.map(async (testimonial) => {
            try {
              const imageRes = await axios.get(`https://recover.finnetexh.tech/user/general-route/get-testimonial-image/${testimonial.id}`, {
                responseType: 'arraybuffer'
              });
              const base64Image = Buffer.from(imageRes.data, 'binary').toString('base64');
              return { ...testimonial, imageSrc: `data:image/png;base64,${base64Image}` };
            } catch (imageErr) {
              return { ...testimonial, imageSrc: "https://via.placeholder.com/150" };
            }
          })
        );

        setTestimonials(testimonialsWithImages);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <Layout>
      <Breadcumb pageName={"Testimonial"} test={"Testimonial"} />
      <div className="testimonial-area style-two">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-12">
              <div className="consen-section-title pb-50 text-center upper">
                <h5> Testimonials </h5>
                <h2> Margin Watcher Testimonials </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-lg-4 col-md-6">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        {testimonial.imageSrc ? (
                          <img src={testimonial.imageSrc} alt={testimonial.fullname} style={{ width: '70px', height: '70px' }} />
                        ) : (
                          <Avatar name={testimonial.fullname} round size="50" />
                        )}
                      </div>
                      <div className="quote-title">
                        <h4>{testimonial.fullname}</h4>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>{testimonial.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testi-shape">
            <div className="testi-shape-thumb">
              <img src="assets/images/resource/all-shape5.png" alt="shape" />
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container">
          <div className="subscribe">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="subscribe-title">
                  <h1>Get your Free Business Consulation</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <a href="tel:09837393403" className="subscribe-icon">
                  <i className="bi bi-telephone-inbound" />
                </a>
                <div className="subscribe-title2">
                  <h1>+98 376 (2890) 100</h1>
                  <p>example@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonial;

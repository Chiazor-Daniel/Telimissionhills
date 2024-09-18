import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import Swal from 'sweetalert2';
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    web: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'info',
      title: 'Do you want to send the message?',
      showCancelButton: true,
      confirmButtonText: 'Send',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully.',
        });

        // Clear the form inputs
        setFormData({
          name: "",
          email: "",
          phone: "",
          web: "",
          message: "",
        });
      }
    });
  };

  return (
    <Layout footer={1}>
     <div className="call-do-action-section" style={{ height: '500px', justifyContent: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 justify-content-center" style={{ marginTop: '50px' }}>
              <div className="call-do-action-content text-center">
                <h1 className="text-white">
                  Schedule a meeting
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Appoinment Section */}
      {/*===================================================*/}
      <div className="contact-us pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-8 pl-0 pr-0">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h3>Get In Touch</h3>
                </div>
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  id="dreamit-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="quote_button">
                        <button className="btn" type="submit">
                          {" "}
                          <i className="bi bi-gear" /> Get Consultant
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 pl-0 pr-0">
              <div className="cda-content-area">
                <div className="cda-single-content d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Company Location</h4>
                    <p>
                    No. 197 Odili Road, Opposite Parkland Estate, Trans-Amadi,
                    Port Harcourt, Rivers State, Nigeria
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Telephone Number</h4>
                    <p>
                      +234 803 869 4203, <br />
                      +234 703 671 9282,{" "} <br />
                      +234 8064371940,{" "}
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Our Email Address</h4>
                    <p>
                    telimissionhills@gmail.com
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Contact Location Section */}
      {/*===================================================*/}
   
    </Layout>
  );
};
export default Contact;

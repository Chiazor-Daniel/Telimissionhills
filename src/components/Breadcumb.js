import Link from "next/link";

const Breadcumb = ({ pageName, contact, blog, about, blogDetails, test }) => {
  return (
    <div className="breadcumb-area d-flex align-items-center" style={{ paddingTop: '100px', minHeight: '500px' }}>
      <div className="container">
        {
          contact && <h1 style={{ textAlign: 'center', color: 'white' }}>Get In Contact To Get
            <br />
            <span style={{ color: '#ff3c00' }}>
              Your Funds Back!
            </span>
          </h1>
        }
        {
          blog && <h1 style={{ textAlign: 'center', color: 'white' }}>Blogs
          </h1>
        }
        {
          test && <h1 style={{ textAlign: 'center', color: 'white' }}>Testimonials
          </h1>
        }
        {
          blogDetails && <h1 style={{ textAlign: 'center', color: 'white' }}>Blog Details
          </h1>
        }
        {
          about && <h1 style={{ textAlign: 'center', color: 'white' }}>About US
          </h1>
        }
        {!pageName && (<div className="row d-flex align-items-center" >
          <div className="col-lg-6">
            <div className="breadcumb-content">
              <h1 style={{ color: '#ff3c00' }}> Black listed Companies <br /> & Websites </h1>
              <ul>
                <li>
                  {/* <Link href="/">Home</Link> */}
                </li>
                <li style={{ color: 'white' }}>In front of you is a list of companies & websites that have been flagged as a scam/fraud by us or official regulatory bodies of various countries. Search this database and check if you were exposed to one of these scammers. </li>
              </ul>
            </div>
          </div>
          <div className="contact_from col-6 align-items-center justify-content-center" >
            <form onSubmit={(e) => e.preventDefault()} id="dreamit-form">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form_box mb-20">
                    <input type="text" name="name" placeholder="Type in Company Name" />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="quote_button" >
                    <button className="btn" type="submit" style={{ backgroundColor: '#ff3c00', fontSize: '1.3rem' }}>
                      {" "}
                      <i className="bi bi-gear" /> Check{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div id="status" />
          </div>
          <div className="britcam-shape">
            <div className="breadcumb-content upp">
              <ul>
                <li>
                  {/* <Link href="/">Home</Link> */}
                </li>
                <li>  </li>
              </ul>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};
export default Breadcumb;

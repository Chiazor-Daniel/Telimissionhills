import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const CaseStudies = dynamic(
  () => import("@/src/components/isotope/CaseStudies"),
  {
    ssr: false,
  }
);

const Portfolio = () => {
  const [companies, setCompanies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get("https://recover.finnetexh.tech/user/general-route/get-companies-details/");
        const companiesData = res.data.message;

        const companiesWithImages = await Promise.all(
          companiesData.map(async (company) => {
            try {
              const imageRes = await axios.get(`https://recover.finnetexh.tech/user/general-route/get-company-image/${company.id}?image_type=logo`, {
                responseType: 'arraybuffer'
              });
              const base64Image = Buffer.from(imageRes.data, 'binary').toString('base64');
              return { ...company, imageUrl: `data:image/png;base64,${base64Image}` };
            } catch (imageErr) {
              return { ...company, imageUrl: "https://via.placeholder.com/150" };
            }
          })
        );

        setCompanies(companiesWithImages);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <Layout>
      <Breadcumb />
      <div className="service-area new-style">
        <div className="container">
          {error && <div>Error: {error}</div>}
          {!companies && !error && <div>Loading...</div>}
          {Array.isArray(companies) && (
            <div className="row">
              {companies.map((company, index) => (
                <div className="col-lg-12 col-md-6" key={index}>
                  <div className="single-service-box row align-items-center">
                    <div className="service-box-thumb col-2">
                      <img src={company.imageUrl} alt={company.company_name} />
                    </div>
                    <div className="service-content col-7">
                      <h2>{company.company_name}</h2>
                      <p>{company.description}</p>
                      <Link legacyBehavior href={company.company_url}>
                        <a target="_blank" rel="noopener noreferrer">Visit Company</a>
                      </Link>
                    </div>
                    <Link href={'/contact'} className="" style={{backgroundColor: '#ff3c00', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', borderRadius: '20px'}}>
                      Get Your Funds Back
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;

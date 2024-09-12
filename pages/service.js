import React from 'react';
import Layout from "@/src/layout/Layout";
import ServicesSection from "@/src/components/service";
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


const Service = () => {
  return (
    <Layout footer={1}>
      {/* Hero Section */}
      <div className="call-do-action-section" style={{ height: '500px', justifyContent: 'center', backgroundImage: 'url("https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 justify-content-center" style={{ marginTop: '50px' }}>
              <div className="call-do-action-content text-center">
                <h1 className="text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  About Us
                </h1>
                <p className="text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  Discover how {telimissionHillsData.companyName} provides exceptional legal services and innovative solutions tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="mb-4">Our Mission</h2>
              <p className="lead">
                {telimissionHillsData.missionStatement.mainGoal}, {telimissionHillsData.missionStatement.vision}.
              </p>
              <p>
                It is our quest and passion to {telimissionHillsData.missionStatement.commitment}. This stands us out as a firm and propels clients to prefer our legal services above other available choices.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="mb-4">About {telimissionHillsData.companyName}</h2>
            <p>{telimissionHillsData.aboutUs.description}</p>
            <p>
              Our Law firm is constituted by {telimissionHillsData.aboutUs.partners.count} Partners of {telimissionHillsData.aboutUs.partners.experience} experience who have carved a niche for themselves in:
            </p>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>

              {telimissionHillsData.aboutUs.expertise.map((item, index) => (
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
          <div className="col-lg-6">
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="TelimissionHills & Co Team"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}


      {/* Services Section */}
      <div className='container mt-5'>
        <h2 className="text-center mb-4">Our Services</h2>
        <ServicesSection services={telimissionHillsData.services} all={true} />
      </div>

      {/* Why Choose Us Section */}
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
    </Layout>
  );
};

export default Service;
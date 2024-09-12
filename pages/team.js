import React, { useState } from 'react';
import Layout from "@/src/layout/Layout";
import ServicesSection from "@/src/components/service";
import TBH from "@/src/components/tbh/tbh";
import Link from "next/link";
import { FaBalanceScale, FaGavel, FaLightbulb, FaShip, FaHome, FaVoteYea, FaHeartBroken } from "react-icons/fa";
import { TeamSection } from '@/src/components/members';

const Team = () => {
  const [handleShow, setHandleShow] = useState(false);
  
  const services = [
    {
      icon: <FaBalanceScale size={50} className="icon-hover" />,
      title: 'Commercial Law',
      number: '01',
      description: 'Our expert team handles contracts and debt recovery with unmatched precision and strategic insight.',
      link: '/service-details'
    },
    {
      icon: <FaGavel size={50} className="icon-hover" />,
      title: 'Arbitration',
      number: '02',
      description: 'We offer effective dispute resolution through skilled arbitration and mediation services.',
      link: '/service-details'
    },
    {
      icon: <FaLightbulb size={50} className="icon-hover" />,
      title: 'Intellectual Property',
      number: '03',
      description: 'Protect your innovations and creative works with our comprehensive intellectual property services.',
      link: '/service-details'
    },
    {
      icon: <FaShip size={50} className="icon-hover" />,
      title: 'Maritime Law',
      number: '04',
      description: 'Our team expertly navigates maritime regulations and disputes, ensuring favorable outcomes.',
      link: '/service-details'
    },
    {
      icon: <FaHome size={50} className="icon-hover" />,
      title: 'Property Law',
      number: '05',
      description: 'Receive expert advice on property transactions and disputes with our in-depth property law services.',
      link: '/service-details'
    },
    {
      icon: <FaVoteYea size={50} className="icon-hover" />,
      title: 'Election Law',
      number: '06',
      description: 'We provide legal guidance on election-related issues and campaign regulations to ensure compliance.',
      link: '/service-details'
    },
    {
      icon: <FaHeartBroken size={50} className="icon-hover" />,
      title: 'Family Law',
      number: '07',
      description: 'Expert handling of divorce and matrimonial disputes with sensitivity and professionalism.',
      link: '/service-details'
    }
  ];

  return (
    <Layout footer={1}>  
      {/*==================================================*/}
      {/* Start call to action Section */}
      {/*===================================================*/}
      <div className="call-do-action-section" style={{ height: '500px', justifyContent: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 justify-content-center" style={{ marginTop: '50px' }}>
              <div className="call-do-action-content text-center">
                <h1 className="text-white">
                  Meet Our Team
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
        <TeamSection legal={true}/>
      
  
    </Layout>
  );
};

export default Team;

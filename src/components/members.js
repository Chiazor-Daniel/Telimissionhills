import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const TeamSection = ({ legal }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);

  const MemberCard = ({ image, name, position, description, dataAos }) => {
    return (
      <div className={`team-single-box ${dataAos}`} data-aos="fade-up">
        <div className="team-thumb" style={{ padding: '20px' }}>
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>
        <div className="team-content" style={{ textAlign: 'center' }}>
          <h4>{name}</h4>
          <span>{position}</span>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  const teamMembers = [
    {
      name: "NWOKE GODWIN OKEZIE, ESQ",
      position: "Lead Partner",
      image: "sir1.jpeg",
      description: "Nwoke Godwin Okezie, Esq Graduated from Rivers State University in 2003 L.L.B and later called to bar earned L.L.M in 2024 from the Rivers State University.",
      dataAos: "aos-left"
    },
    {
      name: "NOEL ELOHO IGHOTA, ESQ.",
      position: "Partner",
      image: "sir2.jpeg",
      description: "Noel Eloho Ighota, Esq was called to the Bar in 2010. L.L.B (Hons) in 2008 and DIL in 2004 from Delta State University, Abraka.",
      dataAos: "aos-right"
    },
    {
      name: "REGINA OREIGHE OVORO, ESQ",
      position: "Partner",
      image: "ma.jpeg",
      description: "Regina Oreighe Ovoro, Esq was called to Bar in 2014. L.L.B (Hons) in Madonna University.",
      dataAos: "aos-left"
    }
  ];

  return (
    <div className="team-area pt-95 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {
              !legal && (     
              <div className="consen-section-title text-center pb-50">
                <h5>Our Experts</h5>
                <h2>
                  Meet Our <span>Legal Team</span>
                </h2>
              </div>
              )
            }
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            alignItems: 'start',
          }}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className={index % 2 === 0 ? 'team-left' : 'team-right'}>
              <MemberCard {...member} dataAos={member.dataAos} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

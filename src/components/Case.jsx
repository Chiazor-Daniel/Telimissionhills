'use client';
import { useState } from 'react';

const cases = [
  // New cases at the top
  {
    id: '01',
    title: 'Gen.TY Danjuma(Rtd) v Pastor Paul Rika & HOREMOW',
    category: 'Defamation Law',
    summary:
      'High profile defamation case where Gen T.Y Danjuma(Rtd) claims 1 billion Naira against our clients Pastor Paul Rika and HOREMOW. Defence filed with preliminary objection to Lagos High Court jurisdiction. Case referred to mediation committee for potential out-of-court settlement.',
    outcome:
      'Ongoing; actively participating in mediation to resolve matter amicably',
  },
  {
    id: '02',
    title: 'King George Eppie v Dr. Chujor S.N. Chujor',
    category: 'Property & Land Law',
    summary:
      'Land dispute with our client King George Eppie as Claimant against Dr. Chujor S. Chujor for trespass on our client’s land at Rivers State High Court, Inchia Division.',
    outcome: 'Pending in court',
  },
  {
    id: '03',
    title: 'Ms Florence Nnnena Cookey-Gam v Abigail Power Ogichen & 2 Ors',
    category: 'Property Law',
    summary:
      'Our client Ms Cookey-Gam was illegally dispossessed of her property. We intervened, restored her title, and obtained voluntary settlement and consent judgment in her favor.',
    outcome: 'Title restored and consent judgment entered',
  },
  {
    id: '04',
    title: 'Dr. Patrick Innocent v PHED',
    category: 'Administrative & Utility Law',
    summary:
      'Client served with unsubstantiated bills and disconnected by PHED. Petitioned NERC which ruled in favor of client. Filed suit against PHED for non-compliance with NERC ruling.',
    outcome: 'Pending in Rivers State High Court',
  },
  {
    id: '05',
    title:
      'Chijioke Jerry Dike Ogbulubi v Mr. Promise Nwankwo & Persons Unknown',
    category: 'Property & Trespass Law',
    summary:
      'Client returned to find land purchased from Mr. Promise Nwankwo trespassed upon. Filed suit against vendor and unknown trespassers. Court ordered site visit before judgment.',
    outcome: 'Pending in Rivers State High Court',
  },
  {
    id: '06',
    title: 'Mrs. Victoria Ngozi Alumni v Fred Owoko',
    category: 'Property Law / Church Title',
    summary:
      "Inherited case defending church's title to land conveyed by Mr. Fred Owoko. Successfully restored case to cause list and challenged fraudulent judgment. Court awarded punitive costs and ordered accelerated hearing.",
    outcome: 'Pending; poised to set aside fraudulent judgment',
  },

  // Original cases follow
  {
    id: '07',
    title: 'Rev. Peter Nganje v. Mrs. Peter Nganje',
    category: 'Family & Custody Law',
    summary:
      'Petitioner sought sole custody without access to Respondent. We represented the Respondent and filed a Cross Petition for custody, maintenance, and property settlement. Court advised settlement on welfare of children. Settlement succeeded; client received part of the disputed properties, and consent judgment was entered.',
    outcome: 'Client secured property settlement and favorable custody terms',
  },
  {
    id: '08',
    title: 'Mrs. Joy Abasu Umoh V. Dr. Abasu Umoh',
    category: 'Matrimonial & Property Law',
    summary:
      'Family dispute. Our client (Petitioner) sought dissolution of marriage and claimed ₦30 million as her contribution to properties acquired during marriage.',
    outcome: 'Judgment delivered in favor of our client',
  },
  {
    id: '09',
    title: 'Barr. Charles Nwogu V. Mr. Uchenna Nwogu',
    category: 'Property & Inheritance Law',
    summary:
      "Inheritance dispute. Claimant claimed our client's property as family property and sought letters of administration. We counterclaimed for title and declaration as rightful owner.",
    outcome: "Successful defense of client's property rights",
  },
  {
    id: '10',
    title: 'Joy Okwuchi Amara V. George Ogbaji Amara',
    category: 'Matrimonial Law',
    summary:
      'Matrimonial suit. We represented the Petitioner and won judgment. Respondent filed for review, which we opposed and was dismissed.',
    outcome: 'Favorable judgment secured and upheld',
  },
  {
    id: '11',
    title: 'Dr. Chidiebere Okeke v. Mrs. Onyeka Okeke',
    category: 'Family & Custody Law',
    summary:
      "Custody case. We represented the Respondent seeking unrestricted access to children. We opposed the application and judgment was in our client's favor.",
    outcome: "Client's parental rights protected",
  },
  {
    id: '12',
    title: 'Ngus Ugochukwu Ojiaku V. Commissioner of Police & 4',
    category: 'Constitutional Law',
    summary:
      'Fundamental rights suit involving constitutional violations and civil liberties protection. Case was amicably resolved.',
    outcome: 'Amicably settled with client satisfaction',
  },
  {
    id: '13',
    title: 'Merit Orlu-Nene & 4 Ors V. Christian Orlu-Nene & 1 Ors',
    category: 'Customary & Inheritance Law',
    summary:
      'Inheritance case. Claimant contended for right of inheritance in family property as females under Ikwere native law and custom.',
    outcome: 'Successfully established inheritance rights',
  },
];

const Cases = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '100px 40px',
      backgroundColor: '#fafafa',
    },

    header: {
      textAlign: 'center',
      marginBottom: '80px',
      maxWidth: '800px',
      margin: '0 auto 80px auto',
    },

    subtitle: {
      color: '#8b7355',
      fontSize: '14px',
      fontWeight: '400',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      marginBottom: '20px',
    },

    title: {
      color: '#2c2c2c',
      fontSize: '48px',
      fontWeight: '400',
      marginBottom: '30px',
      lineHeight: '1.1',
      fontFamily: "'Georgia', 'Times New Roman', serif",
    },

    description: {
      color: '#666',
      fontSize: '18px',
      lineHeight: '1.8',
      fontWeight: '300',
    },

    casesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2px',
      backgroundColor: '#e5e5e5',
      border: '1px solid #e5e5e5',
    },

    caseCard: {
      backgroundColor: '#ffffff',
      padding: '50px 40px',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      borderBottom: '3px solid transparent',
      position: 'relative',
    },

    caseCardHover: {
      backgroundColor: '#f8f8f8',
      borderBottomColor: '#8b7355',
    },

    caseNumber: {
      color: '#8b7355',
      fontSize: '14px',
      fontWeight: '500',
      letterSpacing: '2px',
      marginBottom: '20px',
      fontFamily: "'Arial', sans-serif",
    },

    caseTitle: {
      color: '#2c2c2c',
      fontSize: '22px',
      fontWeight: '400',
      marginBottom: '15px',
      lineHeight: '1.3',
      fontFamily: "'Georgia', 'Times New Roman', serif",
    },

    caseCategory: {
      color: '#8b7355',
      fontSize: '13px',
      fontWeight: '500',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: '40px',
      fontFamily: "'Arial', sans-serif",
    },

    caseSummary: {
      color: '#666',
      fontSize: '15px',
      lineHeight: '1.6',
      marginBottom: '25px',
      fontWeight: '300',
    },

    caseOutcome: {
      color: '#2c2c2c',
      fontSize: '14px',
      fontWeight: '500',
      fontStyle: 'italic',
      borderTop: '1px solid #e5e5e5',
      paddingTop: '20px',
    },

    expandedCase: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0,0,0,0.8)',
      zIndex: '1000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
    },

    expandedContent: {
      backgroundColor: '#ffffff',
      maxWidth: '800px',
      maxHeight: '80vh',
      overflow: 'auto',
      padding: '60px',
      position: 'relative',
    },

    closeButton: {
      position: 'absolute',
      top: '30px',
      right: '30px',
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#666',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    expandedTitle: {
      color: '#2c2c2c',
      fontSize: '32px',
      fontWeight: '400',
      marginBottom: '20px',
      lineHeight: '1.2',
      fontFamily: "'Georgia', 'Times New Roman', serif",
    },

    expandedCategory: {
      color: '#8b7355',
      fontSize: '14px',
      fontWeight: '500',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '40px',
      fontFamily: "'Arial', sans-serif",
    },

    expandedSection: {
      marginBottom: '40px',
    },

    sectionTitle: {
      color: '#2c2c2c',
      fontSize: '18px',
      fontWeight: '500',
      marginBottom: '20px',
      fontFamily: "'Arial', sans-serif",
    },

    sectionText: {
      color: '#666',
      fontSize: '16px',
      lineHeight: '1.7',
      fontWeight: '300',
    },

    outcomeBox: {
      backgroundColor: '#f8f8f8',
      padding: '30px',
      borderLeft: '4px solid #8b7355',
      marginTop: '30px',
    },
  };

  const mediaStyles = `
    @media (max-width: 768px) {
      .cases-grid {
        grid-template-columns: 1fr !important;
      }
      
      .case-card {
        padding: 30px 25px !important;
      }
      
      .expanded-content {
        padding: 40px 30px !important;
        margin: 20px !important;
      }
      
      .container {
        padding: 60px 20px !important;
      }
      
      .title {
        font-size: 36px !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <section style={styles.container} className='container'>
        <div style={styles.header}>
          <div style={styles.subtitle}>Case Studies</div>
          <h2 style={styles.title} className='title'>
            Notable Legal Victories
          </h2>
          <p style={styles.description}>
            Our firm's commitment to excellence is demonstrated through our
            successful representation across diverse legal matters, achieving
            favorable outcomes through strategic litigation and comprehensive
            legal counsel.
          </p>
        </div>

        <div
          style={{
            ...styles.casesGrid,
            transition: 'max-height 0.6s cubic-bezier(0.4,0,0.2,1)',
            maxHeight: showAll ? '2000px' : '800px',
            overflow: 'hidden',
          }}
          className='cases-grid'
          id='cases-grid'
        >
          {(showAll ? cases : cases.slice(0, 3)).map((caseItem, index) => (
            <div
              key={caseItem.id}
              style={styles.caseCard}
              className='case-card'
              onClick={() => setSelectedCase(showAll ? index : index)}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.caseCardHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, styles.caseCard);
              }}
            >
              <div style={styles.caseNumber}>{caseItem.id}</div>
              <h3 style={styles.caseTitle}>{caseItem.title}</h3>
              <div style={styles.caseCategory}>{caseItem.category}</div>
              <p style={styles.caseSummary}>
                {caseItem.summary.length > 120
                  ? `${caseItem.summary.substring(0, 120)}...`
                  : caseItem.summary}
              </p>
              <div style={styles.caseOutcome}>Result: {caseItem.outcome}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', margin: '32px 0' }}>
          <button
            style={{
              background: '#8b7355',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              padding: '12px 32px',
              fontSize: '18px',
              fontWeight: '500',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(44,62,80,0.08)',
              transition: 'background 0.2s',
            }}
            onClick={() => {
              setShowAll((prev) => {
                const next = !prev;
                setTimeout(() => {
                  const grid = document.getElementById('cases-grid');
                  if (grid) {
                    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 400);
                return next;
              });
            }}
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>

        {selectedCase !== null && (
          <div
            style={styles.expandedCase}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedCase(null);
              }
            }}
          >
            <div style={styles.expandedContent} className='expanded-content'>
              <button
                style={styles.closeButton}
                onClick={() => setSelectedCase(null)}
              >
                ×
              </button>

              <div style={styles.expandedCategory}>
                {cases[selectedCase].category}
              </div>

              <h3 style={styles.expandedTitle}>{cases[selectedCase].title}</h3>

              <div style={styles.expandedSection}>
                <h4 style={styles.sectionTitle}>Case Overview</h4>
                <p style={styles.sectionText}>{cases[selectedCase].summary}</p>
              </div>

              <div style={styles.outcomeBox}>
                <h4 style={styles.sectionTitle}>Legal Outcome</h4>
                <p style={styles.sectionText}>{cases[selectedCase].outcome}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cases;

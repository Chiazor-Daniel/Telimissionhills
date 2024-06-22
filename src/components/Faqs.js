import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData = [
  {
    id: 1,
    title: "Common Reasons Funds Are Inaccessible?",
  },
  { 
    id: 2, 
    title: "Initiating Fund Recovery Process?" 
  },
  { 
    id: 3, 
    title: "Typical Duration of Fund Recovery?" 
  },
  { 
    id: 4, 
    title: "Required Documents for Fund Recovery?" 
  },
];


const Faqs = () => {
  const [active, setActive] = useState(faqsData[0].id);
  
  return (
    <div id="tab1" className="tab_content">
      <Accordion
        defaultActiveKey={faqsData[0].id}
        as={"ul"}
        className="accordion"
      >
        {faqsData.map((faq) => (
          <li key={faq.id}>
            <Accordion.Toggle
              as="a"
              eventKey={faq.id}
              onClick={() => setActive(faq.id === active ? null : faq.id)}
              className={faq.id === active ? "active" : ""}
            >
              <span> {faq.title} </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={faq.id}>
              <p>
                Here you can provide specific information related to the question. For example, for the question "How can I initiate a fund recovery process?", you could explain the initial steps involved, such as contacting a recovery specialist and providing necessary documentation.
              </p>
            </Accordion.Collapse>
          </li>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;

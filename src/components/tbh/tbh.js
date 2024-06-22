'use client'
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BiSolidRightArrow } from "react-icons/bi";
import Link from 'next/link'; 
import { HiOutlineHashtag } from "react-icons/hi";

const Headings = ({ headings, activeId }) => (
  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? "active" : ""} style={{ fontSize: '1.2rem' }}>
        <a
          href={`#${heading.id}`}
          style={{ display: 'flex', alignItems: 'center', color: 'black', gap: '10px' }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          <BiSolidRightArrow size={12} />
          <span>
            {heading.title}
          </span>
        </a>
        {heading.items.length > 0 && (
          <ul style={{ listStyle: 'none' }}>
            {heading.items.map((child) => (
              <li
                key={child.id}
                className={child.id === activeId ? "active" : ""}
                style={{ fontSize: '0.9rem', color: 'grey' }}
              >
                <a
                  href={`#${child.id}`}
                  style={{ color: 'grey' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${child.id}`).scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("main h2, main h3")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title
      });
    }
  });

  return nestedHeadings;
};

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});

  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: document.querySelector("iframe"),
      rootMargin: "500px"
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

const TableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents" style={{
      width: '220px',
      minWidth: '220px',
      padding: '16px',
      margin: '8px',
      alignSelf: 'flex-start',
      position: 'sticky',
      top: '48px',
      maxHeight: 'calc(100vh - 70px)',
      overflow: 'auto',
      display: window.innerWidth <= 900 ? 'none' : 'block'
    }}>
      <p style={{ color: 'gray', margin: '0 auto', display: 'flex', padding: ' 10px', fontSize: '1.2rem', fontWeight: 'bold' }}>Table Of Content</p>

      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

const DummyText = {
  binaryOptions: "Binary options are a type of financial product classified as an exotic option. Binary options trading may seem like a new speculative market, but they’ve existed since 1974. They were created by one of the largest derivatives markets globally, CBOE (Chicago Board Options Exchange). It wasn’t until 2008 that binary options became primarily available to the public, and many entities copied the original CBOE asset type listing. Binary options are a type of option that allows you to guess whether the option expires in the money – that’s it. Some unregulated binary options brokers allow for guessing on out of the money outcomes. A simple yes or no bet is made, hence the name binary. Contemporary binary options have expiration times between a week to a few minutes, with the majority of modern binary options platforms specializing in under one-day expirations.",
  cryptocurrency: "Cryptocurrency has quickly become one of the most fascinating and volatile financial asset classes in the markets. As an investment, Bitcoin has had one of the highest returns in history. Bitcoin was created when the first significant impacts of the Great Recession were felt. Bitcoin was designed to be a source of value and a medium of trade, a decentralized virtual currency with a truly fixed supply to combat the rampant money printing by central banks. Bitcoin can be decentralized because of the blockchain technology and the distributed ledger.",
  forex: "Forex is the single largest traded market globally, with up to five trillion traded each day and is considered decentralized because there is no central processor for trades– in other words, there is no entity that acts as a central exchange like the NASDAQ or the NYSE. Instead, orders are completed by millions of traders using millions of various forex brokers around the world. Foreign currency trading is one of the most leveraged markets in the world as well. In the US, regulations limit a person to 50:1 leverage. In other countries, they have zero limits on leverage. It is not uncommon to see some non-US brokers offer 1000+:1. Due to these factors and a few others which we will discuss, this is why scams can be so prevalent within the foreign exchange market.",
  stockTrading: "Stock trading scams typically involve 'boiler room' operations, where high-pressure sales tactics are used to sell worthless or non-existent stocks. Victims are lured with promises of insider information or guaranteed profits, only to find their investments are worthless.",
  commonStockScams: "Common stock trading scams include 'pump and dump' schemes, where fraudsters artificially inflate a stock's price before selling off their shares, and 'short and distort' schemes, where false information is spread to drive a stock's price down for profit.",
  propertyScam: "Property scams often involve fraudsters selling or renting properties they do not own. They may create fake listings, demand upfront payments, and then disappear, leaving victims without their money or a place to live.",
  romanceScam: "Romance scams exploit emotional vulnerabilities by creating fake online personas to build romantic relationships with victims. Once trust is established, scammers invent emergencies or investment opportunities to solicit money from their unsuspecting partners.",
  otherScams: "Other common scams include lottery scams, where victims are told they've won a prize but must pay a fee to claim it, and charity scams, where fraudsters solicit donations for fake causes or organizations."
};

const TBH = () => {
  return (
    <>
      <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'flex', gap: '20px' }}>
        <main style={{
          maxWidth: '800px',
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          height: '800px',
          marginLeft: '8px'
        }}>
          <h2 id="binary-options" style={{ paddingTop: '16px', marginTop: '-16px', color: 'black' }}>Binary Options </h2>
          <p style={{ padding: '10px' }}>{DummyText.binaryOptions}</p>
          <h2 id="cryptocurrency" style={{ paddingTop: '16px', marginTop: '-16px', color: 'black' }}>Cryptocurrency </h2>
          <p style={{ padding: '10px' }}>{DummyText.cryptocurrency}</p>
          <h3 id="types-of-crypto-scams" style={{ paddingTop: '16px', marginTop: '-16px', color: 'black' }}>Types of Cryptocurrency Scams</h3>
          <p>{DummyText.typesOfCryptoScams}</p>
          <h2 id="forex" style={{ paddingTop: '16px', marginTop: '-16px', color: 'black' }}>Forex </h2>
          <p style={{ padding: '10px' }}>{DummyText.forex}</p>
          <h2 id="stock-trading" style={{ paddingTop: '16px', marginTop: '-16px', color: 'black' }}>Stock Trading </h2>
          <p>{DummyText.stockTrading}</p>
          <h3 id="common-stock-scams" style={{ paddingTop: '16px', marginTop: '-16px', color: 'black' }}>Common Stock Trading </h3>
          <p style={{ padding: '10px' }}>{DummyText.commonStockScams}</p>
          <h2 id="property-scam" style={{ paddingTop: '16px', marginTop: '-16px', color: 'black' }}>Property </h2>
          <p style={{ padding: '10px' }}>{DummyText.propertyScam}</p>
          <h2 id="romance-scam" style={{ paddingTop: '16px', marginTop: '-16px', color: 'black' }}>Romance </h2>
          <p style={{ padding: '10px' }}>{DummyText.romanceScam}</p>
          <h2 id="other-scams" style={{ paddingTop: '16px', marginTop: '-16px', color: 'black' }}>Other </h2>
          <p style={{ padding: '10px' }}>{DummyText.otherScams}</p>
        </main>
        <TableOfContents />
      </div>
    </>
  );
};

export default TBH;

"use client"
import CountUp from "react-countup";
import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const Counter = ({ end, decimals, dollars }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
      redraw={true}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={isVisible => isVisible && start()} delayedCall>
          <em className="counter" data-from="0" data-to={end} ref={countUpRef}>
            {dollars ? "$" : ""}
            {isVisible ? (dollars ? `$${end}` : end) : 0}
          </em>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;

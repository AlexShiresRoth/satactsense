import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type Props = {
  testimonial: any;
  testStyle: any;
};

const Testimonial = ({ testimonial, testStyle }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const end = 300;
  return (
    <>
      <div className={testStyle.col}>
        <FaQuoteLeft />
        <p>{testimonial.text.substr(0, end)}...</p>
        <FaQuoteRight />
        <h4>-{testimonial.author}</h4>
        {testimonial.text.length > end && (
          <button onClick={() => setVisible(true)}>expand</button>
        )}
      </div>
      {visible ? (
        <div className={testStyle.testimonial_full}>
          <div className={testStyle.testimonial}>
            <FaQuoteLeft />
            <p>{testimonial.text}</p>
            <FaQuoteRight />
            <h4>-{testimonial.author}</h4>
            <button onClick={() => setVisible(false)}>close</button>
          </div>
        </div>
      ) : (
        <div className={testStyle.testimonial_hidden}></div>
      )}
    </>
  );
};

export default Testimonial;

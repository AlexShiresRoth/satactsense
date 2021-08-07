import React from "react";
import testStyle from "./Testimonials.module.scss";
import { ratings } from "./ratings";
import Testimonial from "./Testimonial";
const Header = () => {
  return (
    <section className={testStyle.section}>
      <div className={testStyle.heading}>
        <h2>Testimonials</h2>
      </div>

      <div className={testStyle.inner}>
        <div className={testStyle.container}>
          {ratings.map((testimonial, i) => {
            return (
              <Testimonial
                testimonial={testimonial}
                key={i}
                testStyle={testStyle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;

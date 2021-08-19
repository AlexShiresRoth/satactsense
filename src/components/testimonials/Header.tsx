import React from "react";
import testStyle from "./Testimonials.module.scss";
import { ratings } from "./ratings";
import Testimonial from "./Testimonial";
import { useState } from "react";
import LoadingSpinner from "../reusable/LoadingSpinner";
const Header = () => {
  const [max, setMax] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setMax((prevCount) => prevCount + 3);
      setLoading(false);
    }, 3000);
  };

  return (
    <section className={testStyle.section}>
      <div className={testStyle.heading}>
        <h2>Testimonials</h2>
      </div>

      <div className={testStyle.inner}>
        <div className={testStyle.container}>
          {ratings
            .map((testimonial, i) => {
              return (
                <Testimonial
                  testimonial={testimonial}
                  key={i}
                  testStyle={testStyle}
                />
              );
            })
            .slice(0, max)}
        </div>
        <div className={testStyle.load_more}>
          {loading && <LoadingSpinner />}
          {max < ratings.length && !loading && (
            <button onClick={(e) => handleLoadMore()}>Load More</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;

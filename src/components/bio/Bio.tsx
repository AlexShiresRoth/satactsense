import React, { useState } from "react";
import bioStyle from "./Bio.module.scss";
import { content } from "./bioContent";

const Bio = () => {
  const [reduced, setSize] = useState(true);

  return (
    <section className={bioStyle.section}>
      <div className={bioStyle.inner}>
        <div className={bioStyle.img_container}>
          <img
            src={`https://res.cloudinary.com/snackmanproductions/image/upload/c_scale,q_63,w_708/v1588264175/satactsense/steve_uav2de.jpg`}
            alt="Steve Rossner"
          />
          <p>- Steve Rossner, Founder of SAT/ACT Sense</p>
        </div>
        <div className={bioStyle.container}>
          <h2>About SAT/ACT Sense</h2>
          <div className={reduced ? bioStyle.copy_reduced : bioStyle.copy}>
            {content.slice(0, reduced ? 2 : content.length).map((item, i) => {
              return <div key={i}>{item.par}</div>;
            })}
          </div>
          <div className={bioStyle.copy_button_container}>
            <span></span>
            <button onClick={() => setSize(!reduced)}>
              {reduced ? "Read More" : "Show Less"}
            </button>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;

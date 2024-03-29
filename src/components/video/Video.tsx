import React from "react";
import videoStyle from "./Video.module.scss";
const Video = () => {
  return (
    <section className={videoStyle.section}>
      <div className={videoStyle.video_container}>
        <div className={videoStyle.heading}>
          <h2>First We Test, Then We Assess.</h2>
        </div>
      </div>
      <div className={videoStyle.text_container}>
        <div className={videoStyle.inner}>
          <div className={videoStyle.col}>
            <h3>Step 1:</h3>
            <h4>First, We Test.</h4>
            <span></span>
            <p>
              Our first step with new students is to get a baseline score for
              both the SAT and ACT to determine where they stand.
            </p>
          </div>
          <div className={videoStyle.col}>
            <h3>Step 2:</h3>
            <h4> Then, We Assess Their Scores.</h4>
            <span></span>
            <p>
              Next, we analyze the students’ results from both the SAT and ACT
              tests to determine their strengths and weaknesses. Then we can
              focus the tutoring on the test that best fits their abilities, so
              we can pave the way for a successful test prep experience.
            </p>
          </div>
          <div className={videoStyle.col}>
            <h3>Step 3:</h3>
            <h4> Get Your Customized Tutoring Plan.</h4>
            <span></span>
            <p>
              Finally, we create a day-by-day tutoring gameplan structured
              around your child’s availability and skillset. Our comprehensive
              test prep methods ensure your child acquires the best testing
              strategies and is completely prepared on test day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;

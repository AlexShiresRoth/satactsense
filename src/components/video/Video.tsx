import React from 'react';
import videoStyle from './Video.module.scss';
const Video = () => {

	return (
		<section className={videoStyle.section}>
			<div className={videoStyle.text_container}>
				<h2>First We Test, Then We Assess.</h2>
				<h4>Step 1: First, we test.</h4>
				<p>Our first step with new students is to get a baseline score for both the SAT and ACT to determine where they stand.</p>
				<h4>Step 2: Then, We Assess Their Scores.</h4>
				<p>Next, we analyze their results from both the SAT and ACT to determine your child’s unique strengths and weaknesses. By focusing our tutoring on the test that best fits their abilities, we can set your student up for success.</p>
				<h4>Step 3: Get Your Customized Tutoring Plan.</h4>
				<p>Finally, we create a comprehensive tutoring plan structured around your child’s availability and skillset. Our comprehensive test-prep methods ensure your child has the best testing strategies and is completely prepared on test day.</p>			</div>
			<div className={videoStyle.video_container}>
				<img src="https://res.cloudinary.com/snackmanproductions/image/upload/v1602445005/satactsense/First_We_Test_Then_We_Assess_zx1xni.jpg" alt="smiling girl"/>
			</div>
		</section>
	);
};

export default Video;

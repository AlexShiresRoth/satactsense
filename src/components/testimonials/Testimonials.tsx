import React, { useState, useEffect } from 'react';
import testStyle from './Testimonials.module.scss';
import { FaQuoteLeft, FaQuoteRight, FaUserGraduate } from 'react-icons/fa';
const Testimonials = () => {
	const [current, setCurrent] = useState(0);

	const ratings = [
		{
			text:
				'My son got his scores and his composite moved up 7 points!  Your team was wonderful, Diana and Casey couldn’t have done more and their upbeat attitude made all the difference. Thank so much for your help and I will definitely let my friends know of your services.',
			author: `K. Engelhardt, Rockville Centre, NY`,
		},
		{
			text: `We are so thrilled with SAT/ACT Sense! Working with their team was an absolute pleasure!  The tutors he provided were excellent and crafted the perfect preparation plan for our daughter to achieve incredible results on her ACT!  Happy to say that with SAT/ACT Sense she was one and done! Thank you SAT/ACT Sense for your dedication to success and attention to detail!`,
			author: `K. Ryan, Manhasset, NY`,
		},
		{
			text: `Thank you SAT/ACT Sense. With your excellent tutoring and test preparation, my son was able to jump over 200 points for a perfect score on the SATII Biology Subject test! We're looking forward to a great partnership and continued success for the SAT or ACT next year!`,
			author: `P. Sodi, Manhasset, NY`,
		},
	];

	useEffect(() => {
		const handleChange = () => {
			console.log(current);
			if (current < ratings.length - 1) {
				setCurrent((prev) => (prev += 1));
			} else {
				setCurrent(0);
			}
		};

		const interval = setInterval(handleChange, 10000);

		return () => clearInterval(interval);
	});

	return (
		<section className={testStyle.section}>
			<div className={testStyle.container}>
				{ratings.map((testimonial, i) => {
					return (
						<div
							className={
								current === i
									? testStyle.testimonial
									: `${testStyle.testimonial} ${testStyle.testimonial_hidden}`
							}
							key={i}
						>
							<div className={testStyle.col}>
								<FaQuoteLeft />
								<p>{testimonial.text}</p>
								<FaQuoteRight />
							</div>
							<div className={testStyle.col_two}>
								<FaUserGraduate />
								<span>-{testimonial.author}</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Testimonials;

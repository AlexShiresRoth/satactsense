import React, { useState } from 'react';
import testStyle from './Testimonials.module.scss';
import { FaQuoteLeft, FaQuoteRight, FaUserGraduate } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const Testimonials = () => {
	const [current, setCurrent] = useState(0);
	const [textStart, setStart] = useState({
		start: 0,
		end: 400,
	});
	const { start, end } = textStart;
	const ratings = [
		{
			text:
				'Our family has used SAT/ACT Sense for over five years and we have been extremely satisfied with the service and the overall program. Each of our four children made tremendous progress in his or her respective SAT or ACT scores from the initial diagnostic exercise through the final exam. We have worked with many different tutors over the course of 5 years and four students and have always found the tutors to be knowledgeable, personable, and enthusiastic about their subject and about teaching. We’ve also been impressed with Steve’s judgement around making tactical moves to mix up the tutors  and try a different approach when necessary to “punch up” a student’s score at the end of the road. Overall, we would highly recommend SAT/ACT sense. While it is not the cheapest tutoring service out there, we view it as a premium product in a competitive space—and at the end of the day, you get what you pay for.',
			author: `J. McDonald, Garden City, NY`,
		},
		{
			text: `We are so thrilled with SAT/ACT Sense! Working with their team was an absolute pleasure!  The tutors he provided were excellent and crafted the perfect preparation plan for our daughter to achieve incredible results on her ACT!  Happy to say that with SAT/ACT Sense she was one and done! Thank you SAT/ACT Sense for your dedication to success and attention to detail!`,
			author: `K. Ryan, Manhasset, NY`,
		},
		{
			text: `My son got his scores and his ACT composite moved up 7 points! Your team was wonderful: Diana and Casey couldn’t have done more, and their upbeat attitude made all the difference. Thank so much for your help, and I will definitely let my friends know of your services.`,
			author: `P. Sodi, Manhasset, NY`,
		},
	];

	const handleIntervalChange = (direction: string) => {
		if (direction === 'left') {
			return current > 0 ? setCurrent((prev) => (prev -= 1)) : setCurrent(ratings.length - 1);
		}
		if (direction === 'right') {
			return current < ratings.length - 1 ? setCurrent((prev) => (prev += 1)) : setCurrent(0);
		}
	};

	const expandText = (text: number) => {
		console.log(start);
		return start !== 0
			? setStart({
					start: 0,
					end: 400,
			  })
			: setStart({
					start: 400,
					end: text,
			  });
	};

	return (
		<section className={testStyle.section}>
			<div className={testStyle.current_index}>
				{ratings.map((r, i) => {
					return <span className={current === i ? testStyle.current : testStyle.marker}></span>;
				})}
			</div>
			<div className={testStyle.inner}>
				<div className={testStyle.arrow_container}>
					<MdKeyboardArrowLeft onClick={() => handleIntervalChange('left')} />
				</div>
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
									<p>
										{testimonial.text.length > 400 ? (
											<>
												{testimonial.text.substr(start, end)}
												{start === 0 ? (
													<>
														...
														<button onClick={() => expandText(testimonial.text.length)}>
															Continue Reading
														</button>
													</>
												) : (
													<button onClick={() => expandText(testimonial.text.length)}>
														Back
													</button>
												)}
											</>
										) : (
											testimonial.text
										)}
									</p>
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
				<div className={testStyle.arrow_container}>
					<MdKeyboardArrowRight onClick={() => handleIntervalChange('right')} />
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

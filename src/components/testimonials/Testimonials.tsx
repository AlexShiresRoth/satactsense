import React, { useState, useEffect } from 'react';
import testStyle from './Testimonials.module.scss';
import { FaQuoteLeft, FaQuoteRight, FaUserGraduate } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { ratings } from './ratings';
const Testimonials = () => {
	const [current, setCurrent] = useState(0);
	const [textStart, setStart] = useState({
		start: 0,
		end: 400,
	});
	const { start, end } = textStart;

	const handleIntervalChange = (direction: string) => {
		if (direction === 'left') {
			return current > 0 ? setCurrent((prev) => (prev -= 1)) : setCurrent(ratings.length - 1);
		}
		if (direction === 'right') {
			return current < ratings.length - 1 ? setCurrent((prev) => (prev += 1)) : setCurrent(0);
		}
	};

	const expandText = (text: number) => {
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

	useEffect(() => {
		setStart({
			start: 0,
			end: 400,
		});
	}, [current]);

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

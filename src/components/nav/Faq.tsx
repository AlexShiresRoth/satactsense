import React, { useState } from 'react';
import faqStyle from './Nav.module.scss';
import { faq } from './faqArr';
import { MdClose, MdQuestionAnswer } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

interface FaqProps {
	logo: any;
}

const Faq = ({ logo }: FaqProps) => {
	const [showFaq, setFaqState] = useState(false);
	return (
		<>
			<button onClick={() => setFaqState(!showFaq)}>
				<AiOutlineQuestionCircle /> Faq
			</button>
			<div className={showFaq ? faqStyle.faq_container : faqStyle.hidden}>
				<div className={faqStyle.faq}>
					<div className={faqStyle.heading}>
						{logo}
						<h2>SATACTSENSE Faq.</h2>
						<button onClick={() => setFaqState(!showFaq)}>
							<MdClose />
						</button>
					</div>
					<ul>
						{faq.map((item, i) => {
							return (
								<li>
									<p className={faqStyle.question}>Q. {item.question}</p>
									<p className={faqStyle.answer}>
										<MdQuestionAnswer /> A. {item.answer}
									</p>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Faq;

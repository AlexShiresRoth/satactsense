import React, { useEffect } from 'react';
import headerStyle from './Header.module.scss';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';

interface CopyProps {
	headerText: any;
	setCategory: (str: string) => string;
	setModalState: (val: boolean) => boolean;
	setSlideStart: (val: number) => any;
	slideStart: number;
	data: any;
}

const Copy = ({ headerText, setCategory, setModalState, setSlideStart, slideStart, data }: CopyProps) => {
	useEffect(() => {
		setSlideStart(0);
	}, []);
	return headerText
		.filter((item: any) => {
			return item.id === data;
		})
		.map((item: any) => {
			return (
				<>
					<h2>{item.title}</h2>
					{item.text.length > 4
						? item.text
								.slice(slideStart, slideStart !== 0 ? item.text.length : 4)
								.map((par: any, i: number) => {
									return par.par;
								})
						: item.text.map((par: any, i: number) => {
								return !par.link ? (
									par.par
								) : (
									<>
										{par.par}
										<button
											onClick={() => {
												setModalState(true);
												setCategory(item.title);
											}}
										>
											{par.link}
										</button>
									</>
								);
						  })}

					{item.text.length > 4 ? (
						<>
							<button
								className={headerStyle.slide_btn}
								onClick={slideStart !== 0 ? () => setSlideStart(0) : () => setSlideStart(4)}
							>
								{slideStart !== 0 ? (
									<>
										<IoMdArrowRoundBack />
										Back
									</>
								) : (
									<>
										Continue Reading
										<IoMdArrowRoundForward />
									</>
								)}
							</button>
						</>
					) : null}
				</>
			);
		});
};

export default Copy;

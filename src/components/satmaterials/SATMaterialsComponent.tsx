import React from 'react';
import style from './Materials.module.scss';
import { materials } from './materials';
import { GoBook } from 'react-icons/go';
import { setModalState, setCategory } from '../../actions/modal';
import { connect } from 'react-redux';

interface Props {
	setModalState: (val: boolean) => any;
	setCategory: (val: string) => any;
}

const SATMaterialsComponent = ({ setModalState, setCategory }: Props) => {
	return (
		<section className={style.section}>
			<h2>Products we recommend for SAT test preparation.</h2>
			<div className={style.grid}>
				{materials.map((item, i) => {
					return (
						<div className={style.item}>
							{item.img !== '' ? <img src={item.img} alt={item.title} /> : <GoBook />}
							<div className={style.content}>
								<p>{item.title}</p>
								{item.url !== '' ? (
									<a href={item.url} rel="noopener noreferrer" target="_blank">
										<button>Go To Product</button>
									</a>
								) : (
									<button
										onClick={(e) => {
											setModalState(true);
											setCategory('SAT Manual for Writing and Language Section');
										}}
									>
										Get Your Book
									</button>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default connect(null, { setModalState, setCategory })(SATMaterialsComponent);

import React from 'react';
import PropTypes from 'prop-types';
import { materials } from './materials';
import style from './Materials.module.scss';

interface Props {
	props?: any;
}

const ActMaterials = ({ props }: Props) => {
	return (
		<header className={style.header}>
			{materials.map((item, i) => {
				return (
					<div className={style.item}>
						<img src={item.img} alt={item.title} />
						<div className={style.content}>
							<p>{item.title}</p>
							<a href={item.url} rel="noopener noreferrer" target="_blank">
								<button>Go To Product</button>
							</a>
						</div>
					</div>
				);
			})}
		</header>
	);
};

ActMaterials.propTypes = {};

export default ActMaterials;

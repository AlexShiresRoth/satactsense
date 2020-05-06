import React, { useEffect, useState } from 'react';
import popupStyle from './PopUp.module.scss';
import axios from 'axios';
import { MdClose } from 'react-icons/md';
import LoadingSpinner from '../reusable/LoadingSpinner';

const PopUp = (props: any) => {
	const [isShowing, setPopUpState] = useState(false);

	const [formData, setFormData] = useState({
		email: '',
	});

	const [time, setTime] = useState(10000);

	const [message, setMessage] = useState({
		msg: 'Send us your email to get started!',
		loading: false,
		success: false,
		error: false,
	});

	const { msg, loading, success, error } = message;

	const { email } = formData;

	useEffect(() => {
		setTimeout(() => {
			window.localStorage.getItem('email') !== '' ? setPopUpState(false) : setPopUpState(true);
		}, time);
	}, [time]);

	const logo = (
		<img
			src="https://res.cloudinary.com/snackmanproductions/image/upload/v1586538815/satactsense/sat_logo_lpezq0.png"
			alt="logo"
		/>
	);

	const onChange = (e: React.FormEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setMessage({
			msg: '',
			loading: true,
			success: false,
			error: false,
		});

		try {
			await axios({
				method: 'POST',
				url: `https://asrserver.herokuapp.com/api/satactsense/send-email/signup`,
				data: {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Access-Control-Allow-Origin': 'http://localhost:3000/',
					},
					...formData,
				},
			});

			setMessage({
				msg: 'Thanks for contacting us!',
				loading: false,
				success: true,
				error: false,
			});

			window.localStorage.setItem('email', email);
			setTime(9999999999999);
			setTimeout(() => {
				setPopUpState(false);
			}, 1000);
		} catch (error) {
			if (!error.response) {
				return;
			}
			console.log(error.response.data.msg.map((msg: any) => msg));
			setMessage({
				msg: 'Something went wrong, please retry sending',
				loading: false,
				success: false,
				error: true,
			});
		}
	};

	return isShowing ? (
		<div className={popupStyle.popup_container}>
			<div className={popupStyle.popup}>
				<div className={popupStyle.heading}>
					<div>{logo}</div>
					<div>
						<h2>SATACTSENSE</h2>
						<p>Making Sense of the SAT/ACT</p>
					</div>
					<button
						onClick={(e) => {
							setPopUpState(!isShowing);
						}}
					>
						<MdClose />
					</button>
				</div>
				<div className={popupStyle.msg}>
					{loading ? (
						<LoadingSpinner />
					) : (
						<p className={error ? popupStyle.error : success ? popupStyle.success : popupStyle.status}>
							{msg}
						</p>
					)}
				</div>
				<form onSubmit={(e) => onSubmit(e)}>
					<input
						placeholder="Email"
						value={email}
						name="email"
						type="email"
						onChange={(e) => onChange(e)}
						required
					></input>
					<button onClick={(e) => onSubmit(e)}>Send</button>
				</form>
			</div>
		</div>
	) : null;
};

export default PopUp;

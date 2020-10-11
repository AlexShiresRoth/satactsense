import React, {  useState } from 'react';
import signupStyle from './EmailSignup.module.scss';
import axios from 'axios';
import LoadingSpinner from '../reusable/LoadingSpinner';
// const devUrl = 'http://localhost:5000/api/satactsense/send-email/'
const prodUrl = 'https://asrserver.herokuapp.com/api/satactsense/send-email/'

const EmailSignup = () => {
	const [formData, setFormData] = useState({
		email: '',
		phone: '',
		name: ''
	});

	const [messageState, setMessageState] = useState({
		loading: false,
		error: false,
		message: '',
		success: false,
	});

	const { email, name, phone } = formData;

	const { message, error, loading, success } = messageState;

	const onChange = (e: React.FormEvent<HTMLInputElement>) => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

	const formSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setMessageState({
			loading: true,
			error: false,
			success: false,
			message: 'Sending...',
		});

		try {
			await axios({
				method: 'POST',
				url: prodUrl + 'signup',
				data: {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Access-Control-Allow-Origin': 'http://localhost:3000/',
					},
					...formData,
				},
			});
			setMessageState({
				loading: false,
				error: false,
				message: 'Thank you, we will be contacting you shortly!',
				success: true,
			});


			const res = await axios({
				method: 'POST',
				url: prodUrl + 'confirm',
				data: {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Access-Control-Allow-Origin': 'http://localhost:3000/',
					},
					...formData,
				},
			});
			console.log(res)

			setTimeout(() => {
				setMessageState({
					loading: false,
					error: false,
					message: '',
					success: false,
				});

				setFormData({
					email: '',
					name: '',
					phone: ''
				});
			}, 5000);
		} catch (error) {
			setMessageState({
				loading: false,
				error: true,
				message: error.response.data.msg.map((msg: any) => `${msg.param}: ${msg.msg}`),
				success: false,
			});

			setTimeout(() => {
				setMessageState({
					loading: false,
					error: false,
					success: false,
					message: '',
				});
			}, 5000);
		}
	};



	return (
		<section className={signupStyle.section}>
			<div
				className={
					loading
						? signupStyle.loading
						: error
							? signupStyle.error
							: success
								? signupStyle.success
								: signupStyle.alert
				}
			>
				{loading ? <LoadingSpinner /> : message}
			</div>
			<div className={signupStyle.grid}>
				<h3>
					Not sure what you need at this moment? <br />
					Just send us your email, name and number and we will contact you ASAP.
				</h3>
				<div className={signupStyle.form_container}>
					<form onSubmit={(e) => formSubmit(e)}>
						<div className={signupStyle.form_col}>
							<label htmlFor="email">Email</label>
							<input type="email" value={email} name="email" onChange={(e) => onChange(e)} placeholder="Email" required />
						</div><div className={signupStyle.form_col}>
							<label htmlFor="name">Full Name</label>
							<input type="text" value={name} name="name" onChange={(e) => onChange(e)} placeholder='Full Name' required />
						</div>
						<div className={signupStyle.form_col}>
							<label htmlFor="phone">Phone (555-555-5555)</label>
							<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="phone number" name="phone" value={phone} onChange={e => onChange(e)} required />
						</div>
						<div className={signupStyle.form_col}>
							<button onClick={(e) => formSubmit(e)}>Send</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default EmailSignup;

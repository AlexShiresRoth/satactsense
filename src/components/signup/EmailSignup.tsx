import React, { useState } from 'react';
import signupStyle from './EmailSignup.module.scss';
import axios from 'axios';

const EmailSignup = (props: any) => {
	const [formData, setFormData] = useState({
		email: '',
	});

	const [messageState, setMessageState] = useState({
		loading: false,
		error: false,
		message: '',
		success: false,
	});

	const { email } = formData;

	const { message, error, loading, success } = messageState;

	const onChange = (e: React.FormEvent<HTMLInputElement>) => setFormData({ email: e.currentTarget.value });

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
				url: `http://localhost:5000/api/satactsense/send-email/signup`,
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
				message: 'Thank you, someone will be contacting you shortly!',
				success: true,
			});

			setTimeout(() => {
				setMessageState({
					loading: false,
					error: false,
					message: '',
					success: false,
				});

				setFormData({
					email: '',
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
				{message}
			</div>
			<div className={signupStyle.grid}>
				<h3>
					Not sure what you need at this moment? <br />
					Just send us your email and we will contact you ASAP.
				</h3>
				<div className={signupStyle.form_container}>
					<form onSubmit={(e) => formSubmit(e)}>
						<input type="email" value={email} onChange={(e) => onChange(e)} placeholder="Email" required />
						<button onClick={(e) => formSubmit(e)}>Send</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default EmailSignup;

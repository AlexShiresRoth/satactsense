import React, { useState } from 'react';
import PropTypes from 'prop-types';
import signupStyle from './EmailSignup.module.scss';
const EmailSignup = (props: any) => {
	const [formData, setFormData] = useState({
		email: '',
	});

	const { email } = formData;

	const onChange = (e: React.FormEvent<HTMLInputElement>) => setFormData({ email: e.currentTarget.value });
	const formSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};
	return (
		<section className={signupStyle.section}>
			<div className={signupStyle.grid}>
				<h3>
					Not sure what you need at this moment? <br />
					Just send us your email and we will contact you ASAP.
				</h3>
				<div className={signupStyle.form_container}>
					<form onSubmit={(e) => formSubmit(e)}>
						<input
							type="email"
							value={email}
							onChange={(e) => onChange(e)}
							placeholder="leslie@gmail.com"
							required
						/>
						<button onClick={(e) => formSubmit(e)}>Send</button>
					</form>
				</div>
			</div>
		</section>
	);
};

EmailSignup.propTypes = {};

export default EmailSignup;

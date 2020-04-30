import React, { useState, useEffect } from 'react';
import axios from 'axios';
import modalStyle from './Modal.module.scss';
import LoadingSpinner from '../reusable/LoadingSpinner';
import { MdClose, MdKeyboardArrowRight } from 'react-icons/md';
import { socialIcons } from '../reusable/icons';
import { setModalState } from '../../actions/modal';
import { connect } from 'react-redux';

type NavProps = {
	setModalState: Function;
	modal: {
		modalState: boolean;
		category: string;
	};
};

const Modal = ({ modal: { modalState, category }, setModalState }: NavProps) => {
	const logo = (
		<img
			src="https://res.cloudinary.com/snackmanproductions/image/upload/v1586538815/satactsense/sat_logo_lpezq0.png"
			alt="logo"
		/>
	);

	const [formData, setFormData] = useState({
		subject: category,
		email: '',
		name: '',
		phone: '',
		message: '',
		grade: '',
	});

	const [modalMessage, setMessage] = useState({
		status: [`Please Contact us for more information regarding "${category}".`],
		error: false,
		loading: false,
		success: false,
	});

	const { status, error, loading, success } = modalMessage;

	const { email, name, phone, message, grade } = formData;

	const onChange = (e: React.FormEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
	const onTextChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
		setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setMessage({
			status: ['Sending...'],
			error: false,
			success: false,
			loading: true,
		});
		try {
			await axios({
				method: 'POST',
				url: `https://asrserver.herokuapp.com/api/satactsense/send-email`,
				data: {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Access-Control-Allow-Origin': 'http://localhost:3000/',
					},
					...formData,
				},
			});
			setMessage({
				status: ['Thank you, your message has been received. Someone will contact you shortly!'],
				success: true,
				loading: false,
				error: false,
			});
			setTimeout(() => {
				closeModal();
			}, 7000);
		} catch (error) {
			console.log(error.response.data.msg.map((msg: any) => msg));
			if (!error.response) {
				setMessage({
					status: ['Something went wrong, please retry sending.'],
					success: false,
					loading: false,
					error: true,
				});
				return;
			}
			setMessage({
				status: error.response.data.msg.map((msg: any) => `${msg.param}: ${msg.msg}`),
				success: false,
				loading: false,
				error: true,
			});
		}
	};
	const closeModal = () => {
		setFormData({
			subject: '',
			email: '',
			name: '',
			phone: '',
			message: '',
			grade: '',
		});
		setMessage({
			status: [`Please Contact us for more information regarding "${category}."`],
			error: false,
			success: false,
			loading: false,
		});
		setModalState(false);
		return () => clearInterval();
	};

	useEffect(() => {
		setMessage({
			status: [`Please Contact us for more information regarding "${category}."`],
			error: false,
			success: false,
			loading: false,
		});
	}, [category, setMessage]);
	return (
		<div className={modalState ? modalStyle.container : modalStyle.container_hidden}>
			<div className={modalStyle.background}></div>
			<div className={modalStyle.form_container}>
				<div className={modalStyle.header}>
					<div className={modalStyle.logo_container}>
						<div>{logo}</div>
						<div>
							<h2>SATACTSENSE</h2>
							<p>Making Sense of the SAT/ACT</p>
						</div>
					</div>
					<div className={modalStyle.icons}>{socialIcons}</div>
				</div>
				<div className={modalStyle.heading}>
					<div className={modalStyle.status}>
						{status.map((text) => {
							return loading ? (
								<LoadingSpinner />
							) : (
								<h2
									className={
										loading
											? modalStyle.loading
											: error
											? modalStyle.error
											: success
											? modalStyle.success
											: ''
									}
								>
									{text}
								</h2>
							);
						})}
					</div>

					<button onClick={() => closeModal()}>
						<MdClose />
					</button>
				</div>
				<form onSubmit={(e) => onSubmit(e)}>
					<div className={modalStyle.input_row}>
						<label>Category</label>
						<input type="text" name="subject" value={category} required onChange={(e) => onChange(e)} />
					</div>
					<div className={modalStyle.input_row}>
						<label>Email</label>
						<input
							name="email"
							type="email"
							value={email}
							required
							onChange={(e) => onChange(e)}
							placeholder="Enter your email"
						/>
					</div>
					<div className={modalStyle.input_row}>
						<label>Name</label>
						<input
							name="name"
							value={name}
							type="text"
							required
							onChange={(e) => onChange(e)}
							placeholder="Enter your name"
						/>
					</div>
					<div className={modalStyle.input_row}>
						<label>Student Grade Level</label>
						<input
							name="grade"
							value={grade}
							type="text"
							required
							onChange={(e) => onChange(e)}
							placeholder="Enter student grade"
						/>
					</div>
					<div className={modalStyle.input_row}>
						<label>Phone #</label>
						<input
							name="phone"
							value={phone}
							type="phone"
							required
							onChange={(e) => onChange(e)}
							placeholder="Enter your phone number"
						/>
					</div>

					<div className={modalStyle.input_row}>
						<label>Message</label>
						<textarea
							name="message"
							value={message}
							required
							onChange={(e) => onTextChange(e)}
							placeholder="Enter your message here"
						></textarea>
					</div>
					<div className={modalStyle.input_row}>
						<button onClick={(e) => onSubmit(e)}>
							Submit
							<MdKeyboardArrowRight />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	console.log(state);
	return {
		modalState: state.modalState,
		modal: state.modal,
	};
};

export default connect(mapStateToProps, { setModalState })(Modal);

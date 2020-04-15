import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import modalStyle from './Modal.module.scss';
import { MdClose } from 'react-icons/md';
type NavProps = {
	isModalVisible: boolean;
	category: string;
	setModalState: Function;
	subjects: Array<any>;
};

const Modal = ({ isModalVisible, category, setModalState, subjects }: NavProps) => {
	const [formData, setFormData] = useState({
		subject: category,
		email: '',
		name: '',
		phone: '',
		message: '',
	});

	const [modalMessage, setMessage] = useState({
		status: ['Thank you for considering SATACTSENSE'],
		loading: false,
		error: false,
		success: false,
	});

	const { status, loading, error, success } = modalMessage;

	const { email, name, phone, message } = formData;

	const onChange = (e: React.FormEvent<HTMLInputElement>) =>
		setFormData({ ...formData, subject: category, [e.currentTarget.name]: e.currentTarget.value });
	const onTextChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
		setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setMessage({
			status: ['Sending...'],
			loading: true,
			error: false,
			success: false,
		});
		try {
			await axios({
				method: 'POST',
				url: `http://localhost:5000/api/satactsense/send-email`,
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
				loading: false,
				success: true,
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
					loading: false,
					success: false,
					error: true,
				});
				return;
			}
			setMessage({
				status: error.response.data.msg.map((msg: any) => `${msg.param}: ${msg.msg}`),
				loading: false,
				success: false,
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
		});
		setMessage({
			status: ['Thank you for considering SATACTSENSE'],
			loading: false,
			error: false,
			success: false,
		});
		setModalState({ isModalVisible: false, category: '' });
		return () => clearInterval();
	};

	return (
		<div className={isModalVisible ? modalStyle.container : modalStyle.container_hidden}>
			<div className={modalStyle.form_container}>
				<div className={modalStyle.heading}>
					<div className={modalStyle.status}>
						{status.map((text) => {
							return (
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
						<input type="text" name="subject" value={category} required />
					</div>
					<div className={modalStyle.input_row}>
						<label>Email</label>
						<input
							name="email"
							placeholder="jan@gmail.com"
							type="email"
							value={email}
							required
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div className={modalStyle.input_row}>
						<label>Name</label>
						<input
							name="name"
							placeholder="Ben Shwartz"
							value={name}
							type="text"
							required
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div className={modalStyle.input_row}>
						<label>Phone #</label>
						<input
							name="phone"
							placeholder="631-555-5555"
							value={phone}
							type="phone"
							required
							onChange={(e) => onChange(e)}
						/>
					</div>
					<div className={modalStyle.input_row}>
						<label>Message</label>
						<textarea
							name="message"
							placeholder="Hi, I'd like to inquire about having a tutoring session."
							value={message}
							required
							onChange={(e) => onTextChange(e)}
						></textarea>
					</div>
					<div className={modalStyle.input_row}>
						<button onClick={(e) => onSubmit(e)}>Send</button>
					</div>
				</form>
			</div>
		</div>
	);
};

Modal.propTypes = {
	isModalVisible: PropTypes.bool.isRequired,
	category: PropTypes.string.isRequired,
	setModalState: PropTypes.func.isRequired,
};

export default Modal;

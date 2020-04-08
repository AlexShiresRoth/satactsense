import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

	const { subject, email, name, phone, message } = formData;

	const onChange = (e: React.FormEvent<HTMLInputElement>) =>
		setFormData({ ...formData, subject: category, [e.currentTarget.name]: e.currentTarget.value });
	const onTextChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
		setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log(formData);
		// setModalState({
		// 	isModalVisible: false,
		// 	category: '',
		// });
	};
	const closeModal = () => {
		setFormData({
			subject: '',
			email: '',
			name: '',
			phone: '',
			message: '',
		});
		setModalState({ isModalVisible: false, category: '' });
	};

	return (
		<div className={isModalVisible ? modalStyle.container : modalStyle.container_hidden}>
			<div className={modalStyle.form_container}>
				<div className={modalStyle.heading}>
					<h2>Thank you for considering SATACTSENSE</h2>
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

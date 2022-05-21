import React, { useState, useEffect } from "react";
import axios from "axios";
import modalStyle from "./Modal.module.css";
import LoadingSpinner from "../reusable/LoadingSpinner";
import { MdClose, MdKeyboardArrowRight } from "react-icons/md";
import { socialIcons } from "../reusable/icons";
import { setModalState } from "../../actions/modal";
import { connect } from "react-redux";
import { categories } from "../nav/subjectArray";

type NavProps = {
  setModalState: Function;
  modal: {
    modalState: boolean;
    category: string;
  };
};

const Modal = ({
  modal: { modalState, category },
  setModalState,
}: NavProps) => {
  const logo = (
    <img
      src="https://res.cloudinary.com/snackmanproductions/image/upload/v1586538815/satactsense/sat_logo_lpezq0.png"
      alt="logo"
    />
  );

  const [formData, setFormData] = useState({
    subject: category,
    email: "",
    name: "",
    phone: "",
    message: "",
    grade: "",
  });

  const [modalMessage, setMessage] = useState({
    status: [`Contact Us to Schedule Your Free Trial Lesson Today!`],
    error: false,
    loading: false,
    success: false,
  });

  const { status, error, loading, success } = modalMessage;

  const { email, name, phone, message, grade, subject } = formData;

  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFormData({ ...formData, subject: e.currentTarget.value });
  const onTextChange = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({
      status: ["Sending..."],
      error: false,
      success: false,
      loading: true,
    });
    // const development = 'http://localhost:5000';
    const production = "https://asrserver.herokuapp.com";
    try {
      await axios({
        method: "POST",
        url: `${production}/api/satactsense/send-email`,
        data: {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "http://localhost:3000/",
          },
          ...formData,
        },
      });
      setMessage({
        status: [
          "Thank you, your message has been received. Someone will contact you shortly!",
        ],
        success: true,
        loading: false,
        error: false,
      });
      sendConfirmationEmail();
      setTimeout(() => {
        closeModal();
      }, 7000);
    } catch (error) {
      console.log(error.response.data.msg.map((msg: any) => msg));
      if (!error.response) {
        setMessage({
          status: ["Something went wrong, please retry sending."],
          success: false,
          loading: false,
          error: true,
        });
        return;
      }
      setMessage({
        status: error.response.data.msg.map(
          (msg: any) => `${msg.param}: ${msg.msg}`
        ),
        success: false,
        loading: false,
        error: true,
      });
    }
  };
  const closeModal = () => {
    setFormData({
      subject: category,
      email: "",
      name: "",
      phone: "",
      message: "",
      grade: "",
    });
    setMessage({
      status: [`Contact Us to Schedule Your Free Trial Lesson Today!`],
      error: false,
      success: false,
      loading: false,
    });
    setModalState(false);
    return () => clearInterval();
  };

  const sendConfirmationEmail = async () => {
    // const development = 'http://localhost:5000';
    const production = "https://asrserver.herokuapp.com";
    await axios({
      method: "POST",
      url: `${production}/api/satactsense/send-email/confirm`,
      data: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "http://localhost:3000/",
        },
        ...formData,
      },
    });
  };

  useEffect(() => {
    setMessage({
      status: [`Contact Us to Schedule Your Free Trial Lesson Today!`],
      error: false,
      success: false,
      loading: false,
    });
  }, [category, setMessage]);

  useEffect(() => {
    setFormData({ email, name, phone, message, grade, subject: category });
  }, [setFormData, category, email, name, phone, message, grade]);

  return (
    <div
      className={
        modalState ? modalStyle.container : modalStyle.container_hidden
      }
    >
      <div className={modalStyle.background}></div>
      <div className={modalStyle.form_container}>
        <button
          className={modalStyle.close_button}
          onClick={() => closeModal()}
        >
          <MdClose />
        </button>
        <div className={modalStyle.left_column}>
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
              {status.map((text, i) => {
                return loading ? (
                  <LoadingSpinner key={i} />
                ) : (
                  <h2
                    className={
                      loading
                        ? modalStyle.loading
                        : error
                        ? modalStyle.error
                        : success
                        ? modalStyle.success
                        : ""
                    }
                    key={i}
                  >
                    {text}
                  </h2>
                );
              })}
            </div>
          </div>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={modalStyle.input_row}>
            <label>
              Category<span>*</span>
            </label>
            <select
              name="subject"
              value={subject}
              onChange={(e) => onSelectChange(e)}
              required
            >
              {categories.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={modalStyle.input_row}>
            <label>
              Email<span>*</span>
            </label>
            <input
              name="email"
              type="email"
              value={email}
              required
              onChange={(e) => onChange(e)}
              placeholder="Enter your email"
              disabled={loading || success ? true : false}
            />
          </div>
          <div className={modalStyle.input_row}>
            <label>
              Name<span>*</span>
            </label>
            <input
              name="name"
              value={name}
              type="text"
              required
              onChange={(e) => onChange(e)}
              placeholder="Enter your name"
              disabled={loading || success ? true : false}
            />
          </div>
          <div className={modalStyle.input_row}>
            <label>
              Student Grade Level<span>*</span>
            </label>
            <input
              name="grade"
              value={grade}
              type="text"
              required
              onChange={(e) => onChange(e)}
              placeholder="Enter student grade"
              disabled={loading || success ? true : false}
            />
          </div>
          <div className={modalStyle.input_row}>
            <label>
              Phone #<span>*</span>
            </label>
            <input
              name="phone"
              value={phone}
              type="phone"
              required
              onChange={(e) => onChange(e)}
              placeholder="Enter your phone number"
              disabled={loading || success ? true : false}
            />
          </div>

          <div className={modalStyle.input_row}>
            <label>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => onTextChange(e)}
              placeholder="Enter your message here"
              disabled={loading || success ? true : false}
            ></textarea>
          </div>
          <div className={modalStyle.input_row}>
            <button
              onClick={(e) => onSubmit(e)}
              disabled={loading || success ? true : false}
            >
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
  return {
    modalState: state.modalState,
    modal: state.modal,
  };
};

export default connect(mapStateToProps, { setModalState })(Modal);

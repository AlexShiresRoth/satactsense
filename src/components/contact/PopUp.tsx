import React, { useEffect, useState } from "react";
import popupStyle from "./PopUp.module.css";
import axios from "axios";
import { MdClose } from "react-icons/md";
import LoadingSpinner from "../reusable/LoadingSpinner";

interface Props {
  modalState: boolean;
}

const PopUp = ({ modalState }: Props) => {
  const [isShowing, setPopUpState] = useState<boolean>(false);
  const [canceled, cancel] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const [message, setMessage] = useState({
    msg: "Send us your email to get started!",
    loading: false,
    success: false,
    error: false,
  });

  const { msg, loading, success, error } = message;

  const { email } = formData;

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
      msg: "",
      loading: true,
      success: false,
      error: false,
    });

    try {
      await axios({
        method: "POST",
        url: `https://asrserver.herokuapp.com/api/satactsense/send-email/signup`,
        data: {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "http://localhost:3000/",
          },
          ...formData,
        },
      });

      setMessage({
        msg: "Thanks for contacting us!",
        loading: false,
        success: true,
        error: false,
      });

      window.localStorage.setItem("email", email);

      setTimeout(() => {
        setPopUpState(false);
      }, 1000);
    } catch (error) {
      setMessage({
        msg: "Something went wrong, please retry sending",
        loading: false,
        success: false,
        error: true,
      });
    }
  };

  //if user gave email, stop the popup
  useEffect(() => {
    const handlePopup = setTimeout(() => {
      localStorage.getItem("email") !== null || canceled
        ? setPopUpState(false)
        : setPopUpState(true);
    }, 10000);

    return () => clearTimeout(handlePopup);
  }, [modalState, canceled]);
  if (isShowing) {
    return null;
  }
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
              cancel(true);
            }}
          >
            <MdClose />
          </button>
        </div>
        <div className={popupStyle.msg}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <p
              className={
                error
                  ? popupStyle.error
                  : success
                  ? popupStyle.success
                  : popupStyle.status
              }
            >
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

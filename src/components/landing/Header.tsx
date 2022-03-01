import React, { useEffect } from "react";
import landingStyle from "./Header.module.scss";
import { setModalState, setCategory } from "../../actions/modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface Props {
  setModalState: (val: boolean) => any;
  setCategory: (val: string) => any;
  modal: {
    modalState: boolean;
  };
}

const Landing = ({
  setModalState,
  setCategory,
  modal: { modalState },
}: Props) => {
  useEffect(() => {
    //hide background scrolling on modal being open
    const handleModalOpen = () => {
      const html = document.querySelector("html");
      return modalState && html !== null
        ? (html.style.overflowY = "hidden")
        : html !== null
        ? (html.style.overflowY = "scroll")
        : null;
    };
    handleModalOpen();
  }, [modalState]);

  return (
    <header className={landingStyle.header}>
      <div className={landingStyle.overlay}></div>
      <div className={landingStyle.col}>
        <div>
          <h1>
            Prep in the Winter
            <br /> Test in the Spring
          </h1>

          <div className={landingStyle.text_box}>
            <h3 style={{ fontStyle: "italic" }}>
              Next SAT Dates: March 12th & May 7th
            </h3>
            <h3 style={{ fontStyle: "italic" }}>
              Next ACT Dates: April 2nd & June 11th
            </h3>
          </div>
          <div className={landingStyle.text_box}>
            <p>Are you serious about preparing for the SAT or ACT?</p>
            <p>
              Find out if you qualify for our intensive SAT/ACT complete
              preparation program.
            </p>
            <p>Book your first trial lesson today.</p>
          </div>
        </div>
        <div className={landingStyle.btn_row}>
          <Link to="/satandact">
            <button>Learn More</button>
          </Link>
          <button
            onClick={() => {
              setModalState(true);
              setCategory("Virtual Tutoring Consultations");
            }}
          >
            Book Your Trial Lesson
          </button>
        </div>
      </div>
      <div></div>
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return {
    modal: state.modal,
  };
};

export default connect(mapStateToProps, { setModalState, setCategory })(
  Landing
);

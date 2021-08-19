import React from "react";
import { materials } from "./materials";
import style from "./Materials.module.scss";
import { GoBook } from "react-icons/go";
import { setModalState, setCategory } from "../../actions/modal";
import { connect } from "react-redux";

interface Props {
  setModalState: (val: boolean) => any;
  setCategory: (val: string) => any;
}

const ActMaterials = ({ setModalState, setCategory }: Props) => {
  return (
    <header className={style.header}>
      <h2>Products we recommend for ACT test preparation.</h2>
      <div className={style.grid}>
        {materials.map((item, i) => {
          return (
            <div className={style.item} key={i}>
              {item.img !== "" ? (
                <img src={item.img} alt={item.title} />
              ) : (
                <GoBook />
              )}
              <div className={style.content}>
                <p>{item.title}</p>
                {item.url !== "" ? (
                  <a href={item.url} rel="noopener noreferrer" target="_blank">
                    <button>Go To Product</button>
                  </a>
                ) : (
                  <button
                    onClick={(e) => {
                      setModalState(true);
                      setCategory("ACT English Manual PDF");
                    }}
                  >
                    Get Your Book
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default connect(null, { setModalState, setCategory })(ActMaterials);

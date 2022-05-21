import React, { useEffect } from "react";
import headerStyle from "./Header.module.css";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

interface CopyProps {
  headerText: any;
  setCategory: (str: string) => string;
  setModalState: (val: boolean) => boolean;
  setSlideStart: (val: number) => any;
  slideStart: number;
  data: any;
}

const Copy = ({
  headerText,
  setCategory,
  setModalState,
  setSlideStart,
  slideStart,
  data,
}: CopyProps) => {
  useEffect(() => {
    setSlideStart(0);
  }, [setSlideStart]);

  return headerText
    .filter((item: any) => {
      return item.id === data;
    })
    .map((item: any, i: number) => {
      return (
        <div key={i}>
          <h2>{item.title}</h2>
          {item.text.length > 4
            ? item.text
                .slice(slideStart, slideStart !== 0 ? item.text.length : 4)
                .map((par: any, i: number) => {
                  return <div key={i}>{par.par}</div>;
                })
            : item.text.map((par: any, i: number) => {
                return !par.link ? (
                  <div key={i}>{par.par}</div>
                ) : (
                  <div key={i}>
                    {par.par}
                    <button
                      onClick={() => {
                        setModalState(true);
                        setCategory(item.title);
                      }}
                    >
                      {par.link}
                    </button>
                  </div>
                );
              })}

          {item.text.length > 4 ? (
            <>
              <button
                className={headerStyle.slide_btn}
                onClick={
                  slideStart !== 0
                    ? () => setSlideStart(0)
                    : () => setSlideStart(4)
                }
              >
                {slideStart !== 0 ? (
                  <>
                    <IoMdArrowRoundBack />
                    Back
                  </>
                ) : (
                  <>
                    Continue Reading
                    <IoMdArrowRoundForward />
                  </>
                )}
              </button>
            </>
          ) : null}
        </div>
      );
    });
};

export default Copy;

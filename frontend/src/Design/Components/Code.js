import React from "react";
import downArrow from "../Assets/downArrow.png";

export default function Code() {
  const scrollDown = () => {
    const codebaseDiv = document.querySelector(".Codebase");
    codebaseDiv.scrollTop += codebaseDiv.scrollHeight / 10;
  };
  return (
    <div className="col-md-6 p-3 px-1">
      <div className="CodebaseBackground p-4">
        <div className="Codebase ">
          <div className="codebaseInside">
            <p>
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
              sample Text is here <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          className="scrollDownButton py-2 scroll-btn position-absolute bottom-0 end-0 m-3"
          onClick={scrollDown}
        >
          <img src={downArrow} alt="down arrow" className="downArrow" />
        </button>
      </div>
    </div>
  );
}

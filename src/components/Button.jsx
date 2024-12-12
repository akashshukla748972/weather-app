import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className="bg-orange-500 text-white text-xl font-semibold px-10 py-2"
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;

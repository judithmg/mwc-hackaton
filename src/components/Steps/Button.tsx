import React from "react";
import "../../styles/Buttons.scss";

interface Props {
  className: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className, text, onClick }: Props): JSX.Element => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`steps-btn ${className}`}
      >
        {text}
      </button>
    </>
  );
};
export default Button;

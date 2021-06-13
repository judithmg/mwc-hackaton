import React from "react";
import "../../styles/Button.scss";

interface Props {
  className?: string;
  children: string;
  link?: string;
}

const Button = ({ className, children, link }: Props): JSX.Element => {
  return (
    <button type="button" className={`google-btn ${className}`}>
      <img alt="google ic" src="https://i.imgur.com/Eif3aEv.png" />
      {children}
    </button>
  );
};
export default Button;

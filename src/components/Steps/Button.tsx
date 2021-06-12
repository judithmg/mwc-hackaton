import React from "react";
import "../../styles/Button.scss";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  children: string;
  link?: string;
}

const Button = ({
  className,
  children,
  link,
  ...props
}: Props): JSX.Element => {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} to={link}>
      <button {...props} type="button" className={`steps-btn ${className}`}>
        {children}
      </button>
    </Link>
  );
};
export default Button;

import React from "react";
import "../../styles/Button.scss";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  children: string;
  link?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  className,
  children,
  link,
  onClick,
  disabled,
}: Props): JSX.Element => {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} to={link}>
      <button
        type="submit"
        disabled={disabled}
        onClick={onClick}
        className={`steps-btn ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};
export default Button;

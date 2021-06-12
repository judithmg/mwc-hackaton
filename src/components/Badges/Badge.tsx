import React from "react";

import emppol from "../../assets/images/emp-pol.png";
import fillpol from "../../assets/images/fill-pol.png";
import user from "../../assets/icons/user.png";
import briefcase from "../../assets/icons/briefcase.png";
import { Link } from "react-router-dom";

import "../../styles/Badge.scss";

interface Props {
  title: string;
  children: string;
  developer: boolean;
}

const Badge = ({ title, children, developer }: Props): JSX.Element => {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} to="/register">
      <div className={`badge ${developer ? "--developer" : null}`}>
        <div className="badge-icon">
          {developer ? (
            <>
              <img alt="icon" src={fillpol} />
              <img alt="icon" src={user} />{" "}
            </>
          ) : (
            <>
              <img alt="icon" src={emppol} />
              <img alt="icon" src={briefcase} />{" "}
            </>
          )}
        </div>
        <div className="badge-text">
          <p className="badge-title">{title}</p>
          <p className="badge-info">{children}</p>
        </div>
        <button className="badge-next">&#xf061;</button>
      </div>
    </Link>
  );
};
export default Badge;

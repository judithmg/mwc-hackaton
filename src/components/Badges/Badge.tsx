import React from "react";
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
              <img alt="polygon" src="https://i.imgur.com/hzh1lkm.png" />
              <img alt="icon" src="https://i.imgur.com/6kMDwat.png" />
            </>
          ) : (
            <>
              <img alt="polygon" src="https://i.imgur.com/P9rFGtN.png" />
              <img alt="icon" src="https://i.imgur.com/IEvDPlU.png" />
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

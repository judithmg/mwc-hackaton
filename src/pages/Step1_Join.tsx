import React from "react";
import Badge from "../components/Badges/Badge";
import Register from "./Step2_Register";

const Join = (): JSX.Element => {
  return (
    <div className="container">
      <h1 className="step-title">¡Únete a la comunidad!</h1>
      <p className="step-description">
        Para empezar, dinos qué cuenta te gustaría abrir.
      </p>
      <Badge title="Developers" developer>
        Cuenta personas para entrar en el mundo dev
      </Badge>
      <Badge title="Business" developer={false}>
        Tienes o perteneces a una compañía
      </Badge>
    </div>
  );
};
export default Join;

import React from "react";
import InputNumber from "../components/Inputs/InputNumber";
import InputCountry from "../components/Inputs/InputCountry";
import Button from "../components/Steps/Button";
import InputPhone from "../components/Inputs/InputPhone";
import { Link } from "react-router-dom";

const Complete = (): JSX.Element => {
  return (
    <div className="container">
      <div className="step-header">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/register"
        >
          <p className="step-back">Volver</p>
        </Link>
        <div>
          <p className="step-num">Paso 02/03</p>
          <p className="step-data">Localización</p>
        </div>
      </div>
      <h1 className="step-title">¡Completa tu perfil!</h1>
      <p className="step-description">
        Para poder revisar que se trata de una cuenta real, necesitamos la
        siguiente información
      </p>
      <InputPhone header="Número de teléfono" />
      <InputNumber header="Dirección" />
      <InputCountry header="Código secreto" />
      <Button link="verify">Guardar y continuar</Button>
    </div>
  );
};
export default Complete;

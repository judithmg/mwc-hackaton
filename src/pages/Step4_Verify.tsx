import React from "react";
import InputNumber from "../components/Inputs/InputNumber";
import Button from "../components/Steps/Button";
import { Link } from "react-router-dom";

const Verify = (): JSX.Element => {
  return (
    <div className="container">
      <div className="step-header">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/complete"
        >
          <p className="step-back">Volver</p>
        </Link>
        <div>
          <p className="step-num">Paso 03/03</p>
          <p className="step-data">Verificación por tarjeta</p>
        </div>
      </div>
      <h1 className="step-title">¡Completa tu perfil!</h1>
      <p className="step-description">
        Para poder revisar que se trata de una cuenta real, necesitamos la
        siguiente información
      </p>
      <InputNumber header="Número de tarjeta" />
      <InputNumber header="Código secreto" />

      <Button>Crear cuenta</Button>
    </div>
  );
};
export default Verify;

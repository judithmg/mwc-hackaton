import React from "react";
import InputNumber from "../components/Inputs/InputNumber";
import InputCountry from "../components/Inputs/InputCountry";
import Button from "../components/Steps/Button";
import InputPhone from "../components/Inputs/InputPhone";
import { Link } from "react-router-dom";

const Register = (): JSX.Element => {
  return (
    <div className="container">
      <div className="step-header">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <p className="step-back">Volver</p>
        </Link>
        <div>
          <p className="step-num">Paso 01/03</p>
          <p className="step-data">Personal Info.</p>
        </div>
      </div>
      <h1 className="step-title">Registra tu cuenta individual</h1>
      <p className="step-description">
        Para poder revisar que se trata de una cuenta real, necesitamos la
        siguiente información
      </p>
      <InputPhone header="Nombre completo" />
      <InputNumber header="Correo electrónico" />
      <InputCountry header="Contraseña" />
      <Button link="/complete">Guardar y continuar</Button>
    </div>
  );
};
export default Register;

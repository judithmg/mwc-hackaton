import React from "react";
import InputNumber from "../components/Inputs/InputNumber";
import Button from "../components/Steps/Button";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { registerSchema } from "../models/FormValidations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

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
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <InputNumber
              header="Nombre completo"
              placeholder="Introduce tu nombre"
              type="text"
              name="name"
              id="name"
            />
            <InputNumber
              header="Correo electrónico"
              placeholder="Introduce tu correo electrónico"
              type="email"
              name="email"
              id="email"
            />{" "}
            <p className="input-errors">
              {errors.email && touched.email ? errors.email : null}
            </p>
            <InputNumber
              header="Contraseña"
              placeholder="Introduce una contraseña segura"
              type="password"
              name="password"
              id="password"
            />{" "}
            <p className="input-errors">
              {errors.password && touched.password ? errors.password : null}
            </p>
          </Form>
        )}
      </Formik>
      <Button link="/complete">Guardar y continuar</Button>
    </div>
  );
};
export default Register;

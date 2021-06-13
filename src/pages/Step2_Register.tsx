import React from "react";
import SimpleInput from "../components/Inputs/SimpleInput";
import Button from "../components/Buttons/Simple";
import GoogleBtn from "../components/Buttons/GoogleBtn";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
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
          <p className="step-back">
            <span>&#xf053;</span>Volver
          </p>
        </Link>
        <div>
          <p className="step-num">PASO 01/03</p>
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
            <SimpleInput
              header="Nombre completo *"
              placeholder="Introduce tu nombre"
              type="text"
              name="name"
              id="name"
            />
            <p className="input-errors"></p>
            <SimpleInput
              header="Correo electrónico *"
              placeholder="Introduce tu correo electrónico"
              type="email"
              name="email"
              id="email"
            />{" "}
            <p className="input-errors">
              {errors.email || !touched.email ? errors.email : null}
            </p>
            <SimpleInput
              header="Contraseña *"
              placeholder="Introduce una contraseña segura"
              type="password"
              name="password"
              id="password"
            />{" "}
            <p className="input-errors">
              {errors.password || !touched.password ? errors.password : null}
            </p>
            <label>
              <Field type="checkbox" name="toggle" />
              Acepto los térmicos y condiciones
            </label>
            <Button
              link="/complete"
              disabled={
                errors.email ||
                errors.password ||
                !touched.password ||
                !touched.email
                  ? true
                  : false
              }
            >
              Registrar cuenta
            </Button>
          </Form>
        )}
      </Formik>
      <GoogleBtn>Regístrate con Google</GoogleBtn>
      <p className="step-secure">
        <span>&#xf023;</span>Tu información es segura
      </p>
    </div>
  );
};
export default Register;

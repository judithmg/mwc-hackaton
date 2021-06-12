import React from "react";
import InputNumber from "../components/Inputs/InputNumber";
import Button from "../components/Steps/Button";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { creditCardSchema } from "../models/FormValidations";

const initialValues = {
  credit: "",
  secret: "",
};

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
      <Formik
        initialValues={initialValues}
        validationSchema={creditCardSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <InputNumber
              header="Número de tarjeta"
              placeholder="Introduce tu tarjeta de crédito"
              type="text"
              name="credit"
              id="credit"
            />
            <p className="input-errors">
              {errors.credit && touched.credit ? (
                <>Número de tarjeta incorrecto</>
              ) : null}
            </p>
            <InputNumber
              header="Código secreto"
              placeholder="Introduce tódigo secreto"
              type="text"
              name="secret"
              id="secret"
            />
            <p className="input-errors">
              {errors.secret && touched.secret ? <>Código incorrecto </> : null}
            </p>
          </Form>
        )}
      </Formik>

      <Button>Crear cuenta</Button>
    </div>
  );
};
export default Verify;

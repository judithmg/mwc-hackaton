import React from "react";
import InputNumber from "../components/Inputs/InputNumber";
import InputCountry from "../components/Inputs/InputCountry";
import Button from "../components/Steps/Button";
import InputPhone from "../components/Inputs/InputPhone";
import { Formik, Form } from "formik";

import { Link } from "react-router-dom";
import { phoneNumberSchema } from "../models/FormValidations";
const initialValues = {
  address: "",
  phone: "",
  country: "",
};

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
      <Formik
        initialValues={initialValues}
        validationSchema={phoneNumberSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <InputNumber
              header="Número de teléfono"
              placeholder="Introduce un número de teléfono válido"
              type="text"
              name="phone"
              id="phone"
            />{" "}
            <p className="input-errors">
              {errors.phone && touched.phone ? errors.phone : null}
            </p>
            <InputNumber
              header="Dirección"
              placeholder="Introduce una dirección postal"
              type="text"
              name="address"
              id="address"
            />
            <InputCountry header="País de residencia" />
          </Form>
        )}
      </Formik>
      <Button link="verify">Guardar y continuar</Button>
    </div>
  );
};
export default Complete;

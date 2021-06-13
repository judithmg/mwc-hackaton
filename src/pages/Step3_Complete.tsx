import React from "react";
import SimpleInput from "../components/Inputs/SimpleInput";
import InputCountry from "../components/Inputs/InputCountry";
import Button from "../components/Buttons/Simple";
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
          <p className="step-back">
            <span>&#xf053;</span>Volver
          </p>
        </Link>
        <div>
          <p className="step-num">PASO 02/03</p>
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
            <SimpleInput
              header="Número de teléfono"
              placeholder="Introduce un número de teléfono válido"
              type="text"
              name="phone"
              id="phone"
            />{" "}
            <p className="input-errors">
              {errors.phone && touched.phone ? errors.phone : null}
            </p>
            <SimpleInput
              header="Dirección"
              placeholder="Introduce una dirección postal"
              type="text"
              name="address"
              id="address"
            />
            <p className="input-errors"></p>
            <InputCountry header="País de residencia" />
            <p className="input-errors"></p>
            <Button
              link="/verify"
              disabled={errors.phone || !touched.phone ? true : false}
            >
              Guardar y continuar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Complete;

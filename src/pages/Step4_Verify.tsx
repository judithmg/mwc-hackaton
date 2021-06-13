import React from "react";
import SimpleInput from "../components/Inputs/SimpleInput";
import Button from "../components/Buttons/Simple";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import useModal from "../hooks/useModal";
import { creditCardSchema } from "../models/FormValidations";
import Modal from "../components/Modals/Modal";

const initialValues = {
  credit: "",
  secret: "",
};

const Verify = (): JSX.Element => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="container">
      <div className="step-header">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/complete"
        >
          <p className="step-back">
            <span>&#xf053;</span>Volver
          </p>
        </Link>
        <div>
          <p className="step-num">PASO 03/03</p>
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
            <SimpleInput
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
            <SimpleInput
              header="Código secreto"
              placeholder="Introduce tódigo secreto"
              type="text"
              name="secret"
              id="secret"
            />
            <p className="input-errors">
              {errors.secret && touched.secret ? <>Código incorrecto </> : null}
            </p>
            <Button
              onClick={toggle}
              disabled={
                errors.credit ||
                errors.secret ||
                !touched.secret ||
                !touched.credit
                  ? true
                  : false
              }
            >
              Crear cuenta
            </Button>
            <Modal isShowing={isShowing} hide={toggle}></Modal>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Verify;

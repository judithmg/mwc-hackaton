import React from 'react';
import InputNumber from '../components/Inputs/InputNumber';
import InputCountry from '../components/Inputs/InputCountry';
import Button from '../components/Steps/Button';
import InputPhone from '../components/Inputs/InputPhone';

const Register = (): JSX.Element => {
    return (
        <div className="register__container">
            <h1 className="step-title">Registra tu cuenta individual</h1>
            <p className="step-description">
                Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información
            </p>
            <InputPhone header="Nombre completo" />
            <InputNumber header="Correo electrónico" />
            <InputCountry header="Contraseña" />
            <Button>Guardar y continuar</Button>
        </div>
    );
};
export default Register;

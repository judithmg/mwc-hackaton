import React from 'react';
import InputNumber from '../components/Inputs/InputNumber';
import Button from '../components/Steps/Button';

const Verify = (): JSX.Element => {
    return (
        <div className="verify__container">
            <h1 className="step-title">¡Completa tu perfil!</h1>
            <p className="step-description">
                Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información
            </p>
            <InputNumber header="Número de tarjeta" />
            <InputNumber header="Código secreto" />

            <Button>Crear cuenta</Button>
        </div>
    );
};
export default Verify;

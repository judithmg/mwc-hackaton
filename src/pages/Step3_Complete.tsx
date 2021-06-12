import React from 'react';
import InputNumber from '../components/Inputs/InputNumber';
import InputCountry from '../components/Inputs/InputCountry';
import Button from '../components/Steps/Button';
import InputPhone from '../components/Inputs/InputPhone';

const Complete = (): JSX.Element => {
    return (
        <div className="complete__container">
            <h1 className="step-title">¡Completa tu perfil!</h1>
            <p className="step-description">
                Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información
            </p>
            <InputPhone header="Número de teléfono" />
            <InputNumber header="Dirección" />
            <InputCountry header="Código secreto" />
            <Button>Guardar y continuar</Button>
        </div>
    );
};
export default Complete;

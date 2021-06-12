import React from 'react';
import Badge from '../components/Badges/Badge';

const Join = (): JSX.Element => {
    return (
        <div className="join__container">
            <h1 className="step-title">¡Únete a la comunidad!</h1>
            <p className="step-description">Para empezar, dinos qué cuenta te gustaría abrir.</p>
            <Badge></Badge>
        </div>
    );
};
export default Join;

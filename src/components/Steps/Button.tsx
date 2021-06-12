import React from 'react';
import '../../styles/Button.scss';

interface Props {
    className?: string;
    children: string;
}

const Button = ({ className, children, ...props }: Props): JSX.Element => {
    return (
        <button {...props} type="button" className={`steps-btn ${className}`}>
            {children}
        </button>
    );
};
export default Button;

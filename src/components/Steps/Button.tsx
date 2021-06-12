import React from 'react';
import '../../styles/Button.scss';

interface Props {
    className: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
}

const Button = ({ className, children, onClick }: Props): JSX.Element => {
    return (
        <>
            <button onClick={onClick} type="button" className={`steps-btn ${className}`}>
                {children}
            </button>
        </>
    );
};
export default Button;

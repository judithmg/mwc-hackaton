import React, { useState } from 'react';
import '../../styles/Input.scss';

interface Props {
    className: string;
    header: string;
    placeholder?: string;
}

const InputEmail = ({ className, placeholder, header, ...props }: Props): JSX.Element => {
    const [value, setValue] = useState('');

    return (
        <div className="input-container">
            <h3 className="input-header">{header}</h3>
            <input
                className={`input-email ${className}`}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                value={value}
                {...props}
            />
        </div>
    );
};
export default InputEmail;

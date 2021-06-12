import React, { useState } from 'react';
import '../../styles/Input.scss';

interface Props {
    className?: string;
    header: string;
    options?: { name: string }[];
}

const InputPhone = ({ className, options, header, ...props }: Props): JSX.Element => {
    const [value, setValue] = useState('');

    return (
        <div className="input-container">
            <h3 className="input-header">{header}</h3>
            <select className={`input-country ${className}`} onChange={(e) => setValue(e.target.value)} {...props}>
                {options && options.map((el) => <option key={el.name}>{el.name}</option>)}
            </select>
        </div>
    );
};
export default InputPhone;

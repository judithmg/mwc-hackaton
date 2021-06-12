import React, { useState } from 'react';

interface Props {
    className: string;
    options: { name: string }[];
}

const InputCountry = ({ className, options }: Props): JSX.Element => {
    const [value, setValue] = useState('');

    return (
        <>
            <select className={`input-country ${className}`} onChange={(e) => setValue(e.target.value)}>
                {options.map((el) => (
                    <option key={el.name}>{el.name}</option>
                ))}
            </select>
        </>
    );
};
export default InputCountry;

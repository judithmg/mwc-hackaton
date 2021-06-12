import React, { useState } from 'react';

interface Props {
    className: string;
    placeholder?: string;
}

const InputEmail = ({ className, placeholder }: Props): JSX.Element => {
    const [value, setValue] = useState('');

    return (
        <>
            <input
                className={`input-number ${className}`}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                value={value}
            />
        </>
    );
};
export default InputEmail;

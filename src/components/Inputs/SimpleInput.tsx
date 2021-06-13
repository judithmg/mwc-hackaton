import React from "react";
import "../../styles/Input.scss";
import { Field } from "formik";

interface Props {
  header: string;
  className?: string;
  placeholder?: string;
  id: string;
  type: string;
  name: string;
}

const SimpleInput = ({
  className,
  placeholder,
  header,
  type,
  id,
  name,
}: Props): JSX.Element => {
  return (
    <>
      <h3 className="input-header">{header}</h3>
      <Field
        type={type}
        className={`input-number ${className}`}
        placeholder={placeholder}
        id={id}
        name={name}
      />
    </>
  );
};
export default SimpleInput;

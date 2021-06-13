import React, { useEffect, useState } from "react";
import "../../styles/Input.scss";
import axios from "axios";
import { dbUrls } from "../../constants";

interface Props {
  className?: string;
  header: string;
}

const InputCountry = ({ className, header }: Props): JSX.Element => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(dbUrls.countryList);
      setCountry(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="input-container">
      <h3 className="input-header">{header}</h3>
      <select className={`input-country ${className}`}>
        {country &&
          country.map((el) => <option key={el.name}>{el.name}</option>)}
      </select>
    </div>
  );
};
export default InputCountry;

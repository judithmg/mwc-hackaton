import React, { useContext } from "react";
import Toggle from "react-toggle";
import { ThemeContext } from "./ThemeProvider";
import "../../styles/Toggle.scss";

const ToggleComp = (): JSX.Element => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <Toggle
        defaultChecked={false}
        icons={{
          unchecked: <span>🌞</span>,
          checked: <span>🌚</span>,
        }}
        onChange={() => toggleTheme()}
      />
    </div>
  );
};

export default ToggleComp;

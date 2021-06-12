import React from "react";
import Join from "./Step1_Join";
import Complete from "./Step3_Complete";
import Verify from "./Step4_Verify";
import Register from "./Step2_Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import vekt from "../assets/images/vekt.png";
import qmarks from "../assets/images/qmarks.png";

const Main = (): JSX.Element => {
  return (
    <main>
      <aside>
        <img src={qmarks} alt="quotation marks" />
        <p>
          Nuwe es la platforma que convierte el desarrollo profesional, la
          búsquda de trabajo y la conexiones de personas y empresas en un juego.
          Haciendo que puedas centrarte en lo que te gusta, programar, diseñar,
          crear, planear...
        </p>
        <img src={vekt} alt="vector" />
      </aside>
      <section>
        <Router>
          <Switch>
            <Route path="/register" component={Register}></Route>
            <Route path="/complete" component={Complete}></Route>
            <Route path="/verify" component={Verify}></Route>
            <Route exact path="/" component={Join}></Route>
          </Switch>
        </Router>
      </section>
    </main>
  );
};

export default Main;

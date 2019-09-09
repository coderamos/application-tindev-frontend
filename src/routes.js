import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";

export default function Routues() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/developer/:id" component={Main} />
    </BrowserRouter>
  );
}

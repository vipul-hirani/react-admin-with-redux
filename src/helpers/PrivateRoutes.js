import React from "react";
import {Redirect, Route} from "react-router-dom";
import Helpers from "../service/Helpers";

export const PrivateRoute =({ component: Component, ...rest})=>(
  <Route
    {...rest}
    render ={props =>
      Helpers.getLocalStorageData("_token") ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to="/login"
        />
      )
    }
  />
);

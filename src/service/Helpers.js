import axios from "axios";
import {Helmet} from "react-helmet";
import React from "react";
import {Link} from "react-router-dom";

let Helpers = {
  axios: axios,
  baseUrl: '',
  setLocalStorageData: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getLocalStorageData: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  removeLocalStorageData: (key) => {
    return localStorage.removeItem(key);
  },
  AUTH_API_HEADER: {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "token": JSON.parse(localStorage.getItem('_token'))
    }
  },
  AUTH_API_MULTIPART_HEADER: {
    headers: {
      'Content-Type': 'multipart/form-data',
      "token": JSON.parse(localStorage.getItem('_token'))
    }
  },
  SEOTags: function (title = null) {
    return (
      <Helmet>
        <title>{title ? title + ' | Marijuana' : 'Marijuana'}</title>
      </Helmet>
    );
  },
  BREADCRUMB: function (breadcrumbs) {
    let string = [];
    string.push(breadcrumbs.map(function (data, key) {
      return (data.active) ? <li key={key} className="breadcrumb-item"><Link to={data.path}>{data.name}</Link></li> :
        <li key={key} className="breadcrumb-item active">{data.name}</li>;
    }))
    return <ol className="breadcrumb breadcrumb-new"> {string}</ol>;
  }
};

export default Helpers;

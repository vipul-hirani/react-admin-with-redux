import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  {PrivateRoute} from './helpers/PrivateRoutes';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Login, Page404, Page500 } from './views/Pages';
import ForgetPassword from "./views/Pages/ForgetPassword";

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/forget-password" name="Forget Password" component={ForgetPassword} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <PrivateRoute path="/" name="Home" component={DefaultLayout} props={this.props}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const userSelector = createSelector(
  state => state.user,
  user => user,
);
const tokenSelector = createSelector(
  state => state.token,
  token => token,
);

const mapStateToProps = createSelector(
  userSelector,
  tokenSelector,
  (user,token) => ({
    user,
    token
  })
);
export default connect(mapStateToProps)(App);

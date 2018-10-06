import React, {Component} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import Helpers from "../../service/Helpers";

import icon from './../../assets/img/user-icon.png'
import {createSelector} from "reselect";
import {updateUser} from "../../service/actions/user-action";
import {updateToken} from "../../service/actions/token-action";
import connect from "react-redux/es/connect/connect";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};


class DefaultHeader extends Component {
  logout() {
    Helpers.removeLocalStorageData('_token');
    Helpers.removeLocalStorageData('_USER');
    this.props.onUserUpdate('');
    this.props.onTokenUpdate('');
    this.props.history.push("/");
  };



  render() {

    // eslint-disable-next-line
    const {children, ...attributes} = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        <AppNavbarBrand
          full={{src: logo, width: 50, height: 45, alt: 'Logo'}}
          minimized={{src: logo, width: 50, height: 45, alt: 'Logo'}}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg"/>

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={icon} className="img-avatar" alt="avatar"/>
            </DropdownToggle>
            <DropdownMenu right style={{right: 'auto'}}>
              <DropdownItem onClick={()=> this.logout()}><i className="fa fa-lock" />Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const userSelector = state => state.user;

const tokenSelector = state => state.token;

const mapStateToProps = createSelector(
  userSelector,
  tokenSelector,
  (user, token) => ({
    user,
    token
  })
);

const mapActionToProps = {
  onUserUpdate: updateUser,
  onTokenUpdate: updateToken,
};

export default connect(mapStateToProps, mapActionToProps)(DefaultHeader);

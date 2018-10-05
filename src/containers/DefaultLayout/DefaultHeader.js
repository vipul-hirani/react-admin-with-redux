import React, {Component} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import Helpers from "../../service/Helpers";

import icon from './../../assets/img/user-icon.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};


class DefaultHeader extends Component {
  logout() {
    Helpers.removeLocalStorageData('_token');
    Helpers.removeLocalStorageData('_USER');
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

export default DefaultHeader;

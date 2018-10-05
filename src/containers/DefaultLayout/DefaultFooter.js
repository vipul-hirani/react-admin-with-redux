import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  constructor() {
    super()
    this.state = {
      'year':(new Date()).getFullYear()
    }
  }
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>&copy;  {this.state.year} {this.props.projectName}.</span>
        {/*<span className="ml-auto">Powered by <a href="http://mindinventory.com">{this.props.projectName}</a></span>*/}
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;

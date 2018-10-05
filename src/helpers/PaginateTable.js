import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

const propTypes = {
  paginationData: PropTypes.object,
};

const defaultProps = {
  paginationData: {}
};

class PaginateTable extends Component {
  /*constructor(props){
    super(props)
  }*/

  pageClick(){
  }

  render() {

    let page = []
    let totalPage = Math.ceil(this.props.paginationData.total / this.props.paginationData.per_page)
    for (let j = 1; j <= totalPage; j++) {
    let activemenu = (this.props.paginationData.page === j)?true:false;
    // let pagelink = window.location.href
    page.push(<PaginationItem active={activemenu} ><PaginationLink tag="button" onClick={this.pageClick.bind()} >{j}</PaginationLink></PaginationItem>)
   }
    return (
      <nav>
        <Pagination>
          <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
          {page}
          <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
        </Pagination>
      </nav>

    );
  }
}

PaginateTable.propTypes = propTypes;
PaginateTable.defaultProps = defaultProps;

export default PaginateTable;

import React, {Component} from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import {CardBody, Card} from "reactstrap";


class List extends Component {
  constructor(props) {
    super(props);
    console.log('---------------------Props inside list --------------------');
    console.log(this.props);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card className={"mt-12 dashboard-menu "}>
              <CardBody className="pb-0 pt-5">
                <div className='text-center font-3xlt'/>
                <div className="text-value-sm ">{JSON.stringify(this.props.match)}</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{height: '20px'}}/>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default List;

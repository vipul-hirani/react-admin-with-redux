import React, {Component} from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import {CardBody, Card} from "reactstrap";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      totalProducts: '',
    };


  }

  render() {
    return (
      <div className="animated fadeIn dashboard">
        <Row>
          <Col xs="12">
            <Card className={"mt-12 dashboard-menu "+this.props.class}>
              <CardBody className="pb-0 pt-5">
                <div className='text-center font-3xlt'/>
                <div className="text-value-sm ">{JSON.stringify(this.props)}</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{height: '20px'}}/>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;

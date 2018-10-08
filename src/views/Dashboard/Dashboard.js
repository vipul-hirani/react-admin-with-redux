import React, {Component} from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import {CardBody, Card} from "reactstrap";
import {Link} from "react-router-dom";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log('---------------------Props inside dashboard --------------------');
    console.log(this.props);
  }

  render() {
    return (
      <div className="animated fadeIn dashboard">
        <Row>
          <Col xs="12">
            <Card className={"mt-12 dashboard-menu "}>
              <CardBody className="pb-0 pt-5">
                <div className='text-center font-3xlt'/>
                <Link to={'/list/321564544644'}>Link page</Link>
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

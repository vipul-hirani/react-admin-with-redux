import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import Helpers from "../../../service/Helpers";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {updateUser} from "./../../../service/actions/user-action";
import {updateToken} from "../../../service/actions/token-action";
import {Link} from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'admin@admin.com',
      password: '123456',
      msg: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new SimpleReactValidator();
  }

  handleSubmit(event) {
    event.preventDefault();
    let that = this;
    if (that.validator.allValid()) {
      const {history} = this.props;
      let response = {
        "data": {
          "email": "admin@admin.com",
          "name": "Admin",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzAyNTY2NjEsImlkIjoiNTg0MTBhZGZiOWRlYjNhMjFmNTRiNWFlIiwiaWF0IjoxNTM4NzIwNjYxfQ.ioZrgYxcoZbKtG2uvbN4vRQKIjLUvu7H8mY0ZPr7wI4"
        },
        "status": 1,
        "message": "Login Successfully."
      };

      if (this.state.email === 'admin@admin.com' && this.state.password === '123456') {
        Helpers.setLocalStorageData('_token', response.data.token);
        Helpers.setLocalStorageData('_USER', JSON.stringify(response.data));
        this.props.onUserUpdate(response);
        history.push('/dashboard');
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }

  }


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email address" name='email' autoComplete="off"
                               value={this.state.email} onChange={evt => this.setState({email: evt.target.value})}
                        />
                        <br/>
                      </InputGroup>
                      {this.validator.message('Old', this.state.email, 'required|email', 'text-danger', {
                        required: 'Email address is required.',
                        email: "Please enter valid email address."
                      })}

                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password"
                               value={this.state.password} onChange={evt => this.setState({password: evt.target.value})}
                        />
                      </InputGroup>
                      {this.validator.message('Old', this.state.password, 'required', 'text-danger', {required: 'Password is required.'})}

                      <p className="text-danger" color="danger">{this.state.msg}</p>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right forgot-password-back">
                          <Link to={'/forget-password'} color="link" className="px-0">Forgot password?</Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapActionToProps)(Login);

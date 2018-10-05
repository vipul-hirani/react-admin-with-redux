import React, {Component} from 'react';
import {
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Row, Form, InputGroupAddon, InputGroup, InputGroupText, Input, Button
} from 'reactstrap';
import {ADMIN_API_URL, API_HEADER} from './../../../config';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import SimpleReactValidator from "simple-react-validator";
import {Link} from "react-router-dom";

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
          message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validator = new SimpleReactValidator();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let that = this;
        if (that.validator.allValid()) {
            // const {history} = this.props;
            let reqBody = {
                email: this.state.email,
            };

            axios.post(`${ADMIN_API_URL}forgotPassword`, reqBody, API_HEADER).then((response) => {
                if (response.data.status === 1) {
                    this.setState({message: response.data.message})
                    setTimeout(() => {
                        this.props.history.goBack();
                    }, 3000)
                }
                else {
                    this.setState({message: response.data.message})
                }
            }, err => {
                this.setState({message: 'Something went wrong!'})
            })
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
                    <Col md="7">
                      <CardGroup>
                        <Card className="p-4">
                          <CardBody>
                            <Form id="myForm" method="post" onSubmit={this.handleSubmit}>
                              <h1>Forgot password</h1>
                              <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="icon-user"/>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name='email' placeholder="Email address" autoComplete="off"
                                       value={this.state.email}   onChange={evt => this.setState({ email: evt.target.value })}
                                />
                              </InputGroup>
                              {this.validator.message('Old', this.state.email, 'required|email', 'text-danger', {required: 'Email address is required.', email:"Please enter valid email address."})}

                              <p className="text-success" color="success">{this.state.message}</p>
                              <Row>

                                <Col xs="6" className={"forgot-password-back"}>
                                  <Link to={'/login'} color="link" className="px-0"> Back to login</Link>
                                </Col>
                                <Col xs="6" className="text-right">
                                  <Button color="primary" className="px-4">Send Link</Button>
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

export default ForgetPassword;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';
import {
  FormGroup,
  FormFeedback,
  Label,
} from 'reactstrap';

const propTypes = {
  label: PropTypes.string,
  name :PropTypes.string,
  dataType :PropTypes.string,
  value :PropTypes.string,
  rows :PropTypes.string,
  displayMsg :PropTypes.string,
  displayClass :PropTypes.string,
  key :PropTypes.string,
  dataValues :PropTypes.array,
  onHandleChange :PropTypes.func,
  addData: PropTypes.func,
  required: PropTypes.bool
};

const defaultProps = {
  label: "Name",
  key: "Name",
  rows: "0",
  name :'-',
  dataType :'text',
  placeholder :'text',
  value :'',
  displayMsg :'',
  displayClass :'',
  dataValues :[],
  required:true,
  selected:[],
};

class FormInput extends Component {
  constructor(props){
    super(props)
    // let ary = [];
    this.state={
      value :'',
      displayMsg :'',
      displayInvalidClass :false,
      displayValidClass :false,
      ary :[]
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new SimpleReactValidator();
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  onChange(event) {
    /*this.setState({ value:   evt.target.value });
    if(this.props.dataType === 'checkbox'){
      if (this.selectedCheckboxes.has(evt.target.value)) {
        this.selectedCheckboxes.delete(evt.target.value);
      } else {
        this.selectedCheckboxes.add(evt.target.value);
      }
      this.setState({ ary: Array.from(this.selectedCheckboxes) });
      this.props.addData(Array.from(this.selectedCheckboxes));
    }else{
      this.props.addData(evt.target.value);
    }*/
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let that = this;
    if (that.validator.allValid()) {
      /* API
         .post(`login`, this.state)
         .then(response => {
           toast.success(response.data.meta.message, {
             position: toast.POSITION.TOP_RIGHT,
             autoClose: 5000
           });
           that.props.history.push('/about')
         })
         .catch(error => {
           toast.error(error.response.data.message, {
             position: toast.POSITION.TOP_RIGHT,
             autoClose: 5000
           });
         });*/
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    event.preventDefault();
  }

  validateInput(){
    if(this.props.required){
      if(this.state.value === ''){
        this.setState({ displayMsg: 'Please enter '+this.props.label.toLowerCase() })
        this.setState({ displayValidClass: false })
        this.setState({ displayInvalidClass: true })
      }else{
        this.setState({ displayMsg: '' })
        this.setState({ displayValidClass: true })
        this.setState({ displayInvalidClass: false })
      }
    }
  }
  render() {
    let inputData = []
    let errorMsg = <FormFeedback >{this.state.displayMsg}</FormFeedback>
    inputData.push( <FormGroup inline key={this.props.name}>
        <Label htmlFor={this.props.name}>{this.props.label}</Label>
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          autoComplete='off'
          type={this.props.dataType}
          value={this.value}
        />
        {this.validator.message('name', this.state.name, 'required', 'text-danger')}
        {errorMsg}
      </FormGroup>
    )
    return inputData;
  }
}

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;

import React, { Component } from "react";
import axios from "axios";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import UserList from "./UserList";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      email: "",
      password: "",
    };
    if(this.props.id){
        this.state = props.user.id;
    }
  }

  AddUser = () => {
    axios
      .post("https://localhost:5001/api/users", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then((json) => {
        if (json.data) {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          this.props.history.push("/UserList");
          //   debugger;
        } else {
          alert("Data not Saved");
          //   debugger;
        }
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="text-info pt-3" align="center">
            {console.log(this.props.user)} Add User
          </h2>
        </div>
        <Form className="form container border p-3">
          <Col>
            <FormGroup row>
              <Label for="name" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  placeholder="Enter Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  placeholder="Enter Email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={2}></Col>
              <Col sm={10}>
                <Button onClick={this.AddUser} className="btn btn-success">
                  Submit
                </Button>
                &nbsp;
                <Link to={`/UserList`} className="btn btn-info">
                  {" "}
                  Back to List
                </Link>
              </Col>
            </FormGroup>
          </Col>
        </Form>
      </div>
    );
  }
}

export default AddUser;

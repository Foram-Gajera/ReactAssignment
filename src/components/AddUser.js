import React, { Component } from "react";
import axios from "axios";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import UserList from "./UserList";

class AddUser extends Component {
  constructor(props) {
    super(props);
    if(this.props.history.location.state){
      this.state = {
        userId: this.props.history.location.state.user.id,
        name: this.props.history.location.state.user.name,
        email: this.props.history.location.state.user.email,
        password: this.props.history.location.state.user.password
      }
    }
    else{
      this.state = {
        name: "",
        email: "",
        password: "",
      };
    }

  }

  AddUser = () => {
    axios
      .post("https://localhost:5001/api/users", this.state)
      .then((json) => {
        debugger;
        console.log(json.data);
        if (json.data) {
          console.log(json.data.Status);
          alert("Create User Successfully");
          this.props.history.push("/UserList");
          //   debugger;
        } else {
          alert("User is not created!");
          //   debugger;
        }
      });
  };

  EditUser = (userId) => {
    axios
    .put('https://localhost:5001/api/users/'+ this.state.userId, {
      id: this.state.userId,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
    .then((json) => {
      debugger;
      if (!json.data) {
        alert("Record Updated Successfully");
        this.props.history.push("/UserList");
          // debugger;
      } else {
        alert("Record is not Updated");
          // debugger;
      }
    });
  };

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // const pageTitle = this.props.location.state.userId ? "Edit User" : "Add User"
    return (
      <div>
        <div className="container">
          <h4>{this.state.userId ? "User Id:" + this.state.userId : null }</h4>
          <h2 className="text-info pt-3" align="center">
            {this.state.userId ? "Update" : "Create"} User
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
                <Button onClick={this.state.userId ? this.EditUser : this.AddUser} className="btn btn-success">
                {this.state.userId ? "Update" : "Create"}
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

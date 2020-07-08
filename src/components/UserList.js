import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";
import { Link } from 'react-router-dom';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount(){
      // debugger;
      axios.get('https://localhost:5001/api/users')
        .then(response => {
          this.setState({ user: response.data });
          // debugger;

        })
        .catch(function (error) {
          console.log(error);
        })
    }
  tabRow() {
    return this.state.user.map(function (object, i) {
      return <Table obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div className="container">
        <h2 align="center" className="text-info pt-3">User List</h2>
        <Link to={`/AddUser`} params={{ user: this.state.user}} className="btn btn-primary float-right mb-3"><span className="fa fa-plus"></span>&nbsp;Create User</Link>
        <table className="table table-striped table-bordered" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan="4">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}

export default UserList;

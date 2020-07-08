import React, { Component } from "react";
import axios from "axios";
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
// import { browserHistory } from './react-router-dom';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  DeleteUser = () => {
    // alert('delete' + this.props.obj.id)
    if (this.props.obj.id) {
      axios
        .delete("https://localhost:5001/api/users/" + this.props.obj.id)
        .then((json) => {
          if (json.data) {
            // this.props.history.push("/UserList");
            // this.router.history.push("/UserList");
            window.location.reload();
            alert("Record deleted successfully!!");
          } 
        });
    }else {
      alert("Some error occurs! Record is not deleted");
    }
  };

  //  debugger;

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.password}</td>
        <td>
          {/* <button className="btn btn-success">Edit</button> */}
          &nbsp;
          <Button
            type="button"
            onClick={this.DeleteUser}
            className="btn btn-danger"
          >
            Delete
          </Button>
          &nbsp;
          <Link to={"/AddUser/" + this.props.obj.id} params={{ id: this.props.obj.id }} className="btn btn-success">
            Edit {this.props.obj.id}
          </Link>
        </td>
      </tr>
    );
  }
}

export default Table;

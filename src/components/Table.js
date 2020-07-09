import React, { Component } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { MDBDataTable, MDBBtn } from "mdbreact";
// import { browserHistory } from './react-router-dom';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.obj
    };
  }

  DeleteUser = (id) => {

    // eslint-disable-next-line no-restricted-globals
    if (confirm("Sure want to delete?")) {
      if (id) {
        axios
          .delete("https://localhost:5001/api/users/" + id)
          .then((json) => {
            if (json.data) {
              alert("Record deleted successfully!!");
              window.location.reload();
              // this.props.history.push("/UserList");
              // this.router.history.push("/UserList");
            }
          });
      } else {
        alert("Some error occurs! Record is not deleted");
      }
    } else {
      alert("your data is safe!");
    }
  };

  //  debugger;

  render() {
    const data = {
      columns: [
        {
          label: "Index",
          field: "index",
          sort: "asc",
          width: 60,
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 400,
        },
        {
          label: "Password",
          field: "password",
          sort: "asc",
          width: 200,
        },
        {
          label: "Action",
          field: "action",
          width: 400,
        },
      ],
      rows: this.props.obj.map((obj, i) => {
        return {
          index: i + 1,
          name: obj.name,
          email: obj.email,
          password: obj.password,
          action: <div>
            <Button
                type="button"
                onClick={()=>this.DeleteUser(obj.id)}
                className="btn btn-danger m-1"
              >
                Delete
              </Button>
              &nbsp;
              <Link
                to={{
                  pathname: "/AddUser/" + obj.id,
                  state: { user: obj },
                }}
                className="btn btn-success m-1"
              >
                Update
              </Link>
          </div>
        };
      }),
    };
    return (
      <div>
        <MDBDataTable
        className="mt-5"
          btn
          hover
          striped
          bordered
          responsive
          scrollY
          scrollX
          small
          data={data}
          key={this.props.obj.map((user) => user.id)}
        />
      </div>
    );
  }
}

export default Table;

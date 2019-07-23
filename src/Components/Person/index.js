// Creating form elements with events
import React, { Component } from "react";
import Popup from "react-popup";
import "./style.css";

class Person extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      errors: {
        firstName: false,
        lastName: false
      }
    };
  }

  handleOnChange = e => {
    const {
      target: { value, name }
    } = e;

    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const { firstName, lastName, email, phone } = this.state;

    // if firstName and lastName are missing then we update local state with true
    this.setState({
      errors: {
        firstName: firstName === "",
        lastName: lastName === ""
      }
    });

    // We will display the popup just if the data is received
    if (firstName !== "" && lastName !== "" && email !== "") {
      Popup.create({
        title: "Person Information",
        content: (
          <div>
            <p>
              <strong>Name: </strong>
              {firstName} {lastName}
            </p>
            <p>
              <strong>Email: </strong>
              {email}
            </p>
            {phone && (
              <p>
                <strong>Phone: </strong>
                {phone}
              </p>
            )}
          </div>
        ),
        buttons: {
          right: [
            {
              text: "Close",
              action: popup => popup.close()
            }
          ]
        }
      });
    }

    const data = {
      firstName,
      lastName,
      email,
      phone
    };
    console.log("Data", data);
  };

  render() {
    return (
      <div className="Person">
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <p>
              <strong>First Name:</strong>
            </p>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleOnChange}
              className={this.state.errors.firstName ? "error" : ""}
            />
            {this.state.errors.firstName && (
              <div className="errorMessage">Required Field</div>
            )}
          </div>

          <div>
            <p>
              <strong>Last Name: </strong>
            </p>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleOnChange}
              className={this.state.errors.lastName ? "error" : ""}
            />
            {this.state.errors.lastName && (
              <div className="errorMessage">Required Field</div>
            )}
          </div>

          <div>
            <p>
              <strong>Email: </strong>
            </p>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
          </div>

          <div>
            <p>
              <strong>Phone: </strong>
            </p>
            <input
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.handleOnChange}
            />
          </div>

          <p>
            <button>Save Information</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Person;

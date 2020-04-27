import React from "react";
import { Form } from "react-bootstrap";

class Registrations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      regemail: "",
      regpassword: "",
      regnumber: "",
      reggender: "",
      RegistrationArray: [],
    };
  }

  changinginput = (event) => {
    console.log(event.target.value);

    this.setState({ [event.target.name]: event.target.value });
  };
  ShowMe = (event) => {
    event.preventDefault();
    let itemofarray = this.state.RegistrationArray;
    let Name = this.state.username;
    let Email = this.state.regemail;
    let Password = this.state.regpassword;
    let Number = this.state.regnumber;
    let Gender = this.state.reggender;

    let RegObject = {
      name: Name,
      email: Email,
      password: Password,
      number: Number,
      gender: Gender,
    };
    this.props.adduser(RegObject);

    itemofarray.push(RegObject);

    this.setState({
      RegistrationArray: itemofarray,
    });
  };
  render() {
    return (
      <div>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="text-center p-2"> Registration Form </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-8 m-auto col-md-10 offset-md-1  col-sm-10  offset-sm-1">
              <Form onSubmit={this.ShowMe}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="username"
                    onChange={this.changinginput}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="regemail"
                    onChange={this.changinginput}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="regpassword"
                    onChange={this.changinginput}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicNumber">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="number"
                    name="regnumber"
                    onChange={this.changinginput}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="number"
                    name="reggender"
                    onChange={this.changinginput}
                  />
                </Form.Group>

                <div>
                  {this.state.RegistrationArray.map((userinf0, index) => {
                    return (
                      <ul key={index}>
                        <li>{userinf0.name}</li>
                        <li>{userinf0.email}</li>
                        <li>{userinf0.password}</li>
                        <li>{userinf0.number}</li>
                        <li>{userinf0.gender}</li>
                      </ul>
                    );
                  })}
                </div>

                <input variant="primary" type="submit" value="submit" />
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registrations;

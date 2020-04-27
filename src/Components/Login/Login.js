import React from "react";
import { Form } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginemail: "",
      loginpassword: "",
      LoginArray: [],
    };
  }

  changinginputoflogin = (event) => {
    console.log(event.target.value);

    this.setState({ [event.target.name]: event.target.value });
  };
  showoflogin = (event) => {
    event.preventDefault();
    let email = this.state.loginemail;
    let password = this.state.loginpassword;

    this.props.LoginArray.map((user, index) => {
      if (user.email == email) {
        alert("user email is correct !!!  + login  ");
      } else {
        alert("user name is  not correct !!!  ");
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="text-center"> Login Form</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-8 m-auto col-md-10 offset-md-1  col-sm-10  offset-sm-1">
              <Form onSubmit={this.showoflogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="loginemail"
                    onChange={this.changinginputoflogin}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="loginpassword"
                    onChange={this.changinginputoflogin}
                  />
                </Form.Group>

                <input variant="primary" type="submit" value="submit" />
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

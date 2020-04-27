import React from "react";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Registrations from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowArray: [],
    };
  }

  EnteritemintoAray = (UserRegisterObject) => {
    let storedata = this.state.ShowArray;
    storedata.push(UserRegisterObject);

    this.setState({
      ShowArray: storedata,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <Header></Header>
          </Route>

          <Route path="/registrationform">
            <Header></Header>
            <Registrations adduser={this.EnteritemintoAray}> </Registrations>
          </Route>

          <Route path="/loginform">
            <Header></Header>
            <Login LoginArray={this.state.ShowArray}></Login>
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

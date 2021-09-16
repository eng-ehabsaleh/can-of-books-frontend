import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BestBooks from "./component/BestBooks";
import Profile from "./component/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import { withAuth0 } from "@auth0/auth0-react";
import Login from "./component/Login";
function App() {
  const isAuth = this.props.auth0.isAuthenticated;
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/books">
            {isAuth ? <BestBooks /> : <Login />}
          </Route>
          <Route exact path="/profile">
            {isAuth && <Profile />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withAuth0(App);

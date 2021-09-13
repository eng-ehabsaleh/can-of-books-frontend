import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BestBooks from "./component/BestBooks";
import Profile from "./component/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
      <BestBooks />
    </div>
  );
}

export default App;

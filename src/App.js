import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search />
        <Switch>
          <Route path="/user/:userName">
            <UserProfile />
          </Route>
          <Route exact path="/">
            <Users />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

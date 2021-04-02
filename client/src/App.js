import "./App.css";
import Home from "./components/Home/Home";
import Feed from "./components/feed/Feed";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/feed" exact component={Feed} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

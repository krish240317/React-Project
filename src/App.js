import Navbar from "./navbar";
import Home from "./home";
import BlogDetails from "./blogdetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

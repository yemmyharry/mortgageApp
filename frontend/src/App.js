import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import CalcPage from "./components/calcpage/CalcPage";
import Home from './components/home/Home'
import NavBar from './components/home/NavBar'


function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/calculate">
          <CalcPage/>
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;

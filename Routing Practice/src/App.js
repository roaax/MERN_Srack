import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Home from './components/Home';
import Word from './components/Word';
import Color from './components/Color';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/:word">
          <Word/>
        </Route>
        <Route path="/:word/:tColor/:bColor">
          <Color/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

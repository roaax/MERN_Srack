import './App.css';
import Form from './views/Form';
import Main from './views/Main';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Update from './views/Update';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Main />
          </Route>
          <Route exact path="/new">
              <Form />
          </Route>
          <Route exact path="/edit/:id">
              <Update />
          </Route>
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;

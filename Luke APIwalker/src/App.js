import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <BrowserRouter>
    <Form/>
    <Switch>
      <Route path="/people/:id">
        <People/>
      </Route>
      <Route exact path="/planet/:id">
        <Planet/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

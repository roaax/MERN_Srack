import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        //start with path that have id
          <Route path="/product/:id/edit">
              <Update />
          </Route>
          <Route path="/product/:id">
            <Detail />
          </Route>
          <Route path="/product/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
    
export default App;


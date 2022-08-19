import './App.css';

import Putting from './components/Putting';
function App() {
  return (
    <div className="App">
    <Putting firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
    <Putting firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
    </div>
  );
}

export default App;
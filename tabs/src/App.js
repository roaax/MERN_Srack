import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tab from './Components/Tab';
import {useState} from "react";

function App() {
  const [content , setContent] =useState();

  const  show=(content)=>{
    setContent(content);
  }
  return (
      <div className="shadow-lg container-lg mt-4 p-4">
    <div className="App container">
        <Tab name="Tab 1" show={show} >
             <div>
               <h4 className="text-center text-dark m-4"> Tab 1 content is showing here</h4>
             </div>
        </Tab>
      <Tab name="Tab 2" show={show} >
        <div>
          <h4 className="text-center text-dark m-4"> Tab 2 content is showing here</h4>
        </div>
      </Tab>
      <Tab name="Tab 3" show={show} >
        <div>
          <h4 className="text-center text-dark m-4"> Tab 3 content is showing here</h4>
        </div>
      </Tab>
    </div>
      <div>
      <div className="border border-1 border-dark p-4 m-4" >
        <p>
          {content}
        </p>
      </div>

    </div>
    </div>
  );
}

export default App;

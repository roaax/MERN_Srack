import React, {useState} from "react";
import './App.css';
import Todo from "./components/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    /*
    Below array destructure syntax is equivalent to:
    const newTodoStateArr = useState(");
    const newTodo = newTodoStateArr[0];
    const setNewTodo = newTodoStateArr[1];
    */
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos]=useState([]);

    const handleNewTodoSubmit=(event)=> {
        event.preventDefault(); //refresh the page

        if (newTodo.length === 0){
            return;
        }
        const todoItem = {
            text: newTodo,
            complete: false
        }

        //setTodos and pass in a brand new array containing all current todos plus 1 more
        setTodos([...todos, todoItem]);
        setNewTodo("");
    }

    const handleTodoDelete = (delIdx)=>{
        const filterdTodos=todos.filter((todo, i)=>{
            return i !== delIdx;
        });
        setTodos(filterdTodos);
    }

    const handleToggleComplete = (idx) => {
        const updatedTodos = todos.map((todo, i) =>{
            if( idx === i){
                todo.complete = !todo.complete;
                //
                //To avoid mutating the todo directly, do this:
                // const updatedTodo = { ...todo , complete: !todo.complete};
                // return updatedTodo;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

  return (
    <div className="container text-center m-4 shadow-lg p-4">
     <form
         onSubmit={(event)=>{
         handleNewTodoSubmit(event);
         console.log(newTodo);
         }}>
         <div className="container col-4">
             <h1 className=" text-center m-4">To Do List :</h1>
         <input className="form-control row-4" onChange={(event)=>{
             setNewTodo(event.target.value);
         }}
           type="text"
                value={newTodo}
         />
         </div>
         <div>
             <button className="btn btn-primary m-4">Add</button>
         </div>
     </form>
        <hr/>
        {todos.map((todo,i)=>{
                return(
                    <Todo
                    key={i}
                    i={i}
                    todo={todo}
                    handleToggleComplete = {handleToggleComplete}
                    handleTodoDelete = {handleTodoDelete}
                />
        );
       })}
    </div>
  );
}

export default App;

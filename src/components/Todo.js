import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Todo = (props) => {
    const todoClasses = ["bold" , "italic"];

    if (props.todo.complete){
        todoClasses.push("line-through");
    }

    return(

    <div>

        <input onChange={(event)=>{
           props.handleToggleComplete(props.i);
        }}
               checked={props.todo.complete}
               type="checkbox"
        />
        <span className={todoClasses.join(" ")}> {props.todo.text} </span>
        <button className="btn btn-dark m-4"
            onClick={(event) => {
                props.handleTodoDelete(props.i);
            }}>Delete</button>
    </div>
    );

};
export  default  Todo;
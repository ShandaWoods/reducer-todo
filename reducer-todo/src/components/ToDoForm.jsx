import React, {useState, useReducer} from "react";
// import { reducer, initialState } from '../reducers/';
const ToDoForm = ({addToDo}) => {
    const [toDo, setToDo] = useState('')


    return (
        <div >
          <input value={toDo} onChange={e => setToDo(e.target.value)} />
          <button onClick={() => {addToDo(toDo); setToDo("")}}>Add To Do</button>
        </div>
      );
   
};

export default ToDoForm;

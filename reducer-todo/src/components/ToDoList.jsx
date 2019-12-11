import React from 'react';


const ToDoList = ({toDoObject}) => {
    
    return (
        <li> {toDoObject.item}</li>
      )
};

export default ToDoList;
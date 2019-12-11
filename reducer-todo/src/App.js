import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <h1> My fancy to do list app</h1>

      {
        state.map(element =>{
          console.log('element is: ', element)
          return (
            <ToDoList 
            toDoObject={element} 
            key={element.id}
            remove={ () => dispatch({
              type: 'DELETE_TODO',
              id: element.id})}
            />
          )
        }

        )
      }
      <ToDoForm 
      addToDo={item => dispatch({type: 'ADD_TODO', payload: item})}
      />
    </div>
  );
}

export default App;

// we imports Hooks in react

import { useEffect, useState } from "react";                                         

//Define components

import Box from "./Components/Box";                                                    
import Input from "./Components/Input";

function App() {

//Get data from local stroage

  const getLocalStorage = () => {                                                         
    let todo = localStorage.getItem('lists');
    console.log(todo)
    if (todo) {
      return JSON.parse(localStorage.getItem('lists'));
    } else {
      return;
    }
  }

  //useState Hook for storing data

  const [todos, setToDo] = useState([getLocalStorage()]);                              

// set data in LocalStroage with using UseEffect hook

  useEffect(() => {                                                                         
    localStorage.setItem('lists', JSON.stringify(todos))
  }, [todos])

 //make a function to remove todo in inputbox

  const removeToDo = (id) => {                                                        
    console.log(id);
    const newTodos = todos.filter(
      (d, index) => {
        if (index !== id) {
          return true;
        } else {
          return false;
        }
      }
    )
   // for state update

    setToDo(newTodos);                                                                  
  }
 //addtodoHandler function

  const addToDoHandler = (item) => {                                                      
    console.log(item);
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString(),
        }
      ]
    )
  }

  return (
    <div className="bg-slate-800 h-screen p-3">
      <div className="rounded mx-auto max-w-[650px] min-h-[450px] shadow-2xl bg-gray-200">
        <Input handler={addToDoHandler} />
        <Box data={todos} removeHandler={removeToDo} />
      </div>
    </div>
  );
}

export default App;
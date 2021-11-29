import { useState, useEffect } from 'react';
import { TodoList } from "../components/Todo/TodoList";
import { Context } from '../components/context';
import { AddTodo } from '../components/Todo/AddTodo/AddTodo';
import Loader from '../components/Loader';

export const Todo = () => {
  const [arrStart, setTodo] = useState([])
  const [loading, setLoading] = useState(true)
    // {id: 1, completed: false, title: 'Купить хлеб'},
    // {id: 2, completed: true, title: 'Купить масло'},
    // {id: 3, completed: false, title: 'Купить молоко'},
  // ])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
    .then(response => response.json())
    .then(arrStart => {
      setTimeout(() => { // delay in action
        setTodo(arrStart)
        setLoading(false) // remove loader
      }, 2000)
    })
  }, [])

  function toggleTodo(id){
    setTodo(
      arrStart.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    )
  }

  function removeTodo(id){
    setTodo(arrStart.filter(item => item.id !== id))
  }

  function addTodo(title){
    setTodo(arrStart.concat([{
      id: Date.now(),
      completed: false,
      title
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>ToDo List</h1>
        <AddTodo onCreate={addTodo}/>
        {loading && <Loader />}
        {arrStart.length ? (
          <TodoList arrTodo={arrStart} onToggle={toggleTodo} /> 
        ) : loading ? null : ( 
          <p>No ToDos!</p>
        )}
      </div>
    </Context.Provider>
  )
}


import { useState } from 'react';
import { TodoList } from "../components/Todo/TodoList";
import { Context } from '../components/context';
import { AddTodo } from '../components/Todo/AddTodo/AddTodo';

export const Todo = () => {
  const [arrStart, setTodo] = useState([
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: true, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
  ])

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
        {arrStart.length ? <TodoList arrTodo={arrStart} onToggle={toggleTodo} /> : <p>No ToDos!</p>}
      </div>
    </Context.Provider>
  )
}


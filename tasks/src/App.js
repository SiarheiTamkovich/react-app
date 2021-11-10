import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
  const [arrStart, setTodo] = React.useState([
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

  return (<div className='wrapper'>
    <h1>Task1</h1>
    <TodoList arrTodo={arrStart} onToggle={toggleTodo}/>
  </div>
  )
}

export default App;

import TodoList from "./Todo/TodoList";

function App() {
  const arrTodo = [
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
  ]

  return (<div className='wrapper'>
    <h1>ToDo List</h1>
    <TodoList todoObj={arrTodo}/>
  </div>
  )
}

export default App;

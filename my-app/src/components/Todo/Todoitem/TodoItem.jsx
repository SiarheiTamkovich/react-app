import "./TodoItem.scss";

export function TodoItem({todoItem, index, onChange}){

  return (
    <li className="todo-item">
      <span className={todoItem.completed ? "done" : ""}>
        <input 
          type="checkbox" 
            checked={todoItem.completed}
            onChange={() => onChange(todoItem.id)}
        />
            <strong>{index + 1}</strong>
            {todoItem.title}
        </span>
        
        <button className="rm">&times;</button>
    </li>
  )
}

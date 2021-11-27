import { useContext } from "react";
import "./TodoItem.scss";
import { Context } from "../../context";

export function TodoItem({todoItem, index, onChange}){
  const { removeTodo } = useContext(Context)
  return (
    <li className="todo-item">
      <span className={todoItem.completed ? "done" : ""}>
        <input 
          type="checkbox" 
            checked={todoItem.completed}
            onChange={() => onChange(todoItem.id)} />
        <strong>{index + 1}</strong>
            {todoItem.title}
      </span>
        
        <button className="remove-item" onClick={() => removeTodo(todoItem.id)}>&times;</button>
    </li>
  )
}

import "./TodoItem.scss";

export function TodoItem({todoItem, index, onChange}){
  const classes = [];

  if (todoItem.completed){
      classes.push("done");
  }

  return (
      <li className="todo-item">
          <span className={classes.join(` `)}>
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
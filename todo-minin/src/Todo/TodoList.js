import TodoItem from "./TodoItem"

const styles = {
   ul: {
     listStyle: 'none',
     margin: 0,
     padding: 0
   }
}

export default function TodoList(props){
    return (
        <ul style={styles.ul}>
            {props.todoObj.map(item => {
                return  <TodoItem todoItem={item} key={item.id}/>
            })}
        </ul>
    )
}
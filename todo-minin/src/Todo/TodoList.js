import TodoItem from './TodoItem';
 
const styles = {
   ul: {
     listStyle: 'none',
     margin: 0,
     padding: 0
   }
}

export default function TodoList(objTodo){
    return (
        <ul style={styles.ul}>
            {objTodo.arrTodo.map((item, index) => {
//                 console.log(item)
                return  <TodoItem todoItem={item} key={item.id} index={index} onChange={objTodo.onToggle}/>
            })}
        </ul>
    )
}
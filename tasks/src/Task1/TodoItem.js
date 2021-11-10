const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '0.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

export default function TodoItem({todoItem, index, onChange}){
    const classes = [];

    if (todoItem.completed){
        classes.push(`done`);
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(` `)}>
                <input 
                    type="checkbox" 
                    checked={todoItem.completed}
                    style={styles.input} 
                    onChange={() => onChange(todoItem.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todoItem.title}
            </span>
            
           <button className="rm">&times;</button>
        </li>
    )
}
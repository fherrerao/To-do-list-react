import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  return (
    <div>
      {props.todos.todos.map(item => (
        <li key={item.id} className={styles.item}> 
          <input
            className={styles.checkbox}
            type="checkbox" 
            checked={item.completed}
            onChange={() => props.todos.handleChangeProps(item.id)}
          />
          <button onClick={()=> {props.deleteItemProp(item.id)}}>Delete</button>
          <span style={item.completed ? completedStyle : null}>
            {item.title}
          </span>
        </li>
      ))}
    </div>
  );
}

export default TodoItem;

const TodoItem = (props) => {    
  return (
    <div>
      {props.todos.todos.map(item => (
        <li key={item.id}> 
          <input 
            type="checkbox" 
            checked={item.completed}
            onChange={() => props.todos.handleChangeProps(item.id)}
          /> 
          {item.title}
        </li>
      ))}
    </div>
  );
}

export default TodoItem;

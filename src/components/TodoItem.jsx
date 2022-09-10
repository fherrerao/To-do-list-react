const TodoItem = (props) => {
  return (
    <div>
      {props.todos.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

export default TodoItem;

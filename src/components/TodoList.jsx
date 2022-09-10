import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return(
    <div>
      <TodoItem todos={props.todos} />
    </div>
  );
}

export default TodoList;

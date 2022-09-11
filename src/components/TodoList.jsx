import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return(
    <div>
      <TodoItem 
        todos={props}
      />
    </div>
  );
}

export default TodoList;

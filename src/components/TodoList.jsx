import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return(
    <div>
      <TodoItem 
        todos={props}
        deleteItemProp={props.deleteItemProp}
      />
    </div>
  );
}

export default TodoList;

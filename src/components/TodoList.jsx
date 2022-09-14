import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return(
    <div>
      <TodoItem 
        todos={props}
        deleteItemProp={props.deleteItemProp}
        updateItemProp={props.updateItemProp}
      />
    </div>
  );
}

export default TodoList;

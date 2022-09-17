import TodoItem from './TodoItem';

const TodoList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { deleteItemProp, updateItemProp } = props;

  return (
    <div>
      <TodoItem
        todos={props}
        deleteItemProp={deleteItemProp}
        updateItemProp={updateItemProp}
      />
    </div>
  );
};

export default TodoList;

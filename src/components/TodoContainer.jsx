import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";

const TodoContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const todos = [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ];
    setData(todos);
  },[]);

  const handleChange = (id) => {
    data.forEach(item => {
      if(item.id === id){
        item.completed = !item.completed;
        setData([...data]);
      }
    });
  }

  const deleteItem = (id) => {
    setData([...data.filter(item => item.id !== id)]);
  }

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setData([...data, newTodo])
    console.log(data);
  }
  
  return(
    <div>
      <InputTodo
        addTodoItemProps = {addTodoItem}
      />
      <TodoList 
        todos={data} 
        handleChangeProps = {handleChange}
        deleteItemProp = {deleteItem}
      />
    </div>
  );
}

export default TodoContainer;

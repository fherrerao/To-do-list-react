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
    if (localStorage.getItem("TodoData") == null){
      localStorage.setItem("TodoData", JSON.stringify(todos));
    }    
    setData(JSON.parse(localStorage.getItem("TodoData")));
  },[]);

  const handleChange = (id) => {
    data.forEach(item => {
      if(item.id === id){
        item.completed = !item.completed;
        localStorage.setItem("TodoData", JSON.stringify(data));
        setData([...data]);
      }
    });
  }

  const deleteItem = (id) => {
    localStorage.setItem("TodoData", JSON.stringify([...data.filter(item => item.id !== id)]));
    setData([...data.filter(item => item.id !== id)]);
  }

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    localStorage.setItem("TodoData", JSON.stringify([...data, newTodo]))
    setData([...data, newTodo])
  }

  const updateTodoItem = (title, id) => {
    data.forEach(item => {
      if(item.id === id){
        item.title = title;        
        localStorage.setItem("TodoData", JSON.stringify([...data]))
        setData([...data])
      }
    });    
  }
  
  return(
    <div className="container">
      <div className="inner">
        <InputTodo
          addTodoItemProps = {addTodoItem}
        />
        <TodoList 
          todos={data} 
          handleChangeProps = {handleChange}
          deleteItemProp = {deleteItem}
          updateItemProp = {updateTodoItem}
        />
      </div>
    </div>
  );
}

export default TodoContainer;

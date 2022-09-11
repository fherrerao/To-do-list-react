import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const todos = [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
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
  
  return(
    <div>
      <TodoList todos={data} handleChangeProps = {handleChange}/>
    </div>
  );
}

export default TodoContainer;

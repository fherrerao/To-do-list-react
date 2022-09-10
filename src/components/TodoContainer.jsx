import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoContainer = () => {
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

  const [data, setData] = useState([]);
  useEffect(() => {  
    setData(todos);
  },[]);
  
  return(
    <div>
      <TodoList todos={data} />
    </div>
  );
}

export default TodoContainer;

import { useState } from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
    props.addTodoItemProps(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add Todo..." 
        name="title"
        value={title}
        onChange={onChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default InputTodo;

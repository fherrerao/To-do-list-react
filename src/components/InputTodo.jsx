import { useState } from "react";
import { FaPlus } from "react-icons/fa"

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
    <form onSubmit={handleSubmit} className="form-container">
      <input 
        className="input-text"
        type="text" 
        placeholder="Add Todo..." 
        name="title"
        value={title}
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlus style={{color:"darkcyan", size:"20px", className:"submit-icon", background: "transparent"}}/>
      </button>
    </form>
  );
}

export default InputTodo;

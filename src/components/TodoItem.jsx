/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [edit, setEdit] = useState(false);

  const viewMode = {};
  const editMode = {};

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEdit(true);
  };

  // eslint-disable-next-line no-unused-expressions
  edit ? viewMode.display = 'none' : editMode.display = 'none';

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEdit(false);
    }
  };

  return (
    <div>
      {props.todos.todos.map((item) => (
        <li key={item.id} className={styles.item}>
          <div onDoubleClick={handleEditing} style={viewMode}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={item.completed}
              onChange={() => props.todos.handleChangeProps(item.id)}
            />
            <button
              type="button"
              onClick={() => {
                props.deleteItemProp(item.id);
              }}
            >
              <FaTrashAlt style={{ color: 'darkcyan', fontSize: '16px' }} />
            </button>
            <span className="text-light link-hover" style={item.completed ? completedStyle : null}>
              {item.title}
            </span>
          </div>

          <input
            type="text"
            className={styles.textInput}
            style={editMode}
            value={item.title}
            onChange={(e) => {
              props.updateItemProp(e.target.value, item.id);
            }}
            onKeyDown={handleUpdateDone}
          />
        </li>
      ))}
    </div>
  );
};

export default TodoItem;

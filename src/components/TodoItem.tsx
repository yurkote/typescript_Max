import classes from "./TodoItem.module.css";

interface TodoItemProps {
  text: string;
  onRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onRemove }) => {
  return (
    <li className={classes.item}>
      {text}
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;

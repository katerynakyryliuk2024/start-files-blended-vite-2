import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text';

const TodoListItem = ({ todo, index, deleteTodo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO {index + 1}
      </Text>
      <Text>{todo.text}</Text>
      <button
        className={style.deleteButton}
        onClick={() => deleteTodo(todo.id)}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;

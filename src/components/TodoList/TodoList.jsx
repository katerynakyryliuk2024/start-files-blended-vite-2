import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem todo={todo} index={index} deleteTodo={deleteTodo} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;

import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(window.localStorage.getItem('savedTodos'));

    return savedTodos ? savedTodos : [];

    //return JSON.parse(window.localStorage.getItem('savedTodos')) ?? [];//
  });

  useEffect(() => {
    window.localStorage.setItem('savedTodos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = inputValue => {
    const newTodo = {
      text: inputValue,
      id: nanoid(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  return (
    <>
      <Form onSubmit={addTodo} />
      {todos.length > 0 ? (
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;

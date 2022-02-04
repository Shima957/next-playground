import Button from '@/components/Button/Button';
import UserList from '@/components/UserList/UserList';
import { useAppDispatch, useAppSelector } from '@/hooks/useRootState';
import Input from '@/components/Input/Input';
import { selectTodos, add, remove } from '@/feature/todos/todoSlice';
import { useState } from 'react';
import TrashIcon from '@/components/Icons/TrashIcon';

export default function Home() {
  const todos = useAppSelector(selectTodos.selectAll);
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    dispatch(add({ id: Math.random(), todo, completed: false }));
    setTodo('');
  };
  const removeTodo = (id: number) => {
    dispatch(remove({ id }));
  };

  return (
    <div>
      <h1>hello</h1>
      <UserList />
      <div className='w-80'>
        <Input onChange={setTodo} value={todo} type='text' />
        <Button type='button' styleType='primary' size='md' onClick={addTodo}>
          Add
        </Button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className='space-x-2 flex items-center'>
                <input type='checkbox' className='p-2' />
                <span className='font-bold text-xl'>{todo.todo}</span>
                <button
                  type='button'
                  className='rounded focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2'
                  onClick={() => removeTodo(todo.id)}
                >
                  <TrashIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
